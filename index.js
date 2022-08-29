const App = () => {
  console.log(
    "Самооценка: 45 баллов. \n \n Выполненные требования: \n 1) На выбор предоставляется минимум одна карта древнего (максимум 4) +5-20 баллов(по 5 за каждого древнего) \n 2) На выбор предоставляется несколько уровней сложности (максимум 5) +5-25 баллов(по 5 за каждый уровень сложности"
  );

  const state = {
    selectedCard: "",
    selectedLevel: null,
  };

  const firstSection = document.querySelector(".ancients");
  const secondSection = document.querySelector(".levels");
  const shuffle = document.querySelector("#Shuffle");

  const selectCard = (e) => {
    if (e.target.tagName !== "IMG") {
      return null;
    }

    state.selectedCard = e.target.id;

    if (state.selectedCard) {
      secondSection.style.display = "flex";
    } else if (!state.selectedCard) {
      secondSection.style.display = "none";
    }

    for (const item of firstSection.childNodes) {
      if (item.hasChildNodes()) {
        if (item.childNodes[0].id === state.selectedCard) {
          document.querySelector(`#${state.selectedCard}`).style.border =
            "3px solid red";
        }

        if (item.childNodes[0].id !== state.selectedCard) {
          item.childNodes[0].style.border = "none";
        }
      }
    }
  };

  const selectLevel = (e) => {
    if (e.target.id === "Shuffle") {
      return;
    }

    state.selectedLevel = e.target.id;

    if (state.selectedLevel) {
      shuffle.style.display = "flex";
    } else if (!state.selectedLevel) {
      shuffle.style.display = "none";
    }

    for (const item of secondSection.childNodes) {
      if (item.hasChildNodes()) {
        if (item.id === state.selectedLevel && e.target.id !== "Shuffle") {
          document.querySelector(`#${state.selectedLevel}`).style.border =
            "2px solid red";
        }

        if (item.id !== state.selectedLevel && e.target.id !== "Shuffle") {
          item.style.border = "2px solid antiquewhite";
        }
      }
    }
  };

  firstSection.addEventListener("click", (e) => selectCard(e));
  secondSection.addEventListener("click", (e) => selectLevel(e));
};

document.addEventListener("DOMContentLoaded", App);
