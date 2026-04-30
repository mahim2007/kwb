// একটি বেসিক সার্ভিস ওয়ার্কার
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // ব্রাউজারকে PWA হিসেবে চিনতে সাহায্য করার জন্য ডামি ফেচ ইভেন্ট
});