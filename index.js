const App = () => {
  const state = {
    selectedCard: null,
    selectedLevel: null,
  };

  const firstSection = document.querySelector(".ancients");
  const secondSection = document.querySelector(".levels");

  const selectCard = (e) => {
    if (e.target.tagName !== "IMG") {
      return null;
    }

    state.selectedCard = e.target.id;

    for (let i = 0; i < firstSection.childNodes.length; i++) {
      console.log(firstSection.childNodes[i]);
    }

    // console.log(firstSection.childNodes[1]);

    // if (e.target.id !== state.selectedCard) {
    //     console.log(e.target)
    // } else {
    //   document.querySelector(`#${state.selectedCard}`).style.border =
    //     "3px solid red";
    // }
  };

  const selectLevel = (e) => {
    console.log(e);
  };

  firstSection.addEventListener("click", (e) => selectCard(e));
  secondSection.addEventListener("click", (e) => selectLevel(e));
};

document.addEventListener("DOMContentLoaded", App);
