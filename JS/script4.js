// Add some interactivity with JavaScript
const frenchContent = {
  title: "Votre Première Compétition de BJJ : Un Guide pour les Athlètes du Restigouche Dojo",
  programDescription: "Bienvenue, guerriers du Restigouche Dojo ! Félicitations pour avoir pris l'initiative de participer à votre première compétition de Jiu-Jitsu Brésilien (BJJ). Compétitionner est un excellent moyen de tester vos compétences, d'acquérir de l'expérience et de grandir en tant qu'artiste martial. Ce guide vous aidera à vous préparer physiquement et mentalement pour le défi à venir.",
  whyRestigoucheDojo: "Guide pour se préparer à votre première compétition de BJJ",
  reasonOne: "1. Définissez des Objectifs Clairs",
  reasonOneText: "Comprenez pourquoi vous participez. Est-ce pour tester vos compétences, acquérir de l'expérience ou simplement repousser vos limites ? Avoir un objectif clair vous aidera à rester concentré et motivé.",
  reasonTwo: "2. Développez un Plan de Jeu",
  reasonTwoText: "Un plan de jeu est essentiel pour réussir. Il ne s'agit pas seulement d'une idée vague, mais d'une stratégie détaillée pour chaque scénario possible.",
  reasonThree: "3. Entraînez-vous de Manière Intelligente",
  reasonThreeText: "La constance est la clé. Les séances d'entraînement régulières amélioreront vos techniques, votre endurance et votre forme physique globale.",
  reasonFour: "4. Préparation Mentale",
  reasonFourText: "Votre état d'esprit est tout aussi important que votre préparation physique.",
  reasonFive: "5. Comprenez les Règles",
  reasonFiveText: "Familiarisez-vous avec les règles et le système de points du tournoi. Connaître les soumissions autorisées à votre niveau de ceinture et comment les points sont attribués.",
  reasonSix: "6. Préparez votre Équipement",
  reasonSixText: "Assurez-vous d'avoir le bon équipement : un gi conforme aux exigences du tournoi, une ceinture correspondant à votre rang, un protège-dents, et des articles personnels supplémentaires.",
  reasonSeven: "7. Échauffez-vous Correctement",
  reasonSevenText: "Un bon échauffement aide à calmer votre esprit et à préparer votre corps.",
  reasonEight: "8. Nutrition et Hydratation",
  reasonEightText: "Votre performance dépend de la manière dont vous alimentez votre corps.",
  reasonNine: "9. Le Jour de la Compétition",
  reasonNineText: "Arrivez tôt, restez calme et faites confiance à votre entraînement.",
  reasonTen: "10. Réflexion Post-Compétition",
  reasonTenText: "Peu importe le résultat, chaque compétition est une expérience d'apprentissage. Cherchez des retours de votre entraîneur et de vos coéquipiers.",
};

const englishContent = {
  title: "Your First BJJ Competition: A Guide for Restigouche Dojo Athletes",
  programDescription: "Welcome, Restigouche Dojo Warriors! Congratulations on taking the step to compete in your first Brazilian Jiu-Jitsu (BJJ) tournament. Competing is a fantastic way to test your skills, gain experience, and grow as a martial artist. This guide will help you prepare both physically and mentally for the challenge ahead.",
  whyRestigoucheDojo: "Guide to Preparing for Your First BJJ Competition",
  reasonOne: "1. Set Clear Goals",
  reasonOneText: "Understand why you’re competing. Is it to test your skills, gain experience, or simply push your boundaries? Having a clear purpose will help you stay focused and motivated.",
  reasonTwo: "2. Develop a Game Plan",
  reasonTwoText: "A game plan is essential for success. This isn’t just a vague idea but a detailed strategy for every possible scenario.",
  reasonThree: "3. Train Smart",
  reasonThreeText: "Consistency is key. Regular training sessions will improve your techniques, stamina, and overall fitness.",
  reasonFour: "4. Mental Preparation",
  reasonFourText: "Your mindset is just as important as your physical preparation.",
  reasonFive: "5. Understand the Rules",
  reasonFiveText: "Familiarize yourself with the tournament’s rules and point system. Know what submissions are allowed at your belt level and how points are awarded.",
  reasonSix: "6. Gear Up",
  reasonSixText: "Ensure you have the correct gear: gi, belt, mouthguard, and any extras.",
  reasonSeven: "7. Warm-Up Properly",
  reasonSevenText: "A good warm-up helps calm your mind and prepare your body.",
  reasonEight: "8. Nutrition and Hydration",
  reasonEightText: "Your performance depends on how well you fuel your body.",
  reasonNine: "9. On Competition Day",
  reasonNineText: "Arrive early, stay calm, and trust your training.",
  reasonTen: "10. Post-Competition Reflection",
  reasonTenText: "No matter the outcome, every competition is a learning experience. Seek feedback and reflect on your performance.",
};

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
const reasonFour = document.getElementById("reason-four");
const reasonFourText = document.getElementById("reason-four-text");
const reasonFive = document.getElementById("reason-five");
const reasonFiveText = document.getElementById("reason-five-text");
const reasonSix = document.getElementById("reason-six");
const reasonSixText = document.getElementById("reason-six-text");
const reasonSeven = document.getElementById("reason-seven");
const reasonSevenText = document.getElementById("reason-seven-text");
const reasonEight = document.getElementById("reason-eight");
const reasonEightText = document.getElementById("reason-eight-text");
const reasonNine = document.getElementById("reason-nine");
const reasonNineText = document.getElementById("reason-nine-text");
const reasonTen = document.getElementById("reason-ten");
const reasonTenText = document.getElementById("reason-ten-text");

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
    reasonFour.innerText = frenchContent.reasonFour;
    reasonFourText.innerText = frenchContent.reasonFourText;
    reasonFive.innerText = frenchContent.reasonFive;
    reasonFiveText.innerText = frenchContent.reasonFiveText;
    reasonSix.innerText = frenchContent.reasonSix;
    reasonSixText.innerText = frenchContent.reasonSixText;
    reasonSeven.innerText = frenchContent.reasonSeven;
    reasonSevenText.innerText = frenchContent.reasonSevenText;
    reasonEight.innerText = frenchContent.reasonEight;
    reasonEightText.innerText = frenchContent.reasonEightText;
    reasonNine.innerText = frenchContent.reasonNine;
    reasonNineText.innerText = frenchContent.reasonNineText;
    reasonTen.innerText = frenchContent.reasonTen;
    reasonTenText.innerText = frenchContent.reasonTenText;
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
    reasonFour.innerText = englishContent.reasonFour;
    reasonFourText.innerText = englishContent.reasonFourText;
    reasonFive.innerText = englishContent.reasonFive;
    reasonFiveText.innerText = englishContent.reasonFiveText;
    reasonSix.innerText = englishContent.reasonSix;
    reasonSixText.innerText = englishContent.reasonSixText;
    reasonSeven.innerText = englishContent.reasonSeven;
    reasonSevenText.innerText = englishContent.reasonSevenText;
    reasonEight.innerText = englishContent.reasonEight;
    reasonEightText.innerText = englishContent.reasonEightText;
    reasonNine.innerText = englishContent.reasonNine;
    reasonNineText.innerText = englishContent.reasonNineText;
    reasonTen.innerText = englishContent.reasonTen;
    reasonTenText.innerText = englishContent.reasonTenText;
  }
});
