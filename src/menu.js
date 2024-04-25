import pastaPic from "./Image/menu/pasta.png";
import salmonPic from "./Image/menu/salmon.png";
import burgerPic from "./Image/menu/burgerPlate.png";
import tacoPic from "./Image/menu/taco.png";
import ribPic from "./Image/menu/steamedRibs.png";
import sandwichPic from "./Image/menu/sandwich.png";
import fishChipsPic from "./Image/menu/fishChips.png";
import fridRicePic from "./Image/menu/friedrice.png";

export const createMenuContent = () => {
  const content = document.querySelector("#content");

  const menu = document.createElement("div");
  menu.classList.add("menu");
  content.appendChild(menu);

  const menuLayout = document.createElement("div");
  menuLayout.classList.add("menu-layout");
  menu.appendChild(menuLayout);

  const title = document.createElement("h4");
  title.classList.add("title");
  title.textContent = "- TASTY AND CRUNCHY -";

  menuLayout.appendChild(title);

  const MainMenuTitle = document.createElement("p");
  MainMenuTitle.classList.add("MainMenuTitle");
  MainMenuTitle.textContent = "Our Main Meals";
  menuLayout.appendChild(MainMenuTitle);

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menuContainer");
  menuLayout.appendChild(menuContainer);

  const menu1 = document.createElement("div");
  menu1.classList.add("menu1");
  menuContainer.appendChild(menu1);

  const menu1Pic = new Image();
  menu1Pic.src = pastaPic;
  menu1.appendChild(menu1Pic);

  const menu1Layout = document.createElement("div");
  menu1Layout.classList.add("menu1Layout");
  menu1.appendChild(menu1Layout);

  const menu1Title = document.createElement("p");
  menu1Title.classList.add("menu1Title");
  menu1Title.textContent = "Pasta";
  menu1Layout.appendChild(menu1Title);

  const menu1Style = document.createElement("p");
  menu1Style.classList.add("menu1Style");
  menu1Style.textContent = ".................................";
  menu1Layout.appendChild(menu1Style);

  const menu1Price = document.createElement("p");
  menu1Price.classList.add("menu1Price");
  menu1Price.textContent = "£12.50";
  menu1Layout.appendChild(menu1Price);

  const menu2 = document.createElement("div");
  menu2.classList.add("menu2");
  menuContainer.appendChild(menu2);

  const menu2Pic = new Image();
  menu2Pic.src = salmonPic;
  menu2.appendChild(menu2Pic);

  const menu2Layout = document.createElement("div");
  menu2Layout.classList.add("menu2Layout");
  menu2.appendChild(menu2Layout);

  const menu2Title = document.createElement("p");
  menu2Title.classList.add("menu2Title");
  menu2Title.textContent = "Salmon Fillet";
  menu2Layout.appendChild(menu2Title);

  const menu2Style = document.createElement("p");
  menu2Style.classList.add("menu2Style");
  menu2Style.textContent = ".................................";
  menu2Layout.appendChild(menu2Style);

  const menu2Price = document.createElement("p");
  menu2Price.classList.add("menu2Price");
  menu2Price.textContent = "£11.99";
  menu2Layout.appendChild(menu2Price);

  const menu3 = document.createElement("div");
  menu3.classList.add("menu3");
  menuContainer.appendChild(menu3);

  const menu3Pic = new Image();
  menu3Pic.src = burgerPic;
  menu3.appendChild(menu3Pic);

  const menu3Layout = document.createElement("div");
  menu3Layout.classList.add("menu3Layout");
  menu3.appendChild(menu3Layout);

  const menu3Title = document.createElement("p");
  menu3Title.classList.add("menu3Title");
  menu3Title.textContent = "Burger";
  menu3Layout.appendChild(menu3Title);

  const menu3Style = document.createElement("p");
  menu3Style.classList.add("menu3Style");
  menu3Style.textContent = "...............................";
  menu3Layout.appendChild(menu3Style);

  const menu3Price = document.createElement("p");
  menu3Price.classList.add("menu3Price");
  menu3Price.textContent = "£5.34";
  menu3Layout.appendChild(menu3Price);

  const menu4 = document.createElement("div");
  menu4.classList.add("menu4");
  menuContainer.appendChild(menu4);

  const menu4Pic = new Image();
  menu4Pic.src = tacoPic;
  menu4.appendChild(menu4Pic);

  const menu4Layout = document.createElement("div");
  menu4Layout.classList.add("menu4Layout");
  menu4.appendChild(menu4Layout);

  const menu4Title = document.createElement("p");
  menu4Title.classList.add("menu4Title");
  menu4Title.textContent = "Taco";
  menu4Layout.appendChild(menu4Title);

  const menu4Style = document.createElement("p");
  menu4Style.classList.add("menu4Style");
  menu4Style.textContent = "..................................................";
  menu4Layout.appendChild(menu4Style);

  const menu4Price = document.createElement("p");
  menu4Price.classList.add("menu4Price");
  menu4Price.textContent = "£7.45";
  menu4Layout.appendChild(menu4Price);

  const menu5 = document.createElement("div");
  menu5.classList.add("menu5");
  menuContainer.appendChild(menu5);

  const menu5Pic = new Image();
  menu5Pic.src = ribPic;
  menu5.appendChild(menu5Pic);

  const menu5Layout = document.createElement("div");
  menu5Layout.classList.add("menu5Layout");
  menu5.appendChild(menu5Layout);

  const menu5Title = document.createElement("p");
  menu5Title.classList.add("menu5Title");
  menu5Title.textContent = "Steamed Ribs";
  menu5Layout.appendChild(menu5Title);

  const menu5Style = document.createElement("p");
  menu5Style.classList.add("menu5Style");
  menu5Style.textContent = "..................";
  menu5Layout.appendChild(menu5Style);

  const menu5Price = document.createElement("p");
  menu5Price.classList.add("menu5Price");
  menu5Price.textContent = "£9.23";
  menu5Layout.appendChild(menu5Price);

  const menu6 = document.createElement("div");
  menu6.classList.add("menu6");
  menuContainer.appendChild(menu6);

  const menu6Pic = new Image();
  menu6Pic.src = sandwichPic;
  menu6.appendChild(menu6Pic);

  const menu6Layout = document.createElement("div");
  menu6Layout.classList.add("menu6Layout");
  menu6.appendChild(menu6Layout);

  const menu6Title = document.createElement("p");
  menu6Title.classList.add("menu6Title");
  menu6Title.textContent = "Salad Sandwichiches";
  menu6Layout.appendChild(menu6Title);

  const menu6Style = document.createElement("p");
  menu6Style.classList.add("menu6Style");
  menu6Style.textContent = ".................";
  menu6Layout.appendChild(menu6Style);

  const menu6Price = document.createElement("p");
  menu6Price.classList.add("menu6Price");
  menu6Price.textContent = "£7.65";
  menu6Layout.appendChild(menu6Price);

  const menu7 = document.createElement("div");
  menu7.classList.add("menu7");
  menuContainer.appendChild(menu7);

  const menu7Pic = new Image();
  menu7Pic.src = fishChipsPic;
  menu7.appendChild(menu7Pic);

  const menu7Layout = document.createElement("div");
  menu7Layout.classList.add("menu7Layout");
  menu7.appendChild(menu7Layout);

  const menu7Title = document.createElement("p");
  menu7Title.classList.add("menu7Title");
  menu7Title.textContent = "Fish & Chips";
  menu7Layout.appendChild(menu7Title);

  const menu7Style = document.createElement("p");
  menu7Style.classList.add("menu7Style");
  menu7Style.textContent = "..................";
  menu7Layout.appendChild(menu7Style);

  const menu7Price = document.createElement("p");
  menu7Price.classList.add("menu7Price");
  menu7Price.textContent = "£11.43";
  menu7Layout.appendChild(menu7Price);

  const menu8 = document.createElement("div");
  menu8.classList.add("menu8");
  menuContainer.appendChild(menu8);

  const menu8Pic = new Image();
  menu8Pic.src = fridRicePic;
  menu8.appendChild(menu8Pic);

  const menu8Layout = document.createElement("div");
  menu8Layout.classList.add("menu8Layout");
  menu8.appendChild(menu8Layout);

  const menu8Title = document.createElement("p");
  menu8Title.classList.add("menu8Title");
  menu8Title.textContent = "Egg Fried Rice";
  menu8Layout.appendChild(menu8Title);

  const menu8Style = document.createElement("p");
  menu8Style.classList.add("menu8Style");
  menu8Style.textContent = "..............................";
  menu8Layout.appendChild(menu8Style);

  const menu8Price = document.createElement("p");
  menu8Price.classList.add("menu7Price");
  menu8Price.textContent = "£10.34";
  menu8Layout.appendChild(menu8Price);
};
