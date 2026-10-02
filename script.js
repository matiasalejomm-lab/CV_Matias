// script.js — la lógica de tu página: lo que pasa DESPUÉS de que carga.
// El contenido que se ve está en index.html y el diseño en styles.css.

// Tus datos (los que escribiste en "Mis datos").
const datos = {
  "nombre": "maty",
  "sobreMi": "",
  "redes": [
    {
      "nombre": "GitHub",
      "url": ""
    },
    {
      "nombre": "LinkedIn",
      "url": ""
    },
    {
      "nombre": "Sitio web",
      "url": ""
    }
  ],
  "hobbies": [
    "Escuchar música"
  ],
  "proyectos": [],
  "skills": []
};

// ── seccion-carrusel.js ──
{
  const destacado = document.getElementById('carrusel-destacado');
  const destacados = datos.proyectos.filter((proyecto) => proyecto.destacado === true);
  const crearElemento = proyecto => {
    const imagen = document.createElement('img');
    imagen.src = proyecto.imagenUrl;
    imagen.alt = proyecto.nombre;
    return imagen;
  };
  if (destacados.length === 0) {
    destacado.replaceChildren(Object.assign(document.createElement('p'), { textContent: 'Todavía no hay proyectos destacados.' }));
  } else {
    let indice = 0;
    const avanzar = () => {
      destacado.replaceChildren(crearElemento(destacados[indice]));
      indice = (indice + 1) % destacados.length;
    };
    avanzar();
    setInterval(avanzar, 1000);
  }
}
