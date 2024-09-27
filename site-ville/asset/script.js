// Fonction pour afficher/cacher le menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Fonction pour la carte interactive (exemple avec Leaflet)
const map = L.map('map').setView([48.8566, 2.3522], 13); // Coordonnées de Paris (exemple)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Ajouter un marqueur sur la carte
const marker = L.marker([48.8566, 2.3522]).addTo(map);
marker.bindPopup("<b>Ville-Lumière</b>").openPopup();

// Fonction pour le calendrier (exemple avec un simple affichage)
const calendar = document.querySelector('.calendar');
const events = [
  { date: '2024-03-15', title: 'Festival de musique' },
  { date: '2024-04-20', title: 'Marché artisanal' },
  // ... ajouter d'autres événements
];

events.forEach(event => {
  const eventElement = document.createElement('div');
  eventElement.classList.add('event');
  eventElement.innerHTML = `
    <h3>${event.title}</h3>
    <p>${event.date}</p>
  `;
  calendar.appendChild(eventElement);
});

// Fonction pour le formulaire de contact (exemple simple)
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Récupérer les données du formulaire
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Envoyer les données du formulaire (exemple de console.log)
  console.log('Nom:', nom);
  console.log('Email:', email);
  console.log('Message:', message);

  // Afficher un message de confirmation
  alert('Votre message a bien été envoyé.');
});
