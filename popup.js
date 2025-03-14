document.addEventListener("DOMContentLoaded", () => {
    const colorPicker = document.getElementById("colorPicker");
    const applyButton = document.getElementById("applyColor");

    // Load the saved color
    chrome.storage.sync.get("selectedColor", (data) => {
        if (data.selectedColor) {
            colorPicker.value = data.selectedColor;
        }
    });

    applyButton.addEventListener("click", () => {
        const color = colorPicker.value;
        chrome.storage.sync.set({ selectedColor: color });

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ["content.js"]
            });
        });
    });
});
