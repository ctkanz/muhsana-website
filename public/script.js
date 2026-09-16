/* ==========================================================================
   MUHSANA ALI - ARTIST PORTFOLIO JAVASCRIPT INTERACTION LOGIC
   - Video Sound Controller (Unmute/Mute Toggle)
   - Sticky Navbar Blur & Section Highlighting on Scroll
   - Instant Zero-Delay Scroll Chaining for About Scroll Box
   - Mobile Navigation Menu Toggle & Dropdown Handlers
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Video Sound Toggle Controller
  const heroVideo = document.getElementById('heroVideo');
  const soundBtn = document.getElementById('soundBtn');
  const soundIcon = document.getElementById('soundIcon');
  const soundText = document.getElementById('soundText');
  let userWantsSound = false;

  const updateSoundUI = (isMuted) => {
    if (!soundIcon || !soundText || !soundBtn) return;
    if (isMuted) {
      soundIcon.textContent = '🔇';
      soundText.textContent = 'Activer le son';
      soundBtn.style.borderColor = 'var(--border-color)';
      soundBtn.style.color = 'var(--text-main)';
    } else {
      soundIcon.textContent = '🔊';
      soundText.textContent = 'Son Activé';
      soundBtn.style.borderColor = 'var(--accent-gold)';
      soundBtn.style.color = 'var(--accent-gold)';
    }
  };

  let audioFadeInterval = null;

  const fadeOutSound = (video, duration = 50, callback) => {
    if (!video) return;
    if (audioFadeInterval) clearInterval(audioFadeInterval);

    const startVolume = video.volume > 0 ? video.volume : 1.0;
    const steps = 10;
    const stepTime = duration / steps;
    const volumeStep = startVolume / steps;

    audioFadeInterval = setInterval(() => {
      if (video.volume > volumeStep) {
        video.volume = Math.max(0, video.volume - volumeStep);
      } else {
        video.volume = 0;
        video.muted = true;
        clearInterval(audioFadeInterval);
        audioFadeInterval = null;
        if (callback) callback();
      }
    }, stepTime);
  };

  const fadeInSound = (video, duration = 50) => {
    if (!video) return;
    if (audioFadeInterval) clearInterval(audioFadeInterval);

    video.muted = false;
    if (video.volume >= 1.0) video.volume = 0;
    const steps = 10;
    const stepTime = duration / steps;
    const volumeStep = 1.0 / steps;

    audioFadeInterval = setInterval(() => {
      if (video.volume < 1.0 - volumeStep) {
        video.volume = Math.min(1.0, video.volume + volumeStep);
      } else {
        video.volume = 1.0;
        clearInterval(audioFadeInterval);
        audioFadeInterval = null;
      }
    }, stepTime);
  };

  if (soundBtn && heroVideo) {
    setTimeout(() => {
      soundBtn.classList.add('pulse-attention');
    }, 800);

    soundBtn.addEventListener('click', () => {
      soundBtn.classList.remove('pulse-attention');

      if (!heroVideo.muted && heroVideo.volume > 0) {
        userWantsSound = false;
        fadeOutSound(heroVideo, 50, () => updateSoundUI(true));
      } else {
        userWantsSound = true;
        fadeInSound(heroVideo, 50);
        updateSoundUI(false);
      }
    });
  }

  // 2. Sticky Navbar Effect & Auto Mute / Unmute on Scroll
  const navbar = document.querySelector('.navbar');
  const heroSection = document.getElementById('hero');

  const checkScrollState = () => {
    const scrollY = window.scrollY;

    if (navbar) {
      if (scrollY > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (heroSection && heroVideo) {
      const heroBottom = heroSection.offsetHeight - 100;
      if (scrollY > heroBottom) {
        if (soundBtn) soundBtn.classList.add('hidden');

        if (!heroVideo.muted && heroVideo.volume > 0) {
          fadeOutSound(heroVideo, 50, () => {
            if (!heroVideo.paused) heroVideo.pause();
            updateSoundUI(true);
          });
        } else if (!heroVideo.paused) {
          heroVideo.pause();
        }
      } else {
        if (soundBtn) soundBtn.classList.remove('hidden');

        if (heroVideo.paused) {
          heroVideo.play().catch(() => {});
        }
        if (userWantsSound && heroVideo.muted) {
          fadeInSound(heroVideo, 50);
          updateSoundUI(false);
        }
      }
    }
  };

  // Exécution immédiate au chargement pour éviter tout clignotement de la navbar
  checkScrollState();
  window.addEventListener('scroll', checkScrollState);

  // 3. Mobile Navigation Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');
  const navMenu = document.getElementById('navMenu');

  const closeMobileMenu = () => {
    if (navMenu) navMenu.classList.remove('active');
    if (mobileToggle) mobileToggle.textContent = '☰';
  };

  if (navMenu) {
    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('active');
        mobileToggle.textContent = isOpen ? '✕' : '☰';
      });
    }

    if (mobileCloseBtn) {
      mobileCloseBtn.addEventListener('click', closeMobileMenu);
    }

    document.querySelectorAll('.dropdown-link, .nav-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // 4. About Section Scroll Box Logic
  const aboutScrollBox = document.getElementById('aboutScrollBox');
  const aboutContent = document.querySelector('.about-content');

  if (aboutScrollBox && aboutContent) {
    let focusTimeout = null;

    const setFocusedState = (focused, delay = 0) => {
      if (focusTimeout) {
        clearTimeout(focusTimeout);
        focusTimeout = null;
      }

      if (focused) {
        aboutContent.classList.add('is-focused');
      } else if (delay > 0) {
        focusTimeout = setTimeout(() => {
          aboutContent.classList.remove('is-focused');
        }, delay);
      } else {
        aboutContent.classList.remove('is-focused');
      }
    };

    aboutScrollBox.addEventListener('mouseenter', () => setFocusedState(true));
    aboutScrollBox.addEventListener('mouseleave', () => setFocusedState(false, 300));
    aboutScrollBox.addEventListener('focus', () => setFocusedState(true));
    aboutScrollBox.addEventListener('blur', () => setFocusedState(false, 300));
  }

  // Smooth Scroll Engine
  let currentScrollY = window.scrollY;
  let targetScrollY = window.scrollY;
  let isSmoothScrolling = false;
  const easeFactor = 0.08;

  function smoothScrollLoop() {
    if (!isSmoothScrolling) return;

    const diff = targetScrollY - currentScrollY;
    if (Math.abs(diff) < 0.3) {
      currentScrollY = targetScrollY;
      window.scrollTo(0, currentScrollY);
      isSmoothScrolling = false;
      return;
    }

    currentScrollY += diff * easeFactor;
    window.scrollTo(0, currentScrollY);
    requestAnimationFrame(smoothScrollLoop);
  }

  window.addEventListener('wheel', (e) => {
    const scrollableBox = e.target.closest('#aboutScrollBox, .about-scroll-box');
    if (scrollableBox) {
      const isDeltaDown = e.deltaY > 0;
      const isDeltaUp = e.deltaY < 0;
      const canScrollDown = scrollableBox.scrollTop + scrollableBox.clientHeight < scrollableBox.scrollHeight - 1.5;
      const canScrollUp = scrollableBox.scrollTop > 1.5;

      if ((isDeltaDown && canScrollDown) || (isDeltaUp && canScrollUp)) {
        return; // Permet le défilement interne à l'intérieur du texte
      }
      // Une fois la limite atteinte, on enchaîne avec le défilement de la page principale
    } else if (e.target.closest('.map-container-wrapper, .info-panel-content, .artwork-lightbox, .nav-menu')) {
      return;
    }

    e.preventDefault();

    const scrollDelta = e.deltaY * 0.65;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    if (Math.abs(currentScrollY - window.scrollY) > 50) {
      currentScrollY = window.scrollY;
      targetScrollY = window.scrollY;
    }

    targetScrollY = Math.min(Math.max(0, targetScrollY + scrollDelta), maxScroll);

    if (!isSmoothScrolling) {
      isSmoothScrolling = true;
      requestAnimationFrame(smoothScrollLoop);
    }
  }, { passive: false });

  const smoothScrollToTarget = (targetY, duration = 1200) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    const easeInOutCubic = (t) => {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);

      const nextY = startY + distance * easeProgress;
      window.scrollTo(0, nextY);

      currentScrollY = nextY;
      targetScrollY = nextY;

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        window.scrollTo(0, targetY);
        currentScrollY = targetY;
        targetScrollY = targetY;
      }
    };

    requestAnimationFrame(animation);
  };

  // Navigation par ancres (#about, #projects, etc.)
  document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const rawHref = anchor.getAttribute('href');
      if (!rawHref) return;

      const hashIndex = rawHref.indexOf('#');
      if (hashIndex === -1) return;

      const targetId = rawHref.substring(hashIndex);
      if (!targetId || targetId === '#') return;

      // Si on est sur index.astro
      const targetElement = document.querySelector(targetId);
      if (targetElement && (window.location.pathname === '/' || window.location.pathname.endsWith('/index.html') || window.location.pathname === '')) {
        e.preventDefault();
        const targetTop = targetElement.getBoundingClientRect().top + window.scrollY - 70;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const finalTarget = Math.min(Math.max(0, targetTop), maxScroll);

        smoothScrollToTarget(finalTarget, 800);
      }
    });
  });

  // 6. Active Section Highlighting (Scroll Spy)
  const sections = document.querySelectorAll('section[id]');
  const updateActiveNavLink = () => {
    const scrollY = window.scrollY;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 150;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"], .nav-menu a[href="/#${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  };
  window.addEventListener('scroll', updateActiveNavLink);

  // Gestion du retour sur index.astro avec une ancre dans l'URL (#projects, #about, etc.)
  if (window.location.hash) {
    const targetHash = window.location.hash;
    const targetElement = document.querySelector(targetHash);
    if (targetElement) {
      const getTargetTop = () => {
        const targetTop = targetElement.getBoundingClientRect().top + window.scrollY - 70;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        return Math.min(Math.max(0, targetTop), maxScroll);
      };

      const initialTarget = getTargetTop();
      window.scrollTo(0, initialTarget);
      currentScrollY = initialTarget;
      targetScrollY = initialTarget;
      checkScrollState();
      updateActiveNavLink();

      requestAnimationFrame(() => {
        const adjustedTarget = getTargetTop();
        window.scrollTo(0, adjustedTarget);
        currentScrollY = adjustedTarget;
        targetScrollY = adjustedTarget;
        checkScrollState();
        updateActiveNavLink();
      });
    }
  } else {
    updateActiveNavLink();
  }

  // 7. Interactive Journey Map Implementation
  const mapElement = document.getElementById('map');
  if (mapElement && typeof L !== 'undefined') {
    let map;
    let markersGroup;
    let journeyData = null;
    let activeFilter = 'all';
    let currentActiveMarker = null;

    const typeLabels = {
      'education': 'Formation',
      'exhibition': 'Exposition',
      'residency': 'Résidence',
      'project': 'Projet',
      'conference': 'Conférence',
      'collection': 'Collection'
    };

    map = L.map('map', {
      center: [20, -20],
      zoom: 2.5,
      zoomControl: true,
      scrollWheelZoom: false
    });

    if (typeof L.maplibreGL === 'function') {
      try {
        const maplibreLayer = L.maplibreGL({
          style: 'https://tiles.openfreemap.org/styles/dark',
        }).addTo(map);

        const glMap = maplibreLayer.getMaplibreMap();
        if (glMap) {
          const cleanMapLayers = () => {
            const layers = glMap.getStyle()?.layers || [];
            const KEEP_LAYERS = new Set([
              'background',
              'water',
              'water_name',
              'boundary_country_z0-4',
              'boundary_country_z5-',
              'place_country_major',
              'place_country_minor',
              'place_country_other'
            ]);

            layers.forEach(layer => {
              if (!KEEP_LAYERS.has(layer.id)) {
                try {
                  glMap.setLayoutProperty(layer.id, 'visibility', 'none');
                } catch (e) {}
              }
            });

            try {
              const filterExpr = ['all', ['==', ['get', 'admin_level'], 2], ['!=', ['get', 'maritime'], 1], ['!=', ['get', 'maritime'], true]];
              if (glMap.getLayer('boundary_country_z0-4')) {
                glMap.setFilter('boundary_country_z0-4', filterExpr);
              }
              if (glMap.getLayer('boundary_country_z5-')) {
                glMap.setFilter('boundary_country_z5-', filterExpr);
              }
            } catch (e) {}
          };

          if (glMap.isStyleLoaded()) {
            cleanMapLayers();
          } else {
            glMap.on('styledata', cleanMapLayers);
          }
        }
      } catch (e) {
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; OpenStreetMap',
          maxZoom: 19
        }).addTo(map);
      }
    } else {
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap',
        maxZoom: 19
      }).addTo(map);
    }

    markersGroup = L.layerGroup().addTo(map);

    const panelTitle = document.getElementById('panelLocationTitle');
    const panelSubtitle = document.getElementById('panelLocationSubtitle');
    const panelEvents = document.getElementById('panelLocationEvents');

    fetch('/journey.json')
      .then(response => response.json())
      .then(data => {
        journeyData = data;
        renderMapMarkers();
      })
      .catch(err => {
        console.error('Erreur lors du chargement de journey.json:', err);
      });

    function renderMapMarkers() {
      if (!journeyData || !journeyData.locations) return;
      markersGroup.clearLayers();

      journeyData.locations.forEach(location => {
        const matchingEvents = location.events.filter(event => {
          if (activeFilter === 'all') return true;
          return event.type === activeFilter || (location.types && location.types.includes(activeFilter));
        });

        if (matchingEvents.length === 0) return;

        const customPinIcon = L.divIcon({
          className: 'custom-map-pin',
          html: `<div class="pin-inner"></div>`,
          iconSize: [24, 24],
          iconAnchor: [12, 12],
          popupAnchor: [0, -14]
        });

        const marker = L.marker([location.lat, location.lng], { icon: customPinIcon });

        const eventCountText = `${matchingEvents.length} événement${matchingEvents.length > 1 ? 's' : ''}`;
        const popupHTML = `
          <div style="text-align: center; padding: 0.3rem;">
            <div class="popup-custom-title">${location.city}</div>
            <div class="popup-custom-country">${location.country}</div>
            <span class="popup-custom-badge">${eventCountText}</span>
          </div>
        `;
        marker.bindPopup(popupHTML);

        marker.on('click', () => {
          displayLocationDetails(location, matchingEvents);
          highlightActiveMarker(marker);
        });

        markersGroup.addLayer(marker);
      });
    }

    function displayLocationDetails(location, events) {
      if (!panelTitle || !panelSubtitle || !panelEvents) return;
      panelTitle.textContent = `${location.city}, ${location.country}`;
      panelSubtitle.textContent = `${events.length} événement${events.length > 1 ? 's' : ''} répertorié${events.length > 1 ? 's' : ''}`;

      const sortedEvents = [...events].sort((a, b) => b.year - a.year);

      panelEvents.innerHTML = sortedEvents.map(ev => `
        <div class="event-card">
          <div class="event-card-header">
            <span class="event-year">${ev.year}</span>
            <span class="event-badge">${typeLabels[ev.type] || ev.type}</span>
          </div>
          <h4 class="event-card-title">${ev.title}</h4>
          <p class="event-card-desc">${ev.description}</p>
        </div>
      `).join('');
    }

    function highlightActiveMarker(marker) {
      if (currentActiveMarker && currentActiveMarker._icon) {
        currentActiveMarker._icon.classList.remove('active-pin');
      }
      currentActiveMarker = marker;
      if (marker && marker._icon) {
        marker._icon.classList.add('active-pin');
      }
    }

    const filterButtons = document.querySelectorAll('#mapFilters .filter-btn:not(.timeline-btn)');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        activeFilter = btn.getAttribute('data-filter') || 'all';
        renderMapMarkers();
        map.flyTo([20, -20], 2.5, { duration: 2.2 });

        if (panelTitle && panelSubtitle && panelEvents) {
          panelTitle.textContent = 'Sélectionnez un point';
          panelSubtitle.textContent = 'Cliquez sur un marqueur de la carte pour afficher les détails du parcours.';
          panelEvents.innerHTML = `
            <div class="info-empty-state">
              <span class="empty-icon">📍</span>
              <p>Découvrez les événements, expositions et projets communautaires organisés dans chaque ville.</p>
            </div>
          `;
        }
      });
    });

    const btnPlayTimeline = document.getElementById('btnPlayTimeline');
    const mapYearTicker = document.getElementById('mapYearTicker');
    const tickerYearVal = document.getElementById('tickerYearVal');
    const tickerLocationName = document.getElementById('tickerLocationName');
    let isTimelineAnimating = false;
    let timelineTimeoutId = null;

    function stopChronologicalAnimation() {
      if (timelineTimeoutId) {
        clearTimeout(timelineTimeoutId);
        timelineTimeoutId = null;
      }
      isTimelineAnimating = false;
      if (btnPlayTimeline) {
        btnPlayTimeline.classList.remove('is-playing');
        btnPlayTimeline.innerHTML = `<span class="timeline-icon">▶</span> Chronologie`;
      }
    }

    function playChronologicalAnimation() {
      if (!journeyData || !journeyData.locations) return;

      if (isTimelineAnimating) {
        stopChronologicalAnimation();
        renderMapMarkers();
        if (mapYearTicker) mapYearTicker.classList.remove('active');
        return;
      }

      stopChronologicalAnimation();
      isTimelineAnimating = true;

      if (btnPlayTimeline) {
        btnPlayTimeline.classList.add('is-playing');
        btnPlayTimeline.innerHTML = `<span class="timeline-icon">⏸</span> Pause`;
      }

      const validLocations = [];
      journeyData.locations.forEach(location => {
        const matchingEvents = location.events.filter(event => {
          if (activeFilter === 'all') return true;
          return event.type === activeFilter || (location.types && location.types.includes(activeFilter));
        });

        if (matchingEvents.length > 0) {
          const minYear = Math.min(...matchingEvents.map(e => e.year));
          validLocations.push({
            ...location,
            matchingEvents,
            minYear
          });
        }
      });

      if (validLocations.length === 0) {
        stopChronologicalAnimation();
        return;
      }

      validLocations.sort((a, b) => a.minYear - b.minYear);
      markersGroup.clearLayers();
      if (mapYearTicker) mapYearTicker.classList.add('active');

      let currentIdx = 0;

      function animateStep() {
        if (!isTimelineAnimating) return;

        if (currentIdx >= validLocations.length) {
          if (tickerYearVal) tickerYearVal.textContent = '2026';
          if (tickerLocationName) tickerLocationName.textContent = 'Parcours de Muhsana Ali';

          map.flyTo([20, -20], 2.5, { duration: 2.5 });

          setTimeout(() => {
            if (mapYearTicker) mapYearTicker.classList.remove('active');
            stopChronologicalAnimation();
            renderMapMarkers();
          }, 3000);
          return;
        }

        const loc = validLocations[currentIdx];
        if (tickerYearVal) tickerYearVal.textContent = loc.minYear;
        if (tickerLocationName) tickerLocationName.textContent = `${loc.city}, ${loc.country}`;

        const customPinIcon = L.divIcon({
          className: 'custom-map-pin',
          html: `<div class="pin-inner animate-pop"></div>`,
          iconSize: [24, 24],
          iconAnchor: [12, 12],
          popupAnchor: [0, -14]
        });

        const marker = L.marker([loc.lat, loc.lng], { icon: customPinIcon });
        const eventCountText = `${loc.matchingEvents.length} événement${loc.matchingEvents.length > 1 ? 's' : ''}`;
        const popupHTML = `
          <div style="text-align: center; padding: 0.3rem;">
            <div class="popup-custom-title">${loc.city}</div>
            <div class="popup-custom-country">${loc.country} (${loc.minYear})</div>
            <span class="popup-custom-badge">${eventCountText}</span>
          </div>
        `;
        marker.bindPopup(popupHTML);

        marker.on('click', () => {
          displayLocationDetails(loc, loc.matchingEvents);
          highlightActiveMarker(marker);
        });

        markersGroup.addLayer(marker);

        map.flyTo([loc.lat, loc.lng], 7, { animate: true, duration: 2.2 });
        displayLocationDetails(loc, loc.matchingEvents);
        highlightActiveMarker(marker);
        marker.openPopup();

        currentIdx++;
        timelineTimeoutId = setTimeout(animateStep, 4500);
      }

      animateStep();
    }

    if (btnPlayTimeline) {
      btnPlayTimeline.addEventListener('click', () => {
        playChronologicalAnimation();
      });
    }

    const mapSectionEl = document.getElementById('interactive-map');
    if (mapSectionEl && 'IntersectionObserver' in window) {
      const mapObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !mapSectionEl.dataset.timelineTriggered) {
            mapSectionEl.dataset.timelineTriggered = 'true';
            setTimeout(() => {
              playChronologicalAnimation();
            }, 600);
          }
        });
      }, { threshold: 0.2 });
      mapObserver.observe(mapSectionEl);
    }
  }

  // 8. Artwork Category Filters & Lightbox Zoom Modal
  const artworkFilterBtns = document.querySelectorAll('#artworkFilters .filter-btn');
  const artworkCards = document.querySelectorAll('#artworkGrid .artwork-card');

  const filterArtworks = (selectedFilter) => {
    artworkFilterBtns.forEach(b => {
      if (b.getAttribute('data-artwork-filter') === selectedFilter) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    artworkCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (selectedFilter === 'all' || category === selectedFilter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  };

  if (artworkFilterBtns.length > 0) {
    artworkFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedFilter = btn.getAttribute('data-artwork-filter');
        filterArtworks(selectedFilter);
      });
    });

    document.querySelectorAll('[data-art-nav]').forEach(navLink => {
      navLink.addEventListener('click', () => {
        const targetCategory = navLink.getAttribute('data-art-nav');
        filterArtworks(targetCategory);
      });
    });
  }

  let lightbox = document.getElementById('artworkLightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'artwork-lightbox';
    lightbox.id = 'artworkLightbox';
    lightbox.innerHTML = `
      <div class="lightbox-overlay" id="lightboxOverlay"></div>
      <button class="lightbox-close" id="lightboxClose" aria-label="Fermer">✕</button>
      <button class="lightbox-nav-btn prev" id="lightboxPrev" aria-label="Image précédente">❮</button>
      <div class="lightbox-image-stage">
        <img src="" alt="" id="lightboxImg">
        <div class="lightbox-minimal-caption">
          <span class="lightbox-title-text" id="lightboxTitle"></span>
          <span class="lightbox-counter" id="lightboxCounter">1 / 1</span>
        </div>
      </div>
      <button class="lightbox-nav-btn next" id="lightboxNext" aria-label="Image suivante">❯</button>
    `;
    document.body.appendChild(lightbox);
  }

  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxOverlay = document.getElementById('lightboxOverlay');

  let currentImages = [];
  let currentIndex = 0;

  const preloadSeriesImages = (urls) => {
    urls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  };

  const updateCarouselSlide = (index, animate = true) => {
    if (currentImages.length === 0) return;
    currentIndex = (index + currentImages.length) % currentImages.length;
    const targetUrl = currentImages[currentIndex];
    
    if (animate) {
      lightboxImg.style.opacity = '0';
      lightboxImg.style.transform = 'scale(0.95)';
      
      const tempImg = new Image();
      tempImg.src = targetUrl;
      
      const applyNewImage = () => {
        lightboxImg.src = targetUrl;
        lightboxImg.style.opacity = '1';
        lightboxImg.style.transform = 'scale(1)';
      };

      if (tempImg.decode) {
        tempImg.decode()
          .then(() => setTimeout(applyNewImage, 400))
          .catch(() => setTimeout(applyNewImage, 400));
      } else {
        setTimeout(applyNewImage, 400);
      }
    } else {
      lightboxImg.src = targetUrl;
      lightboxImg.style.opacity = '1';
      lightboxImg.style.transform = 'scale(1)';
    }

    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
    }
  };

  const openLightboxModal = (images, startIndex, titleText) => {
    currentImages = images;
    if (currentImages.length === 0) return;

    preloadSeriesImages(currentImages);

    if (lightboxTitle) lightboxTitle.textContent = titleText || '';

    if (lightboxPrev && lightboxNext) {
      lightboxPrev.style.display = currentImages.length > 1 ? 'flex' : 'none';
      lightboxNext.style.display = currentImages.length > 1 ? 'flex' : 'none';
    }

    updateCarouselSlide(startIndex, false);
    lightbox.classList.remove('stage-ready');
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      if (lightbox.classList.contains('active')) {
        lightbox.classList.add('stage-ready');
      }
    }, 600);
  };

  document.querySelectorAll('.artwork-card').forEach(card => {
    card.addEventListener('click', () => {
      const rawImages = card.getAttribute('data-images');
      const title = card.getAttribute('data-title');

      let imgs = [];
      try {
        imgs = JSON.parse(rawImages || '[]');
      } catch (err) {
        imgs = [card.querySelector('img')?.src];
      }
      if (!imgs.length) imgs = [card.querySelector('img')?.src];

      openLightboxModal(imgs, 0, title);
    });
  });

  const projectGalleryGrid = document.querySelector('.project-gallery-grid');
  if (projectGalleryGrid) {
    const rawAllImages = projectGalleryGrid.getAttribute('data-all-images');
    let allProjectImages = [];
    try {
      allProjectImages = JSON.parse(rawAllImages || '[]');
    } catch (err) {
      allProjectImages = [];
    }

    const projectImgs = Array.from(projectGalleryGrid.querySelectorAll('img'));
    if (!allProjectImages.length) {
      allProjectImages = projectImgs.map(i => i.src);
    }

    const projectTitle = document.querySelector('.project-hero-title, h1')?.textContent || '';

    projectImgs.forEach((imgEl, visibleIndex) => {
      imgEl.style.cursor = 'pointer';
      imgEl.addEventListener('click', () => {
        const currentSrc = imgEl.getAttribute('src') || imgEl.src;
        let targetIndex = allProjectImages.findIndex(url => currentSrc.endsWith(url) || url.endsWith(currentSrc) || currentSrc === url);
        if (targetIndex === -1) targetIndex = visibleIndex;

        const imageTitle = imgEl.getAttribute('alt') || projectTitle;
        openLightboxModal(allProjectImages, targetIndex, imageTitle);
      });
    });
  }

  const closeLightboxModal = () => {
    lightbox.classList.remove('stage-ready');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightboxModal);
  if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightboxModal);

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      updateCarouselSlide(currentIndex - 1);
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      updateCarouselSlide(currentIndex + 1);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightboxModal();
    if (e.key === 'ArrowLeft' && currentImages.length > 1) updateCarouselSlide(currentIndex - 1);
    if (e.key === 'ArrowRight' && currentImages.length > 1) updateCarouselSlide(currentIndex + 1);
  });
});
