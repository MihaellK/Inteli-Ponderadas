const btnGit = document.querySelector("#btnGit");
const btnLinkedin = document.querySelector("#btnLinkedin");
const btnTour = document.querySelector("#btnTour")

btnGit.addEventListener('click', () => {
    window.open('https://github.com/MihaellK', '_blank');
});

btnLinkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/mihaellalves/', '_blank');
});

btnTour.addEventListener('click', () => {
    window.open('https://inteli-360-tour.glitch.me', '_blank');
});