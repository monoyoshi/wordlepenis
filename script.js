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

const page = fetch(url)
    .then(cors => cors.json()) // bypass cors
    .then(data => {
        const s = JSON.parse(data.body); // actually get the data
        return s.solution.toLowerCase(); // lowercase just in case
    }) // get and parse solution

    .then(attempt => { // interpret solution
        penisCompare(attempt, 0) // compare "p"
        penisCompare(attempt, 1) // compare "e"
        penisCompare(attempt, 2) // compare "n"
        penisCompare(attempt, 3) // compare "i"
        penisCompare(attempt, 4) // compare "s"

        if (attempt === PENIS) document.getElementById("comment").innerHTML = "yes :)"; // a dragon can dream...
        else document.getElementById("comment").innerHTML = "no :("; // basically remove the failsafe text
    })
    .catch(e => {
        console.error(e);
    });