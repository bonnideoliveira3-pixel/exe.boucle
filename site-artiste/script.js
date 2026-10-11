// ==========================================================
// SCRIPT DU SITE
// 1. Les données (titres, concerts)
// 2. Afficher la liste des titres et des concerts
// 3. Dessiner la pochette
// 4. Jouer un extrait (son fabriqué par le navigateur)
// 5. Le formulaire de contact
// ==========================================================

// ---------- 1. LES DONNÉES : modifie ici pour changer le contenu ----------

const titres = [
  // face, nom, durée en secondes, notes jouées dans l'extrait (en Hz)
  { face: "A", nom: "Coefficient 112",   duree: 214, notes: [220, 277, 330, 415] },
  { face: "A", nom: "Les épis",          duree: 187, notes: [196, 247, 294, 370] },
  { face: "A", nom: "Sel sur les mains", duree: 241, notes: [174, 220, 262, 330] },
  { face: "A", nom: "Brise-lames",       duree: 199, notes: [247, 311, 370, 494] },
  { face: "B", nom: "Basse marée",       duree: 302, notes: [165, 196, 247, 330] },
  { face: "B", nom: "Phare de Nieuport", duree: 226, notes: [220, 262, 330, 392] },
  { face: "B", nom: "Ressac",            duree: 178, notes: [196, 233, 294, 349] },
  { face: "B", nom: "Retour du flot",    duree: 265, notes: [262, 330, 392, 523] }
];

const concerts = [
  // date (année-mois-jour), salle, ville, état : "billets", "derniers" ou "complet"
  { date: "2026-11-14", salle: "Le Hangar des Mareyeurs", ville: "Ostende",   etat: "complet" },
  { date: "2026-11-21", salle: "La Péniche Bleue",        ville: "Namur",     etat: "derniers" },
  { date: "2026-12-05", salle: "Salle des Brumes",        ville: "Bruxelles", etat: "billets" },
  { date: "2027-01-23", salle: "L'Entrepôt 9",            ville: "Lille",     etat: "billets" },
  { date: "2027-02-06", salle: "Club Marée Haute",        ville: "Liège",     etat: "billets" }
];

// ---------- 2. AFFICHER LES LISTES ----------

// Transforme 214 secondes en "3:34"
function enMinutes(secondes) {
  const min = Math.floor(secondes / 60);
  const sec = secondes % 60;
  return min + ":" + String(sec).padStart(2, "0");
}

// Pour chaque titre, on crée un bouton dans la bonne face (A ou B)
let numero = 0;
let total = 0;
for (const titre of titres) {
  numero++;
  total += titre.duree;

  const li = document.createElement("li");
  const bouton = document.createElement("button");
  bouton.className = "titre";
  bouton.type = "button";
  bouton.innerHTML =
    '<span class="num">' + String(numero).padStart(2, "0") + "</span>" +
    "<span>" + titre.nom + "</span>" +
    '<span class="duree">' + enMinutes(titre.duree) + "</span>";
  bouton.addEventListener("click", () => jouerExtrait(titre, bouton));

  li.appendChild(bouton);
  document.querySelector('.titres[data-face="' + titre.face + '"]').appendChild(li);
}
document.getElementById("duree-totale").textContent = Math.round(total / 60) + " min";

// Les concerts
const textesEtat = { billets: "Billets", derniers: "Dernières places", complet: "Complet" };
const formatDate = new Intl.DateTimeFormat("fr-BE", { day: "2-digit", month: "short", year: "numeric" });

for (const c of concerts) {
  const li = document.createElement("li");
  li.className = "date";
  li.innerHTML =
    '<time datetime="' + c.date + '">' + formatDate.format(new Date(c.date + "T20:00")) + "</time>" +
    '<div class="lieu"><strong>' + c.ville + "</strong><span>" + c.salle + "</span></div>" +
    '<span class="etat ' + c.etat + '">' + textesEtat[c.etat] + "</span>";
  document.getElementById("liste-concerts").appendChild(li);
}

// ---------- 3. DESSINER LA POCHETTE (des lignes de vagues) ----------

const canvas = document.getElementById("pochette");
const ctx = canvas.getContext("2d");
let decalage = 0;   // fait bouger les vagues pendant la lecture

function couleur(nom) {
  return getComputedStyle(document.documentElement).getPropertyValue(nom).trim();
}

function dessinerPochette() {
  const L = canvas.width, H = canvas.height;
  ctx.fillStyle = couleur("--accent");
  ctx.fillRect(0, 0, L, H);

  // 21 lignes de vagues, de plus en plus calmes vers le bas
  ctx.strokeStyle = couleur("--fond");
  ctx.lineWidth = 3;
  for (let i = 0; i < 21; i++) {
    const y = 60 + i * 19;
    const hauteur = 26 * (1 - i / 25);
    ctx.beginPath();
    for (let x = 0; x <= L; x += 6) {
      const vague = Math.sin(x / 47 + i * 0.5 + decalage) * hauteur * Math.sin((x / L) * Math.PI);
      if (x === 0) ctx.moveTo(x, y + vague); else ctx.lineTo(x, y + vague);
    }
    ctx.stroke();
  }

  // Le texte de la pochette
  ctx.fillStyle = couleur("--fond");
  ctx.font = "800 64px 'Big Shoulders Display', 'Arial Narrow', sans-serif";
  ctx.fillText("BASSE MARÉE", 32, H - 40);
}

document.fonts.ready.then(dessinerPochette);
dessinerPochette();
// Redessine si le thème clair/sombre change
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", dessinerPochette);
new MutationObserver(dessinerPochette).observe(document.documentElement, { attributes: true });

// ---------- 4. JOUER UN EXTRAIT ----------
// Il n'y a pas de vrai fichier audio : le navigateur fabrique le son (Web Audio).
// Pour un vrai site, on mettrait plutôt : new Audio("musique/titre.mp3").play()

let audio = null;          // le « studio » audio du navigateur
let lectureEnCours = null; // pour arrêter l'extrait précédent

function jouerExtrait(titre, bouton) {
  // Si on reclique sur le titre en cours : on arrête
  const memeTitre = lectureEnCours && lectureEnCours.bouton === bouton;
  arreter();
  if (memeTitre) return;

  if (!audio) audio = new AudioContext();
  const debut = audio.currentTime;
  const volume = audio.createGain();
  volume.connect(audio.destination);
  volume.gain.setValueAtTime(0.0001, debut);
  volume.gain.exponentialRampToValueAtTime(0.25, debut + 0.5);
  volume.gain.setValueAtTime(0.25, debut + 7);
  volume.gain.exponentialRampToValueAtTime(0.0001, debut + 8);

  // Un arpège : les 4 notes jouées en boucle, 4 notes par seconde
  for (let i = 0; i < 32; i++) {
    const note = audio.createOscillator();
    const enveloppe = audio.createGain();
    note.type = "triangle";
    note.frequency.value = titre.notes[i % 4] * (i % 8 < 4 ? 1 : 2);
    const t = debut + i * 0.25;
    enveloppe.gain.setValueAtTime(0.0001, t);
    enveloppe.gain.exponentialRampToValueAtTime(0.5, t + 0.02);
    enveloppe.gain.exponentialRampToValueAtTime(0.0001, t + 0.24);
    note.connect(enveloppe).connect(volume);
    note.start(t);
    note.stop(t + 0.25);
  }

  // Une note grave tenue en dessous
  const basse = audio.createOscillator();
  basse.type = "sine";
  basse.frequency.value = titre.notes[0] / 2;
  basse.connect(volume);
  basse.start(debut);
  basse.stop(debut + 8);

  bouton.classList.add("en-cours");
  const fin = setTimeout(arreter, 8000);
  lectureEnCours = { bouton, volume, fin, animation: requestAnimationFrame(animer) };
}

function animer() {
  decalage += 0.04;
  dessinerPochette();
  if (lectureEnCours) lectureEnCours.animation = requestAnimationFrame(animer);
}

function arreter() {
  if (!lectureEnCours) return;
  lectureEnCours.volume.disconnect();
  clearTimeout(lectureEnCours.fin);
  cancelAnimationFrame(lectureEnCours.animation);
  lectureEnCours.bouton.classList.remove("en-cours");
  lectureEnCours = null;
}

// ---------- 5. FORMULAIRE DE CONTACT ----------
// Ici le message n'est envoyé nulle part : il faudrait un service
// (Formspree, Netlify Forms…) pour le recevoir vraiment par e-mail.

document.getElementById("formulaire").addEventListener("submit", (evenement) => {
  evenement.preventDefault(); // empêche la page de se recharger
  const nom = document.getElementById("nom").value;
  const confirmation = document.getElementById("confirmation");
  confirmation.textContent = "Merci " + nom + " ! (Site d'exemple : le message n'a pas été envoyé.)";
  confirmation.hidden = false;
  evenement.target.reset();
});
