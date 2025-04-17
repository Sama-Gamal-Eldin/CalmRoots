let textarea = document.querySelector("textarea"),
    save_btn = document.querySelector("button"),
    diary_text = document.getElementById("diary_text")

save_btn.addEventListener("click", () => {
    if (textarea.value) {
        diary_text.innerHTML += `
                <div>
                    <div><p>${textarea.value}</p></div>
                    <button class="newBtnClass" onclick="this.parentNode.remove()">Delete</button>
                </div>`;
    }
})