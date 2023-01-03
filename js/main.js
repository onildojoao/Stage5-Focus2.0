const lightThemeButton = document.querySelector("#lightThemeButton")
const darkThemeButton = document.querySelector("#darkThemeButton")
const minutesDisplay = document.querySelector("#minutes")
const secondsDisplay = document.querySelector("#seconds")
const playTimerButton = document.querySelector("#playTimerButton")
const stopTimerButton = document.querySelector("#stopTimerButton")
const addTimerButton = document.querySelector("#addTimerButton")
const subTimerButton = document.querySelector("#subTimerButton")
const forestAudioButton = document.querySelector("#forestAudioButton")
const rainAudioButton = document.querySelector("#rainAudioButton")
const storeAudioButton = document.querySelector("#storeAudioButton")
const fireAudioButton = document.querySelector("#fireAudioButton")

const htmlInstance = document.documentElement

const forestAudio = new Audio("./audio/Floresta.wav")
const rainAudio = new Audio("./audio/Chuva.wav")
const storeAudio = new Audio("./audio/Cafeteria.wav")
const fireAudio = new Audio("./audio/Lareira.wav")

const forestSlider = document.querySelector("#forestSlider")
const rainSlider = document.querySelector("#rainSlider")
const storeSlider = document.querySelector("#storeSlider")
const fireSlider = document.querySelector("#fireSlider")

let startMinutes = Number(minutesDisplay.textContent)
let timerTimeOut

/* Control Buttons */
playTimerButton.addEventListener("click", startCountdown)

function startCountdown() {
  timerTimeOut = setTimeout(() => {
    let sDisplay = Number(secondsDisplay.textContent)
    let mDsiplay = Number(minutesDisplay.textContent)
    let timerFinished = mDsiplay <= 0 && sDisplay <= 0

    updateTimer(minutes, 0)
    if (timerFinished) {
      updateTimer(startMinutes, 0)
      return
    }

    if (sDisplay <= 0) {
      sDisplay = 60
      --mDsiplay
    }

    updateTimer(mDsiplay, String(sDisplay - 1))
    startCountdown()
  }, 1000)
}

stopTimerButton.addEventListener("click", () => {
  updateTimer(startMinutes, 0)
  clearTimeout(timerTimeOut)
  resetAudioButtons()
})

addTimerButton.addEventListener("click", () => {
  let mDisplay = minutesDisplay.textContent
  let sDisplay = secondsDisplay.textContent

  mDisplay = Number(mDisplay) + 5
  mDisplay = String(mDisplay)

  updateTimer(mDisplay, sDisplay)
})

subTimerButton.addEventListener("click", () => {
  let mDisplay = minutesDisplay.textContent
  let sDisplay = secondsDisplay.textContent

  mDisplay = Number(mDisplay) - 5
  mDisplay = String(mDisplay)

  updateTimer(mDisplay, sDisplay)
})

/* Timer Update */
function updateTimer(newMinutes, newSeconds) {
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
  secondsDisplay.textContent = String(newSeconds).padStart(2, "0")
}

/* Audio Buttons */
forestAudioButton.addEventListener("click", () => {
  resetAudioButtons()
  forestAudioButton.classList.add("clicked")
  forestAudio.play()
  forestAudio.loop = true
  forestSlider.value = 50
})

forestSlider.addEventListener("change", () => {
  forestAudio.volume = forestSlider.value / 100
})

rainAudioButton.addEventListener("click", () => {
  resetAudioButtons()
  rainAudioButton.classList.add("clicked")
  rainAudio.play()
  rainAudio.loop = true
  rainSlider.value = 50
})

rainSlider.addEventListener("change", () => {
  rainAudio.volume = rainSlider.value / 100
})

storeAudioButton.addEventListener("click", () => {
  resetAudioButtons()
  storeAudioButton.classList.add("clicked")
  storeAudio.play()
  storeAudio.loop = true
  storeSlider.value = 50
})

storeSlider.addEventListener("change", () => {
  storeAudio.volume = storeSlider.value / 100
})

fireAudioButton.addEventListener("click", () => {
  resetAudioButtons()
  fireAudioButton.classList.add("clicked")
  fireAudio.play()
  fireAudio.loop = true
  fireSlider.value = 50
})

fireSlider.addEventListener("change", () => {
  fireAudio.volume = fireSlider.value / 100
})

function changeVolume(audioElement, sliderValue) {
  console.log(audioElement.volume)
  console.log(sliderValue)
  audioElement.volume = sliderValue / 100
}

function resetAudioButtons() {
  forestAudioButton.classList.remove("clicked")
  forestAudio.pause()
  rainAudioButton.classList.remove("clicked")
  rainAudio.pause()
  storeAudioButton.classList.remove("clicked")
  storeAudio.pause()
  fireAudioButton.classList.remove("clicked")
  fireAudio.pause()
}

/* Theme Switch */
darkThemeButton.addEventListener("click", toggleTheme)

lightThemeButton.addEventListener("click", toggleTheme)

function toggleTheme() {
  htmlInstance.classList.toggle("dark")
  darkThemeButton.classList.toggle("hidden")
  lightThemeButton.classList.toggle("hidden")
}
