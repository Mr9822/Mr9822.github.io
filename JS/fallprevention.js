document.addEventListener('DOMContentLoaded', function () {
    const languageSelection = document.getElementById('language-selection');
    const sectionTitle4 = document.getElementById('section-title-4');
    const sectionContent4 = document.getElementById('section-content-4');
    const disclaimerTitle = document.getElementById('disclaimer-title');
    const disclaimerContent = document.getElementById('disclaimer-content');

    languageSelection.addEventListener('change', function () {
        const selectedLanguage = languageSelection.value;
        if (selectedLanguage === 'fr') {
            sectionTitle4.textContent = 'Inscrivez-vous dès maintenant !';
            sectionContent4.textContent = "Faites le premier pas vers un mode de vie plus sûr et plus actif!";

            disclaimerTitle.textContent = 'Avertissement';
            disclaimerContent.innerHTML = `
                <p>Veuillez noter que notre programme ne garantit pas la sécurité absolue. Bien que nous enseignions des techniques appropriées pour réduire le risque de blessure, des accidents peuvent encore se produire. Les participants doivent rester vigilants, éviter les situations dangereuses et consulter leur professionnel de santé avant de commencer tout nouveau programme d'exercice.</p>
            `;
        } else {
            sectionTitle4.textContent = 'Enroll Now!';
            sectionContent4.textContent = "Take the first step towards a safer and more active lifestyle!";

            disclaimerTitle.textContent = 'Disclaimer';
            disclaimerContent.innerHTML = `
                <p>Please note that our program is not a guarantee of safety. While we teach proper techniques to reduce the risk of injury, accidents can still occur. Participants should stay vigilant and avoid dangerous situations, and consult with their healthcare provider before starting any new exercise program.</p>
            `;
        }
    });
});
