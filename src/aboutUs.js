import foodpic from "./Image/aboutUs-pic/burger.png";
export const createAboutUsContent = () => {
  const content = document.querySelector("#content");
  content.setAttribute("style", "color: #010632;");

  const aboutUs = document.createElement("div");
  aboutUs.classList.add("aboutUs");
  content.appendChild(aboutUs);

  const aboutUsLayout = document.createElement("div");
  aboutUsLayout.classList.add("aboutUs-layout");
  aboutUs.appendChild(aboutUsLayout);

  const textInfo = document.createElement("div");
  textInfo.classList.add("text-info");
  const foodImage = document.createElement("div");
  foodImage.classList.add("food-image");

  aboutUsLayout.appendChild(foodImage);
  aboutUsLayout.appendChild(textInfo);

  const circleImageContainer = document.createElement("div");
  circleImageContainer.classList.add("circular-image");
  foodImage.appendChild(circleImageContainer);
  const foodPic = new Image();
  foodPic.src = foodpic;

  circleImageContainer.appendChild(foodPic);

  const aboutUsTitle = document.createElement("h4");
  aboutUsTitle.classList.add("aboutUsTitle");
  aboutUsTitle.textContent = "- About Us";

  textInfo.appendChild(aboutUsTitle);

  const pharse = document.createElement("p");
  pharse.classList.add("pharse");
  pharse.innerHTML = "We serve the best food<br> in town!";
  textInfo.appendChild(pharse);

  const restuarantDetail = document.createElement("p");
  restuarantDetail.classList.add("restuarantDetail");
  restuarantDetail.textContent =
    "Founded in 1999, JU Restaurant has become a staple in the community, renowned for its farm-to-table approach. With a diverse menu crafted from locally sourced ingredients, we offer a unique dining experience that combines flavor, freshness, and sustainability. From hearty breakfasts to gourmet dinners, JU Restaurant is where quality and community come together.";
  textInfo.appendChild(restuarantDetail);

  const readMoreBtn = document.createElement("button");
  readMoreBtn.classList.add("readMoreBtn");
  readMoreBtn.textContent = "Read More";
  textInfo.appendChild(readMoreBtn);
};
