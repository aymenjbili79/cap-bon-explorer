document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reservation-form");
  const activitySelect = document.getElementById("activite-select");
  const dateInput = document.getElementById("date-reservation");
  const participantsInput = document.getElementById("participants");
  const btnCalculer = document.getElementById("btn-calculer");
  const btnReset = document.getElementById("btn-reset");

  // Éléments d'affichage du tarif
  const unitPriceEl = document.getElementById("prix-unitaire");
  const subtotalEl = document.getElementById("sous-total");
  const discountEl = document.getElementById("remise");
  const totalEl = document.getElementById("total-final");

  // Éléments d'erreur et de confirmation
  const errorBox = document.getElementById("form-error");
  const confirmationBox = document.getElementById("confirmation-box");

  // 1. Remplir la liste déroulante des 8 activités depuis app.js
  ACTIVITIES.forEach((act) => {
    const option = document.createElement("option");
    option.value = act.id;
    option.textContent = `${act.id} — ${act.titre} (${act.prix} TND)`;
    activitySelect.appendChild(option);
  });

  // Bonus URL : présélectionner l'activité si ?id=A02 est présent dans l'URL
  const params = new URLSearchParams(window.location.search);
  const preselectedId = params.get("id");
  if (preselectedId) {
    activitySelect.value = preselectedId;
  }

  // 2. Fonction de calcul des montants
  function updatePrice() {
    const selectedId = activitySelect.value;
    const act = ACTIVITIES.find((item) => item.id === selectedId);
    const participants = parseInt(participantsInput.value, 10) || 0;

    if (!act || participants < 1) {
      unitPriceEl.textContent = "0 TND";
      subtotalEl.textContent = "0 TND";
      discountEl.textContent = "0 TND";
      totalEl.textContent = "0 TND";
      return null;
    }

    const unitPrice = act.prix;
    const subtotal = unitPrice * participants;
    const discount = participants >= 4 ? subtotal * 0.1 : 0;
    const total = subtotal - discount;

    unitPriceEl.textContent = `${unitPrice} TND`;
    subtotalEl.textContent = `${subtotal} TND`;
    discountEl.textContent = discount > 0 ? `-${discount} TND` : "0 TND";
    totalEl.textContent = `${total} TND`;

    return { act, participants, subtotal, discount, total };
  }

  // Mise à jour automatique lors du changement d'activité ou de participants
  activitySelect.addEventListener("change", updatePrice);
  participantsInput.addEventListener("input", updatePrice);
  btnCalculer.addEventListener("click", updatePrice);

  // Calcul initial (utile si présélectionné via URL)
  updatePrice();

  // 3. Validation du formulaire à la soumission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche tout rechargement ou envoi serveur

    errorBox.classList.add("d-none");
    confirmationBox.classList.add("d-none");

    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const email = document.getElementById("email").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const dateVal = dateInput.value;
    const participants = parseInt(participantsInput.value, 10);
    const conditionsChecked = document.getElementById("conditions").checked;
    const selectedId = activitySelect.value;

    // Vérifications obligatoires
    const errors = [];

    if (!nom || !prenom) {
      errors.push("Veuillez renseigner votre nom et votre prénom.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push("Veuillez saisir une adresse e-mail valide.");
    }

    if (!telephone) {
      errors.push("Veuillez saisir un numéro de téléphone.");
    }

    if (!selectedId) {
      errors.push("Veuillez sélectionner une activité.");
    }

    if (!dateVal) {
      errors.push("Veuillez choisir une date de réservation.");
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const chosenDate = new Date(dateVal);
      if (chosenDate < today) {
        errors.push("La date souhaitée ne peut pas être dans le passé.");
      }
    }

    if (isNaN(participants) || participants < 1 || participants > 6) {
      errors.push("Le nombre de participants doit être compris entre 1 et 6.");
    }

    if (!conditionsChecked) {
      errors.push("Veuillez accepter les conditions de simulation.");
    }

    // Si des erreurs existent, bloquer et afficher le message
    if (errors.length > 0) {
      errorBox.innerHTML = errors.join("<br>");
      errorBox.classList.remove("d-none");
      return;
    }

    // Sinon, afficher le récapitulatif local
    const calc = updatePrice();
    document.getElementById("recap-activite").textContent = calc.act.titre;
    document.getElementById("recap-date").textContent = dateVal;
    document.getElementById("recap-participants").textContent = calc.participants;
    document.getElementById("recap-total").textContent = `${calc.total} TND`;

    confirmationBox.classList.remove("d-none");
  });

  // 4. Gestion de la réinitialisation
  btnReset.addEventListener("click", () => {
    setTimeout(() => {
      errorBox.classList.add("d-none");
      confirmationBox.classList.add("d-none");
      updatePrice();
    }, 0);
  });
});
