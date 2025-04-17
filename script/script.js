let review = document.getElementById("review"),
    flex = document.querySelector(".flexr"),
    alert = document.querySelector(".alert"),
    emotionCards = document.querySelectorAll(".emotionCards"),
    thanks = document.getElementById("thanks")

review.addEventListener("click", () => {
    alert.style.display = "block";
    if (thanks.style.display === "none") flex.style.display = "flex";
    // thanks.style.display = "none";
})

let close = document.getElementsByClassName("closebtn");
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

emotionCards.forEach((e) => {
    e.addEventListener("click", () => {
        flex.style.display = "none";
        thanks.style.display = "block";
    })
})