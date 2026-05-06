import { t } from "./i18n.js";

export function hoverChangeExperience(
  nameCard,
  descKey,
  titleKey,
  companyKey,
  dateKey
) {
  const varChangeDescription = document.querySelector(".changeExperience");
  const varTitleExperience = document.querySelector(".titleExperience");
  const varCompanyExperience = document.querySelector(".companyExperience");
  const varDateExperience = document.querySelector(".dateExperience");

  const btn = document.querySelector(nameCard);
  btn.dataset.descKey = descKey;
  btn.dataset.titleKey = titleKey;
  btn.dataset.companyKey = companyKey;
  btn.dataset.dateKey = dateKey;

  if (!btn.dataset.hasHoverListener) {
    btn.dataset.hasHoverListener = "true";
    btn.addEventListener("click", () => {
      varChangeDescription.innerHTML = t(btn.dataset.descKey);
      varCompanyExperience.innerHTML = t(btn.dataset.companyKey);
      varTitleExperience.innerHTML = t(btn.dataset.titleKey);
      varDateExperience.innerHTML = t(btn.dataset.dateKey);
    });
  }
}

const header = document.getElementById("experience-company");
const btns = header.getElementsByClassName("company");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("activeExperience");
    current[0].className = current[0].className.replace(
      " activeExperience",
      ""
    );
    this.className += " activeExperience";
  });
}
