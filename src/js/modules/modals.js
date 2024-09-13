const modals = () => {
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

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }
        closeAllModals();
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        //document.body.classList.add("modal-open");
      });
    });
    close.addEventListener("click", () => {
      //modal.style.display = "none";
      closeAllModals();
      document.body.style.overflow = "";
      //document.body.classList.remove("modal-open");
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeClickOverlay) {
        //modal.style.display = "none";
        closeAllModals();
        document.body.style.overflow = "";
        //document.body.classList.remove("modal-open");
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
