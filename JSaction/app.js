/*CODE FOR SUPER NAVBAR*//////////////////////////////////////////
// let navL = document.querySelectorAll(".navLink")
// let navLn=document.querySelectorAll(".navLink-n")
// let activePage = document.querySelector(".description")
// if (activePage.innerText == "index") {
//     navL[0].classList.add("activeNavLink")
//     navLn[0].classList.add("activeNavLink-n")
    
// }
// else if (activePage.innerText == "destination") {
//     navL[1].classList.add("activeNavLink")
//     navLn[1].classList.add("activeNavLink-n")
// }
// else if (activePage.innerText == "crew") {
//     navL[2].classList.add("activeNavLink")
//     navLn[2].classList.add("activeNavLink-n")
// }
// else if (activePage.innerText == "technology") {
//     navL[3].classList.add("activeNavLink")
//     navLn[3].classList.add("activeNavLink-n")
//     console.log("TTTTT")
// }


/*CODE FOR DESTINATION PAGE*/////////////////////////////////////
let planets=document.querySelector(".pc")
let planetNavs = document.querySelectorAll(".pl")
function moon() {
    console.log("MOON")
    planets.children[0].innerHTML = "\n          <img src=\"/assets/destination/image-moon.webp\" alt=\"\">\n        "
    planets.children[1].children[1].innerText = "MOON"
    planets.children[1].children[2].innerText = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
    planets.children[1].children[3].children[0].children[2].innerText = "384,400 km"
    planets.children[1].children[3].children[1].children[2].innerText="3 days"
}
function mars() {
    console.log("MARS")
    planets.children[0].innerHTML = "\n          <img src=\"/assets/destination/image-mars.webp\" alt=\"\">\n        "
    planets.children[1].children[1].innerText = "MARS"
    planets.children[1].children[2].innerText = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
    planets.children[1].children[3].children[0].children[2].innerText = "225 MIL. km"
    planets.children[1].children[3].children[1].children[2].innerText="9 months"
}
function europa() {
    console.log("EUROPA")
    planets.children[0].innerHTML = "\n          <img src=\"/assets/destination/image-europa.webp\" alt=\"\">\n        "
    planets.children[1].children[1].innerText = "EUROPA"
    planets.children[1].children[2].innerText = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
    planets.children[1].children[3].children[0].children[2].innerText = "628 MIL. km"
    planets.children[1].children[3].children[1].children[2].innerText="3 years"
}
function titan() {
    console.log("TITAN")
    planets.children[0].innerHTML = "\n          <img src=\"/assets/destination/image-titan.webp\" alt=\"\">\n        "
    planets.children[1].children[1].innerText = "TITAN"
    planets.children[1].children[2].innerText = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
    planets.children[1].children[3].children[0].children[2].innerText = "1.6 BIL. km"
    planets.children[1].children[3].children[1].children[2].innerText="7 years"
}
for (let i = 0; i < planetNavs.length; i++){
    planetNavs[i].addEventListener("click",
        (e) => {
            e.preventDefault()
             for (let j = 0; j < planetNavs.length; j++){
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
let crews=document.querySelectorAll(".pcc")
let crewNavs = document.querySelectorAll(".pll")

function commander(im=1,con=0,lin=0) {
    console.log(1)
     crews[con].children[im].innerHTML = "\n          <img src=\"/assets/crew/image-douglas-hurley.webp\" alt=\"\">\n        "
    crews[con].children[con].children[lin+0].innerText = "commander"
    crews[con].children[con].children[lin+1].innerText = "Douglas Hurley"
    crews[con].children[con].children[lin+2].innerText = "Douglas Gerald Hurley is an American engineer, former Marine Corps  pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
}

function specialist(im=1,con=0,lin=0) {
    console.log(2)
    crews[con].children[im].innerHTML = "\n          <img src=\"/assets/crew/image-mark-shuttleworth.webp\" alt=\"\">\n  "
    crews[con].children[con].children[lin+0].innerText = "Mission Specialist "
    crews[con].children[con].children[lin+1].innerText = "MARK SHUTTLEWORTH"
    crews[con].children[con].children[lin+2].innerText = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
}
function pilot(im=1,con=0,lin=0) {
    console.log(3)
    crews[con].children[im].innerHTML = "\n          <img src=\"/assets/crew/image-victor-glover.webp\" alt=\"\">\n  "
    crews[con].children[con].children[lin+0].innerText = "PILOT"
    crews[con].children[con].children[lin+1].innerText = "Victor Glover"
    crews[con].children[con].children[lin+2].innerText = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
}
function engineer(im=1,con=0,lin=0) {
    console.log(4)
    crews[con].children[im].innerHTML = "\n          <img src=\"/assets/crew/image-anousheh-ansari.webp\" alt=\"\">\n  "
    crews[con].children[con].children[lin+0].innerText = "Flight Engineer"
    crews[con].children[con].children[lin+1].innerText = "Anousheh Ansari"
    crews[con].children[con].children[lin+2].innerText = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
}
for (let i = 0; i < crewNavs.length; i++){
    crewNavs[i].addEventListener("click",
        (e) => {
            e.preventDefault()
             for (let j = 0; j < crewNavs.length; j++){
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
            else if (i==4)
                commander(0,1,1)
            else if (i==5)
                specialist(0,1,1)
            else if (i==6)
                pilot(0,1,1)
            else if (i==7)
                engineer(0,1,1) 
    }
    )
}
/*CODE FOR TECHNOLOGY PAGE*/////////////////////////////////////
let techs=document.querySelector(".pccc")
let techNavs = document.querySelectorAll(".plll")
let techst=document.querySelector(".pccct")

function LVt() {
    console.log(1)
    techst.children[2].children[1].innerText = "LAUNCH VEHICLE"
    techst.children[2].children[2].innerText="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    techst.children[0].innerHTML='<img src="/assets/technology/image-launch-vehicle-landscape.jpg"  alt="" />'
}

function SPt() {
    console.log(2)
    techst.children[2].children[1].innerText = "SPACEPORT"
    techst.children[2].children[2].innerText="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    techst.children[0].innerHTML='<img src="/assets/technology/image-spaceport-landscape.jpg"  alt="" />'
}
function SCt() {
    console.log(3)
    techst.children[2].children[1].innerText = "SPACE CAPSULE"
    techst.children[2].children[2].innerText="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    techst.children[0].innerHTML = '<img src="/assets/technology/image-space-capsule-landscape.jpg"  alt="" />'
}

function LV() {
    console.log(1)
    techs.children[1].children[1].innerText = "LAUNCH VEHICLE"
    techs.children[1].children[2].innerText="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    techs.children[2].innerHTML='<img src="/assets/technology/image-launch-vehicle-portrait.jpg"  alt="" />'
}

function SP() {
    console.log(2)
    techs.children[1].children[1].innerText = "SPACEPORT"
    techs.children[1].children[2].innerText="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    techs.children[2].innerHTML='<img src="/assets/technology/image-spaceport-portrait.jpg"  alt="" />'
}
function SC() {
    console.log(3)
    techs.children[1].children[1].innerText = "SPACE CAPSULE"
    techs.children[1].children[2].innerText="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    techs.children[2].innerHTML = '<img src="/assets/technology/image-space-capsule-portrait.jpg"  alt="" />'
}
for (let i = 0; i < techNavs.length; i++){
    techNavs[i].addEventListener("click",
        (e) => {
            e.preventDefault()
             for (let j = 0; j < techNavs.length; j++){
                techNavs[j].classList.remove("technologyNavItemActive")
            }
            techNavs[i].classList.add("technologyNavItemActive")
            if (i==0)
                LV()
            else if (i==1)
                SP()
            else if (i==2)
                SC() 
            else if (i==3)
                LVt()
            else if (i==4)
                SPt()
            else if (i==5)
                SCt() 
    }
    )
}
/*To implement Hamburger menu*/
let ham = document.querySelector(".hmb")
let hnav = document.querySelector(".hmnn")


ham.addEventListener("click", () => {
    if (ham.classList.contains("hmbA")) {
        ham.classList.remove("hmbA")
        hnav.classList.remove("hmnA")
        ham.innerHTML = "<img src=\"/assets/shared/icon-hamburger.svg\" alt=\"\" >"   
    }
    else {
        ham.innerHTML = "<img src=\"/assets/shared/icon-close.svg\" alt=\"\" >"
        ham.classList.add("hmbA")
        hnav.classList.add("hmnA")

    }
})



