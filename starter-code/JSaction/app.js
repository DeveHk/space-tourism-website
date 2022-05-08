/*CODE FOR SUPER NAVBAR*//////////////////////////////////////////
let navL = document.querySelectorAll(".navLink")
let activePage = document.querySelector(".description")
if (activePage.innerText == "index") {
    navL[0].classList.add("activeNavLink")
}
else if (activePage.innerText == "destination") {
    navL[1].classList.add("activeNavLink")
}
else if (activePage.innerText == "crew") {
    navL[2].classList.add("activeNavLink")
}
else if (activePage.innerText == "technology") {
    navL[3].classList.add("activeNavLink")
}


/*CODE FOR DESTINATION PAGE*/////////////////////////////////////
let planets=document.querySelector(".pc")
let planetNavs = document.querySelectorAll(".pl")
function moon() {
    console.log("MOON")
    planets.children[0].innerHTML = "\n          <img src=\"/starter-code/assets/destination/image-moon.webp\" alt=\"\">\n        "
    planets.children[1].children[1].innerText = "MOON"
    planets.children[1].children[2].innerText = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
    planets.children[1].children[3].children[0].children[2].innerText = "384,400 km"
    planets.children[1].children[3].children[1].children[2].innerText="3 days"
}
function mars() {
    console.log("MARS")
    planets.children[0].innerHTML = "\n          <img src=\"/starter-code/assets/destination/image-mars.webp\" alt=\"\">\n        "
    planets.children[1].children[1].innerText = "MARS"
    planets.children[1].children[2].innerText = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
    planets.children[1].children[3].children[0].children[2].innerText = "225 MIL. km"
    planets.children[1].children[3].children[1].children[2].innerText="9 months"
}
function europa() {
    console.log("EUROPA")
    planets.children[0].innerHTML = "\n          <img src=\"/starter-code/assets/destination/image-europa.webp\" alt=\"\">\n        "
    planets.children[1].children[1].innerText = "EUROPA"
    planets.children[1].children[2].innerText = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
    planets.children[1].children[3].children[0].children[2].innerText = "628 MIL. km"
    planets.children[1].children[3].children[1].children[2].innerText="3 years"
}
function titan() {
    console.log("TITAN")
    planets.children[0].innerHTML = "\n          <img src=\"/starter-code/assets/destination/image-titan.webp\" alt=\"\">\n        "
    planets.children[1].children[1].innerText = "TITAN"
    planets.children[1].children[2].innerText = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
    planets.children[1].children[3].children[0].children[2].innerText = "1.6 BIL. km"
    planets.children[1].children[3].children[1].children[2].innerText="7 years"
}
for (let i = 0; i < planetNavs.length; i++){
    planetNavs[i].addEventListener("click",
        (e) => {
            e.preventDefault()
             for (let j = 0; j < navL.length; j++){
                planetNavs[j].classList.remove("activeNavLink")
            }
            planetNavs[i].classList.add("activeNavLink")
            if (e.target.innerText == "Moon")
                moon()
            else if (e.target.innerText == "Mars")
                mars()
            else if (e.target.innerText == "Europa")
                europa()
            else if (e.target.innerText == "Titan")
                titan()   
    }
    )
}
/*CODE FOR CREW PAGE*/////////////////////////////////////
let crews=document.querySelector(".pcc")
let crewNavs = document.querySelectorAll(".pll")

function commander() {
    console.log(1)
     crews.children[1].innerHTML = "\n          <img src=\"/starter-code/assets/crew/image-douglas-hurley.webp\" alt=\"\">\n        "
    crews.children[0].children[0].innerText = "commander"
    crews.children[0].children[1].innerText = "Douglas Hurley"
    crews.children[0].children[2].innerText = "Douglas Gerald Hurley is an American engineer, former Marine Corps  pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
}

function specialist() {
    console.log(2)
    crews.children[1].innerHTML = "\n          <img src=\"/starter-code/assets/crew/image-mark-shuttleworth.webp\" alt=\"\">\n  "
    crews.children[0].children[0].innerText = "Mission Specialist "
    crews.children[0].children[1].innerText = "MARK SHUTTLEWORTH"
    crews.children[0].children[2].innerText = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
}
function pilot() {
    console.log(3)
    crews.children[1].innerHTML = "\n          <img src=\"/starter-code/assets/crew/image-victor-glover.webp\" alt=\"\">\n  "
    crews.children[0].children[0].innerText = "PILOT"
    crews.children[0].children[1].innerText = "Victor Glover"
    crews.children[0].children[2].innerText = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
}
function engineer() {
    console.log(4)
    crews.children[1].innerHTML = "\n          <img src=\"/starter-code/assets/crew/image-anousheh-ansari.webp\" alt=\"\">\n  "
    crews.children[0].children[0].innerText = "Flight Engineer"
    crews.children[0].children[1].innerText = "Anousheh Ansari"
    crews.children[0].children[2].innerText = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
}
for (let i = 0; i < crewNavs.length; i++){
    crewNavs[i].addEventListener("click",
        (e) => {
            e.preventDefault()
             for (let j = 0; j < navL.length; j++){
                crewNavs[j].classList.remove("crewNavItemActive")
            }
            crewNavs[i].classList.add("crewNavItemActive")
            if (i==0)
                commander()
            else if (i==1)
                specialist()
            else if (i==2)
                pilot()
            else if (i==3)
                engineer()   
    }
    )
}

