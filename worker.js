/**
 * Chinoba site Worker.
 *
 * Routing:
 *   - /api/essays      → fetch the English blog RSS feed and return the latest
 *                        10 posts as JSON (edge-cached for 1 hour).
 *   - everything else  → served from the static assets bound as `env.ASSETS`.
 *
 * The Essays section in index.html loads from /api/essays. Static entries in
 * the page are kept only as a fallback when this endpoint is unavailable.
 */

const FEED_URL = "https://deus-ex-machina-ism.com/en/feed/";
const MAX_POSTS = 10;
const CACHE_SECONDS = 3600;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/api/essays") {
      return handleEssays();
    }

    // All other routes are served from the static site.
    return env.ASSETS.fetch(request);
  },
};

async function handleEssays() {
  try {
    const feedResponse = await fetch(FEED_URL, {
      headers: { "User-Agent": "chinoba.org-essays/1.0" },
      // Cache the upstream feed at the edge so we do not hit the blog on
      // every request.
      cf: { cacheTtl: CACHE_SECONDS, cacheEverything: true },
    });

    if (!feedResponse.ok) {
      throw new Error("Feed responded with status " + feedResponse.status);
    }

    const xml = await feedResponse.text();
    const posts = parseFeed(xml).slice(0, MAX_POSTS);

    if (!posts.length) {
      throw new Error("No items found in feed");
    }

    return json(posts, 200, "public, max-age=" + CACHE_SECONDS);
  } catch (err) {
    // Signal failure (no-store) so index.html falls back to its static list.
    return json({ error: "essays_unavailable" }, 503, "no-store");
  }
}

function json(data, status, cacheControl) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": cacheControl,
    },
  });
}

/* ---------- RSS parsing (regex-based; Workers have no DOMParser) ---------- */

function parseFeed(xml) {
  const items = [];
  const itemRegex = /<item\b[^>]*>([\s\S]*?)<\/item>/gi;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];
    const title = decodeEntities(stripCdata(getTag(block, "title")));
    const link = decodeEntities(stripCdata(getTag(block, "link")));
    const pubDate = getTag(block, "pubDate");

    if (!title || !link) continue;

    items.push({
      title: title,
      date: formatDate(pubDate),
      url: link,
    });
  }

  return items;
}

function getTag(block, tag) {
  const re = new RegExp("<" + tag + "\\b[^>]*>([\\s\\S]*?)<\\/" + tag + ">", "i");
  const m = re.exec(block);
  return m ? m[1].trim() : "";
}

function stripCdata(value) {
  const m = /^<!\[CDATA\[([\s\S]*?)\]\]>$/.exec(value.trim());
  return m ? m[1].trim() : value;
}

function formatDate(pubDate) {
  if (!pubDate) return "";
  const d = new Date(pubDate);
  if (isNaN(d.getTime())) return pubDate;
  // Matches the existing "June 20, 2026" style used in index.html. The blog
  // publishes on Japan time, so format in Asia/Tokyo to keep the same dates.
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Tokyo",
  });
}

function decodeEntities(text) {
  if (!text) return text;
  const named = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    nbsp: " ",
    hellip: "…",
    mdash: "—",
    ndash: "–",
    lsquo: "‘",
    rsquo: "’",
    ldquo: "“",
    rdquo: "”",
  };
  return text
    .replace(/&#x([0-9a-fA-F]+);/g, function (_, hex) {
      return String.fromCodePoint(parseInt(hex, 16));
    })
    .replace(/&#(\d+);/g, function (_, dec) {
      return String.fromCodePoint(parseInt(dec, 10));
    })
    .replace(/&([a-zA-Z]+);/g, function (whole, name) {
      return Object.prototype.hasOwnProperty.call(named, name) ? named[name] : whole;
    });
}
