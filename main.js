function toggleMode() {
  const htmlInstance = document.documentElement
  htmlInstance.classList.toggle("light")
  const img = document.querySelector(".profile img")

  if (htmlInstance.classList.contains("light")) {
    img.setAttribute("src", "./assets/profile.png")
    img.setAttribute(
      "alt",
      "Foto do autor do projeto Onildo Costa de óculos escuros usando uma máscara"
    )
  } else {
    img.setAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/14207982?v=4.icon"
    )
  }
}
