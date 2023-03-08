// Add some interactivity with JavaScript
const frenchContent = {
    title: "Cours d'autodéfense pour femmes",
    welcomeMessage: "Bienvenue au cours d'autodéfense pour femmes au Restigouche Dojo!",
    programDescription: "Ce cours est conçu pour donner aux femmes les compétences et les connaissances nécessaires pour se défendre et s'éloigner de situations potentiellement dangereuses. Nos instructeurs expérimentés vous guideront à travers 4 semaines d'enseignement, une fois par semaine pendant 60 minutes chacun. À la fin du cours, vous aurez la confiance et les compétences nécessaires pour vous protéger et rester en sécurité dans une variété de scénarios.",
    enrollMessage: "Inscrivez-vous maintenant et faites le premier pas pour vous sentir en confiance et en sécurité!",
    enrollButton: "Inscription"
    };
    
    const englishContent = {
    title: "Women's Self Defense Course",
    welcomeMessage: "Welcome to the Women's Self Defense course at Restigouche Dojo!",
    programDescription: "This course is designed to empower women with the skills and knowledge to defend themselves and get away from potentially dangerous situations. Our experienced instructors will guide you through 4 weeks of instruction, one time per week for 60 minutes each. In this course, you will not only learn practical self-defense techniques but also strategies for avoiding dangerous situations and how to escape if necessary. By the end of the course, you will have the confidence and skills to protect yourself and stay safe in a variety of scenarios.",
    enrollMessage: "Enroll now and take the first step towards feeling confident and secure!",
    enrollButton: "Enroll"
    };
    
    const languageSelection = document.getElementById("language-selection");
    const title = document.getElementById("title");
    const welcomeMessage = document.getElementById("welcome-message");
    const programDescription = document.getElementById("program-description");
    
    const enrollMessage = document.getElementById("enroll-message");
    const enrollButton = document.getElementById("enroll-btn");
    
    languageSelection.addEventListener("change", function() {
    const selectedLanguage = languageSelection.value;
    if (selectedLanguage === "fr") {
    title.innerText = frenchContent.title;
    welcomeMessage.innerText = frenchContent.welcomeMessage;
    programDescription.innerText = frenchContent.programDescription;
    enrollMessage.innerText = frenchContent.enrollMessage;
    enrollButton.innerText = frenchContent.enrollButton;
    } else {
    title.innerText = englishContent.title;
    welcomeMessage.innerText = englishContent.welcomeMessage;
    programDescription.innerText = englishContent.programDescription;
    enrollMessage.innerText = englishContent.enrollMessage;
    enrollButton.innerText = englishContent.enrollButton;
    }
    });
