// Add some interactivity with JavaScript
const frenchContent = {
  title: "Atelier d'Autodéfense pour Femmes",
  welcomeMessage: "Bienvenue a l'Atelier d'Autodéfense pour Femmes au Restigouche Dojo!",
  programDescription: "Notre atelier vise à créer un espace sûr pour les femmes en leur fournissant les outils dont elles ont besoin pour se défendre de manière à prioriser leur sécurité et leur bien-être. Que vous soyez une athlète chevronnée ou une débutante, nos instructeurs expérimentés travailleront avec vous pour développer les compétences dont vous avez besoin pour vous sentir autonome et confiante. Nous comprenons l'importance de se sentir en sécurité dans sa vie quotidienne, c'est pourquoi nous nous engageons à offrir un environnement de soutien et inclusif à tous les participants. Notre programme ne vise pas à promouvoir l'agression ou la violence, mais plutôt à inculquer un sentiment de confiance et de contrôle.",
  enrollMessage: "Inscrivez-vous maintenant et faites le premier pas pour vous sentir en confiance et en sécurité!",
  enrollButton: "Inscription",
  disclaimerButton: "Avertissement",
  disclaimerMessage: "Cet atelier ne garantit pas la sécurité. Les participants doivent rester vigilants, éviter les situations dangereuses et utiliser les techniques d'auto-défense en dernier recours."
};

const englishContent = {
  title: "Women's Self Defense Workshop",
  welcomeMessage: "Welcome to the Women's Self Defense Workshop at Restigouche Dojo!",
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

