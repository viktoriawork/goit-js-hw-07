
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const htmlIngredients = [];
  ingredients.forEach(ingredient => {
    const newElement = document.createElement("li");
    newElement.innerHTML = ingredient;
    htmlIngredients.push(newElement);
  });
  htmlIngredients.forEach((ingredient) => document.getElementById("ingredients").appendChild(ingredient));