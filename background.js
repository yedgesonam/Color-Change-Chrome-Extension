chrome.commands.onCommand.addListener((command) => {
    if (command === "change_color") {
        chrome.storage.sync.get("selectedColor", (data) => {
            if (data.selectedColor) {
                chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                    chrome.scripting.executeScript({
                        target: { tabId: tabs[0].id },
                        function: changeBackground,
                        args: [data.selectedColor]
                    });
                });
            }
        });
    }
});

function changeBackground(color) {
    document.body.style.backgroundColor = color;
}
