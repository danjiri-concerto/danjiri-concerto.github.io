// mobile-dropdown.js - モバイル用ドロップダウンメニューの制御

function toggleMobileDropdown(event) {
    event.preventDefault();
    const menu = document.getElementById('mobile-game-menu');

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// メニュー以外をクリックしたらメニューを閉じる
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown-mobile');
    const menu = document.getElementById('mobile-game-menu');

    if (dropdown && menu && !dropdown.contains(event.target)) {
        menu.style.display = 'none';
    }
});