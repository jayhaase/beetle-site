document.querySelectorAll('.butterfly').forEach(function (butterfly) {
  butterfly.addEventListener('click', function () {
    butterfly.classList.add('flown');
  }, { once: true });
});

(function applyConfig() {
  var config = window.BEETLE_CONFIG;
  if (!config) return;

  var bookingCta = document.getElementById('booking-cta');
  if (bookingCta && config.bookingEmail) {
    bookingCta.href = 'mailto:' + config.bookingEmail;
  }

  Object.keys(config.social || {}).forEach(function (platform) {
    var info = config.social[platform];
    var link = document.getElementById('social-' + platform);
    var handleEl = document.getElementById('social-' + platform + '-handle');
    var imgEl = link ? link.querySelector('img') : null;
    if (link && info.url) link.href = info.url;
    if (handleEl && info.handle) handleEl.textContent = info.handle;
    if (imgEl && info.imagePosition) imgEl.style.objectPosition = info.imagePosition;
  });
})();

(function galleryLightbox() {
  var triggers = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox-trigger]'));
  if (!triggers.length) return;

  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var closeBtn = document.getElementById('lightbox-close');
  var prevBtn = document.getElementById('lightbox-prev');
  var nextBtn = document.getElementById('lightbox-next');
  var currentIndex = 0;
  var lastFocused = null;

  function show(index) {
    currentIndex = (index + triggers.length) % triggers.length;
    var img = triggers[currentIndex].querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  }

  function open(index) {
    lastFocused = document.activeElement;
    show(index);
    lightbox.hidden = false;
    closeBtn.focus();
    document.addEventListener('keydown', onKeydown);
  }

  function close() {
    lightbox.hidden = true;
    document.removeEventListener('keydown', onKeydown);
    if (lastFocused) lastFocused.focus();
  }

  function onKeydown(e) {
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') show(currentIndex + 1);
    if (e.key === 'ArrowLeft') show(currentIndex - 1);
  }

  triggers.forEach(function (trigger, index) {
    trigger.addEventListener('click', function () { open(index); });
  });

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', function () { show(currentIndex - 1); });
  nextBtn.addEventListener('click', function () { show(currentIndex + 1); });
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) close();
  });
})();
