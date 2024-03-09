// Language-specific content
const frenchContent = {
  title: "Atelier d'Autodéfense pour Femmes",
  welcomeMessage: "Bienvenue à l'Atelier d'Autodéfense pour Femmes au Restigouche Dojo !",
  programDescription: "Notre atelier vise à créer un espace sûr pour les femmes en leur fournissant les outils dont elles ont besoin pour se défendre de manière à prioriser leur sécurité et leur bien-être. Que vous soyez une athlète chevronnée ou une débutante, nos instructeurs expérimentés travailleront avec vous pour développer les compétences dont vous avez besoin pour vous sentir autonome et confiante. Nous comprenons l'importance de se sentir en sécurité dans sa vie quotidienne, c'est pourquoi nous nous engageons à offrir un environnement de soutien et inclusif à tous les participants. Notre programme ne vise pas à promouvoir l'agression ou la violence, mais plutôt à inculquer un sentiment de confiance et de contrôle.",
  enrollMessage: "Inscrivez-vous maintenant et faites le premier pas pour vous sentir en confiance et en sécurité !",
  disclaimerButton: "Avertissement",
  disclaimerMessage: "Cet atelier ne garantit pas la sécurité. Les participants doivent rester vigilants, éviter les situations dangereuses et utiliser les techniques d'auto-défense en dernier recours."
};

const englishContent = {
  title: "Women's Self Defense Workshop",
  welcomeMessage: "Welcome to the Women's Self Defense Workshop at Restigouche Dojo!",
  programDescription: "Our workshop focuses on creating a safe space for women by equipping them with the tools they need to defend themselves in a way that prioritizes their safety and well-being. Whether you're a seasoned athlete or a beginner, our experienced instructors will work with you to develop the skills you need to feel empowered and confident. We understand the importance of feeling secure in your daily life, which is why we are committed to providing a supportive and inclusive environment for all participants. Our program is not about promoting aggression or violence, but rather about instilling a sense of confidence and control.",
  enrollMessage: "Enroll now and take the first step towards feeling confident and secure!",
  disclaimerButton: "Disclaimer",
  disclaimerMessage: "This workshop is not a guarantee of safety. Participants should stay vigilant, avoid dangerous situations, and use self-defense techniques as a last resort."
};

// Selecting elements from the HTML
const languageSelection = document.getElementById("language-selection");
const title = document.querySelector("header h1");
const welcomeMessage = document.getElementById("section-content-1");
const programDescription = document.getElementById("section-content-1");
const enrollMessage = document.getElementById("section-content-2");
const disclaimerButton = document.getElementById("disclaimer-title");
const disclaimerMessage = document.getElementById("disclaimer-content");

// Event listener for language selection dropdown
languageSelection.addEventListener("change", function () {
  const selectedLanguage = languageSelection.value;

  if (selectedLanguage === "fr") {
    title.innerText = frenchContent.title;
    welcomeMessage.innerText = frenchContent.welcomeMessage;
    programDescription.innerText = frenchContent.programDescription;
    enrollMessage.innerText = frenchContent.enrollMessage;
    disclaimerButton.innerText = frenchContent.disclaimerButton;
    disclaimerMessage.innerText = frenchContent.disclaimerMessage;
  } else {
    title.innerText = englishContent.title;
    welcomeMessage.innerText = englishContent.welcomeMessage;
    programDescription.innerText = englishContent.programDescription;
    enrollMessage.innerText = englishContent.enrollMessage;
    disclaimerButton.innerText = englishContent.disclaimerButton;
    disclaimerMessage.innerText = englishContent.disclaimerMessage;
  }
});

// Update section titles
const sectionTitle1 = document.getElementById("section-title-1");
const sectionTitle2 = document.getElementById("section-title-2");
const disclaimerTitle = document.getElementById("disclaimer-title");

// Set initial section titles
sectionTitle1.innerText = "Welcome to the Women's Self-Defense Workshop";
sectionTitle2.innerText = "Enroll Now!";
disclaimerTitle.innerText = "Disclaimer";

// Event listener for disclaimer button
disclaimerButton.addEventListener("click", function () {
  if (disclaimerMessage.style.display === "none" || disclaimerMessage.style.display === "") {
    disclaimerMessage.style.display = "block";
  } else {
    disclaimerMessage.style.display = "none";
  }
});

