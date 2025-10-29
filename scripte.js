// Contact form alert
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you for your message! We will contact you soon.');
  e.target.reset();
});

// Filter Recipes
const filterButtons = document.querySelectorAll('.filter-buttons button');
const allRecipes = document.querySelectorAll('#allRecipes .recipe-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    allRecipes.forEach(recipe => {
      if(filter === 'all' || recipe.getAttribute('data-type') === filter) {
        recipe.style.display = 'block';
      } else {
        recipe.style.display = 'none';
      }
    });
  });
});

// Recipe item click
const recipeItems = document.querySelectorAll('.recipe-item');
recipeItems.forEach(item => {
  item.addEventListener('click', () => {
    alert(`You clicked on: ${item.querySelector('h3').textContent}`);
  });
});
