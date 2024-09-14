import calcScroll from "./calcScroll";

const images = () => {
  // создание модального окна
  const imgPopup = document.createElement("div"),
    workSection = document.querySelector(".works"),
    bigImage = document.createElement("img"),
    scroll = calcScroll();

  imgPopup.classList.add("popup_bigImg");
  workSection.appendChild(imgPopup);
  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";
  imgPopup.style.display = "none";

  imgPopup.appendChild(bigImage);

  bigImage.style.maxWidth = "100%";
  bigImage.style.height = "auto";
  bigImage.style.marginLeft = "2rem";
  bigImage.style.paddingRight = "2rem";
  bigImage.classList.add("faded");
  // добавление события на кнопку закрытия модального окна
  workSection.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    // поиск картинки, на которую кликнули
    if (target && target.classList.contains("preview")) {
      imgPopup.style.display = "flex";
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scroll}px`;
      const path = target.parentNode.getAttribute("href");
      bigImage.setAttribute("src", path);
    }
    // нажатие на подложку
    if (target && target.matches("div.popup_bigImg")) {
      imgPopup.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = "0px";
    }
  });
};

export default images;
