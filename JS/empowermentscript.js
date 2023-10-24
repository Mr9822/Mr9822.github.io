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
  const testimonialContent1 = document.getElementById('testimonial-content-1');
  const testimonialContent2 = document.getElementById('testimonial-content-2');

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
      sectionContent4.textContent = "Ne manquez pas cette opportunité de vous autonomiser et d'acquérir des techniques de self-défense précieuses!";
    } else {
      workshopTitle.textContent = 'Empowerment Against Bullying Workshop - Techniques Edition';
      sectionTitle1.textContent = 'Unlock Your Inner Strength';
      sectionContent1.textContent = "Join us in this empowering workshop where you'll learn essential Judo, Brazilian Jiu-Jitsu (BJJ), and self-defense techniques. These martial arts are not just about physical moves; they are powerful tools that can boost your confidence and help you stand strong against bullying.";

      sectionTitle2.textContent = 'The Benefits of Judo, BJJ, and Self-Defense';
      sectionContent2.innerHTML = `
        <ul class="benefits-list">
          <li><i class="fas fa-check"></i> Build self-confidence and mental resilience</li>
          <li><i class="fas fa-check"></i> Develop practical self-defense skills for real-life situations</li>
          <li><i class="fas fa-check"></i> Learn to use opponent's strength to your advantage</li>
          <li><i class="fas fa-check"></i> Enhance physical fitness and coordination</li>
          <li><i class="fas fa-check"></i> Cultivate discipline, respect, and self-discipline</li>
        </ul>
      `;

      //sectionTitle3.textContent = 'What Participants Say';
      //testimonialContent1.textContent = '“…”';
      //testimonialContent2.textContent = '“…”';

      sectionTitle4.textContent = 'Register Now!';
      sectionContent4.textContent = "Don't miss this opportunity to empower yourself and acquire valuable self-defense techniques!";
    }
  });
});
