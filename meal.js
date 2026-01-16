const mealContainer = document.getElementById("meals");
const mealInput = document.getElementById("mealInput");

mealInput.addEventListener("keyup", () => {
    fetchMeals(mealInput.value);
});

function fetchMeals(query) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(res => res.json())
        .then(data => {
            mealContainer.innerHTML = "";
            if (!data.meals) return;

            data.meals.forEach(meal => {
                mealContainer.innerHTML += `
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <img src="${meal.strMealThumb}" class="card-img-top">
                        <div class="card-body">
                            <h5>${meal.strMeal}</h5>
                            <p>Category: ${meal.strCategory}</p>
                            <p>Area: ${meal.strArea}</p>
                        </div>
                    </div>
                </div>
                `;
            });
        });
}
