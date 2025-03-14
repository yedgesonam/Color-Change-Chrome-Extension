chrome.storage.sync.get("selectedColor", (data) => {
    if (data.selectedColor) {
        document.body.style.backgroundColor = data.selectedColor;
    }
});
