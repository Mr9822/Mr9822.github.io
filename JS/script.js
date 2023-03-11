// Add some interactivity with JavaScript
const frenchContent = {
  title: "Cours d'autodéfense pour femmes",
  welcomeMessage: "Bienvenue au cours d'autodéfense pour femmes au Restigouche Dojo!",
  programDescription: "Ce cours est conçu pour donner aux femmes les compétences et les connaissances nécessaires pour se défendre et s'éloigner de situations potentiellement dangereuses. Nos instructeurs expérimentés vous guideront à travers 4 semaines d'enseignement, une fois par semaine pendant 60 minutes chacun. À la fin du cours, vous aurez la confiance et les compétences nécessaires pour vous protéger et rester en sécurité dans une variété de scénarios.",
  enrollMessage: "Inscrivez-vous maintenant et faites le premier pas pour vous sentir en confiance et en sécurité!",
  enrollButton: "Inscription",
  disclaimerButton: "Avertissement",
  disclaimerMessage: "Ce cours ne garantit pas la sécurité. Les participants doivent rester vigilants, éviter les situations dangereuses et utiliser les techniques d'auto-défense en dernier recours."
};

const englishContent = {
  title: "Women's Self Defense workshop",
  welcomeMessage: "Welcome to the Women's Self Defense workshop at Restigouche Dojo!",
  programDescription: "Our workshop focuses on creating a safe space for women by equipping them with the tools they need to defend themselves in a way that prioritizes their safety and well-being. Whether you're a seasoned athlete or a beginner, our experienced instructors will work with you to develop the skills you need to feel empowered and confident. We understand the importance of feeling secure in your daily life, which is why we are committed to providing a supportive and inclusive environment for all participants. Our program is not about promoting aggression or violence, but rather about instilling a sense of confidence and control.",
  enrollMessage: "Enroll now and take the first step towards feeling confident and secure!",
  enrollButton: "Enroll",
  disclaimerButton: "Disclaimer",
  disclaimerMessage: "This workshop is not a guarantee of safety. Participants should stay vigilant, avoid dangerous situations, and use self-defense techniques as a last resort."
};

const languageSelection = document.getElementById("language-selection");
const title = document.getElementById("title");
const welcomeMessage = document.getElementById("welcome-message");
const programDescription = document.getElementById("program-description");
const enrollMessage = document.getElementById("enroll-message");
const enrollButton = document.getElementById("enroll-btn");
const disclaimerButton = document.getElementById("disclaimer-btn");
const disclaimerMessage = document.getElementById("disclaimer-message");

languageSelection.addEventListener("change", function () {
  const selectedLanguage = languageSelection.value;

  if (selectedLanguage === "fr") {
    title.innerText = frenchContent.title;
    welcomeMessage.innerText = frenchContent.welcomeMessage;
    programDescription.innerText = frenchContent.programDescription;
    enrollMessage.innerText = frenchContent.enrollMessage;
    enrollButton.innerText = frenchContent.enrollButton;
    disclaimerButton.innerText = frenchContent.disclaimerButton;
    disclaimerMessage.innerText = frenchContent.disclaimerMessage;
  } else {
    title.innerText = englishContent.title;
    welcomeMessage.innerText = englishContent.welcomeMessage;
    programDescription.innerText = englishContent.programDescription;
    enrollMessage.innerText = englishContent.enrollMessage;
    enrollButton.innerText = englishContent.enrollButton;
    disclaimerButton.innerText = englishContent.disclaimerButton;
    disclaimerMessage.innerText = englishContent.disclaimerMessage;
  }
});

disclaimerButton.addEventListener("click", function () {
  if (disclaimerMessage.style.display === "none") {
    disclaimerMessage.style.display = "block";
  } else {
    disclaimerMessage.style.display = "none";
  }
});

