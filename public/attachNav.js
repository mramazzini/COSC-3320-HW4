const generateNav = () => {
  const navlist = [
    { name: "Home", link: "/" },
    { name: "Menu", link: "/menu" },
    { name: "Order", link: "/order" },
  ];
  const nav = document.getElementById("nav");
  nav.classList = "flex justify-start space-x-4 p-4 bg-gray-900";
  navlist.forEach((navItem) => {
    const item = document.createElement("a");
    item.classList = "btn btn-ghost border-gray-400";
    item.href = navItem.link;
    item.innerHTML = navItem.name;

    nav.appendChild(item);
  });
};

generateNav();
