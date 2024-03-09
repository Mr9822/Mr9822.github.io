document.addEventListener('DOMContentLoaded', function () {
    const languageSelection = document.getElementById('language-selection');
    const workshopTitle = document.querySelector('header h1');
    const sectionTitle1 = document.getElementById('section-title-1');
    const sectionContent1 = document.getElementById('section-content-1');
    const sectionTitle2 = document.getElementById('section-title-2');
    const sectionContent2 = document.getElementById('section-content-2');
  //const sectionTitle3 = document.getElementById('section-title-3');
    const sectionTitle4 = document.getElementById('section-title-4');
    const sectionContent4 = document.getElementById('section-content-4');
    const disclaimerTitle = document.getElementById('disclaimer-title');
    const disclaimerContent = document.getElementById('disclaimer-content');

    languageSelection.addEventListener('change', function () {
        const selectedLanguage = languageSelection.value;
        if (selectedLanguage === 'fr') {
            workshopTitle.textContent = 'Atelier d\'Autonomisation Contre l\'Intimidation - Édition Techniques';
      sectionTitle1.textContent = 'Développez Votre Force Intérieure';
      sectionContent1.textContent = "Rejoignez-nous dans cet atelier d'autonomisation où vous apprendrez des techniques essentielles de judo, de jiu-jitsu brésilien (BJJ) et de self-défense. Ces arts martiaux ne se limitent pas aux mouvements physiques; ils sont des outils puissants qui peuvent renforcer votre confiance en vous et vous aider à vous défendre contre l'intimidation.";

      sectionTitle2.textContent = 'Les Avantages du Judo, du BJJ et de la Self-Défense';
      sectionContent2.innerHTML = `
        <ul class="benefits-list">
          <li><i class="fas fa-check"></i> Renforcez votre confiance en vous et votre résilience mentale</li>
          <li><i class="fas fa-check"></i> Développez des compétences pratiques de self-défense pour des situations réelles</li>
          <li><i class="fas fa-check"></i> Apprenez à utiliser la force de l'adversaire à votre avantage</li>
          <li><i class="fas fa-check"></i> Améliorez votre condition physique et votre coordination</li>
          <li><i class="fas fa-check"></i> Cultivez la discipline, le respect et l'auto-discipline</li>
        </ul>
      `;

      //sectionTitle3.textContent = 'Témoignages des Participants';
      //testimonialContent1.textContent = '«...»';
      //testimonialContent2.textContent = '«...»';

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
