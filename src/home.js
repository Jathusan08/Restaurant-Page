import foodpic from "./Image/home-pic/food.png";

export const createHomeContent = () => {
  const content = document.querySelector("#content");
  content.setAttribute("style", "color: #010632;");

  const home = document.createElement("div");
  home.classList.add("home");
  content.appendChild(home);

  const homeLayout = document.createElement("div");
  homeLayout.classList.add("home-layout");
  home.appendChild(homeLayout);

  const textInfo = document.createElement("div");
  textInfo.classList.add("text-info");
  const foodImage = document.createElement("div");
  foodImage.classList.add("food-image");

  homeLayout.appendChild(textInfo);

  const sloganSection = document.createElement("div");
  sloganSection.classList.add("slogan-section");

  const slogan = document.createElement("p");
  slogan.classList.add("slogan");
  slogan.innerHTML =
    'Healthy And Tasty<br>Meals, For <span class="healthy">Healthy</span><br><span class="living">Living</span>';
  sloganSection.appendChild(slogan);

  const greetingMessage = document.createElement("div");
  greetingMessage.classList.add("greetingMessage-section");

  const message = document.createElement("p");
  message.classList.add("message");
  message.textContent =
    "Welcome to JU Restaurant! Indulge your senses with our delectable dishes crafted to perfection. Let us take you on a culinary journey that tantalises your taste buds and leaves you craving more. Sit back, relax, and enjoy the flavors of JU Restaurant. We're thrilled to have you here!";
  greetingMessage.appendChild(message);

  const buttonSection = document.createElement("div");
  buttonSection.classList.add("button-Section");
  const orderBtn = document.createElement("button");
  orderBtn.classList.add("orderBtn");
  orderBtn.textContent = "Order Now";

  buttonSection.appendChild(orderBtn);

  textInfo.appendChild(sloganSection);
  textInfo.appendChild(greetingMessage);
  textInfo.appendChild(buttonSection);

  homeLayout.appendChild(foodImage);

  const foodPic = new Image();
  foodPic.src = foodpic;

  foodImage.appendChild(foodPic);
};
