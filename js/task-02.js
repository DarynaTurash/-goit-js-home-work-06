const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredientsRef = document.querySelector("#ingredients");

const itemsInList = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");

  return itemEl;
});

listOfIngredientsRef.append(...itemsInList);