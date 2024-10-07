const englishContent = {
  title: "Tiny Tots Storyline",
  introMessage: "Follow the animal friends as they learn Judo values and grow together!",
  levels: [
    {
      animal: "The Lion’s Courage and Respect",
      description: "Once upon a time, there was a big, brave lion. The lion wanted to learn something new, so it went to a special place where all the animals played and learned together on a soft mat. The lion felt a little scared at first, but it was very brave and took its first step onto the mat. This showed courage!"
    },
    {
      animal: "The Octopus’s Focus and Self-Control",
      description: "In the deep, blue ocean, there lived an octopus with eight arms. The octopus was very good at using all its arms at the same time! It could do many things at once because it had great self-control—that means it could stay calm and focus."
    },
    {
      animal: "The Turtle’s Friendship and Perseverance",
      description: "In a green meadow, there was a little turtle who wanted to climb a hill. The hill was very tall, but the turtle didn’t stop. It kept going, step by step, very slowly. This is called perseverance—it means you don’t give up, even when things are hard!"
    },
    {
      animal: "The Eagle’s Confidence, Honour, and Modesty",
      description: "High in the sky, there was an eagle with big, strong wings. The eagle loved to fly very high and see everything below. It felt very confident because it practiced flying every day. The eagle was proud of how well it could fly, but it never bragged. This is called modesty—it means you don’t need to show off, even when you’re really good at something."
    }
  ],
  endMessage: "Each bracelet is a special reminder of how we can be brave, kind, and strong as we learn and grow together!"
};

const frenchContent = {
  title: "Histoire des Tout-petits",
  introMessage: "Suivez les amis animaux tandis qu'ils apprennent les valeurs du judo et grandissent ensemble!",
  levels: [
    {
      animal: "Le Courage et le Respect du Lion",
      description: "Il était une fois un grand lion courageux. Le lion voulait apprendre quelque chose de nouveau, alors il est allé dans un endroit spécial où tous les animaux jouaient et apprenaient ensemble sur un tapis doux. Le lion avait un peu peur au début, mais il a été très courageux et a fait son premier pas sur le tapis. Cela a montré du courage !"
    },
    {
      animal: "La Concentration et le Contrôle de Soi de la Pieuvre",
      description: "Dans l'océan bleu profond, vivait une pieuvre avec huit bras. La pieuvre était très douée pour utiliser tous ses bras en même temps ! Elle pouvait faire beaucoup de choses à la fois parce qu'elle avait un grand contrôle de soi, ce qui signifie qu'elle pouvait rester calme et se concentrer."
    },
    {
      animal: "L'Amitié et la Persévérance de la Tortue",
      description: "Dans une prairie verte, il y avait une petite tortue qui voulait gravir une colline. La colline était très haute, mais la tortue ne s'est pas arrêtée. Elle a continué pas à pas, très lentement. C'est ce qu'on appelle la persévérance — cela signifie qu'on ne renonce pas, même quand les choses sont difficiles !"
    },
    {
      animal: "La Confiance, l'Honneur et la Modestie de l'Aigle",
      description: "Haut dans le ciel, il y avait un aigle avec de grandes ailes puissantes. L'aigle adorait voler très haut et voir tout ce qui se trouvait en dessous. Il se sentait très confiant parce qu'il s'entraînait à voler tous les jours. L'aigle était fier de la façon dont il pouvait voler, mais il ne se vantait jamais. C'est ce qu'on appelle la modestie — cela signifie que vous n'avez pas besoin de vous vanter, même quand vous êtes vraiment doué pour quelque chose."
    }
  ],
  endMessage: "Chaque bracelet est un rappel spécial de comment nous pouvons être courageux, gentils et forts en apprenant et en grandissant ensemble!"
};

function changeLanguage(lang) {
  const titleElement = document.querySelector('h1');
  const introElement = document.querySelector('header h4');
  const levelSections = document.querySelectorAll('.section');
  const endSectionTitle = document.querySelector('.section:last-child h2'); // Select the last section's title

  if (lang === 'fr') {
    titleElement.textContent = frenchContent.title;
    introElement.textContent = frenchContent.introMessage;

    levelSections.forEach((section, index) => {
      if (index < frenchContent.levels.length) {
        const levelContent = frenchContent.levels[index];
        section.querySelector('h2').textContent = `Niveau ${index + 1}: ${levelContent.animal}`;
        section.querySelector('p:last-child').textContent = levelContent.description;
      }
    });

    // Update the last section "The End"
    endSectionTitle.textContent = "La Fin";
    document.querySelector('.end-message').textContent = frenchContent.endMessage;

  } else {
    titleElement.textContent = englishContent.title;
    introElement.textContent = englishContent.introMessage;

    levelSections.forEach((section, index) => {
      if (index < englishContent.levels.length) {
        const levelContent = englishContent.levels[index];
        section.querySelector('h2').textContent = `Level ${index + 1}: ${levelContent.animal}`;
        section.querySelector('p:last-child').textContent = levelContent.description;
      }
    });

    // Update the last section "The End"
    endSectionTitle.textContent = "The End";
    document.querySelector('.end-message').textContent = englishContent.endMessage;
  }
}

document.getElementById('language-selection').addEventListener('change', function() {
  changeLanguage(this.value);
});
