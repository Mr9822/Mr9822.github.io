// Translation content
const frenchContent = {
  title: "Votre Premier Tournoi de BJJ : Un Guide pour les Athlètes du Restigouche Dojo",
  programDescription: "Félicitations pour avoir franchi le pas et décidé de participer à votre premier tournoi de Brazilian Jiu-Jitsu (BJJ). Participer à une compétition est une excellente façon de tester vos compétences, de gagner de l'expérience et de vous épanouir en tant qu'artiste martial. Ce guide vous aidera à vous préparer physiquement et mentalement pour ce défi.",
  whyRestigoucheDojo: "Préparation pour votre Premier Tournoi de BJJ",
  reasonOne: "1. Fixez des Objectifs Clairs",
  reasonOneText: "Comprenez pourquoi vous participez. Est-ce pour tester vos compétences, acquérir de l'expérience ou simplement repousser vos limites ? Avoir un objectif clair vous aidera à rester concentré et motivé.",
  reasonTwo: "2. Développez un Plan de Jeu",
  reasonTwoText: "Un plan de jeu est essentiel pour réussir. Ce n'est pas juste une idée vague mais une stratégie détaillée pour chaque scénario possible.",
  reasonThree: "3. Entraînez-vous Intelligemment",
  reasonThreeText: "La régularité est la clé. Des sessions d'entraînement régulières amélioreront vos techniques, votre endurance et votre forme physique globale.",
  reasonFour: "4. Préparation Mentale",
  reasonFourText: "Votre état d'esprit est tout aussi important que votre préparation physique.",
  reasonFive: "5. Comprenez les Règles",
  reasonFiveText: "Familiarisez-vous avec les règles du tournoi et le système de points.",
  reasonSix: "6. Préparez Votre Équipement",
  reasonSixText: "Assurez-vous d'avoir le bon équipement.",
  reasonSeven: "7. Échauffez-vous Correctement",
  reasonSevenText: "Un bon échauffement aide à calmer l'esprit et à préparer le corps.",
  reasonEight: "8. Nutrition et Hydratation",
  reasonEightText: "Votre performance dépend de la manière dont vous alimentez votre corps.",
  reasonNine: "9. Le Jour de la Compétition",
  reasonNineText: "Arrivez tôt, restez calme et faites confiance à votre entraînement.",
  reasonTen: "10. Réflexion Post-Compétition",
  reasonTenText: "Chaque compétition est une expérience d'apprentissage.",
};

const englishContent = {
  title: "Your First BJJ Competition: A Guide for Restigouche Dojo Athletes",
  programDescription: "Congratulations on taking the step to compete in your first Brazilian Jiu-Jitsu (BJJ) tournament. Competing is a fantastic way to test your skills, gain experience, and grow as a martial artist. This guide will help you prepare both physically and mentally for the challenge ahead.",
  whyRestigoucheDojo: "Preparing for Your First BJJ Competition",
  reasonOne: "1. Set Clear Goals",
  reasonOneText: "Understand why you’re competing. Is it to test your skills, gain experience, or simply push your boundaries? Having a clear purpose will help you stay focused and motivated.",
  reasonTwo: "2. Develop a Game Plan",
  reasonTwoText: "A game plan is essential for success. This isn’t just a vague idea but a detailed strategy for every possible scenario.",
  reasonThree: "3. Train Smart",
  reasonThreeText: "Consistency is key. Regular training sessions will improve your techniques, stamina, and overall fitness.",
  reasonFour: "4. Mental Preparation",
  reasonFourText: "Your mindset is just as important as your physical preparation.",
  reasonFive: "5. Understand the Rules",
  reasonFiveText: "Familiarize yourself with the tournament’s rules and point system.",
  reasonSix: "6. Gear Up",
  reasonSixText: "Ensure you have the correct gear.",
  reasonSeven: "7. Warm-Up Properly",
  reasonSevenText: "A good warm-up helps calm your mind and prepare your body.",
  reasonEight: "8. Nutrition and Hydration",
  reasonEightText: "Your performance depends on how well you fuel your body.",
  reasonNine: "9. On Competition Day",
  reasonNineText: "Arrive early, stay calm, and trust your training.",
  reasonTen: "10. Post-Competition Reflection",
  reasonTenText: "No matter the outcome, every competition is a learning experience.",
};

// Update content based on language selection
const languageSelection = document.getElementById("language-selection");
const title = document.getElementById("title");
const programDescription = document.getElementById("program-description");
const whyRestigoucheDojo = document.getElementById("why-restigouche-dojo");
const reasonOne = document.getElementById("reason-one");
const reasonOneText = document.getElementById("reason-one-text");
const reasonTwo = document.getElementById("reason-two");
const reasonTwoText = document.getElementById("reason-two-text");
const reasonThree = document.getElementById("reason-three");
const reasonThreeText = document.getElementById("reason-three-text");
const enrollMessage = document.getElementById("enroll-message");

languageSelection.addEventListener("change", function () {
  const selectedLanguage = languageSelection.value;

  if (selectedLanguage === "fr") {
    title.innerText = frenchContent.title;
    programDescription.innerText = frenchContent.programDescription;
    whyRestigoucheDojo.innerText = frenchContent.whyRestigoucheDojo;
    reasonOne.innerText = frenchContent.reasonOne;
    reasonOneText.innerText = frenchContent.reasonOneText;
    reasonTwo.innerText = frenchContent.reasonTwo;
    reasonTwoText.innerText = frenchContent.reasonTwoText;
    reasonThree.innerText = frenchContent.reasonThree;
    reasonThreeText.innerText = frenchContent.reasonThreeText;
    enrollMessage.innerText = frenchContent.enrollMessage;
  } else {
    title.innerText = englishContent.title;
    programDescription.innerText = englishContent.programDescription;
    whyRestigoucheDojo.innerText = englishContent.whyRestigoucheDojo;
    reasonOne.innerText = englishContent.reasonOne;
    reasonOneText.innerText = englishContent.reasonOneText;
    reasonTwo.innerText = englishContent.reasonTwo;
    reasonTwoText.innerText = englishContent.reasonTwoText;
    reasonThree.innerText = englishContent.reasonThree;
    reasonThreeText.innerText = englishContent.reasonThreeText;
    enrollMessage.innerText = englishContent.enrollMessage;
  }
});
