// Add some interactivity with JavaScript
const frenchContent = {
  title: "Prévention des chutes et atterrissage en toute sécurité",
  welcomeMessage: "Bienvenue à l'atelier de prévention des chutes et atterrissage en toute sécurité au Restigouche Dojo!",
  programDescription: "Notre programme de est conçu pour aider les personnes âgées à réduire leur risque de chute et améliorer leur équilibre et leur mobilité, tout en leur apprenant également à tomber correctement pour réduire le risque de blessure. Nos instructeurs expérimentés vous guideront à travers des sessions d'une heure, une fois par semaine, en fournissant des instructions claires et une communauté de soutien pour vous aider à atteindre vos objectifs.",
  enrollMessage: "Inscrivez-vous maintenant et faites le premier pas vers un mode de vie plus sûr et plus actif !",
  //enrollButton: "Inscription",
  disclaimerButton: "Avertissement",
  disclaimerMessage: "Veuillez noter que notre programme ne garantit pas la sécurité. Bien que nous enseignions des techniques appropriées pour réduire le risque de blessure, des accidents peuvent encore se produire. Les participants doivent rester vigilants et éviter les situations dangereuses, et consulter leur fournisseur de soins de santé avant de commencer tout nouveau programme d'exercice."
};

const englishContent = {
  title: "Fall prevention and safe landing workshop",
  welcomeMessage: "Welcome to the fall prevention and safe landing workshop at Restigouche Dojo!",
  programDescription: "Our program is designed to help elderly adults reduce their risk of falling and improve their balance and mobility, while also teaching them how to fall properly to reduce the risk of injury. Our experienced instructors will guide you through 1-hour sessions, once a week, providing clear instructions and a supportive community to help you achieve your goals.",
  enrollMessage: "Enroll now and take the first step towards a safer and more active lifestyle!",
  //enrollButton: "Enroll",
  disclaimerButton: "Disclaimer",
  disclaimerMessage: "Please note that our program is not a guarantee of safety. While we teach proper techniques to reduce the risk of injury, accidents can still occur. Participants should stay vigilant and avoid dangerous situations, and consult with their healthcare provider before starting any new exercise program."
};

const languageSelection = document.getElementById("language-selection");
const title = document.getElementById("title");
const welcomeMessage = document.getElementById("welcome-message");
const programDescription = document.getElementById("program-description");
const enrollMessage = document.getElementById("enroll-message");
//const enrollButton = document.getElementById("enroll-btn");
const disclaimerButton = document.getElementById("disclaimer-btn");
const disclaimerMessage = document.getElementById("disclaimer-message");

languageSelection.addEventListener("change", function () {
  const selectedLanguage = languageSelection.value;

  if (selectedLanguage === "fr") {
    title.innerText = frenchContent.title;
    welcomeMessage.innerText = frenchContent.welcomeMessage;
    programDescription.innerText = frenchContent.programDescription;
    enrollMessage.innerText = frenchContent.enrollMessage;
    //enrollButton.innerText = frenchContent.enrollButton;
    disclaimerButton.innerText = frenchContent.disclaimerButton;
    disclaimerMessage.innerText = frenchContent.disclaimerMessage;
  } else {
    title.innerText = englishContent.title;
    welcomeMessage.innerText = englishContent.welcomeMessage;
    programDescription.innerText = englishContent.programDescription;
    enrollMessage.innerText = englishContent.enrollMessage;
    //enrollButton.innerText = englishContent.enrollButton;
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
