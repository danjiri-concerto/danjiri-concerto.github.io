// device-detection.js - デバイス判別とページ振り分け機能

// デバイス判別関数
function isMobileDevice() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ページ振り分け関数（現在は使用しない - ナビゲーションのみで判別）
function redirectToDeviceSpecificPage() {
    // ナビゲーションバー以外は出し分けしないため、何もしない
    return;
}

// ナビゲーションバー読み込み関数
function loadDeviceSpecificNavbar() {
    const isMobile = isMobileDevice();
    const headerFile = isMobile ? "/navbar-mobile.html" : "/navbar-desktop.html";

    fetch(headerFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
}

// ページ読み込み時に実行
document.addEventListener("DOMContentLoaded", function() {
    // ページ振り分けを実行
    redirectToDeviceSpecificPage();

    // ナビゲーションバーを読み込み
    loadDeviceSpecificNavbar();
});