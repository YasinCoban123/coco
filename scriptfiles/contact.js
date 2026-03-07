document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");
  const modal = document.getElementById("success-modal");
  const closeBtn = document.getElementById("close-modal");

  if (!form) return;

  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwvrpewz", {
        method: "POST",
        body: data,
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
        form.reset();
      } else {
        alert("Er ging iets mis bij het versturen.");
      }

    } catch (error) {
      alert("Netwerk fout. Probeer later opnieuw.");
    }

  });

  closeBtn.addEventListener("click", function() {
    modal.classList.add("hidden");
  });

});