// device-detection.js

function isMobileDevice() {
    return window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function loadDeviceSpecificNavbar() {
    const isMobile = isMobileDevice();
    const headerFile = isMobile ? "/navbar-mobile.html" : "/navbar-desktop.html";

    fetch(headerFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
            if (!isMobile) {
                initDesktopDropdown();
            }
        })
        .catch(error => console.error("Error loading navbar:", error));
}

function initDesktopDropdown() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const menu = dropdown.querySelector('.dropdown-menu');
        if (!menu) return;
        let timer;
        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(timer);
            menu.style.display = 'block';
        });
        dropdown.addEventListener('mouseleave', () => {
            timer = setTimeout(() => { menu.style.display = 'none'; }, 120);
        });
        menu.addEventListener('mouseenter', () => { clearTimeout(timer); });
        menu.addEventListener('mouseleave', () => {
            timer = setTimeout(() => { menu.style.display = 'none'; }, 120);
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadDeviceSpecificNavbar();

    // イベントデリゲーション: navbar の動的挿入後も確実に動作する
    document.addEventListener("click", (e) => {
        // ハンバーガーボタンのトグル
        if (e.target.closest("#hamburger-btn")) {
            const btn = document.getElementById("hamburger-btn");
            const nav = document.getElementById("mobile-nav");
            if (!btn || !nav) return;
            const isOpen = btn.getAttribute("aria-expanded") === "true";
            btn.setAttribute("aria-expanded", String(!isOpen));
            btn.classList.toggle("is-open", !isOpen);
            nav.classList.toggle("is-open", !isOpen);
            return;
        }
        // モバイルナビのリンクをクリックしたらメニューを閉じる
        if (e.target.closest("#mobile-nav a")) {
            const btn = document.getElementById("hamburger-btn");
            const nav = document.getElementById("mobile-nav");
            if (!btn || !nav) return;
            btn.setAttribute("aria-expanded", "false");
            btn.classList.remove("is-open");
            nav.classList.remove("is-open");
        }
    });
});
