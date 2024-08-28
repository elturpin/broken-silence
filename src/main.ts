const audioContext = new AudioContext();

const audioElement = document.querySelector("audio")!;

const track = audioContext.createMediaElementSource(audioElement);

track.connect(audioContext.destination);

const playButton = document.querySelector("button")!;
const fileInput = document.querySelector("input")!;

fileInput.addEventListener("input", () => {
    if (fileInput.files?.[0]) {
        audioElement.src = URL.createObjectURL(fileInput.files[0]);
        playButton.disabled = false;
    }
})

const playSound = () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
    }
    audioElement.play();
}

const armeSoundToPlay = () => {
    setTimeout(playSound, 1000);
};

playButton.addEventListener(
    "click",
    armeSoundToPlay
);