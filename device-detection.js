// device-detection.js

function isMobileDevice() {
    return window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// グローバル関数: navbar-mobile.html の onclick="toggleHamburger()" から直接呼ばれる
function toggleHamburger() {
    var btn = document.getElementById("hamburger-btn");
    var nav = document.getElementById("mobile-nav");
    if (!btn || !nav) return;
    var isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));
    btn.classList.toggle("is-open", !isOpen);
    nav.classList.toggle("is-open", !isOpen);
}

function closeMobileNav() {
    var btn = document.getElementById("hamburger-btn");
    var nav = document.getElementById("mobile-nav");
    if (!btn || !nav) return;
    btn.setAttribute("aria-expanded", "false");
    btn.classList.remove("is-open");
    nav.classList.remove("is-open");
}

function isEnglishPage() {
    return document.documentElement.lang.indexOf("en") === 0;
}

// <link rel="alternate" hreflang="..."> があれば、言語切替リンクを対応ページに向ける
function updateLangSwitch() {
    var targetLang = isEnglishPage() ? "ja" : "en";
    var alt = document.querySelector('link[rel="alternate"][hreflang="' + targetLang + '"]');
    if (!alt) return;
    document.querySelectorAll(".lang-switch").forEach(function(link) {
        link.setAttribute("href", alt.getAttribute("href"));
    });
}

function loadDeviceSpecificNavbar() {
    var isMobile = isMobileDevice();
    var suffix = isEnglishPage() ? "-en" : "";
    var headerFile = isMobile ? "/navbar-mobile" + suffix + ".html" : "/navbar-desktop" + suffix + ".html";

    fetch(headerFile)
        .then(function(response) { return response.text(); })
        .then(function(data) {
            document.getElementById("navbar-placeholder").innerHTML = data;
            updateLangSwitch();
            if (isMobile) {
                // リンククリックでメニューを閉じる
                var nav = document.getElementById("mobile-nav");
                if (nav) {
                    nav.querySelectorAll("a").forEach(function(link) {
                        link.addEventListener("click", closeMobileNav);
                    });
                }
            } else {
                initDesktopDropdown();
            }
        })
        .catch(function(error) { console.error("Error loading navbar:", error); });
}

function initDesktopDropdown() {
    document.querySelectorAll('.dropdown').forEach(function(dropdown) {
        var menu = dropdown.querySelector('.dropdown-menu');
        if (!menu) return;
        var timer;
        dropdown.addEventListener('mouseenter', function() {
            clearTimeout(timer);
            menu.style.display = 'block';
        });
        dropdown.addEventListener('mouseleave', function() {
            timer = setTimeout(function() { menu.style.display = 'none'; }, 120);
        });
        menu.addEventListener('mouseenter', function() { clearTimeout(timer); });
        menu.addEventListener('mouseleave', function() {
            timer = setTimeout(function() { menu.style.display = 'none'; }, 120);
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    loadDeviceSpecificNavbar();
});
