const btn = document.querySelector(".card__btn");

console.log(btn.textContent)

const handleClick = () => {
  console.log("click")

  if (btn.textContent = "Follow") {
    return btn.textContent = "Following"
  } else if (btn.textContent = "Following"){
    return btn.textContent = "Follow"
  }
}

btn.addEventListener("click", handleClick )