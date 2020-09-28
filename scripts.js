let fortunes = [
    "That wasn't chicken.",
    "The road to riches is paved with homework.",
    "Actions speak louder than fortune cookies.",
    "Fortune not found? Abort, Retry, Ignore.",
    "You love Chinese food.",
    "Don't eat the paper.",
    "You will be hungry again in one hour.",
    "The fortune you seek is in another cookie.",
    "Meh....",
    "You have rice in your teeth."
]

function displayFortune() {
    let randomFortunes = Math.floor(Math.random() * 10);

    let yourFortune = fortunes[randomFortunes];

    document.getElementById("paper").innerHTML = yourFortune;
}