const changeModalState = (state) => {
  const windowForm = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelectorAll("#width"),
    windowHeight = document.querySelectorAll("#height"),
    windowType = document.querySelectorAll("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox");

  function getFormData(elements, event, stateKey) {
    elements.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[stateKey] = i;
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              i === 0 ? (state[stateKey] = "cold") : (state[stateKey] = "warm");
              elements.forEach((box, j) => {
                box.checked = false;
                if (i == j) {
                  box.checked = true;
                }
              });
              break;
            } else {
              item.value = item.value.replace(/\D/, "");
              state[stateKey] = item.value;
            }
            break;
          case "SELECT":
            state[stateKey] = item.value;
            break;
          default:
        }
      });
    });
  }

  getFormData(windowForm, "click", "form");
  getFormData(windowWidth, "input", "width");
  getFormData(windowHeight, "input", "height");
  getFormData(windowType, "change", "type");
  getFormData(windowProfile, "change", "profile");
};

export default changeModalState;
