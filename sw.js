// Đổi số phiên bản khi sửa index.html để máy đã cài nhận bản mới
const CACHE = 'istqb-quiz-v3';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png'];
const IMAGES = ['images/q005.png','images/q006.png','images/q059.png','images/q065.png','images/q066.png','images/q080.png','images/q086.png','images/q117.png','images/q118.png','images/q121.png','images/q125.png','images/q131.png','images/q139.png','images/q162.png','images/q163.png','images/q167.png','images/q188.png','images/q194.png','images/q200.png'];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(SHELL);
    await Promise.all(IMAGES.map(u => c.add(u).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // File của app (kể cả ảnh mày ghi đè): lấy mạng trước, mất mạng thì dùng bản đã lưu
  if (url.origin === self.location.origin) {
    e.respondWith((async () => {
      try {
        const res = await fetch(req);
        if (res.ok) (await caches.open(CACHE)).put(req, res.clone());
        return res;
      } catch (err) {
        const hit = await caches.match(req, { ignoreSearch: true });
        if (hit) return hit;
        if (req.mode === 'navigate') return caches.match('index.html');
        throw err;
      }
    })());
    return;
  }

  // Font Google: lưu lần đầu, dùng lại khi offline
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith((async () => {
      const hit = await caches.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      (await caches.open(CACHE)).put(req, res.clone());
      return res;
    })());
  }
});
