const frenchContent = {
  title: "Votre Première Compétition de BJJ : Un Guide pour les Athlètes du Restigouche Dojo",
  programDescription: "Félicitations pour avoir franchi le pas vers votre première compétition de Brazilian Jiu-Jitsu (BJJ). La compétition est un excellent moyen de tester vos compétences, de gagner de l'expérience et de grandir en tant qu'artiste martial. Ce guide vous aidera à vous préparer à la fois physiquement et mentalement pour le défi à venir.",
  
  guideTitle: "Guide de Préparation pour la Compétition",
  guideList: [
    { id: "set-goals", text: "1. Fixez des Objectifs Clairs" },
    { id: "set-goals-text", text: "Comprenez pourquoi vous participez. Est-ce pour tester vos compétences, acquérir de l'expérience ou simplement repousser vos limites ? Avoir un objectif clair vous aidera à rester concentré et motivé." },
    { id: "develop-game-plan", text: "2. Développez un Plan de Jeu" },
    { id: "develop-game-plan-text", text: "Un plan de jeu est essentiel pour réussir. Il s'agit d'une stratégie détaillée pour chaque scénario possible." },
    { id: "train-smart", text: "3. Entraînez-vous Intelligemment" },
    { id: "train-smart-text", text: "La régularité est clé. Les sessions d'entraînement régulières amélioreront vos techniques, votre endurance et votre forme physique globale." },
    { id: "mental-preparation", text: "4. Préparation Mentale" },
    { id: "mental-preparation-text", text: "Votre état d'esprit est tout aussi important que votre préparation physique." },
    { id: "understand-rules", text: "5. Comprenez les Règles" },
    { id: "understand-rules-text", text: "Familiarisez-vous avec les règles et le système de points du tournoi." },
    { id: "gear-up", text: "6. Préparez votre Équipement" },
    { id: "gear-up-text", text: "Assurez-vous d'avoir le bon équipement." },
    { id: "warm-up", text: "7. Échauffez-vous Correctement" },
    { id: "warm-up-text", text: "Un bon échauffement aide à calmer votre esprit et à préparer votre corps." },
    { id: "nutrition-hydration", text: "8. Nutrition et Hydratation" },
    { id: "nutrition-hydration-text", text: "Votre performance dépend de la manière dont vous alimentez votre corps." },
    { id: "competition-day", text: "9. Le Jour de la Compétition" },
    { id: "competition-day-text", text: "Le jour de la compétition, arrivez tôt et restez calme." },
    { id: "post-competition", text: "10. Réflexion Post-Compétition" },
    { id: "post-competition-text", text: "Chaque compétition est une expérience d'apprentissage." }
  ]
};

const englishContent = {
  title: "Your First BJJ Competition: A Guide for Restigouche Dojo Athletes",
  programDescription: "Congratulations on taking the step to compete in your first Brazilian Jiu-Jitsu (BJJ) tournament. Competing is a fantastic way to test your skills, gain experience, and grow as a martial artist. This guide will help you prepare both physically and mentally for the challenge ahead.",
  
  guideTitle: "Competition Preparation Guide",
  guideList: [
    { id: "set-goals", text: "1. Set Clear Goals" },
    { id: "set-goals-text", text: "Understand why you’re competing. Is it to test your skills, gain experience, or simply push your boundaries? Having a clear purpose will help you stay focused and motivated." },
    { id: "develop-game-plan", text: "2. Develop a Game Plan" },
    { id: "develop-game-plan-text", text: "A game plan is essential for success. This isn’t just a vague idea but a detailed strategy for every possible scenario." },
    { id: "train-smart", text: "3. Train Smart" },
    { id: "train-smart-text", text: "Consistency is key. Regular training sessions will improve your techniques, stamina, and overall fitness." },
    { id: "mental-preparation", text: "4. Mental Preparation" },
    { id: "mental-preparation-text", text: "Your mindset is just as important as your physical preparation." },
    { id: "understand-rules", text: "5. Understand the Rules" },
    { id: "understand-rules-text", text: "Familiarize yourself with the tournament’s rules and point system." },
    { id: "gear-up", text: "6. Gear Up" },
    { id: "gear-up-text", text: "Ensure you have the correct gear." },
    { id: "warm-up", text: "7. Warm-Up Properly" },
    { id: "warm-up-text", text: "A good warm-up helps calm your mind and prepare your body." },
    { id: "nutrition-hydration", text: "8. Nutrition and Hydration" },
    { id: "nutrition-hydration-text", text: "Your performance depends on how well you fuel your body." },
    { id: "competition-day", text: "9. On Competition Day" },
    { id: "competition-day-text", text: "Arrive early and stay calm on the day of the competition." },
    { id: "post-competition", text: "10. Post-Competition Reflection" },
    { id: "post-competition-text", text: "No matter the outcome, every competition is a learning experience." }
  ]
};

const languageSelection = document.getElementById("language-selection");

function updateContent(language) {
  const content = language === "fr" ? frenchContent : englishContent;

  document.getElementById("title").innerText = content.title;
  document.getElementById("program-description").innerText = content.programDescription;
  document.getElementById("guide-title").innerText = content.guideTitle;

  content.guideList.forEach(item => {
    document.getElementById(item.id).innerText = item.text;
  });
}

languageSelection.addEventListener("change", function () {
  updateContent(languageSelection.value);
});

// Initialize with default language (English)
updateContent('en');
