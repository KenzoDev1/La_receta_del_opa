// Simulación de recetas (esto puede ser reemplazado con una base de datos o API real)
const recipes = [
  { id: 1, name: 'Tortilla de patatas', category: 'desayuno', image: 'assets/img/receta1.jpg', description: 'Deliciosa tortilla de patatas.' },
  { id: 2, name: 'Spaghetti Bolognese', category: 'platos', image: 'assets/img/receta2.jpg', description: 'Tradicional spaghetti bolognese.' },
  { id: 3, name: 'Mojito', category: 'bebidas', image: 'assets/img/receta3.jpg', description: 'Refrescante cóctel de mojito.' },
  { id: 4, name: 'Tarta de chocolate', category: 'postres', image: 'assets/img/receta4.jpg', description: 'Irresistible tarta de chocolate.' },
];

// Función para renderizar las recetas
function renderRecipes(filteredRecipes) {
  const recipesGrid = document.getElementById('recipes-grid');
  recipesGrid.innerHTML = ''; // Limpiar contenido previo

  filteredRecipes.forEach(recipe => {
    const recipeItem = document.createElement('div');
    recipeItem.classList.add('receta-item');
    recipeItem.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" />
      <div class="content">
        <h3>${recipe.name}</h3>
        <p>${recipe.description}</p>
      </div>
    `;
    recipesGrid.appendChild(recipeItem);
  });
}

// Función de filtro por categoría
function filterRecipes(category) {
  if (category === 'all') {
    renderRecipes(recipes); // Mostrar todas las recetas
  } else {
    const filtered = recipes.filter(recipe => recipe.category === category);
    renderRecipes(filtered);
  }
}

// Función de búsqueda por nombre de receta
function searchRecipes(event) {
  const searchTerm = event.target.value.toLowerCase();
  const filtered = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));
  renderRecipes(filtered);
}

// Inicializar la página con todas las recetas
document.addEventListener('DOMContentLoaded', () => {
  renderRecipes(recipes);
});
