import { t } from "./i18n.js";

export function hoverChangeDescription(nameCard, textKey) {
  var changeDescription = document.querySelector(".changeDescription");
  var el = document.querySelector(nameCard);
  
  el.dataset.textKey = textKey;

  if (!el.dataset.hasHoverListener) {
    el.dataset.hasHoverListener = "true";
    el.addEventListener("mouseover", () => {
      changeDescription.innerHTML = t(el.dataset.textKey);
    });

    el.addEventListener("mouseout", () => {
      changeDescription.innerHTML = t("skills_hover");
    });
  }
}
