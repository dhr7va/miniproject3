const foodJson = [
    {
        id: 1,
        foodname: "Apple",
        calorie: 95,
        category: "Fruit",
        protiens: 0.3,
        cab: 25,
    },
    {
        id: 2,
        foodname: "Banana",
        calorie: 105,
        category: "Fruit",
        protiens: 1.3,
        cab: 27,
    },
    {
        id: 3,
        foodname: "Orange",
        calorie: 62,
        category: "Fruit",
        protiens: 1.2,
        cab: 15,
    },
    {
        id: 4,
        foodname: "Pear",
        calorie: 95,
        category: "Fruit",
        protiens: 0.5,
        cab: 25,
    },
    {
        id: 5,
        foodname: "Grapefruit",
        calorie: 42,
        category: "Fruit",
        protiens: 1.1,
        cab: 11,
    },
    {
        id: 6,
        foodname: "Strawberry",
        calorie: 46,
        category: "Fruit",
        protiens: 1.5,
        cab: 10,
    },
    {
        id: 7,
        foodname: "Blueberry",
        calorie: 52,
        category: "Fruit",
        protiens: 1.1,
        cab: 14,
    },
    {
        id: 8,
        foodname: "Raspberry",
        calorie: 52,
        category: "Fruit",
        protiens: 1.4,
        cab: 15,
    },
    {
        id: 9,
        foodname: "Broccoli",
        calorie: 34,
        category: "Vegetable",
        protiens: 3.3,
        cab: 5,
    },
    {
        id: 10,
        foodname: "Cauliflower",
        calorie: 25,
        category: "Vegetable",
        protiens: 2.6,
        cab: 5,
    },
    {
        id: 11,
        foodname: "Green Beans",
        calorie: 31,
        category: "Vegetable",
        protiens: 2.4,
        cab: 4,
    },
    {
        id: 12,
        foodname: "Asparagus",
        calorie: 20,
        category: "Vegetable",
        protiens: 2.2,
        cab: 2,
    },
    {
        id: 13,
        foodname: "Spinach",
        calorie: 23,
        category: "Vegetable",
        protiens: 3.5,
        cab: 4,
    },
    {
        id: 14,
        foodname: "Kale",
        calorie: 33,
        category: "Vegetable",
        protiens: 4.3,
        cab: 7,
    },
    {
        id: 15,
        foodname: "Sweet Potato",
        calorie: 103,
        category: "Vegetable",
        protiens: 2,
        cab: 27,
    },
    {
        id: 16,
        foodname: "Potato",
        calorie: 161,
        category: "Vegetable",
        protiens: 4.3,
        cab: 37,
    },
    {
        id: 17,
        foodname: "Carrot",
        calorie: 41,
        category: "Vegetable",
        protiens: 0.9,
        cab: 9,
    },
    {
        id: 18,
        foodname: "Onion",
        calorie: 40,
        category: "Vegetable",
        protiens: 1.4,
        cab: 9,
    },
    {
        id: 19,
        foodname: "Egg",
        calorie: 77,
        category: "Protein",
        protiens: 6.3,
        cab: 0.5,
    },
    {
        id: 20,
        foodname: "Chicken Breast",
        calorie: 165,
        category: "Protein",
        protiens: 31,
        cab: 0,
    },
    {
        id: 21,
        foodname: "Salmon",
        calorie: 206,
        category: "Protein",
        protiens: 22,
        cab: 0,
    },
    {
        id: 22,
        foodname: "Tuna",
        calorie: 179,
        category: "Protein",
        protiens: 39,
        cab: 0,
    },
    {
        id: 23,
        foodname: "Beef",
        calorie: 250,
        category: "Protein",
        protiens: 26,
        cab: 0,
    },
    {
        id: 24,
        foodname: "Pork",
        calorie: 242,
        category: "Protein",
        protiens: 26,
        cab: 0,
    },
    {
        id: 25,
        foodname: "Lamb",
        calorie: 294,
        category: "Protein",
        protiens: 25,
        cab: 0,
    },
    {
        id: 26,
        foodname: "Shrimp",
        calorie: 85,
        category: "Protein",
        protiens: 20,
        cab: 0.2,
    },
    {
        id: 27,
        foodname: "Quinoa",
        calorie: 120,
        category: "Grain",
        protiens: 4.4,
        cab: 21,
    },
    {
        id: 28,
        foodname: "Brown Rice",
        calorie: 216,
        category: "Grain",
        protiens: 4.5,
        cab: 45,
    },
    {
        id: 29,
        foodname: "Oats",
        calorie: 389,
        category: "Grain",
        protiens: 16.9,
        cab: 66,
    },
    {
        id: 30,
        foodname: "Quinoa",
        calorie: 120,
        category: "Grain",
        protiens: 4.4,
        cab: 21,
    },
    {
        id: 31,
        foodname: "Bread",
        calorie: 265,
        category: "Grain",
        protiens: 9.4,
        cab: 49,
    },
    {
        id: 32,
        foodname: "Pasta",
        calorie: 131,
        category: "Grain",
        protiens: 5.5,
        cab: 26,
    },
    {
        id: 33,
        foodname: "Milk",
        calorie: 60,
        category: "Dairy",
        protiens: 3.2,
        cab: 5.1,
    },
    {
        id: 34,
        foodname: "Cheese",
        calorie: 402,
        category: "Dairy",
        protiens: 25,
        cab: 2.4,
    },
    {
        id: 35,
        foodname: "Yogurt",
        calorie: 59,
        category: "Dairy",
        protiens: 3.5,
        cab: 5,
    },
    {
        id: 36,
        foodname: "Butter",
        calorie: 717,
        category: "Dairy",
        protiens: 0.9,
        cab: 0.1,
    },
    {
        id: 37,
        foodname: "Almonds",
        calorie: 579,
        category: "Nuts",
        protiens: 21,
        cab: 22,
    },
    {
        id: 38,
        foodname: "Walnuts",
        calorie: 654,
        category: "Nuts",
        protiens: 15,
        cab: 14,
    },
    {
        id: 39,
        foodname: "Peanuts",
        calorie: 567,
        category: "Nuts",
        protiens: 26,
        cab: 16,
    },
    {
        id: 40,
        foodname: "Cashews",
        calorie: 553,
        category: "Nuts",
        protiens: 18,
        cab: 30,
    },
];

// () to list all the food items

var foodListPrint = (foodJson) => {
    const foodNames = foodJson.map((foods) => foods.foodname);
    return foodNames.join("<br>");
}

// () to list all the food items with category vegetables

var foodCategoryVegetable = (foodJson) => {
    const vegetableFoods = foodJson.filter((food) => food.category === "Vegetable");
    const vegetableNames = vegetableFoods.map((food) => food.foodname);
    return vegetableNames.join("<br>");
}


// () to list all the food items with category fruit

var foodCategoryFruit = (foodJson) => {
    const foodCategoryFruit = foodJson.filter((foods) => foods.category === "Fruit");
    const fruitName = foodCategoryFruit.map((foods) => foods.foodname);
    return fruitName.join("<br>");
}

// () to list all the food items with category protien

var foodCategoryProtien = (foodJson) => {
    const foodCategoryFruit = foodJson.filter((foods) => foods.category === "Protein");
    const fruitName = foodCategoryFruit.map((foods) => foods.foodname);
    return fruitName.join("<br>");
}

// () to list all the food items with category nuts

var foodCategoryNuts = (foodJson) => {
    const foodCategoryNuts = foodJson.filter((foods) => foods.category === "Nuts");
    const fruitNuts = foodCategoryNuts.map((foods) => foods.foodname);
    return fruitNuts.join("<br>");
}

// () to list all the food items with category grains

var foodCategoryGrains = (foodJson) => {
    const foodCategoryGrains = foodJson.filter((foods) => foods.category === "Grain");
    const foodGrains = foodCategoryGrains.map((foods) => foods.foodname);
    return foodGrains.join("<br>");
}

// () to list all the food items with category dairy

var foodCategoryDairy = (foodJson) => {
    const foodCategoryDairy = foodJson.filter((foods) => foods.category === "Dairy");
    const foodDairy = foodCategoryDairy.map((foods) => foods.foodname);
    return foodDairy.join("<br>");
}

// () to list all the food items with calorie above 100

var foodcalorieabove100 = (foodJson) => {
    const foodcalorieabove100 = foodJson.filter((foods) => foods.calorie > 100);
    const foodAbove100 = foodcalorieabove100.map((foods) => foods.foodname);
    return foodAbove100.join("<br>");
}

// () to list all the food items with calorie below 100

var foodcalorieBelow100 = (foodJson) => {
    const foodcalorieBelow100 = foodJson.filter((foods) => foods.calorie < 100);
    const foodBelow100 = foodcalorieBelow100.map((foods) => foods.foodname);
    return foodBelow100.join("<br>");
}

// () to list all the food items with highest protein content to lowest

var foodhighestprotien = (foodJson) => {
    z = foodJson.sort((a, b) => { return (b.protiens - a.protiens) });
    const foodhighestprotein = z.map((foods) => foods.foodname);
    return foodhighestprotein.join("<br>");
}


// () to list all the food items with lowest cab content to highest

var foodlowestprotien = (foodJson) => {
    z = foodJson.sort((a, b) => { return (a.protiens - b.protiens) });
    const foodlowestprotien = z.map((foods) => foods.foodname);
    return foodlowestprotien.join("<br>");
}


elementWithId = document.getElementById("1");
elementWithId.innerHTML = "<h2>List all the Food Items</h2><br><br>";
elementWithId.innerHTML += foodListPrint(foodJson);


elementWithId2 = document.getElementById("2");
elementWithId2.innerHTML = "<br><h2>List all the Food Items with Category Vegetables</h2><br>";
elementWithId2.innerHTML += foodCategoryVegetable(foodJson);

elementWithId3 = document.getElementById("3");
elementWithId3.innerHTML = "<br><h2>List all the Food Items with Category Fruit</h2><br>";
elementWithId3.innerHTML += foodCategoryFruit(foodJson);

elementWithId4 = document.getElementById("4");
elementWithId4.innerHTML = "<br><h2>List all the Food Items with Category Protien</h2><br>";
elementWithId4.innerHTML += foodCategoryProtien(foodJson);

elementWithId5 = document.getElementById("5");
elementWithId5.innerHTML = "<br><h2>List all the Food Items with Category Nuts</h2><br>";
elementWithId5.innerHTML += foodCategoryNuts(foodJson);


elementWithId6 = document.getElementById("6");
elementWithId6.innerHTML = "<br><h2>List all the Food Items with Category Grains</h2><br>";
elementWithId6.innerHTML += foodCategoryGrains(foodJson);

elementWithId7 = document.getElementById("7");
elementWithId7.innerHTML = "<br><h2>List all the Food Items with Category Dairy</h2><br>";
elementWithId7.innerHTML += foodCategoryDairy(foodJson);


elementWithId8 = document.getElementById("8");
elementWithId8.innerHTML = "<br><h2>List all the Food Items with Calorie above 100</h2><br>";
elementWithId8.innerHTML += foodcalorieabove100(foodJson);

elementWithId9 = document.getElementById("9");
elementWithId9.innerHTML = "<br><h2>List all the Food Items with Calorie below 100</h2><br>";
elementWithId9.innerHTML += foodcalorieBelow100(foodJson);

elementWithId10 = document.getElementById("10");
elementWithId10.innerHTML = "<br><h2>List all the Food Items with Highest Protien content to lowest</h2><br>";
elementWithId10.innerHTML += foodhighestprotien(foodJson);

elementWithId11 = document.getElementById("11");
elementWithId11.innerHTML = "<br><h2>List all the Food Items with Lowest Carb Content to highest</h2><br>";
elementWithId11.innerHTML += foodlowestprotien(foodJson);