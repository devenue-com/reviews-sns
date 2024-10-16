window.addEventListener("load", () => {
  const modal = document.querySelector("#modal");
  const open = document.querySelector("#modal-open");
  const close = document.querySelector("#modal-close");

  open.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  close.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
});
