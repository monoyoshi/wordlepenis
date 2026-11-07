
const d = Temporal.Now.plainDateISO();
const url = `https://cors.io/?url=https://www.nytimes.com/svc/wordle/v2/${d.year.toString()}-${d.month.toString().padStart(2, "0")}-${d.day.toString().padStart(2, "0")}.json`;
const PENIS = "penis"; // penis is forever

let wordle = fetch(url)
    .then(cors => cors.json())
    .then(answer => JSON.parse(answer.body).solution)
    .then(attempt => {
        for (let i = 0; i < 5; i++) {
            const letter = attempt[i];
            if (letter == PENIS[i]) {
                document.getElementById(PENIS[i]).classList.add("green");
            }
            else if (PENIS.includes(letter)) {
                document.getElementById(PENIS[i]).classList.add("yellow");
            }
            else {
                document.getElementById(PENIS[i]).classList.add("gray");
            };
        };
    })
    .catch(e => {
        console.error(e);
    });