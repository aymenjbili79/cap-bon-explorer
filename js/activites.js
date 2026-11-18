document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("activities-container");
  const searchInput = document.getElementById("search-input");
  const categorySelect = document.getElementById("category-select");
  const resetBtn = document.getElementById("reset-filters-btn");
  const counterText = document.getElementById("results-counter");
  const noResultsAlert = document.getElementById("no-results-message");

  // Éléments de la fenêtre modale
  const modalElement = document.getElementById("activityModal");
  const activityModal = new bootstrap.Modal(modalElement);
  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  const modalBadge = document.getElementById("modalBadge");
  const modalDuration = document.getElementById("modalDuration");
  const modalPrice = document.getElementById("modalPrice");
  const modalTagline = document.getElementById("modalTagline");
  const modalDescription = document.getElementById("modalDescription");
  const modalReserveBtn = document.getElementById("modalReserveBtn");

  // Fonction pour afficher les cartes d'activités
  function renderActivities(list) {
    container.innerHTML = "";

    // Mise à jour du compteur
    const count = list.length;
    counterText.textContent = count > 1
      ? `${count} activités affichées`
      : `${count} activité affichée`;

    // Affichage ou masquage du message "Aucune activité trouvée"
    if (count === 0) {
      noResultsAlert.classList.remove("d-none");
      return;
    } else {
      noResultsAlert.classList.add("d-none");
    }

    // Création des cartes Bootstrap (1 mobile, 2 tablette, 3-4 grand écran)
    list.forEach((act) => {
      const col = document.createElement("div");
      col.className = "col-12 col-md-6 col-lg-4 col-xl-3";

      col.innerHTML = `
        <article class="card h-100 activity-card">
          <img src="${act.image}" class="card-img-top" alt="${act.alt}">
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge badge-category">${act.categorie}</span>
              <small class="text-muted">${act.duree}</small>
            </div>
            <h2 class="h5 card-title">${act.titre}</h2>
            <p class="card-text small text-muted">${act.accroche}</p>
            <p class="fw-bold text-primary mt-auto mb-3">${act.prix} TND / pers.</p>
            <div class="d-flex gap-2">
              <button type="button" class="btn btn-outline-primary btn-sm flex-grow-1 btn-details" data-id="${act.id}">
                Voir les détails
              </button>
              <a href="reservation.html?id=${act.id}" class="btn btn-terracotta btn-sm">
                Réserver
              </a>
            </div>
          </div>
        </article>
      `;

      container.appendChild(col);
    });

    // Attacher l'événement d'ouverture de la modale sur chaque bouton "Voir les détails"
    document.querySelectorAll(".btn-details").forEach((btn) => {
      btn.addEventListener("click", () => {
        const selectedId = btn.getAttribute("data-id");
        openActivityModal(selectedId);
      });
    });
  }

  // Fonction pour remplir et ouvrir la modale Bootstrap
  function openActivityModal(id) {
    const act = ACTIVITIES.find((item) => item.id === id);
    if (!act) return;

    modalTitle.textContent = `${act.id} — ${act.titre}`;
    modalImage.src = act.image;
    modalImage.alt = act.alt;
    modalBadge.textContent = act.categorie;
    modalDuration.textContent = `Durée : ${act.duree}`;
    modalPrice.textContent = `Tarif : ${act.prix} TND / pers.`;
    modalTagline.textContent = act.accroche;
    modalDescription.textContent = act.description;
    modalReserveBtn.href = `reservation.html?id=${act.id}`;

    activityModal.show();
  }

  // Fonction combinée : recherche par mot-clé + filtre par catégorie
  function filterActivities() {
    const keyword = searchInput.value.trim().toLowerCase();
    const selectedCategory = categorySelect.value;

    const filtered = ACTIVITIES.filter((act) => {
      const matchesCategory =
        selectedCategory === "Toutes" || act.categorie === selectedCategory;
      const matchesKeyword =
        act.titre.toLowerCase().includes(keyword) ||
        act.lieu.toLowerCase().includes(keyword);

      return matchesCategory && matchesKeyword;
    });

    renderActivities(filtered);
  }

  // Écouteurs d'événements
  searchInput.addEventListener("input", filterActivities);
  categorySelect.addEventListener("change", filterActivities);

  resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    categorySelect.value = "Toutes";
    filterActivities();
  });

  // Affichage initial des 8 activités
  renderActivities(ACTIVITIES);
});
