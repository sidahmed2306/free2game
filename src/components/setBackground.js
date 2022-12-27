export default function setBackground({ image }) {
    document.documentElement.style.setProperty("--backgroundImage", image);
}
