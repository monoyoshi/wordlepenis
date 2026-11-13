const PENIS = "penis"; // penis is constant. forever. eternal. undying. whatever

const d = Temporal.Now.plainDateISO(); // date (temporal) object
const dateString = `${d.year.toString()}-${d.month.toString().padStart(2, "0")}-${d.day.toString().padStart(2, "0")}`; // parsing into formatted string
const url = `https://cors.io/?url=https://www.nytimes.com/svc/wordle/v2/${dateString}.json`; // parsing link

// IT'S DYNAMIC!!!!
let wordle = fetch(url)
    .then(cors => cors.json()) // bypass cors
    .then(solution => JSON.parse(solution.body).solution) // get and parse solution
    // interpret solution
    .then(attempt => {
        for (let i = 0; i < 5; i++) {
            const letter = attempt[i];
            if (letter == PENIS[i]) { // green (letter in the right spot)
                document.getElementById(PENIS[i]).classList.add("green");
            }
            else if (PENIS.includes(letter)) { // yellow (letter in word but in the wrong spot)
                document.getElementById(PENIS[i]).classList.add("yellow");
            }
            else { // gray (letter not in word)
                document.getElementById(PENIS[i]).classList.add("gray");
            };
        };
    })
    .catch(e => {
        console.error(e);
    });