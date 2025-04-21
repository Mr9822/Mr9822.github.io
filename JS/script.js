const frenchContent = {
  title: "Atelier d'autodéfense pour femmes",
  sectionTitle1: "Atelier d'autodéfense pour femmes : Contrôle & Connexion <br>*Dates à déterminer*",
  sectionContent1: "Nous sommes ravis de ramener notre atelier d'autodéfense pour femmes — avec un nouveau focus! Lors de notre session précédente, nous avons abordé la prévention, la création de distance et la recherche de sécurité. Cette fois, nous explorons ce qui se passe lorsque le contact est déjà établi.<br><br>Apprenez les techniques les plus efficaces de Judo et de Jiu-Jitsu Brésilien pour contrôler, immobiliser et neutraliser un agresseur jusqu'à l'arrivée des secours. Que vous soyez débutante ou athlète expérimentée, nos instructeurs qualifiés travailleront avec vous pour développer la confiance et le calme sous pression.<br><br>Notre objectif est de créer un environnement sécuritaire, inclusif et solidaire, où vous pourrez vous sentir forte et en contrôle — sans promouvoir l’agressivité ou la violence. Joignez-vous à nous pour apprendre à reprendre le contrôle lorsque ça compte le plus.",
  sectionTitle2: "Inscrivez-vous maintenant !",
  sectionContent2: "Faites le premier pas vers plus de confiance, de contrôle et de sécurité.",
  disclaimerTitle: "Avertissement",
  disclaimerContent: "Veuillez noter que notre programme ne garantit pas la sécurité absolue. Bien que nous enseignions des techniques d'autodéfense, chaque situation est unique et les participantes doivent faire preuve de jugement dans la vie réelle. Notre objectif est d'offrir des compétences et de renforcer la confiance, mais la sécurité dépend de nombreux facteurs."
};

const englishContent = {
  title: "Women's Self-Defence Workshop",
  sectionTitle1: "Women's Self-Defence Workshop: Control & Connection <br>*Dates to be determined*",
  sectionContent1: "We're excited to bring back our Women's Self-Defence Workshop — with a new focus! In our previous session, we covered prevention, creating distance, and seeking safety. This time, we’re diving into what happens when connection is already made.<br><br>Learn the most effective Judo and Brazilian Jiu-Jitsu techniques to control, immobilize, and neutralize an aggressor until help arrives. Whether you're a beginner or an experienced athlete, our skilled instructors will work with you to develop confidence and calm under pressure.<br><br>Our goal is to create a safe, supportive, and inclusive environment where you can feel empowered and strong — without promoting aggression or violence. Join us in learning how to take control when it matters most.",
  sectionTitle2: "Enroll Now!",
  sectionContent2: "Take the first step toward building confidence, control, and safety.",
  disclaimerTitle: "Disclaimer",
  disclaimerContent: "Please note that our program is not a guarantee of safety. While we teach self-defence techniques, situations can vary, and participants should use their judgment in real-life situations. Our goal is to empower women with skills and confidence, but ultimate safety relies on various factors."
};

// Target HTML elements
const languageSelection = document.getElementById("language-selection");
const pageTitle = document.querySelector("header h1");
const sectionTitle1 = document.getElementById("section-title-1");
const sectionContent1 = document.getElementById("section-content-1");
const sectionTitle2 = document.getElementById("section-title-2");
const sectionContent2 = document.getElementById("section-content-2");
const disclaimerTitle = document.getElementById("disclaimer-title");
const disclaimerContent = document.getElementById("disclaimer-content").querySelector("p");

// Update content based on selected language
languageSelection.addEventListener("change", function () {
  const selectedLang = languageSelection.value;
  const content = selectedLang === "fr" ? frenchContent : englishContent;

  pageTitle.innerText = content.title;
  sectionTitle1.innerHTML = content.sectionTitle1;
  sectionContent1.innerHTML = content.sectionContent1;
  sectionTitle2.innerText = content.sectionTitle2;
  sectionContent2.innerText = content.sectionContent2;
  disclaimerTitle.innerText = content.disclaimerTitle;
  disclaimerContent.innerText = content.disclaimerContent;
});
