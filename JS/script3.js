// Add some interactivity with JavaScript
const frenchContent = {
  title: "Groupe d'activités - Découvrez le pouvoir du jeu au Restigouche Dojo!",
  programDescription: "Appel à tous les parents et petits guerriers ! Vous recherchez une activité qui stimule non seulement l'esprit et le corps de votre enfant, mais qui favorise également le développement de compétences essentielles pour son développement global ? Ne cherchez plus ! Le Restigouche Dojo présente avec fierté notre nouvelle classe passionnante, où les enfants peuvent laisser libre cours à leur imagination, s'engager dans le jeu libre et cultiver des compétences essentielles !",
  enrollMessage: "Inscrivez-vous maintenant",
  whyrestigouchedojo: "Pourquoi choisir le Restigouche Dojo pour les groupes d'activités?", 
  reasonone: "Développer des compétences essentielles grâce au jeu libre",
  reasononetext: "Notre cours de groupe d'activités au Restigouche Dojo offre aux enfants l'occasion de s'engager dans le jeu libre, favorisant le développement de compétences essentielles telles que la résolution de problèmes, la créativité et la pensée critique.",
  reasontwo: "Cultiver les compétences sociales et le travail d'équipe",
  reasontwotext: "Dans notre cours de groupe d'activités, nous accordons la priorité au travail d'équipe et à la coopération, permettant aux enfants d'apprendre des compétences sociales importantes et de se faire de nouveaux amis. Grâce à des activités interactives, ils amélioreront leurs capacités de communication et construiront des relations solides.",
  reasonthree: "Vivre un jeu rempli de plaisir et d'apprentissage actif",
  reasonthreetext: "Le groupe d'activités du Restigouche Dojo offre un environnement dynamique et agréable où les enfants peuvent s'amuser tout en restant actifs. Nous croyons que l'apprentissage doit être amusant, et notre cours garantit une expérience passionnante pour chaque enfant.",
};

const englishContent = {
  title: "Activity Groups - Discover the Power of Play at Restigouche Dojo! ",
  programDescription: "Calling all parents and little warriors! Are you searching for an activity that not only engages your child's mind and body but also nurtures essential skills for their overall development? Look no further! Restigouche Dojo proudly presents our exciting new class, where children can unleash their imagination, engage in free play, and cultivate essential skills!",
  enrollMessage: "Register now",
  whyrestigouchedojo: "Why Choose Restigouche Dojo for Activity Groups?",
  reasonone: "Develop Essential Skills through Free Play",
  reasononetext: "Our Activity Group class at Restigouche Dojo offers children the opportunity to engage in free play, fostering the development of essential skills such as problem-solving, creativity, and critical thinking.",
  reasontwo: "Cultivate Social Skills and Teamwork",
  reasontwotext: "In our Activity Group class, we prioritize teamwork and cooperation, allowing children to learn important social skills and make new friends. Through interactive activities, they will enhance their communication abilities and build strong relationships.",
  reasonthree: "Experience Fun-Filled Play and Active Learning",
  reasonthreetext: "Restigouche Dojo's Activity Group provides a dynamic and enjoyable environment where children can have a great time while staying active. We believe that learning should be fun, and our class ensures an exciting experience for every child.",
};

const languageSelection = document.getElementById("language-selection");
const title = document.getElementById("title");
const programDescription = document.getElementById("program-description");
const whyrestigouchedojo = document.getElementById("wwhyrestigouchedojo");
const reasonone = document.getElementById("reasonone");
const reasononetext = document.getElementById("reasononetext");
const reasontwo = document.getElementById("reasontwo");
const reasontwotext = document.getElementById("reasontwotext");
const reasonthree = document.getElementById("reasonthree");
const reasonthreetext = document.getElementById("reasonthreetext");
const enrollMessage = document.getElementById("enroll-message");


languageSelection.addEventListener("change", function () {
  const selectedLanguage = languageSelection.value;

  if (selectedLanguage === "fr") {
    title.innerText = frenchContent.title;
    programDescription.innerText = frenchContent.programDescription;
    whyrestigouchedojo.innerText = frenchContent.whyrestigouchedojo;
    reasonone.innerText = frenchContent.reasonone;
    reasononetext.innerText = frenchContent.reasononetext;
    reasontwo.innerText = frenchContent.reasontwo;
    reasontwotext.innerText = frenchContent.reasontwotext;
    reasonthree.innerText = frenchContent.reasonthree;
    reasonthreetext.innerText = frenchContent.reasonthreetext;
    enrollMessage.innerText = frenchContent.enrollMessage;
  } else {
    title.innerText = englishContent.title;
    programDescription.innerText = englishContent.programDescription;
    whyrestigouchedojo.innerText = englishContent.whyrestigouchedojo;
    reasonone.innerText = englishContent.reasonone;
    reasononetext.innerText = englishContent.reasononetext;
    reasontwo.innerText = englishContent.reasontwo;
    reasontwotext.innerText = englishContent.reasontwotext;
    reasonthree.innerText = englishContent.reasonthree;
    reasonthreetext.innerText = englishContent.reasonthreetext;
    enrollMessage.innerText = englishContent.enrollMessage;
  }
});