const btnEl = document.querySelector(".card__btn");
const followersNumberEl = document.querySelector(".card__user-followers-span");

btnEl.textContent = localStorage.getItem("activeBtnText") || btnEl.textContent;
btnEl.style.backgroundColor = localStorage.getItem("activeBtnColor") || btnEl.style.backgroundColor;
followersNumberEl.textContent = localStorage.getItem("followersNumber") || followersNumberEl.textContent;


const deleteComa = (content) => Number(content.replace(/[\s.,%]/g, ''));

const addComa = (content) => {
  const array = followersNumberEl.textContent.split("");

  if (array.length === 6){
    array.splice(3,0,",")
    return content = array.join("")
  }

  if (array.length  === 5 ){
    array.splice(2,0,",")
    return content = array.join("")
  }

  return content
}

const handleClick = () => {

  if (btnEl.textContent === "Follow") {
    followersNumberEl.textContent = deleteComa(followersNumberEl.textContent) + 1;
    followersNumberEl.textContent = addComa(followersNumberEl.textContent);
    btnEl.textContent = "Following";
    btnEl.style.backgroundColor = "#5CD3A8";
  } else {
    followersNumberEl.textContent = deleteComa(followersNumberEl.textContent) - 1
    followersNumberEl.textContent = addComa(followersNumberEl.textContent)
    btnEl.textContent = "Follow",
    btnEl.style.backgroundColor = "#EBD8FF"
  }
  localStorage.setItem("followersNumber", followersNumberEl.textContent );
  localStorage.setItem("activeBtnText", btnEl.textContent);
  localStorage.setItem("activeBtnColor", btnEl.style.backgroundColor);
}

followersNumberEl.textContent = addComa(followersNumberEl.textContent)

btnEl.addEventListener("click", handleClick )
