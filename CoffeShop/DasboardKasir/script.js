const searchInput = document.querySelector(".Cari-menu");

searchInput.addEventListener("input", function () {
  const keyword = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".crad-semua");

  cards.forEach(card => {
    const nama = card.querySelector("h3").textContent.toLowerCase();

    if (nama.includes(keyword)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});