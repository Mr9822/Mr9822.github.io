// Define content for different languages
const frenchContent = {
  title: "Votre Première Compétition de BJJ : Un Guide pour les Athlètes du Restigouche Dojo",
  programDescription: "Félicitations pour avoir franchi le pas vers votre première compétition de Brazilian Jiu-Jitsu (BJJ). La compétition est un excellent moyen de tester vos compétences, de gagner de l'expérience et de grandir en tant qu'artiste martial. Ce guide vous aidera à vous préparer à la fois physiquement et mentalement pour le défi à venir.",
  
  guideTitle: "Guide de Préparation pour la Compétition",
  guideList: [
    { id: "set-goals", text: "1. Fixez des Objectifs Clairs" },
    { id: "set-goals-text", text: "Comprenez pourquoi vous participez. Est-ce pour tester vos compétences, acquérir de l'expérience ou simplement repousser vos limites ? Avoir un objectif clair vous aidera à rester concentré et motivé." },
    { id: "develop-game-plan", text: "2. Développez un Plan de Jeu" },
    { id: "develop-game-plan-text", text: "Un plan de jeu est essentiel pour réussir. Il s'agit d'une stratégie détaillée pour chaque scénario possible." },
    { id: "starting-position", text: "Position de Départ : Décidez si vous allez viser une prise ou tirer la garde." },
    { id: "top-positions", text: "Positions Supérieures : Connaissez vos mouvements favoris pour passer la garde et maintenir le contrôle." },
    { id: "bottom-positions", text: "Positions Inférieures : Ayez des balayages et des échappatoires spécifiques bien ancrés dans votre mémoire musculaire." },
    { id: "submissions", text: "Soumissions : Concentrez-vous sur quelques soumissions à fort pourcentage que vous pouvez exécuter avec succès." },
    { id: "defense", text: "Défense : Soyez prêt à défendre contre des attaques courantes et à vous remettre de positions défavorables." },
    { id: "train-smart", text: "3. Entraînez-vous Intelligemment" },
    { id: "train-smart-text", text: "La régularité est clé. Les sessions d'entraînement régulières amélioreront vos techniques, votre endurance et votre forme physique globale." },
    { id: "spar-with-partners", text: "Sparrez avec Différents Partenaires : Cela vous exposera à différents styles et types de corps." },
    { id: "drill-drill-drill", text: "Répétition, Répétition, Répétition : La répétition construit la compétence. Concentrez-vous sur les techniques de votre plan de jeu." },
    { id: "conditioning", text: "Conditionnement : Incorporez des exercices de cardio, de renforcement musculaire et de flexibilité. La corde à sauter, la course et les exercices au poids du corps sont d'excellents choix." },
    { id: "mental-preparation", text: "4. Préparation Mentale" },
    { id: "mental-preparation-text", text: "Votre état d'esprit est tout aussi important que votre préparation physique." },
    { id: "relax-and-breathe", text: "Relaxez-vous et Respirez : Apprenez à contrôler votre respiration. Pratiquez la respiration diaphragmatique : inspirez par le nez pendant quatre secondes, remplissez vos poumons, et expirez par la bouche pendant huit secondes." },
    { id: "visualization", text: "Visualisation : Imaginez vos matchs dans votre esprit. Voyez-vous exécuter votre plan de jeu, rester calme et gérer les défis. Visualisez toujours des résultats positifs." },
    { id: "stay-positive", text: "Restez Positif : Remplacez les pensées négatives par des affirmations positives. Croyez en votre entraînement et en votre capacité à bien performer." },
    { id: "understand-rules", text: "5. Comprenez les Règles" },
    { id: "understand-rules-text", text: "Familiarisez-vous avec les règles et le système de points du tournoi." },
    { id: "takedown-or-throw", text: "Prise ou Projection : 2 points" },
    { id: "sweep", text: "Balayage : 2 points" },
    { id: "knee-on-belly", text: "Genou sur le Ventre : 2 points" },
    { id: "passing-guard", text: "Passage de Garde : 3 points" },
    { id: "mount-position", text: "Position de Montée : 4 points" },
    { id: "gear-up", text: "6. Préparez votre Équipement" },
    { id: "gear-up-text", text: "Assurez-vous d'avoir le bon équipement." },
    { id: "gi", text: "Gi : Assurez-vous que votre gi est conforme aux règles de l’IBJJF ou aux exigences spécifiques du tournoi. Il doit être propre et en bon état." },
    { id: "belt", text: "Ceinture : Portez une ceinture correspondant à votre grade." },
    { id: "mouthguard", text: "Protège-dents : Protégez vos dents." },
    { id: "extras", text: "Extras : Apportez un gi de rechange, de l'eau, des collations et tout autre objet personnel dont vous pourriez avoir besoin." },
    { id: "warm-up", text: "7. Échauffez-vous Correctement" },
    { id: "warm-up-text", text: "Un bon échauffement aide à calmer votre esprit et à préparer votre corps." },
    { id: "routine", text: "Routine : Effectuez une routine d'échauffement familière que vous faites avant les sessions d'entraînement." },
    { id: "focus", text: "Concentration : Concentrez-vous sur vos mouvements et votre respiration, et non sur les matchs à venir." },
    { id: "nutrition-hydration", text: "8. Nutrition et Hydratation" },
    { id: "nutrition-hydration-text", text: "Votre performance dépend de la manière dont vous alimentez votre corps." },
    { id: "hydrate", text: "Hydratez-vous : Buvez beaucoup d'eau avant la compétition." },
    { id: "eat-smart", text: "Mangez Bien : Consommez une alimentation équilibrée riche en protéines, en glucides et en graisses saines. Le jour de la compétition, mangez léger et des aliments facilement digestibles." },
    { id: "competition-day", text: "9. Le Jour de la Compétition" },
    { id: "competition-day-text", text: "Le jour de la compétition, arrivez tôt et restez calme." },
    { id: "arrival", text: "Arrivée : Vérifiez le programme et familiarisez-vous avec le lieu." },
    { id: "warm-up-again", text: "Échauffez-vous à nouveau : Faites un échauffement léger pour préparer votre corps à la compétition." },
    { id: "post-competition", text: "10. Réflexion Post-Compétition" },
    { id: "post-competition-text", text: "Chaque compétition est une expérience d'apprentissage." },
    { id: "review-performance", text: "Révisez votre Performance : Analysez ce qui s'est bien passé et ce qui pourrait être amélioré." },
    { id: "set-new-goals", text: "Fixez de Nouveaux Objectifs : Utilisez l'expérience pour définir de nouveaux objectifs pour les compétitions futures." }
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
    { id: "starting-position", text: "Starting Position: Decide whether you’ll aim for a takedown or pull guard." },
    { id: "top-positions", text: "Top Positions: Know your go-to moves for passing guard and maintaining control." },
    { id: "bottom-positions", text: "Bottom Positions: Have specific sweeps and escapes well-rehearsed." },
    { id: "submissions", text: "Submissions: Focus on a few high-percentage submissions you can execute reliably." },
    { id: "defense", text: "Defense: Be prepared to defend against common attacks and recover from disadvantageous positions." },
    { id: "train-smart", text: "3. Train Smart" },
    { id: "train-smart-text", text: "Consistency is key. Regular training will improve your techniques, endurance, and overall fitness." },
    { id: "spar-with-partners", text: "Spar with Different Partners: This exposes you to various styles and body types." },
    { id: "drill-drill-drill", text: "Drill, Drill, Drill: Repetition builds skill. Focus on the techniques in your game plan." },
    { id: "conditioning", text: "Conditioning: Incorporate cardio, strength training, and flexibility exercises. Jump rope, run, and do bodyweight exercises." },
    { id: "mental-preparation", text: "4. Mental Preparation" },
    { id: "mental-preparation-text", text: "Your mindset is just as crucial as physical preparation." },
    { id: "relax-and-breathe", text: "Relax and Breathe: Learn to control your breathing. Practice diaphragmatic breathing: inhale through your nose for four seconds, fill your lungs, and exhale through your mouth for eight seconds." },
    { id: "visualization", text: "Visualization: Picture your matches in your mind. See yourself executing your game plan, staying calm, and handling challenges. Always visualize positive outcomes." },
    { id: "stay-positive", text: "Stay Positive: Replace negative thoughts with positive affirmations. Believe in your training and your ability to perform well." },
    { id: "understand-rules", text: "5. Understand the Rules" },
    { id: "understand-rules-text", text: "Familiarize yourself with the tournament rules and scoring system." },
    { id: "takedown-or-throw", text: "Takedown or Throw: 2 points" },
    { id: "sweep", text: "Sweep: 2 points" },
    { id: "knee-on-belly", text: "Knee on Belly: 2 points" },
    { id: "passing-guard", text: "Passing Guard: 3 points" },
    { id: "mount-position", text: "Mount Position: 4 points" },
    { id: "gear-up", text: "6. Gear Up" },
    { id: "gear-up-text", text: "Make sure you have the right gear." },
    { id: "gi", text: "Gi: Ensure your gi meets the IBJJF or tournament-specific requirements. It should be clean and in good condition." },
    { id: "belt", text: "Belt: Wear a belt corresponding to your rank." },
    { id: "mouthguard", text: "Mouthguard: Protect your teeth." },
    { id: "extras", text: "Extras: Bring an extra gi, water, snacks, and any other personal items you might need." },
    { id: "warm-up", text: "7. Warm Up Properly" },
    { id: "warm-up-text", text: "A good warm-up helps calm your mind and prepare your body." },
    { id: "routine", text: "Routine: Do a familiar warm-up routine that you do before training sessions." },
    { id: "focus", text: "Focus: Concentrate on your movements and breathing, not on the upcoming matches." },
    { id: "nutrition-hydration", text: "8. Nutrition and Hydration" },
    { id: "nutrition-hydration-text", text: "Your performance depends on how you fuel your body." },
    { id: "hydrate", text: "Stay Hydrated: Drink plenty of water leading up to the competition." },
    { id: "eat-smart", text: "Eat Smart: Consume a balanced diet rich in protein, carbs, and healthy fats. On competition day, eat light and easily digestible foods." },
    { id: "competition-day", text: "9. Competition Day" },
    { id: "competition-day-text", text: "On competition day, arrive early and stay calm." },
    { id: "arrival", text: "Arrival: Check the schedule and familiarize yourself with the venue." },
    { id: "warm-up-again", text: "Warm Up Again: Do a light warm-up to get your body ready for the competition." },
    { id: "post-competition", text: "10. Post-Competition Reflection" },
    { id: "post-competition-text", text: "Every competition is a learning experience." },
    { id: "review-performance", text: "Review Your Performance: Analyze what went well and what could be improved." },
    { id: "set-new-goals", text: "Set New Goals: Use the experience to set new goals for future competitions." }
  ]
};

function updateContent(language) {
  const content = language === "fr" ? frenchContent : englishContent;

  document.getElementById("title").innerText = content.title;
  document.getElementById("program-description").innerText = content.programDescription;
  document.getElementById("guide-title").innerText = content.guideTitle;

  content.guideList.forEach(item => {
    const element = document.getElementById(item.id);
    if (element) {
      element.innerText = item.text;
    }
  });
}

// Add event listener to language selection dropdown
document.getElementById("language-selection").addEventListener("change", function () {
  const selectedLanguage = this.value;
  updateContent(selectedLanguage);
  console.log('Selected language:', selectedLanguage);
});

// Initialize with default language (English)
updateContent('en');

