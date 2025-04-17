let quotes = [
    {
        name: "People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you’re lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.",
        extension: " - Carrie Ann Moss"
    },
    {
        name: "We cannot solve problems with the kind of thinking we employed when we came up with them.",
        extension: " - Albert Einstein"
    },
    {
        name: "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
        extension: " - Mark Twain"
    },
    {
        name: "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.",
        extension: " - Eleanor Roosevelt"
    },
    {
        name: "When you change your thoughts, remember to also change your world",
        extension: " - Norman Vincent Peale"
    },
    {
        name: "It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.",
        extension: " - Walter Anderson"
    },
    {
        name: "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.",
        extension: " - Diane McLaren"
    },
    {
        name: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        extension: " - Winston Churchill"
    },
    {
        name: "It is better to fail in originality than to succeed in imitation.",
        extension: " - Herman Melville"
    },
    {
        name: "The road to success and the road to failure are almost exactly the same.",
        extension: " - Colin R. Davis"
    },
    {
        name: "Success usually comes to those who are too busy to be looking for it.",
        extension: " - Henry David Thoreau"
    },
    {
        name: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
        extension: " - Dale Carnegie"
    },
    {
        name: "Nothing in the world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan 'Press On' has solved and always will solve the problems of the human race.",
        extension: " - Calvin Coolidge"
    },
    {
        name: "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.",
        extension: " - Mister Rogers"
    }
];

function get_random(list) { return list[Math.floor((Math.random() * list.length))]; }

function random_quote() {
    let random = get_random(quotes)
    document.querySelector(".quote_div").innerHTML = ` <i>${random.name}</i><span>${random.extension}</span>`;
}


random_quote();
setInterval(random_quote, 86400000);
let healthy_habits = [
    "Regular Health Check-ups: Visit your healthcare provider for routine check-ups and screenings.",
    "Stretching: Incorporate stretching exercises to improve flexibility and reduce muscle tension.",
    "Avoid Smoking and Limit Alcohol: Refrain from smoking and consume alcohol in moderation.",
    "Mindfulness Meditation: Practice mindfulness or meditation to reduce stress and enhance focus.",
    "Gratitude Journaling: Write down things you are grateful for each day.",
    "Positive Affirmations: Use positive self-talk and affirmations to boost self-esteem.",
    "Social Connections: Spend time with family and friends, and engage in meaningful conversations.",
    "Limit Screen Time: Reduce time spent on electronic devices, especially before bedtime.",
    "Learning and Hobbies: Engage in activities that stimulate your mind, such as reading, puzzles, or learning a new skill.",
    "Time Management: Plan and prioritize tasks to manage your time effectively and reduce stress.",
    "Express Emotions: Talk about your feelings with someone you trust or write them down.",
    "Set Boundaries: Establish healthy boundaries to protect your emotional well-being.",
    "Practice Forgiveness: Let go of grudges and practice forgiveness to reduce negative emotions.",
    "Seek Help When Needed: Reach out for professional help if you are struggling with mental health issues.",
    "Engage in Creative Activities: Participate in creative activities like painting, drawing, or music to express yourself.",
    "Routine: Establish a daily routine to create structure and consistency.",
    "Nature Time: Spend time outdoors in nature to relax and rejuvenate.",
    "Declutter: Keep your living and working spaces organized and clutter-free.",
    "Acts of Kindness: Perform random acts of kindness to boost your mood and help others.",
    "Sustainable Living: Make environmentally conscious choices, such as recycling and reducing waste.",
    "Relaxation Techniques: Practice relaxation techniques such as deep breathing, progressive muscle relaxation, or aromatherapy.",
    "Pamper Yourself: Treat yourself to something special, like a warm bath, a massage, or your favorite hobby.",
    "Personal Growth: Set personal goals and work towards self-improvement.",
    "Digital Detox: Take regular breaks from digital devices to recharge."
];
function random_healthy_habits() {
    let checkboxId = 0;
    document.querySelector(".health-div").innerHTML = "";
    let random_habits = [
        "Regular Exercise: Engage in physical activity for at least 30 minutes a day, such as walking, running, cycling, or yoga.",
        "Balanced Diet: Eat a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats.",
        "Hydration: Drink at least 8 glasses of water a day.",
        "Adequate Sleep: Aim for 7-9 hours of quality sleep each night.",
        get_random(healthy_habits),
        get_random(healthy_habits),
        get_random(healthy_habits),
        get_random(healthy_habits),
        get_random(healthy_habits),
        get_random(healthy_habits)
    ]
    for (habit of random_habits) {
        checkboxId++;
        document.querySelector(".health-div").innerHTML += `<label class="container1">${habit}<input type="checkbox" id="${checkboxId}"><span class="checkmark1"></span></label>`;
    }

}
document.querySelector(".health-div").addEventListener("click", (e) => {
    if (checkBoxes()) {
        alert("Great Job! Keep up these healthy habits in order for your mental health to flourish.");
    }

})
random_healthy_habits();
setInterval(random_healthy_habits, 86400000);
function checkBoxes() {
    let checkboxes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    for (c of checkboxes) {
        if (document.getElementById(c).checked == false) {
            return false;
        }
    }
    return true;
}



let joy = document.getElementById("joy"),
    sad = document.getElementById("sad"),
    anxious = document.getElementById("anxious"),
    fear = document.getElementById("fear"),
    calm = document.getElementById("calm"),
    disgust = document.getElementById("disgust"),
    anger = document.getElementById("anger"),
    excited = document.getElementById("excited"),
    gradient = "",
    jar = document.getElementById("jar")


joy.addEventListener("click", () => {
    gradient += ", #fcd935";
    if (gradient == ", #fcd935") {
        jar.style.backgroundColor = "#fcd935";
    }
    jar.style.backgroundImage = `linear-gradient(to top${gradient})`;
})


sad.addEventListener("click", () => {
    gradient += ", #90c9e7";
    if (gradient == ", #90c9e7") {
        jar.style.backgroundColor = "#90c9e7";
    }
    jar.style.backgroundImage = `linear-gradient(to top${gradient})`;
})


anxious.addEventListener("click", () => {
    gradient += ", #f08947";
    if (gradient == ", #f08947") {
        jar.style.backgroundColor = "#f08947";
    }
    jar.style.backgroundImage = `linear-gradient(to top${gradient})`;
})


fear.addEventListener("click", () => {
    gradient += ", #a169a8";
    if (gradient == ", #a169a8") {
        jar.style.backgroundColor = "#a169a8";
    }
    jar.style.backgroundImage = `linear-gradient(to top${gradient})`;
})


calm.addEventListener("click", () => {
    gradient += ", #494496";
    if (gradient == ", #494496") {
        jar.style.backgroundColor = "#494496";
    }
    jar.style.backgroundImage = `linear-gradient(to top${gradient})`;
})


disgust.addEventListener("click", () => {
    gradient += ", #a8d08a";
    if (gradient == ", #a8d08a") {
        jar.style.backgroundColor = "#a8d08a";
    }
    jar.style.backgroundImage = `linear-gradient(to top${gradient})`;
})


anger.addEventListener("click", () => {
    gradient += ", #e5232e";
    if (gradient == ", #e5232e") {
        jar.style.backgroundColor = "#e5232e";
    }
    jar.style.backgroundImage = `linear-gradient(to top${gradient})`;
})


excited.addEventListener("click", () => {
    gradient += ", #68c3be";
    if (gradient == ", #68c3be") {
        jar.style.backgroundColor = "#68c3be";
    }
    jar.style.backgroundImage = `linear-gradient(to top${gradient})`;
})
