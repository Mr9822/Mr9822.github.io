// Language-specific content
const frenchContent = {
  title: "Programme d'Autodéfense pour Femmes",
  welcomeTitle: "Bienvenue au Programme d'Autodéfense pour Femmes",
  welcomeMessage: "*Dates à déterminer*",
  programDescription: "Notre programme offre des outils concrets pour développer la confiance, la conscience de l’environnement, et la capacité à réagir sous pression. À travers des exercices pratiques et des mises en situation réalistes, les participantes apprendront à reconnaître les signes de danger, à se positionner de manière sécuritaire et à utiliser des techniques simples mais efficaces adaptées à diverses situations. Notre priorité est d'enseigner des stratégies de protection personnelle accessibles à toutes, peu importe l’âge ou la condition physique.",
  enrollMessage: "Inscrivez-vous dès maintenant et commencez votre parcours vers plus de confiance et de sécurité !",
  disclaimerButton: "Avertissement",
  disclaimerMessage: "Ce programme ne garantit pas une protection absolue. Les participantes doivent rester conscientes de leur environnement et utiliser leur jugement dans les situations réelles. L’objectif est de renforcer la confiance et de fournir des outils utiles, mais la sécurité dépend de nombreux facteurs."
};

const englishContent = {
  title: "Women's Self-Defense Program",
  welcomeTitle: "Welcome to the Women's Self-Defense Program",
  welcomeMessage: "*Dates to be determined*",
  programDescription: "Our program offers practical tools to build confidence, situational awareness, and the ability to respond under pressure. Through hands-on training and realistic scenarios, participants will learn to recognize danger, position themselves safely, and use simple yet effective techniques for various situations. Our priority is to teach personal protection strategies that are accessible to everyone, regardless of age or fitness level.",
  enrollMessage: "Enroll now and begin your journey to greater confidence and safety!",
  disclaimerButton: "Disclaimer",
  disclaimerMessage: "This program does not guarantee absolute safety. Participants must remain aware of their surroundings and use their judgment in real-life situations. The goal is to build confidence and provide useful tools, but safety depends on many factors."
};

// Selecting elements from the HTML
const languageSelection = document.getElementById("language-selection");
const title = document.querySelector("header h1");
const welcomeTitle = document.getElementById("section-title-1");
const welcomeMessage = document.getElementById("section-content-1");
const programDescription = document.getElementById("section-content-1");
const enrollMessage = document.getElementById("section-content-2");
const disclaimerButton = document.getElementById("disclaimer-title");
const disclaimerMessage = document.getElementById("disclaimer-content");
const sectionTitle2 = document.getElementById("section-title-2");

// Event listener for language selection dropdown
languageSelection.addEventListener("change", function () {
  const selectedLanguage = languageSelection.value;

  if (selectedLanguage === "fr") {
    title.innerText = frenchContent.title;
    welcomeTitle.innerHTML = `${frenchContent.welcomeTitle}<br>${frenchContent.welcomeMessage}`;
    welcomeMessage.innerText = frenchContent.programDescription;
    enrollMessage.innerText = frenchContent.enrollMessage;
    disclaimerButton.innerText = frenchContent.disclaimerButton;
    disclaimerMessage.innerText = frenchContent.disclaimerMessage;
    sectionTitle2.innerText = "Inscrivez-vous maintenant !";
  } else {
    title.innerText = englishContent.title;
    welcomeTitle.innerHTML = `${englishContent.welcomeTitle}<br>${englishContent.welcomeMessage}`;
    welcomeMessage.innerText = englishContent.programDescription;
    enrollMessage.innerText = englishContent.enrollMessage;
    disclaimerButton.innerText = englishContent.disclaimerButton;
    disclaimerMessage.innerText = englishContent.disclaimerMessage;
    sectionTitle2.innerText = "Enroll Now!";
  }
});
