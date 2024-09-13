import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  let modalState = {};
  changeModalState(modalState);

  modals(modalState);
  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
  tabs(
    ".decoration_slider",
    ".no_click",
    ".decoration_content > div > div",
    "after_click"
  );
  tabs(
    ".popup_calc",
    ".balcon_icons_img",
    ".popup_calc_content > .big_img > img",
    "do_image_more",
    "inline-block"
  );
  forms(modalState);

  let deadline = "2024-12-18";
  timer(".container1", deadline);
});
