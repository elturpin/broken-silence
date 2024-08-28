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

playButton.addEventListener(
    "click",
    () => {
        // Check if context is in suspended state (autoplay policy)
        if (audioContext.state === "suspended") {
            audioContext.resume();
        }
        audioElement.play();
    }
);