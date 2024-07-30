document.addEventListener('DOMContentLoaded', () => {
    const frenchContent = {
        title: "Votre Première Compétition de Judo : Un Guide pour les Athlètes du Restigouche Dojo",
        programDescription: "Félicitations pour avoir franchi le pas vers votre première compétition de Judo. La compétition est un excellent moyen de tester vos compétences, de gagner de l'expérience et de grandir en tant qu'artiste martial. Ce guide vous aidera à vous préparer à la fois physiquement et mentalement pour le défi à venir.",
        guideTitle: "Guide de Préparation pour la Compétition",
        guideList: [
            { id: "define-objectives", text: "1. Définissez vos Objectifs" },
            { id: "define-objectives-text", text: "Avant de monter sur le tatami, clarifiez vos objectifs. Que ce soit pour tester vos techniques, acquérir de l'expérience ou repousser vos limites, avoir un objectif clair vous aidera à orienter votre préparation." },
            { id: "create-game-plan", text: "2. Créez un Plan de Jeu" },
            { id: "create-game-plan-text", text: "Un plan de jeu solide est crucial pour réussir en Judo. Ce plan doit décrire comment vous aborderez chaque match, en tenant compte des éléments suivants :" },
            { id: "attacks", text: "Attaques : Choisissez vos projections principales (par exemple, O-Soto-Gari, Ippon-Seoi-Nage) et maîtrisez-les bien. Ayez quelques techniques de secours prêtes." },
            { id: "groundwork", text: "Travail au Sol : Soyez prêt pour le Ne-Waza (travail au sol). Connaissez vos prises préférées (par exemple, Kesa-Gatame, Yoko-Shiho-Gatame) et vos soumissions (par exemple, Juji-Gatame)." },
            { id: "defense", text: "Défense : Ayez des stratégies pour défendre contre les attaques courantes et vous remettre de positions défavorables." },
            { id: "train-smart", text: "3. Entraînez-vous Intelligemment" },
            { id: "train-smart-text", text: "La constance et un entraînement intelligent sont clés pour se préparer à une compétition de Judo." },
            { id: "technical-drills", text: "Exercices Techniques : Concentrez-vous sur la perfection de vos techniques de projection et transitions. La pratique répétée développe la mémoire musculaire." },
            { id: "randori", text: "Randori : Engagez-vous dans des randoris avec des partenaires de différents niveaux et tailles pour simuler les conditions de match." },
            { id: "conditioning", text: "Conditionnement : Incorporez des exercices de force, de vitesse et d'agilité. Des exercices comme le sprint, les plyométriques et les entraînements de base amélioreront votre performance." },
            { id: "mental-preparation", text: "4. Préparation Mentale" },
            { id: "mental-preparation-text", text: "L'aspect mental du Judo est aussi important que la préparation physique." },
            { id: "stay-calm", text: "Restez Calme : Apprenez à gérer le stress avant la compétition. Pratiquez la respiration profonde : inspirez par le nez pendant quatre secondes et expirez par la bouche pendant huit secondes." },
            { id: "visualization", text: "Visualisation : Imaginez vos matchs dans votre esprit. Visualisez-vous en train d'exécuter des projections, de défendre et de réagir à différentes situations. Visualisez toujours des résultats positifs." },
            { id: "positive-self-talk", text: "Discours Positif : Utilisez des affirmations pour renforcer votre confiance. Rappelez-vous de votre entraînement et de vos points forts." },
            { id: "understand-rules", text: "5. Comprenez les Règles" },
            { id: "understand-rules-text", text: "Familiarisez-vous avec les règles de la compétition de Judo pour éviter les pénalités et maximiser votre potentiel de scoring." },
            { id: "scoring", text: "Scoring : Comprenez comment les points sont attribués pour les projections, les contrôles et les soumissions. L'Ippon (point complet) gagne le match, tandis que le Waza-Ari (demi-point) peut mener à une victoire éventuelle s'il est accumulé." },
            { id: "penalties", text: "Pénalités : Apprenez les pénalités (Shido) pour les infractions aux règles. Évitez les actions qui entraînent des pénalités, telles que les violations de prise ou le ralentissement." },
            { id: "gear-up", text: "6. Préparez votre Équipement" },
            { id: "gear-up-text", text: "Assurez-vous d'avoir le bon équipement :" },
            { id: "gi", text: "Gi (Judogi) : Votre gi doit être propre, en bon état et conforme aux spécifications de la compétition. Assurez-vous qu'il vous va bien." },
            { id: "belt", text: "Ceinture : Portez une ceinture correspondant à votre grade." },
            { id: "extras", text: "Extras : Apportez un gi de rechange, de l'eau, des collations et tout autre objet personnel dont vous pourriez avoir besoin." },
            { id: "warm-up", text: "7. Échauffez-vous Correctement" },
            { id: "warm-up-text", text: "Un bon échauffement prépare votre corps et votre esprit." },
            { id: "routine", text: "Routine : Effectuez une routine d'échauffement familière pour préparer vos muscles et calmer vos nerfs. Incluez des étirements dynamiques et un léger randori." },
            { id: "focus", text: "Concentration : Concentrez-vous sur votre échauffement, pas sur le match à venir. Les mouvements familiers vous aident à vous ancrer." },
            { id: "nutrition-hydration", text: "8. Nutrition et Hydratation" },
            { id: "nutrition-hydration-text", text: "Une bonne nutrition et hydratation sont cruciales pour une performance optimale." },
            { id: "hydrate", text: "Hydratez-vous : Buvez beaucoup d'eau avant et le jour de la compétition." },
            { id: "eat-well", text: "Mangez Bien : Consommez une alimentation équilibrée riche en protéines, en glucides et en graisses saines. Le jour de la compétition, optez pour des aliments légers et facilement digestibles." },
            { id: "competition-day", text: "9. Le Jour de la Compétition" },
            { id: "competition-day-text", text: "Le jour de la compétition, arrivez tôt et restez calme." },
            { id: "arrival", text: "Arrivée : Donnez-vous suffisamment de temps pour vous enregistrer, vous échauffer et vous installer." },
            { id: "warm-up-again", text: "Échauffez-vous à nouveau : Faites un léger échauffement pour préparer votre corps à la compétition." },
            { id: "post-competition", text: "10. Réflexion Post-Compétition" },
            { id: "post-competition-text", text: "Réfléchir à votre performance vous aide à identifier les domaines à améliorer." },
            { id: "seek-feedback", text: "Cherchez des Retours : Demandez des commentaires constructifs à votre coach et à vos coéquipiers. Apprenez de vos matchs et de votre entraînement." },
            { id: "reflect-on-experience", text: "Réfléchissez à l'Expérience : Considérez ce qui s'est bien passé et ce qui pourrait être amélioré. Utilisez ces informations pour guider votre entraînement futur." }
        ]
    };

    const englishContent = {
        title: "Your First Judo Competition: A Guide for Restigouche Dojo Athletes",
        programDescription: "Congratulations on taking the step to compete in your first Judo tournament. Competing is a fantastic way to test your skills, gain experience, and grow as a martial artist. This guide will help you prepare both physically and mentally for the challenge ahead.",
        guideTitle: "Competition Preparation Guide",
        guideList: [
            { id: "define-objectives", text: "1. Define Your Objectives" },
            { id: "define-objectives-text", text: "Before you step onto the mat, clarify your goals. Whether it’s to test your techniques, gain competitive experience, or push your limits, having a clear objective will help guide your preparation." },
            { id: "create-game-plan", text: "2. Create a Game Plan" },
            { id: "create-game-plan-text", text: "A solid game plan is crucial for success in Judo. This plan should outline how you will approach each match, considering the following elements:" },
            { id: "attacks", text: "Attacks: Choose your main throws (e.g., O-Soto-Gari, Ippon-Seoi-Nage) and practice them thoroughly. Have a few backup techniques ready." },
            { id: "groundwork", text: "Groundwork: Be prepared for Ne-Waza (ground work). Know your preferred pins (e.g., Kesa-Gatame, Yoko-Shiho-Gatame) and submissions (e.g., Juji-Gatame)." },
            { id: "defense", text: "Defense: Have strategies for defending against common attacks and recovering from unfavorable positions." },
            { id: "train-smart", text: "3. Train Smart" },
            { id: "train-smart-text", text: "Consistency and smart training are key for preparing for a Judo competition." },
            { id: "technical-drills", text: "Technical Drills: Focus on perfecting your throwing techniques and transitions. Repetitive practice builds muscle memory." },
            { id: "randori", text: "Randori: Engage in randoris with partners of different levels and sizes to simulate match conditions." },
            { id: "conditioning", text: "Conditioning: Include strength, speed, and agility exercises. Sprints, plyometrics, and core training will enhance your performance." },
            { id: "mental-preparation", text: "4. Mental Preparation" },
            { id: "mental-preparation-text", text: "The mental aspect of Judo is as important as physical preparation." },
            { id: "stay-calm", text: "Stay Calm: Learn to manage pre-competition stress. Practice deep breathing: inhale through your nose for four seconds, and exhale through your mouth for eight seconds." },
            { id: "visualization", text: "Visualization: Imagine your matches in your mind. Visualize yourself executing throws, defending, and reacting to various situations. Always visualize positive outcomes." },
            { id: "positive-self-talk", text: "Positive Self-Talk: Use affirmations to boost your confidence. Remind yourself of your training and strengths." },
            { id: "understand-rules", text: "5. Understand the Rules" },
            { id: "understand-rules-text", text: "Familiarize yourself with the competition rules to avoid penalties and maximize scoring potential." },
            { id: "scoring", text: "Scoring: Understand how points are awarded for throws, holds, and submissions. Ippon (full point) wins the match, while Waza-Ari (half-point) can lead to eventual victory if accumulated." },
            { id: "penalties", text: "Penalties: Learn about penalties (Shido) for rule violations. Avoid actions that result in penalties, such as grip violations or stalling." },
            { id: "gear-up", text: "6. Gear Up" },
            { id: "gear-up-text", text: "Make sure you have the right equipment:" },
            { id: "gi", text: "Gi (Judogi): Your gi should be clean, in good condition, and compliant with competition specifications. Ensure it fits well." },
            { id: "belt", text: "Belt: Wear a belt that corresponds to your rank." },
            { id: "extras", text: "Extras: Bring a spare gi, water, snacks, and any other personal items you might need." },
            { id: "warm-up", text: "7. Warm Up Properly" },
            { id: "warm-up-text", text: "A good warm-up prepares your body and mind." },
            { id: "routine", text: "Routine: Follow a familiar warm-up routine to prepare your muscles and calm your nerves. Include dynamic stretches and light randori." },
            { id: "focus", text: "Focus: Concentrate on your warm-up, not on the upcoming match. Familiar movements help center you." },
            { id: "nutrition-hydration", text: "8. Nutrition and Hydration" },
            { id: "nutrition-hydration-text", text: "Proper nutrition and hydration are crucial for optimal performance." },
            { id: "hydrate", text: "Hydrate: Drink plenty of water before and on the day of the competition." },
            { id: "eat-well", text: "Eat Well: Maintain a balanced diet rich in proteins, carbohydrates, and healthy fats. On competition day, choose light and easily digestible foods." },
            { id: "competition-day", text: "9. Competition Day" },
            { id: "competition-day-text", text: "On the day of the competition, arrive early and stay calm." },
            { id: "arrival", text: "Arrival: Give yourself ample time to check in, warm up, and get settled." },
            { id: "warm-up-again", text: "Warm Up Again: Do a light warm-up to prepare your body for competition." },
            { id: "post-competition", text: "10. Post-Competition Reflection" },
            { id: "post-competition-text", text: "Reflecting on your performance helps identify areas for improvement." },
            { id: "seek-feedback", text: "Seek Feedback: Ask for constructive feedback from your coach and teammates. Learn from your matches and training." },
            { id: "reflect-on-experience", text: "Reflect on the Experience: Consider what went well and what could be improved. Use this information to guide your future training." }
        ]
    };

    function updateContent(language) {
        const content = language === 'fr' ? frenchContent : englishContent;

        document.querySelector('#title').textContent = content.title;
        document.querySelector('#program-description').textContent = content.programDescription;
        document.querySelector('#guide-title').textContent = content.guideTitle;

        const guideList = document.querySelector('#guide-list');
        guideList.innerHTML = '';

        content.guideList.forEach(item => {
            const listItem = document.createElement('li');
            listItem.id = item.id;

            if (item.id.includes('-text')) {
                listItem.textContent = item.text;
                listItem.style.marginLeft = '20px';
            } else {
                listItem.textContent = item.text;
                listItem.style.fontWeight = 'bold';
            }

            guideList.appendChild(listItem);
        });
    }

    document.querySelector('#language-switcher').addEventListener('change', (event) => {
        updateContent(event.target.value);
    });

    updateContent('en'); // Default to English on page load
});
