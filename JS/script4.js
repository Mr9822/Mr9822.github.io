const frenchContent = {
  title: "Votre Première Compétition de BJJ : Un Guide pour les Athlètes du Restigouche Dojo",
  programDescription: "Félicitations pour avoir franchi le pas vers votre première compétition de Brazilian Jiu-Jitsu (BJJ). La compétition est un excellent moyen de tester vos compétences, de gagner de l'expérience et de grandir en tant qu'artiste martial. Ce guide vous aidera à vous préparer à la fois physiquement et mentalement pour le défi à venir.",
  
  guideTitle: "Guide de Préparation pour la Compétition",
  setGoals: "1. Fixez des Objectifs Clairs",
  setGoalsText: "Comprenez pourquoi vous participez. Est-ce pour tester vos compétences, acquérir de l'expérience ou simplement repousser vos limites ? Avoir un objectif clair vous aidera à rester concentré et motivé.",
  
  developGamePlan: "2. Développez un Plan de Jeu",
  developGamePlanText: "Un plan de jeu est essentiel pour réussir. Il s'agit d'une stratégie détaillée pour chaque scénario possible.",
  
  trainSmart: "3. Entraînez-vous Intelligemment",
  trainSmartText: "La régularité est clé. Les sessions d'entraînement régulières amélioreront vos techniques, votre endurance et votre forme physique globale.",
  
  mentalPreparation: "4. Préparation Mentale",
  mentalPreparationText: "Votre état d'esprit est tout aussi important que votre préparation physique.",
  
  understandRules: "5. Comprenez les Règles",
  understandRulesText: "Familiarisez-vous avec les règles et le système de points du tournoi.",
  
  gearUp: "6. Préparez votre Équipement",
  gearUpText: "Assurez-vous d'avoir le bon équipement.",
  
  warmUp: "7. Échauffez-vous Correctement",
  warmUpText: "Un bon échauffement aide à calmer votre esprit et à préparer votre corps.",
  
  nutritionHydration: "8. Nutrition et Hydratation",
  nutritionHydrationText: "Votre performance dépend de la manière dont vous alimentez votre corps.",
  
  competitionDay: "9. Le Jour de la Compétition",
  competitionDayText: "Le jour de la compétition, arrivez tôt et restez calme.",
  
  postCompetition: "10. Réflexion Post-Compétition",
  postCompetitionText: "Chaque compétition est une expérience d'apprentissage."
};

const englishContent = {
  title: "Your First BJJ Competition: A Guide for Restigouche Dojo Athletes",
  programDescription: "Congratulations on taking the step to compete in your first Brazilian Jiu-Jitsu (BJJ) tournament. Competing is a fantastic way to test your skills, gain experience, and grow as a martial artist. This guide will help you prepare both physically and mentally for the challenge ahead.",
  
  guideTitle: "Competition Preparation Guide",
  setGoals: "1. Set Clear Goals",
  setGoalsText: "Understand why you’re competing. Is it to test your skills, gain experience, or simply push your boundaries? Having a clear purpose will help you stay focused and motivated.",
  
  developGamePlan: "2. Develop a Game Plan",
  developGamePlanText: "A game plan is essential for success. This isn’t just a vague idea but a detailed strategy for every possible scenario.",
  
  trainSmart: "3. Train Smart",
  trainSmartText: "Consistency is key. Regular training sessions will improve your techniques, stamina, and overall fitness.",
  
  mentalPreparation: "4. Mental Preparation",
  mentalPreparationText: "Your mindset is just as important as your physical preparation.",
  
  understandRules: "5. Understand the Rules",
  understandRulesText: "Familiarize yourself with the tournament’s rules and point system.",
  
  gearUp: "6. Gear Up",
  gearUpText: "Ensure you have the correct gear.",
  
  warmUp: "7. Warm-Up Properly",
  warmUpText: "A good warm-up helps calm your mind and prepare your body.",
  
  nutritionHydration: "8. Nutrition and Hydration",
  nutritionHydrationText: "Your performance depends on how well you fuel your body.",
  
  competitionDay: "9. On Competition Day",
  competitionDayText: "Arrive early and stay calm on the day of the competition.",
  
  postCompetition: "10. Post-Competition Reflection",
  postCompetitionText: "No matter the outcome, every competition is a learning experience."
};

const languageSelection = document.getElementById("language-selection");
const title = document.getElementById("title");
const programDescription = document.getElementById("program-description");
const guideTitle = document.getElementById("guide-title");
const setGoals = document.getElementById("set-goals");
const setGoalsText = document.getElementById("set-goals-text");
const developGamePlan = document.getElementById("develop-game-plan");
const developGamePlanText = document.getElementById("develop-game-plan-text");
const trainSmart = document.getElementById("train-smart");
const trainSmartText = document.getElementById("train-smart-text");
const mentalPreparation = document.getElementById("mental-preparation");
const mentalPreparationText = document.getElementById("mental-preparation-text");
const understandRules = document.getElementById("understand-rules");
const understandRulesText = document.getElementById("understand-rules-text");
const gearUp = document.getElementById("gear-up");
const gearUpText = document.getElementById("gear-up-text");
const warmUp = document.getElementById("warm-up");
const warmUpText = document.getElementById("warm-up-text");
const nutritionHydration = document.getElementById("nutrition-hydration");
const nutritionHydrationText = document.getElementById("nutrition-hydration-text");
const competitionDay = document.getElementById("competition-day");
const competitionDayText = document.getElementById("competition-day-text");
const postCompetition = document.getElementById("post-competition");
const postCompetitionText = document.getElementById("post-competition-text");

languageSelection.addEventListener("change", function () {
  const selectedLanguage = languageSelection.value;

  if (selectedLanguage === "fr") {
    title.innerText = frenchContent.title;
    programDescription.innerText = frenchContent.programDescription;
    guideTitle.innerText = frenchContent.guideTitle;
    setGoals.innerText = frenchContent.setGoals;
    setGoalsText.innerText = frenchContent.setGoalsText;
    developGamePlan.innerText = frenchContent.developGamePlan;
    developGamePlanText.innerText = frenchContent.developGamePlanText;
    trainSmart.innerText = frenchContent.trainSmart;
    trainSmartText.innerText = frenchContent.trainSmartText;
    mentalPreparation.innerText = frenchContent.mentalPreparation;
    mentalPreparationText.innerText = frenchContent.mentalPreparationText;
    understandRules.innerText = frenchContent.understandRules;
    understandRulesText.innerText = frenchContent.understandRulesText;
    gearUp.innerText = frenchContent.gearUp;
    gearUpText.innerText = frenchContent.gearUpText;
    warmUp.innerText = frenchContent.warmUp;
    warmUpText.innerText = frenchContent.warmUpText;
    nutritionHydration.innerText = frenchContent.nutritionHydration;
    nutritionHydrationText.innerText = frenchContent.nutritionHydrationText;
    competitionDay.innerText = frenchContent.competitionDay;
    competitionDayText.innerText = frenchContent.competitionDayText;
    postCompetition.innerText = frenchContent.postCompetition;
    postCompetitionText.innerText = frenchContent.postCompetitionText;
  } else {
    title.innerText = englishContent.title;
    programDescription.innerText = englishContent.programDescription;
    guideTitle.innerText = englishContent.guideTitle;
    setGoals.innerText = englishContent.setGoals;
    setGoalsText.innerText = englishContent.setGoalsText;
    developGamePlan.innerText = englishContent.developGamePlan;
    developGamePlanText.innerText = englishContent.developGamePlanText;
    trainSmart.innerText = englishContent.trainSmart;
    trainSmartText.innerText = englishContent.trainSmartText;
    mentalPreparation.innerText = englishContent.mentalPreparation;
    mentalPreparationText.innerText = englishContent.mentalPreparationText;
    understandRules.innerText = englishContent.understandRules;
    understandRulesText.innerText = englishContent.understandRulesText;
    gearUp.innerText = englishContent.gearUp;
    gearUpText.innerText = englishContent.gearUpText;
    warmUp.innerText = englishContent.warmUp;
    warmUpText.innerText = englishContent.warmUpText;
    nutritionHydration.innerText = englishContent.nutritionHydration;
    nutritionHydrationText.innerText = englishContent.nutritionHydrationText;
    competitionDay.innerText = englishContent.competitionDay;
    competitionDayText.innerText = englishContent.competitionDayText;
    postCompetition.innerText = englishContent.postCompetition;
    postCompetitionText.innerText = englishContent.postCompetitionText;
  }
});
