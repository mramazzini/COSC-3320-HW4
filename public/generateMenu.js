const generateMenuItem = (foodItem) => {
  const menuItem = document.createElement("div");
  menuItem.id = foodItem.id;
  menuItem.classList =
    " h-48 bg-neutral m-4 p-4 rounded-xl text-neutral-content w-auto";
  menuItem.innerHTML = `
    <h2 >${foodItem.name}</h2>
    <p>${foodItem.price}</p>
    <p>${foodItem.description}</p>
  `;
  return menuItem;
};

fetch("/api/food-item")
  .then((response) => response.json())
  .then((foodItems) => {
    const menu = document.getElementById("menu");
    foodItems.forEach((foodItem) => {
      menu.appendChild(generateMenuItem(foodItem));
    });
  });
