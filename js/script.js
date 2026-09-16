document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.querySelector("h2");
  const enlaces = document.querySelectorAll("nav a");

  const textos = {
    Inicio: "Encuentra tus jugadores favoritos",
    Futbol: "Apuestas de fútbol",
    Caballos: "Carreras de caballos"
  };

  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", (evento) => {
      evento.preventDefault();

      enlaces.forEach((item) => item.classList.remove("activo"));
      enlace.classList.add("activo");

      const seccion = enlace.textContent.trim();
      titulo.textContent = textos[seccion] || seccion;
    });
  });
});