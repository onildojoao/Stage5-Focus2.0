const minutesDisplay = document.querySelector("#minutes")
const secondsDisplay = document.querySelector("#seconds")
const playButton = document.querySelector("#playButton")
const stopButton = document.querySelector("#stopButton")
const addButton = document.querySelector("#addTimeButton")
const subButton = document.querySelector("#subTimeButton")
const forestAudioButton = document.querySelector("#forestAudioButton")
const rainAudioButton = document.querySelector("#rainAudioButton")
const storeAudioButton = document.querySelector("#storeAudioButton")
const fireAudioButton = document.querySelector("#fireAudioButton")

forestAudioButton.addEventListener("click", () => {
  resetAudioButtons()
  forestAudioButton.classList.add("clicked")
})

rainAudioButton.addEventListener("click", () => {
  resetAudioButtons()
  rainAudioButton.classList.add("clicked")
})

storeAudioButton.addEventListener("click", () => {
  resetAudioButtons()
  storeAudioButton.classList.add("clicked")
})

fireAudioButton.addEventListener("click", () => {
  resetAudioButtons()
  fireAudioButton.classList.add("clicked")
})

function resetAudioButtons() {
  forestAudioButton.classList.remove("clicked")
  rainAudioButton.classList.remove("clicked")
  storeAudioButton.classList.remove("clicked")
  fireAudioButton.classList.remove("clicked")
}
