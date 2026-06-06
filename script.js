// Premium Culinary Canvas - Interactive JavaScript

const recipes = [
  {
    id: 1,
    title: "The Perfect French Omelette",
    emoji: "🥖",
    difficulty: "Intermediate",
    time: "15 mins",
    description: "Learn the classic French technique for creating a delicate, creamy omelette with a tender exterior and soft center.",
    ingredients: ["3 eggs", "2 tbsp butter", "Salt & pepper", "Fresh herbs"],
    steps: [
      "Crack 3 eggs into a bowl and whisk gently until just combined",
      "Heat a non-stick pan over medium heat and add 1 tbsp butter",
      "Once butter foams, pour in the egg mixture",
      "Using a spatula, gently push cooked edges toward center for 30 seconds",
      "Add fillings if desired and fold the omelette in half",
      "Slide onto plate and finish with remaining butter for shine"
    ]
  },
  {
    id: 2,
    title: "Artisan Sourdough Bread",
    emoji: "🍞",
    difficulty: "Advanced",
    time: "24+ hours",
    description: "Master the ancient art of sourdough fermentation to create crusty, tangy bread with incredible flavor and texture.",
    ingredients: ["500g bread flour", "350ml water", "100g sourdough starter", "10g salt"],
    steps: [
      "Refresh your sourdough starter 4-8 hours before mixing",
      "Mix flour and water, let rest for 30 minutes (autolyse)",
      "Add starter and salt, mix until shaggy dough forms",
      "Perform 4-5 sets of stretch and folds every 30 minutes",
      "Bulk fermentation for 4-6 hours at room temperature",
      "Shape and cold proof in fridge for 12-48 hours",
      "Score the dough and bake in Dutch oven at 450°F for 45 minutes"
    ]
  },
  {
    id: 3,
    title: "Creamy Carbonara",
    emoji: "🍝",
    difficulty: "Intermediate",
    time: "20 mins",
    description: "Discover the secrets to authentic Roman carbonara with a silky sauce made from just 4 ingredients.",
    ingredients: ["400g spaghetti", "200g guanciale", "4 egg yolks", "100g Pecorino Romano"],
    steps: [
      "Dice guanciale and cook in a large skillet over medium heat until crispy",
      "Cook spaghetti in salted boiling water until al dente",
      "Whisk egg yolks with grated Pecorino Romano in a bowl",
      "Reserve 1 cup pasta water before draining",
      "Add hot pasta to guanciale skillet, remove from heat",
      "Pour egg mixture over pasta, tossing continuously",
      "Add pasta water gradually to achieve creamy consistency"
    ]
  },
  {
    id: 4,
    title: "Pan-Seared Salmon",
    emoji: "🥩",
    difficulty: "Easy",
    time: "15 mins",
    description: "Achieve restaurant-quality salmon with crispy skin and perfectly cooked flesh using the pan-searing technique.",
    ingredients: ["2 salmon fillets", "2 tbsp olive oil", "2 tbsp butter", "Lemon & fresh dill"],
    steps: [
      "Pat salmon fillets dry with paper towels",
      "Season generously with salt and pepper on all sides",
      "Heat olive oil in a skillet over medium-high heat until shimmering",
      "Place salmon skin-side down, press gently for 3-4 minutes",
      "Flip carefully and add butter to the pan",
      "Baste the salmon with foaming butter for 2-3 minutes",
      "Finish with fresh lemon and dill, serve immediately"
    ]
  }
];

// Initialize Recipe Grid
function initializeRecipeGrid() {
  const grid = document.getElementById('recipeGrid');
  grid.innerHTML = recipes.map(recipe => `
    <div class="recipe-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg border border-stone-200">
      <div class="bg-gradient-to-br from-emerald-50 to-orange-50 p-8 flex items-center justify-center h-40">
        <span class="recipe-emoji">${recipe.emoji}</span>
      </div>
      <div class="p-6">
        <h3 class="text-2xl font-bold text-emerald-900 mb-2" style="font-family: 'Playfair Display', serif;">${recipe.title}</h3>
        <p class="text-stone-600 mb-4" style="font-family: 'Lora', serif;">${recipe.description}</p>
        <div class="flex justify-between items-center mb-4">
          <span class="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-sm font-semibold">${recipe.difficulty}</span>
          <span class="text-stone-600 text-sm">⏱️ ${recipe.time}</span>
        </div>
        <button onclick="loadRecipeForCooking(${recipe.id - 1})" class="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition">
          Start Cooking →
        </button>
      </div>
    </div>
  `).join('');
}

// Filter recipes based on search
function filterRecipes() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.recipe-card');
  
  cards.forEach((card, index) => {
    const recipe = recipes[index];
    const matches = recipe.title.toLowerCase().includes(searchTerm) || 
                    recipe.description.toLowerCase().includes(searchTerm);
    card.style.display = matches ? 'block' : 'none';
    card.style.animation = matches ? 'fadeIn 0.3s ease-out' : 'none';
  });
}

// Load recipe for interactive cooking mode
function loadRecipeForCooking(index) {
  const recipe = recipes[index];
  const container = document.getElementById('stepsContainer');
  
  container.innerHTML = `
    <div class="mb-6">
      <h4 class="text-3xl mb-3" style="font-family: 'Playfair Display', serif;">${recipe.emoji} ${recipe.title}</h4>
      <div class="flex gap-4 mb-4">
        <span class="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-sm font-semibold">${recipe.difficulty}</span>
        <span class="text-stone-600">⏱️ ${recipe.time}</span>
      </div>
      <h5 class="text-lg font-bold text-emerald-900 mb-3">Ingredients:</h5>
      <ul class="list-disc list-inside space-y-1 text-stone-700 mb-6">
        ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
      </ul>
    </div>
    <h5 class="text-lg font-bold text-emerald-900 mb-4">Cooking Steps:</h5>
    <div class="space-y-3">
      ${recipe.steps.map((step, i) => `
        <div class="cooking-step flex items-start gap-4 p-4 bg-stone-50 rounded-lg hover:bg-emerald-50 transition">
          <input type="checkbox" id="step${i}" class="w-5 h-5 accent-orange-500 mt-1 cursor-pointer" onchange="updateProgress()">
          <label for="step${i}" class="flex-1 cursor-pointer text-stone-700">
            <span class="font-semibold text-emerald-900">Step ${i + 1}:</span> ${step}
          </label>
        </div>
      `).join('')}
    </div>
  `;
  
  updateProgress();
  document.getElementById('cooking').scrollIntoView({ behavior: 'smooth' });
}

// Update cooking progress
function updateProgress() {
  const checkboxes = document.querySelectorAll('#stepsContainer input[type="checkbox"]');
  const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
  const totalSteps = checkboxes.length;
  const progress = totalSteps > 0 ? (checkedCount / totalSteps) * 100 : 0;
  
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  
  progressBar.style.width = progress + '%';
  progressText.textContent = Math.round(progress) + '% Complete';
  
  if (progress === 100) {
    progressText.innerHTML = '🎉 Congratulations! You\'ve mastered this dish!';
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeRecipeGrid();
  loadRecipeForCooking(0); // Load first recipe by default
  
  // Add mobile menu button functionality
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }
});

// Scroll reveal animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeIn 0.6s ease-out';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.recipe-card').forEach(card => {
  observer.observe(card);
});