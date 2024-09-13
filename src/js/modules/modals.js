const modals = (state) => {
  const windows = document.querySelectorAll("[data-modal]");
  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay = true
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    const closeAllModals = () => {
      windows.forEach((item) => {
        item.style.display = "none";
      });
    };

    const showStatusMessage = (mess, item) => {
      const statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);
      statusMessage.textContent = mess;
      setTimeout(() => {
        statusMessage.style.display = "none";
      }, 3000);
    };

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }
        //closeAllModals();
        switch (item.getAttribute("data-trigger")) {
          case "calc":
            if (state.form && state.width && state.height) {
              closeAllModals();
              modal.style.display = "block";
              document.body.style.overflow = "hidden";
            } else {
              showStatusMessage("Введіть данні", item);
            }
            break;
          case "profile":
            if (state.type && state.profile) {
              closeAllModals();
              modal.style.display = "block";
              document.body.style.overflow = "hidden";
            } else {
              showStatusMessage("Введіть данні", item);
            }
            break;
          default:
            closeAllModals();
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        }
      });
    });
    close.addEventListener("click", () => {
      closeAllModals();
      document.body.style.overflow = "";
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeClickOverlay) {
        closeAllModals();
        document.body.style.overflow = "";
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
    }, time);
  }

  function addClassesAnimation() {
    windows.forEach((item) => {
      item.classList.add("animate__animated", "animate__pulse");
    });
  }

  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  );
  bindModal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
  );

  showModalByTime(".popup", 60000);
  addClassesAnimation();
};

export default modals;
