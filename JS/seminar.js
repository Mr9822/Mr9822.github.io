document.addEventListener('DOMContentLoaded', function () {
    const languageSelection = document.getElementById('language-selection');
    const seminarTitle = document.querySelector('header h1');
    const aboutTitle = document.getElementById('about-title');
    const aboutContent = document.getElementById('about-content');
    const aboutPhilanthropy = document.getElementById('about-philanthropy');
    const aboutValue = document.getElementById('about-value');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');
    const galleryTitle = document.getElementById('gallery-title');
    const reserveTitle = document.getElementById('reserve-title');
    const reserveContent = document.getElementById('reserve-content');

    languageSelection.addEventListener('change', function () {
        const selectedLanguage = languageSelection.value;
        if (selectedLanguage === 'fr') {
            seminarTitle.textContent = 'Restigouche Dojo Présente: Un Séminaire Spécial de BJJ avec Hal MacDonald';
            aboutTitle.textContent = 'À propos du Séminaire';
            aboutContent.textContent = "Rejoignez-nous pour un séminaire exclusif au Restigouche Dojo, animé par Hal MacDonald, ceinture noire de Jiu-Jitsu brésilien, avec des décennies d'expérience dans les arts martiaux, y compris le Muay Thai et la boxe professionnelle. Hal a remporté plusieurs championnats internationaux, dont plusieurs médailles d'or aux Championnats Mondiaux Master IBJJF de Jiu-Jitsu.";
            aboutPhilanthropy.textContent = "Au-delà de ses impressionnantes références en arts martiaux, Hal est également reconnu pour son engagement philanthropique. Il a organisé de nombreux événements de collecte de fonds, y compris le remarquable défi 60x60@60, qui a permis de récolter 75 000 $ pour Little Warriors, une organisation nationale dédiée à la prévention et au traitement des abus sexuels sur les enfants.";
            aboutValue.textContent = "Ce séminaire offre une occasion unique d'apprendre d'un praticien expérimenté qui apporte une richesse de connaissances, d'expérience et une profonde passion pour l'art du Jiu-Jitsu brésilien. Que vous soyez un praticien chevronné ou novice dans le sport, cet événement vous fournira des aperçus et des techniques précieuses qui peuvent élever votre pratique.";

            detailsTitle.textContent = 'Détails de l\'Événement';
            detailsContent.innerHTML = `
                <ul class="event-details">
                    <li><strong>Date :</strong> 8 octobre 2024</li>
                    <li><strong>Heure :</strong> [Insérer Heure]</li>
                    <li><strong>Lieu :</strong> Restigouche Dojo</li>
                    <li><strong>Inscription :</strong> Événement en espèces uniquement</li>
                </ul>
            `;

            galleryTitle.textContent = 'Galerie de Photos';
            reserveTitle.textContent = 'Réservez Votre Place!';
            reserveContent.textContent = "Ne manquez pas cette occasion de vous entraîner avec Hal MacDonald, une ceinture noire très respectée qui a apporté des contributions significatives sur et en dehors des tapis. Réservez votre place dès aujourd'hui!";
        } else {
            seminarTitle.textContent = 'Restigouche Dojo Presents: A Special BJJ Seminar with Hal MacDonald';
            aboutTitle.textContent = 'About the Seminar';
            aboutContent.textContent = "Join us for an exclusive seminar at Restigouche Dojo, featuring Hal MacDonald, a distinguished Brazilian Jiu-Jitsu Black Belt with decades of experience in martial arts, including Muay Thai and professional boxing. Hal has competed in and won several international championships, including multiple gold medals at the World Master IBJJF Jiu-Jitsu Championships.";
            aboutPhilanthropy.textContent = "Beyond his impressive martial arts credentials, Hal is also renowned for his dedication to philanthropy. He has organized numerous fundraising events, including the remarkable 60x60@60 challenge, which raised $75,000 for Little Warriors, a national charity dedicated to the prevention and treatment of child sexual abuse.";
            aboutValue.textContent = "This seminar offers a unique opportunity to learn from a seasoned practitioner who brings a wealth of knowledge, experience, and a deep passion for the art of Brazilian Jiu-Jitsu. Whether you are a seasoned practitioner or new to the sport, this event will provide valuable insights and techniques that can elevate your practice.";

            detailsTitle.textContent = 'Event Details';
            detailsContent.innerHTML = `
                <ul class="event-details">
                    <li><strong>Date:</strong> October 8th, 2024</li>
                    <li><strong>Time:</strong> [Insert Time]</li>
                    <li><strong>Location:</strong> Restigouche Dojo</li>
                    <li><strong>Registration:</strong> Cash only event</li>
                </ul>
            `;

            galleryTitle.textContent = 'Photo Gallery';
            reserveTitle.textContent = 'Reserve Your Spot!';
            reserveContent.textContent = "Don’t miss this chance to train with Hal MacDonald, a highly respected Black Belt who has made significant contributions both on and off the mats. Reserve your spot today!";
        }
    });
});

