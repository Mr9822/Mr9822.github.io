document.addEventListener('DOMContentLoaded', function () {
    const languageSelection = document.getElementById('language-selection');
    const workshopTitle = document.querySelector('header h1');
    const sectionTitle1 = document.getElementById('section-title-1');
    const sectionContent1 = document.getElementById('section-content-1');
    const sectionTitle2 = document.getElementById('section-title-2');
    const sectionContent2 = document.getElementById('section-content-2');
    const sectionTitle4 = document.getElementById('section-title-4');
    const sectionContent4 = document.getElementById('section-content-4');
    const disclaimerTitle = document.getElementById('disclaimer-title');
    const disclaimerContent = document.getElementById('disclaimer-content');

    languageSelection.addEventListener('change', function () {
        const selectedLanguage = languageSelection.value;
        if (selectedLanguage === 'fr') {
            workshopTitle.textContent = 'Atelier de Prévention des Chutes et d\'Atterrissage Sécurisé';
            sectionTitle1.textContent = 'Bienvenue à l\'Atelier de Prévention des Chutes';
            sectionContent1.textContent = "Notre programme est conçu pour aider les personnes âgées à réduire leur risque de chute, à améliorer leur équilibre et leur mobilité, tout en leur apprenant comment tomber correctement pour réduire le risque de blessure. Rejoignez-nous pour des sessions d'une heure animées par des instructeurs expérimentés une fois par semaine.";

            sectionTitle2.textContent = 'Avantages du Programme';
            sectionContent2.innerHTML = `
                <ul class="benefits-list">
                    <li><i class="fas fa-check"></i> Réduire le risque de chute</li>
                    <li><i class="fas fa-check"></i> Améliorer l'équilibre et la mobilité</li>
                    <li><i class="fas fa-check"></i> Apprendre les techniques de chute appropriées</li>
                    <li><i class="fas fa-check"></i> Communauté de soutien et instructeurs expérimentés</li>
                </ul>
            `;

            sectionTitle4.textContent = 'Inscrivez-vous dès maintenant !';
            sectionContent4.textContent = "Faites le premier pas vers un mode de vie plus sûr et plus actif!";

            disclaimerTitle.textContent = 'Avertissement';
            disclaimerContent.innerHTML = `
                <p>Veuillez noter que notre programme ne garantit pas la sécurité absolue. Bien que nous enseignions des techniques appropriées pour réduire le risque de blessure, des accidents peuvent encore se produire. Les participants doivent rester vigilants, éviter les situations dangereuses et consulter leur professionnel de santé avant de commencer tout nouveau programme d'exercice.</p>
            `;
        } else {
            workshopTitle.textContent = 'Fall Prevention and Safe Landing Workshop';
            sectionTitle1.textContent = 'Welcome to the Fall Prevention Workshop';
            sectionContent1.textContent = "Our program is designed to help elderly adults reduce their risk of falling and improve their balance and mobility, while also teaching them how to fall properly to reduce the risk of injury. Join us for 1-hour sessions led by experienced instructors once a week.";

            sectionTitle2.textContent = 'Program Benefits';
            sectionContent2.innerHTML = `
                <ul class="benefits-list">
                    <li><i class="fas fa-check"></i> Reduce the risk of falling</li>
                    <li><i class="fas fa-check"></i> Improve balance and mobility</li>
                    <li><i class="fas fa-check"></i> Learn proper falling techniques</li>
                    <li><i class="fas fa-check"></i> Supportive community and experienced instructors</li>
                </ul>
            `;

            sectionTitle4.textContent = 'Enroll Now!';
            sectionContent4.textContent = "Take the first step towards a safer and more active lifestyle!";

            disclaimerTitle.textContent = 'Disclaimer';
            disclaimerContent.innerHTML = `
                <p>Please note that our program is not a guarantee of safety. While we teach proper techniques to reduce the risk of injury, accidents can still occur. Participants should stay vigilant and avoid dangerous situations, and consult with their healthcare provider before starting any new exercise program.</p>
            `;
        }
    });
});
