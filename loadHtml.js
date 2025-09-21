function loadHtml(sectionId, filePath) {
    // 指定したHTMLファイルを指定したIDの要素に挿入
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(sectionId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}
