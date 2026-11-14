const PENIS = "penis"; // penis is constant. forever. eternal. undying.

// IT'S DYNAMIC!!!!
const d = Temporal.Now.plainDateISO(); // date (temporal) object
const dateString = `${d.year.toString()}-${d.month.toString().padStart(2, "0")}-${d.day.toString().padStart(2, "0")}`; // parsing into formatted string
const url = `https://cors.io/?url=https://www.nytimes.com/svc/wordle/v2/${dateString}.json`; // parsing link

let wordle = fetch(url)
    .then(cors => cors.json()) // bypass cors
    .then(data => {
        const s = JSON.parse(data.body);
        return s.solution;
    }) // get and parse solution
    // interpret solution
    .then(attempt => {
        for (let i = 0; i < 5; i++) {
            const lattempt = attempt[i].toLowerCase();
            const lpenis = PENIS[i];
            if (lattempt === lpenis) document.getElementById(lpenis).classList.add("green"); // green (letter in the right spot)
            else if (PENIS.includes(lattempt)) document.getElementById(lpenis).classList.add("yellow"); // yellow (letter in word but in the wrong spot)
            else document.getElementById(lpenis).classList.add("gray"); // gray (letter not in word);
        };

        if (attempt === PENIS) document.getElementById("comment").innerHTML = "yes :)"; // a dragon can dream...
                            
    })
    .catch(e => {
        console.error(e);
        document.getElementById("comment").innerHTML += ` (probably) <span style="position: relative; top: -8px; font-size: 14px;">please let me know <a href="https://github.com/monoyoshi/wordlepenis/issues" target="_blank" rel="noopener noreferrer" title="monoyoshi/wordlepenis issues on github">here</a>!</span>`;
    });