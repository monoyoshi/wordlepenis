const PENIS = "penis"; // penis is constant. forever. eternal. undying.

// IT'S DYNAMIC!!!!
const d = Temporal.Now.plainDateISO(); // date (temporal) object
const dateString = `${d.year.toString()}-${d.month.toString().padStart(2, "0")}-${d.day.toString().padStart(2, "0")}`; // parsing into formatted string
const url = `https://cors.io/?url=https://www.nytimes.com/svc/wordle/v2/${dateString}.json`; // parsing link

async function penisCompare(wordletoday, l) {
    const lattempt = wordletoday[l];
    const lpenis = PENIS[l];
    if (lattempt === lpenis) document.getElementById(lpenis).classList.add("green"); // green (letter in the right spot)
    else if (PENIS.includes(lattempt)) document.getElementById(lpenis).classList.add("yellow"); // yellow (letter in word but in the wrong spot)
    else document.getElementById(lpenis).classList.add("gray"); // gray (letter not in word)
}

let wordle = fetch(url)
    .then(cors => cors.json()) // bypass cors
    .then(data => {
        const s = JSON.parse(data.body); // actually get the data
        return s.solution.toLowerCase(); // lowercase for ease of access (just in case)
    }) // get and parse solution
    // interpret solution
    .then(attempt => {
        penisCompare(attempt, 0) // compare "p"
            .then(() => penisCompare(attempt, 1)) // compare "e"
            .then(() => penisCompare(attempt, 2)) // compare "n"
            .then(() => penisCompare(attempt, 3)) // compare "i"
            .then(() => penisCompare(attempt, 4)) // compare "s"
            .then(() => {
                if (attempt === PENIS) document.getElementById("comment").innerHTML = "yes :)"; // a dragon can dream...
                else document.getElementById("comment").innerHTML = "no :("; // basically remove the failsafe text
            })
    })
    .catch(e => {
        console.error(e);
    });