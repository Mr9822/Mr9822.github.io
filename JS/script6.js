const frenchContent = {
  title: "Guide des Parents pour Soutenir Votre Jeune Athlète au Dojo Restigouche",
  programDescription: "Bienvenue au Dojo Restigouche, où votre enfant n'est pas seulement un élève mais un membre de notre famille des arts martiaux. En tant que parent, vous jouez un rôle vital dans cette communauté. Votre soutien, votre encouragement et votre implication sont des éléments clés du succès et du plaisir de votre enfant dans notre dojo.",
  guideTitle: "Guide des Parents pour Soutenir Votre Jeune Athlète",
  guideList: [
    { id: "role-in-team", text: "1. Vous Faites Partie de l'Équipe" },
    { id: "role-in-team-text", text: "Votre présence aux entraînements montre à votre enfant que vous êtes investi dans son parcours martial. Vos mots d'encouragement et de félicitations renforcent sa confiance et sa motivation. Votre compréhension et votre soutien lors des victoires comme des revers l'aident à naviguer dans les hauts et les bas de l'entraînement et éventuellement de la compétition." },
    { id: "avoid-common-mistakes", text: "2. Éviter les Erreurs Courantes" },
    { id: "avoid-common-mistakes-text", text: "Une erreur courante est de mettre trop l'accent sur les résultats, comme remporter des compétitions, plutôt que de se concentrer sur le processus de croissance et de développement. Une autre erreur est de projeter nos propres désirs et attentes sur nos enfants. Encouragez-le à fixer ses propres objectifs et à trouver de la joie dans ses réalisations, peu importe leur ampleur." },
    { id: "boost-self-esteem", text: "3. Renforcer l'Estime de Soi" },
    { id: "boost-self-esteem-text", text: "Offrez des éloges et des encouragements sincères. Reconnaissez les efforts de votre enfant, célébrez ses progrès et mettez en valeur ses forces. Fournissez un espace sûr pour s'exprimer et explorer ses capacités sans craindre le jugement ou la critique." },
    { id: "recognize-energy-drainers", text: "4. Reconnaître les Draineurs d'Énergie" },
    { id: "recognize-energy-drainers-text", text: "Les draineurs d'énergie, comme se concentrer excessivement sur la victoire à tout prix ou établir des attentes irréalistes, peuvent miner la confiance et l'enthousiasme de votre enfant. En reconnaissant et en éliminant ces draineurs d'énergie, vous créez un environnement plus positif et favorable." },
    { id: "implement-tank-fillers", text: "5. Mise en Œuvre des Remplisseurs de Réservoir" },
    { id: "implement-tank-fillers-text", text: "Utilisez des remplisseurs de réservoir, comme des éloges spécifiques et sincères, l'expression de l'appréciation pour les efforts et l'écoute active des pensées et sentiments de votre enfant. Les indices non verbaux comme le sourire et le maintien du contact visuel transmettent chaleur et encouragement." }
  ]
};

const englishContent = {
  title: "Parent's Guide to Supporting Your Young Athlete at Restigouche Dojo",
  programDescription: "Welcome to Restigouche Dojo, where your child is not just a student but a member of our martial arts family. As a parent, you play a vital role in this community. Your support, encouragement, and involvement are key to your child's success and enjoyment in our dojo.",
  guideTitle: "Parent's Guide to Supporting Your Young Athlete",
  guideList: [
    { id: "role-in-team", text: "1. You Are Part of the Team" },
    { id: "role-in-team-text", text: "Your presence at practices shows your child that you are invested in their martial arts journey. Your words of encouragement and praise boost their confidence and motivation. Your understanding and support during victories and setbacks help them navigate the ups and downs of training and eventually competition." },
    { id: "avoid-common-mistakes", text: "2. Avoid Common Mistakes" },
    { id: "avoid-common-mistakes-text", text: "A common mistake is focusing too much on results, like winning competitions, rather than on the growth and development process. Another mistake is projecting our own desires and expectations onto our children. Encourage them to set their own goals and find joy in their achievements, no matter the size." },
    { id: "boost-self-esteem", text: "3. Boost Self-Esteem" },
    { id: "boost-self-esteem-text", text: "Offer sincere praise and encouragement. Recognize your child's efforts, celebrate their progress, and highlight their strengths. Provide a safe space for them to express themselves and explore their abilities without fear of judgment or criticism." },
    { id: "recognize-energy-drainers", text: "4. Recognize Energy Drainers" },
    { id: "recognize-energy-drainers-text", text: "Energy drainers, such as focusing excessively on winning at all costs or setting unrealistic expectations, can undermine your child's confidence and enthusiasm. By recognizing and eliminating these energy drainers, you create a more positive and supportive environment." },
    { id: "implement-tank-fillers", text: "5. Implement Tank Fillers" },
    { id: "implement-tank-fillers-text", text: "Use tank fillers like specific and sincere praise, expressing appreciation for their efforts, and actively listening to their thoughts and feelings. Non-verbal cues such as smiling and maintaining eye contact convey warmth and encouragement." }
  ]
};

// Function to update text content based on selected language
function updateContent(language) {
  const content = language === 'fr' ? frenchContent : englishContent;

  document.getElementById("title").innerText = content.title;
  document.getElementById("program-description").innerText = content.programDescription;
  document.getElementById("guide-title").innerText = content.guideTitle;

  content.guideList.forEach(item => {
    document.getElementById(item.id).innerText = item.text;
  });
}

// Event listener for language selection
document.getElementById("language-selection").addEventListener("change", function() {
  updateContent(this.value);
});
