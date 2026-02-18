/**
 * RecipeJS Application
 * IIFE (Immediately Invoked Function Expression) pattern to encapsulate code
 * and avoid global variable pollution
 */
const RecipeApp = (function () {
    'use strict';

    /* ==================== PRIVATE VARIABLES ==================== */
    const recipeContainer = document.getElementById('recipes-container');
    const cuisineFilter = document.getElementById('cuisine-filter');
    const difficultyFilter = document.getElementById('difficulty-filter');
    const sortSelect = document.getElementById('sort-select');

    let recipes = [];
    let filteredRecipes = [];
    let sortOrder = 'name-asc';

    /* ==================== RECIPE DATA ==================== */
    const initializeRecipes = () => {
        recipes = [
            {
                id: 1,
                name: 'Spaghetti Carbonara',
                cuisine: 'Italian',
                difficulty: 'Medium',
                cookingTime: 25,
                servings: 4,
                description: 'Classic Italian pasta dish with creamy sauce, bacon, and parmesan cheese.',
                tags: ['Pasta', 'Classic', 'Vegetarian'],
                ingredients: [
                    '400g spaghetti',
                    '200g pancetta or guanciale, diced',
                    '4 large eggs',
                    '100g Pecorino Romano cheese, grated',
                    'Salt and black pepper to taste',
                    '1 tsp olive oil'
                ],
                steps: [
                    {
                        description: 'Cook the pasta',
                        substeps: [
                            'Bring a large pot of salted water to a boil',
                            'Add spaghetti and cook until al dente (usually 8-10 minutes)',
                            'Reserve 1 cup of pasta water before draining'
                        ]
                    },
                    {
                        description: 'Prepare the guanciale',
                        substeps: [
                            'Heat olive oil in a large skillet over medium heat',
                            'Add diced pancetta/guanciale and cook until crispy (5-7 minutes)',
                            'Remove from heat'
                        ]
                    },
                    {
                        description: 'Make the sauce',
                        substeps: [
                            'In a bowl, whisk together eggs, grated cheese, salt, and pepper',
                            'Mix until well combined and creamy'
                        ]
                    },
                    {
                        description: 'Combine everything',
                        substeps: [
                            'Add hot pasta to the skillet with pancetta',
                            'Pour egg mixture over pasta while tossing quickly',
                            'Add pasta water gradually until creamy (do not overcook eggs)',
                            'Serve immediately with extra cheese'
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: 'Pad Thai',
                cuisine: 'Asian',
                difficulty: 'Medium',
                cookingTime: 20,
                servings: 4,
                description: 'Popular Thai street food with stir-fried noodles, shrimp, and tamarind sauce.',
                tags: ['Noodles', 'Asian', 'Spicy'],
                ingredients: [
                    '8oz dried rice noodles (about 1/4 inch wide)',
                    '12oz shrimp, peeled and deveined',
                    '2 cups bean sprouts',
                    '3 scallions, cut into 2-inch pieces',
                    '3 cloves garlic, minced',
                    '3 tbsp tamarind paste',
                    '2 tbsp fish sauce',
                    '2 tbsp palm sugar',
                    '2 tbsp vegetable oil',
                    'Crushed peanuts for garnish',
                    'Lime wedges',
                    '2 eggs, beaten'
                ],
                steps: [
                    'Soak rice noodles in room temperature water for 30-40 minutes until pliable',
                    {
                        description: 'Prepare the sauce',
                        substeps: [
                            'Mix tamarind paste, fish sauce, and palm sugar in a small bowl',
                            'Stir until sugar is dissolved',
                            'Set aside'
                        ]
                    },
                    {
                        description: 'Stir-fry',
                        substeps: [
                            'Heat oil in a large wok or skillet over high heat',
                            'Add garlic and cook until fragrant (about 30 seconds)',
                            'Add shrimp and cook until pink (2-3 minutes)',
                            'Push ingredients to side, pour beaten eggs into empty space',
                            'Scramble eggs lightly, then mix with other ingredients',
                            'Add drained noodles and sauce, toss well',
                            'Cook for 1-2 minutes until noodles are coated and heated through'
                        ]
                    },
                    'Add bean sprouts and scallions, toss gently',
                    'Serve on a plate, garnish with peanuts and lime wedge'
                ]
            },
            {
                id: 3,
                name: 'Margherita Pizza',
                cuisine: 'Italian',
                difficulty: 'Hard',
                cookingTime: 40,
                servings: 2,
                description: 'Traditional Italian pizza with fresh mozzarella, tomatoes, and basil.',
                tags: ['Pizza', 'Italian', 'Vegetarian'],
                ingredients: [
                    '500g pizza dough (or store-bought)',
                    '200g San Marzano tomatoes, crushed',
                    '250g fresh mozzarella, sliced',
                    'Fresh basil leaves',
                    '2 tbsp extra virgin olive oil',
                    'Salt to taste',
                    'Flour for dusting'
                ],
                steps: [
                    'Preheat oven to 500°F (260°C)',
                    'Dust work surface with flour and stretch pizza dough into desired size',
                    'Place dough on pizza stone or baking sheet',
                    'Spread crushed tomatoes evenly over dough',
                    'Arrange mozzarella slices on top',
                    'Drizzle with olive oil and season with salt',
                    'Bake for 12-15 minutes until crust is golden',
                    'Remove from oven and add fresh basil',
                    'Let cool for 2 minutes before slicing'
                ]
            },
            {
                id: 4,
                name: 'Chicken Tikka Masala',
                cuisine: 'Asian',
                difficulty: 'Hard',
                cookingTime: 50,
                servings: 4,
                description: 'Creamy, aromatic Indian curry with tender chicken pieces.',
                tags: ['Curry', 'Asian', 'Spicy'],
                ingredients: [
                    '800g chicken breast, cubed',
                    '1 cup plain yogurt',
                    '3 tbsp tikka masala paste',
                    '1 can (400ml) coconut milk',
                    '1 onion, diced',
                    '4 cloves garlic, minced',
                    '1 tbsp ginger, minced',
                    '2 tbsp tomato paste',
                    '1 cup chicken broth',
                    '2 tbsp vegetable oil',
                    'Fresh cilantro',
                    'Salt and pepper to taste'
                ],
                steps: [
                    {
                        description: 'Marinate chicken',
                        substeps: [
                            'Mix yogurt with 1 tbsp of tikka masala paste',
                            'Coat chicken pieces thoroughly',
                            'Refrigerate for at least 30 minutes (or up to 4 hours)'
                        ]
                    },
                    {
                        description: 'Cook the chicken',
                        substeps: [
                            'Heat oil in a large pan over high heat',
                            'Remove chicken from marinade and cook until golden (5-7 minutes)',
                            'Set chicken aside'
                        ]
                    },
                    {
                        description: 'Make the sauce',
                        substeps: [
                            'In the same pan, add more oil if needed',
                            'Sauté onion until translucent',
                            'Add garlic and ginger, cook for 1 minute',
                            'Stir in remaining tikka paste and tomato paste',
                            'Cook for 2-3 minutes until fragrant',
                            'Add coconut milk and chicken broth',
                            'Bring to simmer'
                        ]
                    },
                    'Return chicken to sauce and simmer for 15-20 minutes',
                    'Season with salt and pepper to taste',
                    'Garnish with fresh cilantro and serve with rice'
                ]
            },
            {
                id: 5,
                name: 'Hamburger',
                cuisine: 'American',
                difficulty: 'Easy',
                cookingTime: 15,
                servings: 2,
                description: 'Classic American hamburger with beef patty, lettuce, tomato, and cheese.',
                tags: ['Burger', 'American', 'Fast'],
                ingredients: [
                    '400g ground beef (80/20)',
                    '2 burger buns',
                    '2 slices cheddar cheese',
                    '2 lettuce leaves',
                    '2 tomato slices',
                    '2 slices pickles',
                    '1 tbsp butter',
                    'Salt and pepper to taste',
                    'Optional: mayonnaise, mustard, onion'
                ],
                steps: [
                    'Form ground beef into 2 patties about 3/4 inch thick',
                    'Make a small indent in the center of each patty with your thumb',
                    'Season both sides generously with salt and pepper',
                    'Heat a skillet or grill over medium-high heat',
                    'Cook patties for 3-4 minutes per side for medium doneness',
                    'Add cheese slice to each patty in the last minute',
                    'Toast buns lightly in the skillet or on grill',
                    'Assemble burger: bun, lettuce, patty with cheese, tomato, pickles, top bun',
                    'Add condiments as desired and serve immediately'
                ]
            },
            {
                id: 6,
                name: 'Greek Salad',
                cuisine: 'Mediterranean',
                difficulty: 'Easy',
                cookingTime: 10,
                servings: 2,
                description: 'Fresh Mediterranean salad with feta cheese, olives, and vegetables.',
                tags: ['Salad', 'Vegetarian', 'Healthy'],
                ingredients: [
                    '4 large tomatoes, chunked',
                    '1 cucumber, chunked',
                    '1 red onion, thinly sliced',
                    '200g feta cheese, cubed',
                    '1 cup kalamata olives',
                    '3 tbsp olive oil',
                    '1 tbsp red wine vinegar',
                    '1 tsp dried oregano',
                    'Salt and pepper to taste',
                    'Fresh parsley (optional)'
                ],
                steps: [
                    'Chop tomatoes and cucumber into bite-sized chunks',
                    'Thinly slice red onion',
                    'Cube feta cheese',
                    'In a large bowl, combine tomatoes, cucumber, onion, feta, and olives',
                    'In a small bowl, whisk together olive oil, vinegar, and oregano',
                    'Pour dressing over salad and toss gently',
                    'Season with salt and pepper to taste',
                    'Let sit for 5 minutes to allow flavors to meld',
                    'Garnish with fresh parsley if desired and serve chilled'
                ]
            }
        ];
    };

    /* ==================== RECURSIVE STEP RENDERING ==================== */
    /**
     * Recursively render steps with support for nested substeps
     * @param {Array} steps - Array of steps (can be strings or objects with substeps)
     * @param {number} level - Current nesting level (default: 0)
     * @returns {string} HTML string of rendered steps
     */
    const renderStepsRecursively = (steps, level = 0) => {
        if (!Array.isArray(steps) || steps.length === 0) return '';

        let html = '<ol class="steps-list">';
        try {
            steps.forEach((step, index) => {
                if (typeof step === 'string') {
                    // Simple string step
                    html += `<li class="step-item" data-number="${index + 1}">${escapeHtml(step)}</li>`;
                } else if (typeof step === 'object' && step.description) {
                    // Object with description and possible substeps
                    html += `<li class="step-item" data-number="${index + 1}">
                        <strong>${escapeHtml(step.description)}</strong>`;

                    // Recursively render substeps
                    if (step.substeps && Array.isArray(step.substeps) && step.substeps.length > 0) {
                        html += '<ul class="substeps-list">';
                        step.substeps.forEach((substep) => {
                            if (Array.isArray(substep)) {
                                // Further nesting
                                html += '<li class="substep-item">' + renderStepsRecursively(substep, level + 1).replace(/<ol|<\/ol>|<li class="step-item"|<\/li>/g, '') + '</li>';
                            } else {
                                html += `<li class="substep-item">${escapeHtml(String(substep))}</li>`;
                            }
                        });
                        html += '</ul>';
                    }
                    html += '</li>';
                }
            });
        } catch (error) {
            console.error('Error rendering steps:', error);
        }
        html += '</ol>';
        return html;
    };

    /* ==================== RENDER INGREDIENTS ==================== */
    /**
     * Render ingredients list
     * @param {Array} ingredients - Array of ingredient strings
     * @returns {string} HTML string of rendered ingredients
     */
    const renderIngredients = (ingredients) => {
        if (!Array.isArray(ingredients) || ingredients.length === 0) return '';

        let html = '<ul class="ingredients-list">';
        ingredients.forEach((ingredient) => {
            html += `<li class="ingredient-item">${escapeHtml(ingredient)}</li>`;
        });
        html += '</ul>';
        return html;
    };

    /* ==================== RENDER RECIPE CARDS ==================== */
    /**
     * Render a single recipe card
     * @param {Object} recipe - Recipe object
     * @returns {string} HTML string of recipe card
     */
    const renderRecipeCard = (recipe) => {
        const stepsHtml = renderStepsRecursively(recipe.steps);
        const ingredientsHtml = renderIngredients(recipe.ingredients);

        let tagsHtml = '';
        if (recipe.tags && Array.isArray(recipe.tags)) {
            tagsHtml = recipe.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
        }

        return `
            <div class="recipe-card" data-recipe-id="${recipe.id}">
                <div class="recipe-header">
                    <h2 class="recipe-title">${escapeHtml(recipe.name)}</h2>
                    <div class="recipe-meta">
                        <span class="meta-item">⏱️ ${recipe.cookingTime} mins</span>
                        <span class="meta-item">🍽️ ${recipe.servings} servings</span>
                        <span class="meta-item">📊 ${recipe.difficulty}</span>
                    </div>
                </div>
                <div class="recipe-body">
                    <p class="recipe-description">${escapeHtml(recipe.description)}</p>
                    <div class="recipe-tags">${tagsHtml}</div>
                    
                    <div class="action-buttons">
                        <button class="btn btn-steps" data-action="toggle-steps">
                            📝 Show Steps
                        </button>
                        <button class="btn btn-ingredients" data-action="toggle-ingredients">
                            🥕 Show Ingredients
                        </button>
                    </div>

                    <div class="expandable-section" data-section="steps">
                        <h3 class="section-title">Cooking Steps</h3>
                        ${stepsHtml}
                    </div>

                    <div class="expandable-section" data-section="ingredients">
                        <h3 class="section-title">Ingredients</h3>
                        ${ingredientsHtml}
                    </div>
                </div>
            </div>
        `;
    };

    /* ==================== RENDER ALL RECIPES ==================== */
    /**
     * Render all filtered and sorted recipes
     */
    const renderRecipes = () => {
        if (!recipeContainer) return;

        if (filteredRecipes.length === 0) {
            recipeContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: white; font-size: 1.1em;">No recipes match your filters. Try adjusting your preferences!</p>';
            return;
        }

        recipeContainer.innerHTML = filteredRecipes.map(recipe => renderRecipeCard(recipe)).join('');
    };

    /* ==================== FILTERING AND SORTING ==================== */
    /**
     * Filter recipes based on current filter selections
     */
    const filterRecipes = () => {
        const selectedCuisine = cuisineFilter ? cuisineFilter.value : '';
        const selectedDifficulty = difficultyFilter ? difficultyFilter.value : '';

        filteredRecipes = recipes.filter(recipe => {
            const cuisineMatch = !selectedCuisine || recipe.cuisine === selectedCuisine;
            const difficultyMatch = !selectedDifficulty || recipe.difficulty === selectedDifficulty;
            return cuisineMatch && difficultyMatch;
        });

        sortRecipes();
        renderRecipes();
    };

    /**
     * Sort recipes based on selected sort option
     */
    const sortRecipes = () => {
        const sortValue = sortSelect ? sortSelect.value : 'name-asc';

        switch (sortValue) {
            case 'name-asc':
                filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filteredRecipes.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'time-asc':
                filteredRecipes.sort((a, b) => a.cookingTime - b.cookingTime);
                break;
            case 'time-desc':
                filteredRecipes.sort((a, b) => b.cookingTime - a.cookingTime);
                break;
            default:
                break;
        }
    };

    /* ==================== EVENT HANDLING ==================== */
    /**
     * Handle button clicks using event delegation
     */
    const handleButtonClick = (e) => {
        const action = e.target.closest('[data-action]');
        if (!action) return;

        const actionType = action.dataset.action;
        const card = action.closest('.recipe-card');
        if (!card) return;

        if (actionType === 'toggle-steps') {
            toggleSection(card, 'steps', action);
        } else if (actionType === 'toggle-ingredients') {
            toggleSection(card, 'ingredients', action);
        }
    };

    /**
     * Toggle visibility of a section (steps or ingredients)
     * @param {Element} card - Recipe card element
     * @param {string} sectionType - 'steps' or 'ingredients'
     * @param {Element} button - Button element that was clicked
     */
    const toggleSection = (card, sectionType, button) => {
        const section = card.querySelector(`[data-section="${sectionType}"]`);
        if (!section) return;

        section.classList.toggle('active');
        button.classList.toggle('btn-active');

        // Update button text
        const buttonText = sectionType === 'steps' ? '📝 Hide Steps' : '🥕 Hide Ingredients';
        const originalText = sectionType === 'steps' ? '📝 Show Steps' : '🥕 Show Ingredients';
        button.textContent = section.classList.contains('active') ? buttonText : originalText;
    };

    /**
     * Add event listeners
     */
    const attachEventListeners = () => {
        // Filter and sort event listeners
        if (cuisineFilter) {
            cuisineFilter.addEventListener('change', filterRecipes);
        }
        if (difficultyFilter) {
            difficultyFilter.addEventListener('change', filterRecipes);
        }
        if (sortSelect) {
            sortSelect.addEventListener('change', () => {
                sortRecipes();
                renderRecipes();
            });
        }

        // Button click delegation on recipe container
        if (recipeContainer) {
            recipeContainer.addEventListener('click', handleButtonClick);
        }
    };

    /* ==================== UTILITY FUNCTIONS ==================== */
    /**
     * Escape HTML special characters to prevent XSS
     * @param {string} text - Text to escape
     * @returns {string} Escaped text
     */
    const escapeHtml = (text) => {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    };

    /* ==================== PUBLIC API ==================== */
    /**
     * Initialize the application
     */
    const init = () => {
        try {
            initializeRecipes();
            filterRecipes();
            attachEventListeners();
            console.log('RecipeApp initialized successfully');
        } catch (error) {
            console.error('Error initializing RecipeApp:', error);
        }
    };

    // Public API
    return {
        init: init
    };
})();

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', RecipeApp.init);
