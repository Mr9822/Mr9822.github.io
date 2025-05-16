const frenchContent = {
  title: "Séances d'entraînement semi-privées Judo & BJJ – Hors Saisson",
  sectionTitle1: "Petit Groupe – Gros Progrès <br><em>Commence en mai!</em>",
  sectionContent1: "Maintenez votre enfant actif et en progression dans son parcours en arts martiaux avec nos <strong>séances semi-privées de Judo & Jiu-Jitsu Brésilien</strong> – conçues pour une attention personnalisée et une amélioration continue.<br><br>Limités à seulement <strong>8 étudiants par séance</strong>, ces cours en petits groupes permettent un encadrement individuel, un apprentissage plus approfondi et une connexion plus forte avec les partenaires d'entraînement.<br><br>Que votre enfant débute ou revienne pour consolider ce qu'il a appris, ces séances sont parfaites pour rester constant et motivé en dehors de la saison régulière. Nos entraîneurs expérimentés se concentrent sur des techniques réelles, la qualité du mouvement et favorisent un environnement respectueux, stimulant et amusant.",
  sectionTitle2: "Pourquoi Semi-Privé?",
  sectionContent2: "✅ Maximum de 8 enfants par séance<br>✅ Instruction personnalisée et développement plus rapide des compétences<br>✅ Continuer l'entraînement pendant que d'autres font une pause<br>✅ Renforcer la discipline, la coordination et la confiance en soi<br><br><strong>Ne manquez pas cette occasion de garder votre enfant engagé, d'apprendre et de grandir en dehors de la saison régulière.</strong>",
  disclaimerTitle: "Avertissement",
  disclaimerContent: "Ces séances sont physiquement actives et axées sur la technique. Veuillez nous informer de toute condition médicale ou blessure avant de participer. Nos instructeurs priorisent la sécurité et feront les adaptations nécessaires pour garantir que tous les participants bénéficient et profitent de leur expérience."
};

const englishContent = {
  title: "Semi-Private Judo & BJJ – Off-Season Training Sessions",
  sectionTitle1: "Small Group – Big Progress <br><em>Starts This May!</em>",
  sectionContent1: "Keep your child active and progressing in their martial arts journey with our <strong>Semi-Private Judo & Brazilian Jiu-Jitsu sessions</strong> – designed for personalized attention and steady improvement.<br><br>Limited to just <strong>8 students per session</strong>, these small group classes allow for more individual coaching, deeper learning, and a stronger connection with training partners.<br><br>Whether your child is just starting or returning to build on what they’ve learned, these sessions are perfect for staying consistent and motivated over the off-season. Our experienced coaches focus on real technique, movement quality, and fostering a respectful, challenging, and fun environment.",
  sectionTitle2: "Why Semi-Private?",
  sectionContent2: "✅ Max 8 kids per session<br>✅ Personalized instruction & faster skill development<br>✅ Continue training while others take a break<br>✅ Build discipline, coordination, and confidence<br><br><strong>Don't miss this opportunity to keep your child engaged, learning, and growing through the off-season.</strong>",
  disclaimerTitle: "Disclaimer",
  disclaimerContent: "These sessions are physically active and technique-focused. Please notify us of any medical conditions or injuries before participation. Our instructors prioritize safety and will make appropriate adaptations to ensure all participants benefit and enjoy their experience."
};

// Target HTML elements
const languageSelection = document.getElementById("language-selection");
const pageTitle = document.querySelector("header h1");
const sectionTitle1 = document.getElementById("section-title-1");
const sectionContent1 = document.getElementById("section-content-1");
const sectionTitle2 = document.getElementById("section-title-2");
const sectionContent2 = document.getElementById("section-content-2");
const disclaimerTitle = document.getElementById("disclaimer-title");
const disclaimerContent = document.getElementById("disclaimer-content").querySelector("p");

// Update content based on selected language
languageSelection.addEventListener("change", function () {
  const selectedLang = languageSelection.value;
  const content = selectedLang === "fr" ? frenchContent : englishContent;

  pageTitle.innerText = content.title;
  sectionTitle1.innerHTML = content.sectionTitle1;
  sectionContent1.innerHTML = content.sectionContent1;
  sectionTitle2.innerText = content.sectionTitle2;
  sectionContent2.innerHTML = content.sectionContent2;
  disclaimerTitle.innerText = content.disclaimerTitle;
  disclaimerContent.innerText = content.disclaimerContent;
});
