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

function updateContent(language) {
  const content = language === "fr" ? frenchContent : englishContent;

  document.getElementById("title").innerText = content.title;
  document.getElementById("program-description").innerText = content.programDescription;
  document.getElementById("guide-title").innerText = content.guideTitle;
  document.getElementById("set-goals").innerText = content.setGoals;
  document.getElementById("set-goals-text").innerText = content.setGoalsText;
  document.getElementById("develop-game-plan").innerText = content.developGamePlan;
  document.getElementById("develop-game-plan-text").innerText = content.developGamePlanText;
  document.getElementById("train-smart").innerText = content.trainSmart;
  document.getElementById("train-smart-text").innerText = content.trainSmartText;
  document.getElementById("mental-preparation").innerText = content.mentalPreparation;
  document.getElementById("mental-preparation-text").innerText = content.mentalPreparationText;
  document.getElementById("understand-rules").innerText = content.understandRules;
  document.getElementById("understand-rules-text").innerText = content.understandRulesText;
  document.getElementById("gear-up").innerText = content.gearUp;
  document.getElementById("gear-up-text").innerText = content.gearUpText;
  document.getElementById("warm-up").innerText = content.warmUp;
  document.getElementById("warm-up-text").innerText = content.warmUpText;
  document.getElementById("nutrition-hydration").innerText = content.nutritionHydration;
  document.getElementById("nutrition-hydration-text").innerText = content.nutritionHydrationText;
  document.getElementById("competition-day").innerText = content.competitionDay;
  document.getElementById("competition-day-text").innerText = content.competitionDayText;
  document.getElementById("post-competition").innerText = content.postCompetition;
  document.getElementById("post-competition-text").innerText = content.postCompetitionText;
}

languageSelection.addEventListener("change", function () {
  updateContent(languageSelection.value);
});

// Initialize with default language (English)
updateContent('en');
