const emails = [
    "pippo1@gmail.com",
    "pippo2@gmail.com",
    "pippo3@gmail.com",
    "pippo4@gmail.com",
    "pippo5@gmail.com",
    "pippo6@gmail.com",
    "pippo7@gmail.com",
    "pippo8@gmail.com",
    "pippo9@gmail.com",
    "pippo10@gmail.com"
]

let yourEmail = prompt("Qual è la tua email?");
let isYourEmailPresent = 0;

for (i = 0; i < emails.length; i++) {
    if (yourEmail == emails[i]) {
        isYourEmailPresent = 1;
    }
}

if (isYourEmailPresent == 1) {
    console.log(`La tua mail: ${yourEmail} è presente nella lista. Sei invitato alla festa, buon divertimento!`)
} else {
    console.log(`La tua mail: ${yourEmail} non è presente nella lista. Mi dispiace, ma non sei invitato alla festa.` )
}



