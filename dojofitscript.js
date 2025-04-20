const frenchContent = {
  title: "Dojo Fit",
  sectionTitle1: "Camp Dojo Fit de 4 semaines <br><em>Commence en mai!</em>",
  sectionContent1: "Prépare-toi à transpirer, à évoluer et à créer des liens avec ton équipe comme jamais auparavant. Notre camp Dojo Fit de 4 semaines est conçu pour développer l’athlétisme, la discipline et une vraie chimie d’équipe — juste à temps pour l’été.<br><br>Ce programme est rempli de séances d'entraînement stimulantes et amusantes axées sur la force, l’endurance, la mobilité et le mindset. Des exercices de grappling et des circuits au poids du corps à l’entraînement avec des poids et des jeux qui repoussent tes limites, c’est ici que les jeunes athlètes deviennent plus forts — ensemble.<br><br>Dirigée par des entraîneurs expérimentés, chaque séance est conçue pour développer la détermination, améliorer la forme physique et renforcer des valeurs fondamentales comme le respect, l’effort et le travail d’équipe. Que tu te prépares pour un sport ou que tu veuilles simplement te dépasser, ce camp est fait pour toi.",
  sectionTitle2: "Places limitées — Inscris-toi maintenant !",
  sectionContent2: "Fais de cet été ton plus fort à ce jour. Apprends. Transpire. Crée des liens. Répète.",
  disclaimerTitle: "Avertissement",
  disclaimerContent: "Ceci est un camp de conditionnement physique. Tous les participants doivent être prêts à un niveau d’activité modéré à élevé. Veuillez nous informer de toute condition médicale ou blessure avant de participer. Nos instructeurs sont engagés à assurer la sécurité et adapteront les exercices si nécessaire pour garantir un environnement positif et sécuritaire."
};

const englishContent = {
  title: "Dojo Fit",
  sectionTitle1: "4-Week Dojo Fit Camp <br><em>Starts this May!</em>",
  sectionContent1: "Get ready to sweat, grow, and bond with your teammates like never before. Our 4-week Dojo Fit camp is designed to build athleticism, discipline, and real team chemistry — just in time for summer.<br><br>This program is packed with challenging and fun training sessions focused on strength, endurance, mobility, and mindset. From grappling drills and bodyweight circuits to weight training and games that push your limits, this is where young athletes become stronger — together.<br><br>Led by experienced coaches, every session is built around developing grit, improving fitness, and reinforcing core values like respect, effort, and teamwork. Whether you're preparing for sport or just want to level up, this camp is for you.",
  sectionTitle2: "Spots Are Limited — Register Now!",
  sectionContent2: "Make this summer your strongest yet. Learn. Sweat. Bond. Repeat.",
  disclaimerTitle: "Disclaimer",
  disclaimerContent: "This is a physical conditioning camp. All participants should be prepared for moderate to high levels of activity. Please inform us of any medical conditions or injuries prior to participating. Our instructors are committed to safety and will adapt as needed to ensure a positive and secure environment."
};

// DOM targeting
const languageSelection = document.getElementById("language-selection");
const pageTitle = document.querySelector("header h1");
const sectionTitle1 = document.getElementById("section-title-1");
const sectionContent1 = document.getElementById("section-content-1");
const sectionTitle2 = document.getElementById("section-title-2");
const sectionContent2 = document.getElementById("section-content-2");
const disclaimerTitle = document.getElementById("disclaimer-title");
const disclaimerContent = document.getElementById("disclaimer-content").querySelector("p");

// Language change logic
languageSelection.addEventListener("change", function () {
  const selectedLang = languageSelection.value;
  const content = selectedLang === "fr" ? frenchContent : englishContent;

  pageTitle.innerText = content.title;
  sectionTitle1.innerHTML = content.sectionTitle1;
  sectionContent1.innerHTML = content.sectionContent1;
  sectionTitle2.innerText = content.sectionTitle2;
  sectionContent2.innerText = content.sectionContent2;
  disclaimerTitle.innerText = content.disclaimerTitle;
  disclaimerContent.innerText = content.disclaimerContent;
});
