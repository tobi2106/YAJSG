const pages = [
    {
        title: "第１課",
        content: `
            <h1>第１課</h1>
            
            <h2>食べますか</h2>
            
            <h3>会話1</h3>
            <p>食べますか。</p>
            <p>はい、食べます。</p>
            <p>どうぞ。</p>
            <p>どうも。</p>
            
            <h3>会話2</h3>
            <p>今日遊びますか。</p>
            <p>いいえ、遊びません。</p>
            <p>明日遊びますか。</p>
            <p>はい、明日遊びます。</p>
        `
    }
    // Add more pages here as needed
];

let currentPage = 0;

function renderPage(pageIndex) {
    const contentElement = document.getElementById("content");
    contentElement.innerHTML = pages[pageIndex].content;
}

function nextPage() {
    currentPage = (currentPage + 1) % pages.length;
    renderPage(currentPage);
}

function prevPage() {
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    renderPage(currentPage);
}

document.addEventListener("DOMContentLoaded", function() {
    renderPage(currentPage);
});
