const contenedor = document.getElementById("contenedor");

coleccion.forEach(pelicula => {
  const div = document.createElement("div");
  div.classList.add("movie-card");
  div.innerHTML = `
    <div class="movie-poster">
      <img src="${pelicula.imagen}" alt="${pelicula.nombre}">
    </div>
    <div class="peli-datos">
      <h3>${pelicula.nombre}</h3>
      <div class="movie-meta">
        <span>${pelicula.minutos} min</span>
      </div>
      <span class="genre">${pelicula.genero}</span>
    </div>
  `;
  contenedor.appendChild(div);
});