let persone = [
  {
    id: 0,
    name: "Sabine",
    text: "Sabine Wren was a human female force-wielding Mandalorian warrior and revolutionary leader during the Galactic Civil War against the Galactic Empire, and later a Jedi during the early years of the New Republic. Her artistry during the rebellion inspired the symbol of the Alliance to Restore the Republic, and her claim over the ancient Mandalorian weapon known as the Darksaber made her a primary symbol to Clan Wren.",
  },
  {
    id: 1,
    name: "Baylan",
    text: "Baylan Skoll was a human male born during the era of the Galactic Republic. As a Force-sensitive, Skoll was at some point brought into the Jedi Order, where he eventually rose to the rank of Jedi Knight. During his time in the Order, he learned of Peridea. He believed it to be old stories and fairy tales. During the New Republic Era, Skoll and his apprentice Shin Hati were allied with the forces of Morgan Elsbeth.",
  },
  {
    id: 2,
    name: "Hera",
    text: "Hera Syndulla was a Twi'lek female revolutionary leader who became a central figure in rebellion against the Galactic Empire and the formation of the Alliance to Restore the Republic. Born the daughter of General Cham Syndulla and Eleni Syndulla on Ryloth with a brother who died, she saw firsthand the devastation of the Clone Wars and the reign of the Empire on her homeworld, Syndulla became a pilot.",
  },
  {
    id: 3,
    name: "Ezra",
    text: "Ezra Bridger was human male Bokken Jedi, a fighter and a revolutionary leader in the early rebellion against the Galactic Empire. He was born on Empire Day in 19 BBY to Ephraim and Mira Bridger.Ezra met his Future Master Kanan Jarus and they became part of the Rebel Squad. Ezra faught many great villians that includes Darth Maul and Darth Vader. With his powers growing stronger, Bridger took on more leadership.",
  },
];

let dugme = document.getElementById("KarticeNext");
let nameP = document.getElementById("name");
let textP = document.getElementById("text");
let id;
let glumciKartice = document.getElementsByClassName("GlumciKartice");

dugme.addEventListener("click", next);

document.addEventListener("DOMContentLoaded", () => {
  id = 0;
  nameP.textContent = persone[id].name;
  textP.textContent = persone[id].text;

  const firstActorCard = document.getElementById(id.toString()); 
  firstActorCard.classList.add("highlited");
  firstActorCard.querySelector("h1").classList.add("highlitedH1");
});

function next() {
  const prethodnaKartica = document.querySelector(".highlited");
  if (prethodnaKartica) {
    prethodnaKartica.classList.remove("highlited");
    prethodnaKartica.querySelector("h1").classList.remove("highlitedH1");
  }
  id++;
  if (id >= persone.length) {
    id = 0;
  }
  nameP.textContent = persone[id].name;
  textP.textContent = persone[id].text;

  for (const glumac of glumciKartice) {
    if (id === parseInt(glumac.id)) {
      glumac.classList.add("highlited");
      glumac.querySelector("h1").classList.add("highlitedH1");
    }
  }
}
