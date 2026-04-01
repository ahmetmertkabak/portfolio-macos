const CATEGORY_LABELS = {
    all: "Tüm Projeler",
    web: "Web ve Full Stack",
    iot: "IoT",
    saas: "SaaS",
    ai: "Yapay Zekâ"
};

const DEFAULT_DESKTOP_APPS = [];
const DEFAULT_MOBILE_APPS = [];

const INITIAL_TRASH_ITEMS = [
    {
        name: "eski-portföy-mockup.fig",
        meta: "Tasarım Denemesi • 2.4 MB"
    },
    {
        name: "terminal_fikirleri.txt",
        meta: "Not Dosyası • 18 KB"
    },
    {
        name: "yarım-kalan-sayfa.html",
        meta: "Arayüz Taslağı • 46 KB"
    }
];

const WINDOW_ACTION_LABELS = {
    close: "Kapat",
    minimize: "Küçült",
    maximize: "Tam Ekran"
};

const DESKTOP_TITLE = "Portfolio Desktop - Masaüstü";
const BROWSER_VIEWS = [
    { id: "home", address: "portfolio://baslangic" },
    { id: "about", address: "portfolio://hakkimda" },
    { id: "contact", address: "portfolio://iletisim" }
];
const BOOT_LOADING_DURATION = 1500;
const BOOT_JUMP_DURATION = 760;
const BOOT_RUNNER_LEFT = 28;
const BOOT_RUNNER_WIDTH = 50;
const BOOT_OBSTACLE_WIDTH = 34;
const WINDOW_CONTROL_DEDUPE_MS = 220;

const projects = [
    {
        id: 1,
        title: "Gezicim - Akıllı Tur Platformu",
        category: "web",
        status: "Geliştirme Aşamasında",
        icon: "fa-solid fa-map-location-dot",
        image: "static/img/projects/gezicim.png",
        images: ["static/img/projects/gezicim.png"],
        description:
            "Tur operatörlerini, rehberleri ve katılımcıları tek platformda buluşturan kapsamlı bir B2B/B2C sistem. Gerçek zamanlı iletişim, harita entegrasyonu ve yönetim paneli ile turizm sektörüne modern bir çözüm sunuyor.",
        technologies: ["Next.js", "Supabase", "React Native", "Docker", "Mapbox", "TypeScript"],
        features: [
            "B2B/B2C platform mimarisi",
            "Operatör ve esnaf için yönetim paneli",
            "Gerçek zamanlı veri akışı ve kimlik doğrulama",
            "Mobil rehber ve katılımcı deneyimi",
            "Çoklu rol yapısı ve izin sistemi",
            "Harita tabanlı deneyim ve anlık bildirimler"
        ],
        links: []
    },
    {
        id: 2,
        title: "Akıllı Yemekhane Sistemi",
        category: "iot",
        icon: "fa-solid fa-utensils",
        image: "static/img/projects/yemekhane.png",
        images: ["static/img/projects/yemekhane.png", "static/img/projects/yemekhane1.png"],
        description:
            "Okul kantininde temassız ve hızlı giriş sağlayan Raspberry Pi + RFID + web panel tabanlı gerçek hayat IoT çözümü. Öğrenciler kartlarıyla giriş yapar, bakiyeleri otomatik düşer ve tüm işlem panelden izlenir.",
        technologies: ["Raspberry Pi 4", "Arduino Uno", "RC522 RFID", "Flask", "MySQL", "Cloudflare Tunnel", "Python"],
        features: [
            "RFID kart okuyucu entegrasyonu",
            "Flask tabanlı yönetim paneli",
            "LCD ekran ile anlık mesajlar",
            "İki ayrı okuyucu ile saha kullanım senaryosu",
            "Bakiye düşme ve raporlama mantığı",
            "Gerçek ortam için çalışan donanım-yazılım birleşimi"
        ],
        links: []
    },
    {
        id: 3,
        title: "Dilekçecim - Resmî Dilekçe SaaS",
        category: "saas",
        icon: "fa-solid fa-file-signature",
        image: "static/img/projects/dilekce.png",
        images: ["static/img/projects/dilekce.png", "static/img/projects/dilekce1.png", "static/img/projects/dilekce2.png"],
        description:
            "Vatandaşların resmî kurumlara başvurularını kolaylaştıran SaaS tabanlı web uygulaması. Yapay zekâ destekli düzenleme, canlı PDF önizleme ve istemci taraflı PDF oluşturma deneyimi sunuyor.",
        technologies: ["Next.js", "React", "Supabase", "Yapay Zekâ Entegrasyonu", "React PDF", "React Hook Form"],
        features: [
            "3 adımlı sihirbaz arayüz",
            "Canlı PDF önizleme",
            "Yapay zekâ destekli metin düzenleme",
            "Veri gizliliğini koruyan istemci taraflı PDF üretimi",
            "Hazır şablonlar ve kullanıcı yönlendirme akışı"
        ],
        links: []
    },
    {
        id: 4,
        title: "Çizgi Roman Platformu",
        category: "web",
        icon: "fa-solid fa-masks-theater",
        image: "static/img/projects/cizgiroman.png",
        images: ["static/img/projects/cizgiroman.png", "static/img/projects/cizgiroman1.png", "static/img/projects/cizgiroman2.png"],
        description:
            "300'den fazla çizgi roman evreni ve karakter bilgisi sunan kapsamlı platform. Makine öğrenmesi destekli quiz deneyimi ile kullanıcılar hangi karaktere benzediğini keşfedebiliyor.",
        technologies: ["Next.js", "React", "Makine Öğrenmesi", "LLM", "TypeScript", "Tailwind CSS"],
        features: [
            "300+ karakter ve evren bilgisi",
            "Makine öğrenmesi destekli karakter quizi",
            "Yüksek etkileşimli bilgi testleri",
            "Responsive ve SEO odaklı yapı"
        ],
        links: [
            {
                name: "Canlı Site",
                url: "https://www.cizgiromanim.com",
                icon: "fa-solid fa-arrow-up-right-from-square"
            }
        ]
    },
    {
        id: 5,
        title: "Tantuni - KPSS Matematik Chatbot",
        category: "ai",
        icon: "fa-solid fa-graduation-cap",
        image: "static/img/projects/tantuni.jpg",
        images: [
            "static/img/projects/tantuni.jpg",
            "static/img/projects/tantuni1.jpg",
            "static/img/projects/tantuni2.jpg",
            "static/img/projects/tantuni3.jpg",
            "static/img/projects/tanntuni4.jpg"
        ],
        description:
            "KPSS matematik hazırlığı yapan öğrencilere yardımcı olan yapay zekâ destekli chatbot. Samimi öğretmen yaklaşımı ile adım adım problem çözümleri sunuyor.",
        technologies: ["Python", "Flask", "AI/LLM", "EdTech"],
        features: [
            "Samimi öğretmen tonu",
            "Adım adım problem çözümü",
            "Bağlam koruyan sohbet akışı",
            "KPSS odaklı konu dağılımı"
        ],
        links: []
    },
    {
        id: 6,
        title: "Laboratuvar Takip Sistemi",
        category: "web",
        icon: "fa-solid fa-laptop-code",
        image: "static/img/projects/lab.png",
        images: ["static/img/projects/lab.png", "static/img/projects/lab1.png", "static/img/projects/lab2.png"],
        description:
            "Laboratuvardaki bilgisayar sayısı ve rezervasyon takibini yapan sistem. Öğrenciler günlük limitlerle rezervasyon yapabilir, öğretmen onayı ile gerçek zamanlı durum takibi sağlanır.",
        technologies: ["Next.js", "Supabase", "Gerçek Zamanlı", "WebSocket"],
        features: [
            "Bilgisayar ve doluluk takibi",
            "Günlük limitli öğrenci rezervasyonu",
            "Öğretmen onay mekanizması",
            "Canlı durum güncellemesi ve başvuru akışı"
        ],
        links: []
    },
    {
        id: 7,
        title: "Sporsever - Spor Arkadaşı Bulma",
        category: "web",
        icon: "fa-solid fa-person-running",
        image: "static/img/projects/sporsever.png",
        images: ["static/img/projects/sporsever.png", "static/img/projects/sporsever1.png", "static/img/projects/sporsever2.png"],
        description:
            "Kullanıcıların yetenek seviyelerine ve konumlarına göre spor partneri bulmasını sağlayan platform. Onboarding, ilan yönetimi ve eşleşme mantığı bir arada çalışıyor.",
        technologies: ["Next.js", "React", "React Native", "Supabase", "Node.js"],
        features: [
            "5 aşamalı onboarding",
            "Konum tabanlı eşleşme mantığı",
            "İlan, takım ve grup akışları",
            "Gerçek zamanlı sohbet ve bildirimler"
        ],
        links: []
    },
    {
        id: 8,
        title: "Çok Yönlü Chatbot Sistemi",
        category: "ai",
        icon: "fa-solid fa-robot",
        image: "",
        images: [],
        description:
            "Günlük alışkanlık verilerine göre öğrencilerin not ortalamasını tahmin eden yapay zekâ destekli chatbot. MLPRegressor ile tahmin modeli ve doğal dil yanıtı aynı üründe buluşuyor.",
        technologies: ["Python", "Flask", "MLPRegressor", "Scikit-learn", "Gemini API"],
        features: [
            "MLPRegressor ile GPA tahmin modeli",
            "Az soruyla veri toplama akışı",
            "GridSearchCV ile optimizasyon",
            "Doğal dil yanıtı üreten sohbet katmanı"
        ],
        links: []
    }
];

const state = {
    highestZ: 20,
    activeApp: null,
    activeFilter: "all",
    selectedProjectId: 1,
    selectedProjectImageIndex: 0,
    browserViewIndex: 0,
    drag: null,
    trashItems: [...INITIAL_TRASH_ITEMS],
    bootTimeout: null,
    bootGameReadyTimeout: null,
    bootGameRestartTimeout: null,
    bootGameRaf: null,
    bootGameRunning: false,
    bootGameJumpStart: 0,
    bootGameLastFrame: 0,
    bootGameObstacleX: 0,
    bootGameScore: 0,
    bootGameBest: 0,
    bootGameSpeed: 0,
    lastWindowControlAction: null
};

const elements = {
    body: document.body,
    workspace: document.getElementById("workspace"),
    panelTitle: document.getElementById("panelTitle"),
    desktopClock: document.getElementById("desktopClock"),
    browserPages: document.querySelectorAll("[data-browser-view]"),
    browserNavButtons: document.querySelectorAll("[data-browser-nav]"),
    browserAddress: document.getElementById("browserAddress"),
    projectsGrid: document.getElementById("projectsGrid"),
    projectInspector: document.getElementById("projectInspector"),
    filterButtons: document.querySelectorAll(".sidebar-filter"),
    windows: document.querySelectorAll(".app-window"),
    dockButtons: document.querySelectorAll(".dock-app[data-app-target]"),
    iconButtons: document.querySelectorAll(".desktop-icon[data-app-target]"),
    contactForm: document.getElementById("contactForm"),
    mailStatus: document.getElementById("mailStatus"),
    bootScreen: document.getElementById("bootScreen"),
    bootSkip: document.getElementById("bootSkip"),
    bootStatus: document.getElementById("bootStatus"),
    bootHint: document.getElementById("bootHint"),
    bootScore: document.getElementById("bootScore"),
    bootGame: document.getElementById("bootGame"),
    bootRunner: document.getElementById("bootRunner"),
    bootObstacle: document.getElementById("bootObstacle"),
    bootGameFlash: document.getElementById("bootGameFlash"),
    desktopContextMenu: document.getElementById("desktopContextMenu"),
    emptyTrashButton: document.getElementById("emptyTrashButton"),
    trashList: document.getElementById("trashList")
};

function isMobileLayout() {
    return window.innerWidth <= 980;
}

function getDefaultOpenApps() {
    return isMobileLayout() ? DEFAULT_MOBILE_APPS : DEFAULT_DESKTOP_APPS;
}

function init() {
    initializeWindows();
    bindLaunchers();
    bindWindowEvents();
    bindFilterEvents();
    bindProjectEvents();
    bindBrowserNavigation();
    bindContactForm();
    bindQuickLaunchers();
    bindContextMenu();
    bindTrashEvents();
    bindBootExperience();
    bindStaticImageFallbacks();
    renderProjects();
    renderTrash();
    renderBrowserView();
    updateClock();
    window.setInterval(updateClock, 30000);
    focusTopMostWindow();
    updateLauncherState();
    playBootSequence();

    window.addEventListener("resize", handleResize);
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", endDrag);
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            hideContextMenu();
        }
    });
}

function initializeWindows() {
    const openApps = new Set(getDefaultOpenApps());

    elements.windows.forEach((windowEl, index) => {
        const appId = windowEl.dataset.appWindow;
        const shouldOpen = openApps.has(appId);

        windowEl.classList.toggle("is-open", shouldOpen);
        windowEl.classList.remove("is-minimized", "is-active", "is-maximized");

        if (!isMobileLayout()) {
            applyWindowMetrics(windowEl);
        }

        windowEl.style.zIndex = String(state.highestZ + index);
        syncWindowAccessibility(windowEl);
    });
}

function syncWindowAccessibility(windowEl) {
    const isHidden = !windowEl.classList.contains("is-open") || windowEl.classList.contains("is-minimized");
    windowEl.setAttribute("aria-hidden", String(isHidden));
    windowEl.hidden = isHidden;
    updateMobileShellState();
}

function applyWindowMetrics(windowEl) {
    if (!windowEl || windowEl.classList.contains("is-maximized")) {
        return;
    }

    windowEl.style.left = `${Number(windowEl.dataset.left || 40)}px`;
    windowEl.style.top = `${Number(windowEl.dataset.top || 40)}px`;
    windowEl.style.width = `${Number(windowEl.dataset.width || 420)}px`;
    windowEl.style.height = `${Number(windowEl.dataset.height || 420)}px`;
}

function bindLaunchers() {
    elements.dockButtons.forEach((button) => {
        button.addEventListener("click", () => handleDockLauncherClick(button.dataset.appTarget));
    });

    elements.iconButtons.forEach((button) => {
        button.addEventListener("click", () => handleDesktopIconClick(button.dataset.appTarget));
    });
}

function bindQuickLaunchers() {
    document.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
            return;
        }

        const trigger = target.closest("[data-open-app]");
        if (!trigger) {
            return;
        }

        const appId = trigger.getAttribute("data-open-app");
        if (!appId) {
            return;
        }

        event.preventDefault();
        openWindow(appId);
        hideContextMenu();
    });
}

function bindBrowserNavigation() {
    elements.browserNavButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const action = button.dataset.browserNav;

            if (action === "back") {
                shiftBrowserView(-1);
            } else if (action === "forward") {
                shiftBrowserView(1);
            } else if (action === "refresh") {
                refreshBrowserView();
            }
        });
    });
}

function shiftBrowserView(direction) {
    const nextIndex = clamp(state.browserViewIndex + direction, 0, BROWSER_VIEWS.length - 1);
    if (nextIndex === state.browserViewIndex) {
        return;
    }

    state.browserViewIndex = nextIndex;
    renderBrowserView();
}

function refreshBrowserView() {
    const activePage = elements.browserPages[state.browserViewIndex];
    if (!activePage) {
        return;
    }

    activePage.classList.remove("is-refreshing");
    void activePage.offsetWidth;
    activePage.classList.add("is-refreshing");
    window.setTimeout(() => {
        activePage.classList.remove("is-refreshing");
    }, 320);
}

function renderBrowserView() {
    elements.browserPages.forEach((page, index) => {
        page.classList.toggle("is-active", index === state.browserViewIndex);
    });

    const view = BROWSER_VIEWS[state.browserViewIndex];
    if (elements.browserAddress && view) {
        elements.browserAddress.innerHTML = `
            <i class="fa-solid fa-lock"></i>
            ${view.address}
        `;
    }

    elements.browserNavButtons.forEach((button) => {
        const action = button.dataset.browserNav;
        const isDisabled =
            (action === "back" && state.browserViewIndex === 0) ||
            (action === "forward" && state.browserViewIndex === BROWSER_VIEWS.length - 1);

        button.classList.toggle("is-disabled", isDisabled);
        button.disabled = isDisabled;
        button.setAttribute("aria-disabled", String(isDisabled));
    });
}

function handleDockLauncherClick(appId) {
    if (!appId) {
        return;
    }

    const windowEl = getWindow(appId);
    if (!windowEl) {
        return;
    }

    const isOpen = windowEl.classList.contains("is-open");
    if (!isOpen) {
        openWindow(appId);
        return;
    }

    if (windowEl.classList.contains("is-minimized")) {
        restoreWindow(appId);
        return;
    }

    focusWindow(appId);
}

function handleDesktopIconClick(appId) {
    if (!appId) {
        return;
    }

    const windowEl = getWindow(appId);
    if (!windowEl) {
        return;
    }

    if (!windowEl.classList.contains("is-open")) {
        openWindow(appId);
        return;
    }

    if (windowEl.classList.contains("is-minimized")) {
        restoreWindow(appId);
        return;
    }

    focusWindow(appId);
}

function bindWindowEvents() {
    elements.windows.forEach((windowEl) => {
        windowEl.addEventListener("pointerdown", (event) => {
            if (event.target instanceof HTMLElement && event.target.closest("[data-window-action]")) {
                return;
            }

            focusWindow(windowEl.dataset.appWindow);
        });

        const titlebar = windowEl.querySelector("[data-drag-handle]");
        if (titlebar) {
            titlebar.addEventListener("dblclick", (event) => {
                if (isMobileLayout()) {
                    return;
                }

                if (event.target instanceof HTMLElement && event.target.closest("[data-window-action]")) {
                    return;
                }

                toggleMaximize(windowEl.dataset.appWindow);
            });

            titlebar.addEventListener("pointerdown", (event) => {
                if (event.button !== 0 || isMobileLayout()) {
                    return;
                }

                if (event.target instanceof HTMLElement && event.target.closest("[data-window-action]")) {
                    return;
                }

                event.preventDefault();
                focusWindow(windowEl.dataset.appWindow);

                const rect = windowEl.getBoundingClientRect();
                state.drag = {
                    windowEl,
                    pointerId: event.pointerId,
                    startX: event.clientX,
                    startY: event.clientY,
                    originLeft: parseFloat(windowEl.style.left || "0"),
                    originTop: parseFloat(windowEl.style.top || "0"),
                    pendingRestore: windowEl.classList.contains("is-maximized"),
                    pointerRatioX: clamp(
                        (event.clientX - rect.left) / Math.max(rect.width, 1),
                        0.14,
                        0.86
                    )
                };
            });
        }

        windowEl.querySelectorAll("[data-window-action]").forEach((control) => {
            const action = control.dataset.windowAction || "";
            const tooltip = WINDOW_ACTION_LABELS[action];

            if (tooltip) {
                control.dataset.tooltip = tooltip;
                control.setAttribute("title", tooltip);
            }

            control.addEventListener("pointerdown", (event) => {
                event.preventDefault();
                event.stopPropagation();
            });

            const runControl = (event) => {
                event.preventDefault();
                event.stopPropagation();
                runWindowControlAction(windowEl.dataset.appWindow, action);
            };

            control.addEventListener("pointerup", runControl);
            control.addEventListener("mouseup", runControl);
            control.addEventListener("touchend", runControl, { passive: false });
            control.addEventListener("click", (event) => {
                if (event.detail === 0) {
                    runControl(event);
                }
            });
        });
    });
}

function handlePointerMove(event) {
    if (!state.drag || isMobileLayout()) {
        return;
    }

    if (state.drag.pendingRestore) {
        const moveDistance = Math.abs(event.clientX - state.drag.startX) + Math.abs(event.clientY - state.drag.startY);

        if (moveDistance < 8) {
            return;
        }

        restoreWindowFromDrag(state.drag, event);
    }

    const { windowEl, startX, startY, originLeft, originTop } = state.drag;
    const layerRect = elements.workspace.getBoundingClientRect();
    const nextLeft = originLeft + (event.clientX - startX);
    const nextTop = originTop + (event.clientY - startY);
    const maxLeft = Math.max(8, layerRect.width - windowEl.offsetWidth - 8);
    const maxTop = Math.max(8, layerRect.height - windowEl.offsetHeight - 8);

    windowEl.style.left = `${clamp(nextLeft, 8, maxLeft)}px`;
    windowEl.style.top = `${clamp(nextTop, 8, maxTop)}px`;
}

function endDrag(event) {
    if (!state.drag) {
        return;
    }

    if (typeof state.drag.pointerId === "number" && event.pointerId !== state.drag.pointerId) {
        return;
    }

    state.drag = null;
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function runWindowControlAction(appId, action) {
    const now = performance.now();
    const lastAction = state.lastWindowControlAction;

    if (
        lastAction &&
        lastAction.appId === appId &&
        lastAction.action === action &&
        now - lastAction.timestamp < WINDOW_CONTROL_DEDUPE_MS
    ) {
        return;
    }

    state.lastWindowControlAction = { appId, action, timestamp: now };
    runWindowAction(appId, action);
}

function runWindowAction(appId, action) {
    if (action === "close") {
        closeWindow(appId);
    } else if (action === "minimize") {
        minimizeWindow(appId);
    } else if (action === "maximize") {
        toggleMaximize(appId);
    }
}

function restoreWindowFromDrag(dragState, event) {
    const { windowEl, pointerRatioX } = dragState;
    const layerRect = elements.workspace.getBoundingClientRect();
    const restoreWidth = Number.parseFloat(windowEl.dataset.restoreWidth || windowEl.dataset.width || "720");
    const restoreHeight = Number.parseFloat(windowEl.dataset.restoreHeight || windowEl.dataset.height || "520");
    const maxLeft = Math.max(8, layerRect.width - restoreWidth - 8);
    const maxTop = Math.max(8, layerRect.height - restoreHeight - 8);
    const nextLeft = clamp(
        event.clientX - layerRect.left - restoreWidth * pointerRatioX,
        8,
        maxLeft
    );
    const nextTop = clamp(
        event.clientY - layerRect.top - 20,
        8,
        maxTop
    );

    windowEl.classList.remove("is-maximized");
    windowEl.style.width = `${restoreWidth}px`;
    windowEl.style.height = `${restoreHeight}px`;
    windowEl.style.left = `${nextLeft}px`;
    windowEl.style.top = `${nextTop}px`;

    dragState.pendingRestore = false;
    dragState.originLeft = nextLeft;
    dragState.originTop = nextTop;
    dragState.startX = event.clientX;
    dragState.startY = event.clientY;
}

function minimizeOtherWindows(activeAppId) {
    elements.windows.forEach((windowEl) => {
        const appId = windowEl.dataset.appWindow;
        const isVisible = windowEl.classList.contains("is-open") && !windowEl.classList.contains("is-minimized");

        if (!isVisible || appId === activeAppId) {
            return;
        }

        windowEl.classList.add("is-minimized");
        windowEl.classList.remove("is-active");
        syncWindowAccessibility(windowEl);
    });
}

function restoreLastHiddenWindow(excludedAppId = "") {
    const hiddenWindows = [...elements.windows].filter(
        (windowEl) =>
            windowEl.classList.contains("is-open") &&
            windowEl.classList.contains("is-minimized") &&
            windowEl.dataset.appWindow !== excludedAppId
    );

    if (!hiddenWindows.length) {
        return false;
    }

    hiddenWindows.sort((a, b) => Number(b.style.zIndex || 0) - Number(a.style.zIndex || 0));
    restoreWindow(hiddenWindows[0].dataset.appWindow);
    return true;
}

function resetWindowContentScroll(windowEl) {
    if (!windowEl) {
        return;
    }

    windowEl.querySelectorAll(".window-content").forEach((contentEl) => {
        contentEl.scrollTop = 0;
    });
}

function openWindow(appId) {
    const windowEl = getWindow(appId);
    if (!windowEl) {
        return;
    }

    const wasOpen = windowEl.classList.contains("is-open");
    minimizeOtherWindows(appId);
    windowEl.classList.add("is-open");
    windowEl.classList.remove("is-minimized");

    if (!isMobileLayout()) {
        applyWindowMetrics(windowEl);
        windowEl.classList.add("is-maximized");
    } else {
        windowEl.classList.remove("is-maximized");
    }

    if (!wasOpen) {
        resetWindowContentScroll(windowEl);
    }

    syncWindowAccessibility(windowEl);
    focusWindow(appId);
}

function restoreWindow(appId) {
    const windowEl = getWindow(appId);
    if (!windowEl) {
        return;
    }

    minimizeOtherWindows(appId);
    windowEl.classList.remove("is-minimized");
    windowEl.classList.add("is-open");
    syncWindowAccessibility(windowEl);
    focusWindow(appId);
}

function minimizeWindow(appId) {
    const windowEl = getWindow(appId);
    if (!windowEl) {
        return;
    }

    windowEl.classList.add("is-minimized");
    windowEl.classList.remove("is-active");
    syncWindowAccessibility(windowEl);

    if (state.activeApp === appId) {
        state.activeApp = null;
        if (restoreLastHiddenWindow(appId)) {
            return;
        }
        focusTopMostWindow();
    } else {
        updateLauncherState();
    }
}

function closeWindow(appId) {
    const windowEl = getWindow(appId);
    if (!windowEl) {
        return;
    }

    const wasVisible = windowEl.classList.contains("is-open") && !windowEl.classList.contains("is-minimized");

    windowEl.classList.remove("is-open", "is-minimized", "is-active", "is-maximized");
    windowEl.style.left = "";
    windowEl.style.top = "";
    windowEl.style.width = "";
    windowEl.style.height = "";
    resetWindowContentScroll(windowEl);

    if (!isMobileLayout()) {
        applyWindowMetrics(windowEl);
    }

    syncWindowAccessibility(windowEl);

    if (state.activeApp === appId) {
        state.activeApp = null;
    }

    if (wasVisible) {
        const hasVisibleWindows = [...elements.windows].some(
            (item) => item.classList.contains("is-open") && !item.classList.contains("is-minimized")
        );

        if (!hasVisibleWindows && restoreLastHiddenWindow()) {
            return;
        }

        focusTopMostWindow();
    } else {
        updateLauncherState();
    }
}

function closeAllWindows() {
    elements.windows.forEach((windowEl) => {
        closeWindow(windowEl.dataset.appWindow);
    });
    setPanelTitle(DESKTOP_TITLE);
}

function toggleMaximize(appId) {
    const windowEl = getWindow(appId);
    if (!windowEl || isMobileLayout()) {
        return;
    }

    if (windowEl.classList.contains("is-maximized")) {
        windowEl.classList.remove("is-maximized");
        windowEl.style.left = windowEl.dataset.restoreLeft || `${windowEl.dataset.left}px`;
        windowEl.style.top = windowEl.dataset.restoreTop || `${windowEl.dataset.top}px`;
        windowEl.style.width = windowEl.dataset.restoreWidth || `${windowEl.dataset.width}px`;
        windowEl.style.height = windowEl.dataset.restoreHeight || `${windowEl.dataset.height}px`;
    } else {
        windowEl.dataset.restoreLeft = windowEl.style.left;
        windowEl.dataset.restoreTop = windowEl.style.top;
        windowEl.dataset.restoreWidth = windowEl.style.width;
        windowEl.dataset.restoreHeight = windowEl.style.height;
        windowEl.classList.add("is-maximized");
    }

    focusWindow(appId);
}

function focusWindow(appId) {
    const windowEl = getWindow(appId);
    if (!windowEl || !windowEl.classList.contains("is-open")) {
        updateLauncherState();
        return;
    }

    windowEl.classList.remove("is-minimized");
    syncWindowAccessibility(windowEl);
    state.highestZ += 1;
    state.activeApp = appId;

    elements.windows.forEach((item) => {
        item.classList.remove("is-active");
    });

    windowEl.classList.add("is-active");
    windowEl.style.zIndex = String(state.highestZ);
    setPanelTitle(windowEl.dataset.title || DESKTOP_TITLE);
    updateLauncherState();
}

function focusTopMostWindow() {
    const openWindows = [...elements.windows].filter(
        (windowEl) => windowEl.classList.contains("is-open") && !windowEl.classList.contains("is-minimized")
    );

    if (!openWindows.length) {
        setPanelTitle(DESKTOP_TITLE);
        updateLauncherState();
        return;
    }

    openWindows.sort((a, b) => Number(b.style.zIndex || 0) - Number(a.style.zIndex || 0));
    focusWindow(openWindows[0].dataset.appWindow);
}

function setPanelTitle(title) {
    if (elements.panelTitle) {
        elements.panelTitle.textContent = title;
    }
}

function updateMobileShellState() {
    const hasVisibleWindow = [...elements.windows].some(
        (windowEl) => windowEl.classList.contains("is-open") && !windowEl.classList.contains("is-minimized")
    );

    elements.body.classList.toggle("is-mobile-app-open", isMobileLayout() && hasVisibleWindow);
}

function getWindow(appId) {
    return document.querySelector(`[data-app-window="${appId}"]`);
}

function updateLauncherState() {
    elements.dockButtons.forEach((button) => {
        const appId = button.dataset.appTarget;
        const windowEl = getWindow(appId);
        const isOpen = Boolean(windowEl && windowEl.classList.contains("is-open"));
        const isActive = Boolean(windowEl && windowEl.classList.contains("is-active") && !windowEl.classList.contains("is-minimized"));

        button.classList.toggle("is-open", isOpen);
        button.classList.toggle("is-active", isActive);
    });
}

function handleResize() {
    hideContextMenu();

    elements.windows.forEach((windowEl) => {
        if (isMobileLayout()) {
            return;
        }

        if (!windowEl.classList.contains("is-maximized")) {
            applyWindowMetrics(windowEl);
        }
    });

    updateMobileShellState();

    if (elements.bootScreen && elements.bootScreen.classList.contains("is-visible")) {
        if (elements.bootScreen.classList.contains("is-ready")) {
            startBootGame();
        } else {
            resetBootGame();
        }
    }
}

function bindFilterEvents() {
    elements.filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            state.activeFilter = button.dataset.filter || "all";
            state.selectedProjectImageIndex = 0;

            elements.filterButtons.forEach((item) => {
                item.classList.toggle("is-active", item === button);
            });

            const nextProjects = getFilteredProjects();
            if (!nextProjects.some((project) => project.id === state.selectedProjectId)) {
                state.selectedProjectId = nextProjects.length ? nextProjects[0].id : null;
            }

            renderProjects();
            focusWindow("projects");
        });
    });
}

function bindProjectEvents() {
    if (elements.projectsGrid) {
        elements.projectsGrid.addEventListener("click", (event) => {
            const target = event.target;
            if (!(target instanceof HTMLElement)) {
                return;
            }

            const card = target.closest("[data-project-id]");
            if (!card) {
                return;
            }

            state.selectedProjectId = Number(card.dataset.projectId);
            state.selectedProjectImageIndex = 0;
            renderProjects();
            focusWindow("projects");
        });
    }

    if (elements.projectInspector) {
        elements.projectInspector.addEventListener("click", (event) => {
            const target = event.target;
            if (!(target instanceof HTMLElement)) {
                return;
            }

            const thumbButton = target.closest("[data-image-index]");
            if (thumbButton) {
                const nextIndex = Number(thumbButton.dataset.imageIndex);
                if (!Number.isNaN(nextIndex)) {
                    state.selectedProjectImageIndex = nextIndex;
                    renderProjectInspector();
                }
            }
        });
    }
}

function getFilteredProjects() {
    return projects.filter((project) => {
        if (state.activeFilter === "all") {
            return true;
        }

        return project.category === state.activeFilter;
    });
}

function renderProjects() {
    const filteredProjects = getFilteredProjects();

    if (!filteredProjects.length) {
        if (elements.projectsGrid) {
            elements.projectsGrid.innerHTML = '<div class="project-card"><p>Bu kategoride şu an görünen proje yok.</p></div>';
        }
        if (elements.projectInspector) {
            elements.projectInspector.innerHTML = '<div class="project-inspector__empty">Gösterilecek proje bulunamadı.</div>';
        }
        return;
    }

    if (!filteredProjects.some((project) => project.id === state.selectedProjectId)) {
        state.selectedProjectId = filteredProjects[0].id;
        state.selectedProjectImageIndex = 0;
    }

    if (elements.projectsGrid) {
        elements.projectsGrid.innerHTML = filteredProjects
            .map((project) => {
                const firstImage = project.images[0] || project.image;
                const previewMarkup = firstImage
                    ? `<img src="${firstImage}" alt="${project.title}" loading="lazy">`
                    : `<div class="project-card__fallback"><i class="${project.icon}"></i></div>`;

                const techPreview = project.technologies
                    .slice(0, 4)
                    .map((technology) => `<span class="tech-pill">${technology}</span>`)
                    .join("");

                return `
                    <button class="project-card ${project.id === state.selectedProjectId ? "is-selected" : ""}" data-project-id="${project.id}" type="button">
                        <div class="project-card__thumb">
                            ${previewMarkup}
                        </div>
                        <div class="project-card__meta">
                            <span class="meta-pill meta-pill--accent">${CATEGORY_LABELS[project.category]}</span>
                            ${project.status ? `<span class="meta-pill">${project.status}</span>` : ""}
                        </div>
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tech-preview">${techPreview}</div>
                    </button>
                `;
            })
            .join("");
    }

    renderProjectInspector();
    attachProjectImageFallbacks();
}

function attachProjectImageFallbacks() {
    document.querySelectorAll(".project-card__thumb img, .inspector-image img, .thumb-button img").forEach((image) => {
        image.addEventListener(
            "error",
            () => {
                const parent = image.parentElement;
                if (!parent) {
                    return;
                }

                image.remove();
                if (!parent.querySelector(".project-card__fallback, .inspector-image__fallback")) {
                    parent.insertAdjacentHTML(
                        "beforeend",
                        '<div class="project-card__fallback"><i class="fa-solid fa-image"></i></div>'
                    );
                }
            },
            { once: true }
        );
    });
}

function bindStaticImageFallbacks() {
    document.querySelectorAll("[data-profile-photo]").forEach((image) => {
        const parent = image.parentElement;
        if (!parent) {
            return;
        }

        const markLoaded = () => {
            parent.classList.add("has-image");
            image.hidden = false;
        };

        const markFallback = () => {
            parent.classList.remove("has-image");
            image.hidden = true;
        };

        if (image.complete) {
            if (image.naturalWidth > 0) {
                markLoaded();
            } else {
                markFallback();
            }
        } else {
            image.addEventListener("load", markLoaded, { once: true });
            image.addEventListener("error", markFallback, { once: true });
        }
    });
}

function renderProjectInspector() {
    const project = projects.find((item) => item.id === state.selectedProjectId);
    if (!project || !elements.projectInspector) {
        return;
    }

    const gallery = project.images.length ? project.images : project.image ? [project.image] : [];
    const selectedImage = gallery[state.selectedProjectImageIndex] || gallery[0] || "";
    const imageMarkup = selectedImage
        ? `<img src="${selectedImage}" alt="${project.title} detay görseli">`
        : `<div class="inspector-image__fallback"><i class="${project.icon}"></i></div>`;

    const linksMarkup = project.links.length
        ? project.links
              .map(
                  (link) => `
                    <a class="action-button action-button--ghost" href="${link.url}" target="_blank" rel="noopener noreferrer">
                        <i class="${link.icon}"></i>
                        ${link.name}
                    </a>
                `
              )
              .join("")
        : '<p>Bu proje için açık paylaşılmış bir bağlantı şu an bulunmuyor.</p>';

    elements.projectInspector.innerHTML = `
        <div class="project-inspector__panel">
            <p class="mini-label">Seçili Proje</p>
            <div class="inspector-image">
                ${imageMarkup}
            </div>
            ${
                gallery.length > 1
                    ? `
                        <div class="inspector-thumbs">
                            ${gallery
                                .map(
                                    (image, index) => `
                                        <button class="thumb-button ${index === state.selectedProjectImageIndex ? "is-active" : ""}" data-image-index="${index}" type="button">
                                            <img src="${image}" alt="${project.title} küçük görsel ${index + 1}">
                                        </button>
                                    `
                                )
                                .join("")}
                        </div>
                    `
                    : ""
            }

            <div class="inspector-block">
                <div class="project-card__meta">
                    <span class="meta-pill meta-pill--accent">${CATEGORY_LABELS[project.category]}</span>
                    ${project.status ? `<span class="meta-pill">${project.status}</span>` : ""}
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>

            <div class="inspector-block">
                <h4>Kullanılan Teknolojiler</h4>
                <div class="inspector-tech">
                    ${project.technologies.map((technology) => `<span class="tech-pill">${technology}</span>`).join("")}
                </div>
            </div>

            <div class="inspector-block">
                <h4>Öne Çıkan Özellikler</h4>
                <ul class="plain-list">
                    ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
                </ul>
            </div>

            <div class="inspector-block">
                <h4>Bağlantılar</h4>
                <div class="inspector-links">${linksMarkup}</div>
            </div>
        </div>
    `;

    attachProjectImageFallbacks();
}

function bindTrashEvents() {
    if (!elements.emptyTrashButton) {
        return;
    }

    elements.emptyTrashButton.addEventListener("click", () => {
        state.trashItems = [];
        renderTrash();
        focusWindow("trash");
    });
}

function renderTrash() {
    if (!elements.trashList) {
        return;
    }

    if (!state.trashItems.length) {
        elements.trashList.innerHTML = `
            <div class="trash-empty">
                <i class="fa-solid fa-trash-can"></i>
                <h3>Çöp Kutusu Boş</h3>
                <p>Şimdilik burada silinmiş görünen bir öğe kalmadı.</p>
            </div>
        `;
        return;
    }

    elements.trashList.innerHTML = state.trashItems
        .map(
            (item) => `
                <article class="trash-item">
                    <div class="trash-item__icon">
                        <i class="fa-regular fa-file-lines"></i>
                    </div>
                    <div class="trash-item__copy">
                        <strong>${item.name}</strong>
                        <span>${item.meta}</span>
                    </div>
                </article>
            `
        )
        .join("");
}

function bindContextMenu() {
    if (!elements.workspace || !elements.desktopContextMenu) {
        return;
    }

    elements.workspace.addEventListener("contextmenu", (event) => {
        if (isMobileLayout()) {
            return;
        }

        const target = event.target;
        if (target instanceof HTMLElement && target.closest(".app-window")) {
            return;
        }

        event.preventDefault();
        showContextMenu(event.clientX, event.clientY);
    });

    document.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
            hideContextMenu();
            return;
        }

        const actionButton = target.closest("[data-menu-action]");
        if (!actionButton) {
            hideContextMenu();
            return;
        }

        handleContextAction(actionButton.getAttribute("data-menu-action"));
    });
}

function showContextMenu(clientX, clientY) {
    if (!elements.desktopContextMenu) {
        return;
    }

    elements.desktopContextMenu.hidden = false;
    const menuRect = elements.desktopContextMenu.getBoundingClientRect();
    const maxLeft = window.innerWidth - menuRect.width - 12;
    const maxTop = window.innerHeight - menuRect.height - 12;

    elements.desktopContextMenu.style.left = `${clamp(clientX, 12, maxLeft)}px`;
    elements.desktopContextMenu.style.top = `${clamp(clientY, 12, maxTop)}px`;
}

function hideContextMenu() {
    if (!elements.desktopContextMenu) {
        return;
    }

    elements.desktopContextMenu.hidden = true;
}

function handleContextAction(action) {
    switch (action) {
        case "browser":
            openWindow("browser");
            break;
        case "about":
            openWindow("about");
            break;
        case "terminal":
            openWindow("skills");
            break;
        case "trash":
            openWindow("trash");
            break;
        case "refresh":
            flashWorkspace();
            break;
        case "close-all":
            closeAllWindows();
            break;
        case "boot":
            playBootSequence();
            break;
        default:
            break;
    }

    hideContextMenu();
}

function flashWorkspace() {
    if (!elements.workspace) {
        return;
    }

    elements.workspace.classList.remove("is-refreshing");
    void elements.workspace.offsetWidth;
    elements.workspace.classList.add("is-refreshing");
    window.setTimeout(() => {
        elements.workspace.classList.remove("is-refreshing");
    }, 420);
}

function bindBootExperience() {
    if (elements.bootSkip) {
        elements.bootSkip.addEventListener("click", hideBootScreen);
    }

    if (elements.bootGame) {
        const handleBootPointer = (event) => {
            if (!(event.target instanceof HTMLElement) || event.target.closest(".boot-screen__skip")) {
                return;
            }

            event.preventDefault();
            triggerBootJump();
        };

        elements.bootGame.addEventListener("pointerdown", handleBootPointer);
        elements.bootGame.addEventListener("click", handleBootPointer);
        elements.bootGame.addEventListener("touchstart", handleBootPointer, { passive: false });
    }

    document.addEventListener("keydown", (event) => {
        if (!elements.bootScreen || !elements.bootScreen.classList.contains("is-visible")) {
            return;
        }

        if (event.code === "Space" || event.code === "ArrowUp" || event.code === "KeyW") {
            event.preventDefault();
            triggerBootJump();
        }

        if (event.key === "Escape") {
            hideBootScreen();
        }
    });
}

function updateBootCopy(status, hint) {
    if (elements.bootStatus) {
        elements.bootStatus.textContent = status;
    }

    if (elements.bootHint) {
        elements.bootHint.textContent = hint;
    }
}

function updateBootScore() {
    if (elements.bootScore) {
        elements.bootScore.textContent = String(state.bootGameScore).padStart(3, "0");
    }
}

function resetBootGame() {
    const trackWidth = elements.bootGame
        ? Math.max(elements.bootGame.getBoundingClientRect().width, 280)
        : 280;

    state.bootGameRunning = false;
    state.bootGameJumpStart = 0;
    state.bootGameLastFrame = 0;
    state.bootGameObstacleX = trackWidth + 220;
    state.bootGameScore = 0;
    state.bootGameSpeed = isMobileLayout() ? 3.75 : 3.45;
    updateBootScore();

    if (elements.bootRunner) {
        elements.bootRunner.style.transform = "translateY(0)";
    }

    if (elements.bootObstacle) {
        elements.bootObstacle.style.transform = `translateX(${state.bootGameObstacleX}px)`;
    }

    if (elements.bootGameFlash) {
        elements.bootGameFlash.textContent = "Hazır olunca boşluk, yukarı ok ya da dokun ile zıpla.";
    }
}

function stopBootGame() {
    state.bootGameRunning = false;
    state.bootGameLastFrame = 0;

    if (state.bootGameRaf) {
        window.cancelAnimationFrame(state.bootGameRaf);
        state.bootGameRaf = null;
    }
}

function startBootGame() {
    if (!elements.bootGame || !elements.bootScreen || !elements.bootScreen.classList.contains("is-ready")) {
        return;
    }

    window.clearTimeout(state.bootGameRestartTimeout);
    stopBootGame();
    resetBootGame();
    state.bootGameRunning = true;
    state.bootGameRaf = window.requestAnimationFrame(runBootGameFrame);
}

function getBootJumpHeight(now) {
    if (!state.bootGameJumpStart) {
        return 0;
    }

    const progress = (now - state.bootGameJumpStart) / BOOT_JUMP_DURATION;
    if (progress >= 1) {
        state.bootGameJumpStart = 0;
        return 0;
    }

    return Math.sin(progress * Math.PI) * 74;
}

function triggerBootJump() {
    if (!elements.bootScreen || !elements.bootScreen.classList.contains("is-ready")) {
        return;
    }

    const now = performance.now();
    if (state.bootGameJumpStart && now - state.bootGameJumpStart < BOOT_JUMP_DURATION * 0.55) {
        return;
    }

    state.bootGameJumpStart = now;

    if (elements.bootGameFlash) {
        elements.bootGameFlash.textContent = "Güzel. Bir tane daha gelsin.";
    }
}

function handleBootCollision() {
    stopBootGame();
    state.bootGameBest = Math.max(state.bootGameBest, state.bootGameScore);
    updateBootCopy(
        `Ufak bir kaktüse takıldın. En iyi skor: ${String(state.bootGameBest).padStart(3, "0")}`,
        isMobileLayout()
            ? "Tekrar denemek için ekrana dokunabilir ya da hazır olduğunda masaüstüne geçebilirsin."
            : "Tekrar denemek için boşluk, yukarı ok ya da dokun. Hazırsan masaüstüne de geçebilirsin."
    );

    if (elements.bootGameFlash) {
        elements.bootGameFlash.textContent = "Çarptın. Yeniden başlatılıyor...";
    }

    state.bootGameRestartTimeout = window.setTimeout(() => {
        if (!elements.bootScreen || !elements.bootScreen.classList.contains("is-ready")) {
            return;
        }

        updateBootCopy(
            "Sistem hazır. Minik oyunu deneyebilir ya da doğrudan masaüstüne geçebilirsin.",
            isMobileLayout()
                ? "Ekrana dokun: zıpla. İstersen alttan doğrudan masaüstüne de geçebilirsin."
                : "Boşluk, yukarı ok ya da dokun: zıpla. İstersen doğrudan masaüstüne de geçebilirsin."
        );
        startBootGame();
    }, 900);
}

function runBootGameFrame(now) {
    if (!state.bootGameRunning || !elements.bootGame) {
        return;
    }

    if (!state.bootGameLastFrame) {
        state.bootGameLastFrame = now;
    }

    const delta = Math.min(32, now - state.bootGameLastFrame || 16);
    state.bootGameLastFrame = now;
    const trackWidth = elements.bootGame.clientWidth;

    if (!trackWidth) {
        state.bootGameRaf = window.requestAnimationFrame(runBootGameFrame);
        return;
    }

    state.bootGameObstacleX -= state.bootGameSpeed * (delta / 16);
    if (state.bootGameObstacleX < -BOOT_OBSTACLE_WIDTH) {
        state.bootGameObstacleX = trackWidth + 36 + Math.random() * 64;
        state.bootGameScore += 12;
        state.bootGameSpeed = Math.min(state.bootGameSpeed + 0.12, 6.8);
        updateBootScore();
    }

    const jumpHeight = getBootJumpHeight(now);

    if (elements.bootRunner) {
        elements.bootRunner.style.transform = `translateY(${-jumpHeight}px)`;
    }

    if (elements.bootObstacle) {
        elements.bootObstacle.style.transform = `translateX(${state.bootGameObstacleX}px)`;
    }

    const overlapsRunner =
        state.bootGameObstacleX < BOOT_RUNNER_LEFT + BOOT_RUNNER_WIDTH - 6 &&
        state.bootGameObstacleX + BOOT_OBSTACLE_WIDTH > BOOT_RUNNER_LEFT + 8;

    if (overlapsRunner && jumpHeight < 36) {
        handleBootCollision();
        return;
    }

    state.bootGameRaf = window.requestAnimationFrame(runBootGameFrame);
}

function bindContactForm() {
    if (!elements.contactForm || !elements.mailStatus) {
        return;
    }

    elements.contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(elements.contactForm);
        const subject = String(formData.get("subject") || "").trim();
        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const message = String(formData.get("message") || "").trim();

        const finalSubject = encodeURIComponent(`[Portfolio Desktop] ${subject}`);
        const body = encodeURIComponent(
            `Ad Soyad: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`
        );

        elements.mailStatus.textContent = "Mail uygulaman açılmaya çalışılıyor. Açılmazsa bana direkt adres üzerinden de yazabilirsin.";
        window.location.href = `mailto:ornek@mail.com?subject=${finalSubject}&body=${body}`;

        window.setTimeout(() => {
            elements.mailStatus.textContent = "Açılmazsa: ornek@mail.com adresine aynı mesajı manuel olarak da gönderebilirsin.";
        }, 700);
    });
}

function updateClock() {
    if (!elements.desktopClock) {
        return;
    }

    const now = new Date();
    const text = new Intl.DateTimeFormat("tr-TR", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    }).format(now);

    elements.desktopClock.textContent = text;
    elements.desktopClock.dateTime = now.toISOString();
}

function playBootSequence() {
    if (!elements.bootScreen) {
        return;
    }

    stopBootGame();
    window.clearTimeout(state.bootTimeout);
    window.clearTimeout(state.bootGameReadyTimeout);
    window.clearTimeout(state.bootGameRestartTimeout);
    elements.bootScreen.hidden = false;
    elements.bootScreen.setAttribute("aria-hidden", "false");
    elements.bootScreen.classList.add("is-visible");
    elements.bootScreen.classList.remove("is-ready");
    elements.body.classList.add("is-booting");
    elements.body.classList.remove("is-desktop-ready");
    updateBootCopy(
        "Başlangıç ekranı hazırlanıyor",
        "Portföy masaüstü hazırlanıyor. Sistem açılırken küçük dino oyununu da deneyebilirsin."
    );
    resetBootGame();

    state.bootGameReadyTimeout = window.setTimeout(() => {
        if (!elements.bootScreen || !elements.bootScreen.classList.contains("is-visible")) {
            return;
        }

        elements.bootScreen.classList.add("is-ready");
        updateBootCopy(
            "Sistem hazır. Minik oyunu deneyebilir ya da doğrudan masaüstüne geçebilirsin.",
            isMobileLayout()
                ? "Ekrana dokun: zıpla. İstersen alttan doğrudan masaüstüne geçebilirsin."
                : "Boşluk, yukarı ok ya da dokun: zıpla. İstersen doğrudan masaüstüne de geçebilirsin."
        );
        startBootGame();
    }, BOOT_LOADING_DURATION);
}

function hideBootScreen() {
    if (!elements.bootScreen) {
        return;
    }

    stopBootGame();
    window.clearTimeout(state.bootTimeout);
    window.clearTimeout(state.bootGameReadyTimeout);
    window.clearTimeout(state.bootGameRestartTimeout);
    elements.bootScreen.classList.remove("is-visible");
    elements.bootScreen.classList.remove("is-ready");
    elements.bootScreen.setAttribute("aria-hidden", "true");
    elements.body.classList.remove("is-booting");

    window.setTimeout(() => {
        if (!elements.bootScreen.classList.contains("is-visible")) {
            elements.bootScreen.hidden = true;
            elements.body.classList.add("is-desktop-ready");
        }
    }, 220);
}

init();
