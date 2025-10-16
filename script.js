// Simple participant UI: tabs, search, collapse
(function () {
  const tabs = document.querySelectorAll(".tab");
  const cards = document.querySelectorAll(".participant-card");
  const searchInput = document.getElementById("participant-search");

  tabs.forEach((t) =>
    t.addEventListener("click", () => {
      tabs.forEach((x) => x.classList.remove("active"));
      t.classList.add("active");
      const filter = t.dataset.filter;
      cards.forEach((c) => {
        c.style.display =
          filter === "all" || c.dataset.country === filter ? "" : "none";
      });
      searchInput.value = "";
    })
  );

  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();
    cards.forEach((card) => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(q) ? "" : "none";
    });
  });

  // collapse groups and card-body toggle
  document.querySelectorAll(".collapsible-header").forEach((h) => {
    h.addEventListener("click", () => {
      h.nextElementSibling.classList.toggle("collapsed");
      h.classList.toggle("closed");
    });
  });

  document.querySelectorAll(".collapse-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".participant-card");
      const body = card.querySelector(".card-body");
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      body.style.display = isOpen ? "none" : "";
      btn.textContent = isOpen ? "Show" : "Hide";
      btn.setAttribute("aria-expanded", isOpen ? "false" : "true");
    });
  });
})();
