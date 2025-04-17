for (let i = 12; i < 30; i++) {
    document.getElementById("age").innerHTML += `<option value="${i}">${i}</option>`
}

let submit_btn = document.getElementById("submit"),
    result = document.getElementById("result"),
    questions = document.querySelectorAll("input[type='radio']"),
    finalScore,
    answered;

submit_btn.addEventListener("click", () => {
    finalScore = 0;
    answered = 0;

    for (ques of questions) {
        if (ques.checked) {
            answered++
            finalScore += parseInt(ques.getAttribute("data-value"));
        }
    }

    if (answered < questions.length / 4) {
        result.innerHTML = "<div class='grade'>Please answer all questions.</div>";
    } else if (finalScore <= 5) {
        result.innerHTML = "<div class='grade'>You're flourishing. Your mental health seems to be in good shape. Keep mantaining your <a href='main.html'>healthy habits.</a></div>";
    } else if (finalScore <= 10) {
        result.innerHTML = "<div class='grade'>You're coping. You might be experiencing mild mental health issues. Consider reaching out to a <a href='https://www.therapyroute.com/'>licensed therapist</a> if these feelings persist.</div>";
    } else if (finalScore <= 15) {
        result.innerHTML = "<div class='grade'>You're struggling somewhat. You are experiencing moderate mental health issues. It's advisable to consult a <a href='https://www.therapyroute.com/'>licensed therapist</a>.</div>";
    } else {
        result.innerHTML = "<div class='grade'>You are struggling. You are experiencing severe mental health issues. Please seek <a href='https://www.therapyroute.com/'>therapy</a> immediately.</div>";
    }
});