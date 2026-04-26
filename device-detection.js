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
            if (isMobile) {
                initMobileNav();
            } else {
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

function initMobileNav() {
    const btn = document.getElementById("hamburger-btn");
    const nav = document.getElementById("mobile-nav");
    if (!btn || !nav) return;

    btn.addEventListener("click", () => {
        const isOpen = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!isOpen));
        nav.setAttribute("aria-hidden", String(isOpen));
        btn.classList.toggle("is-open", !isOpen);
        nav.classList.toggle("is-open", !isOpen);
    });

    // リンククリックでメニューを閉じる
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            btn.setAttribute("aria-expanded", "false");
            nav.setAttribute("aria-hidden", "true");
            btn.classList.remove("is-open");
            nav.classList.remove("is-open");
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadDeviceSpecificNavbar();
});
