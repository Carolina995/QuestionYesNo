const buttonYes = document.getElementById("buttonY");
const buttonN = document.getElementById("buttonN");

// Add event listener for 'click' event
buttonYes.addEventListener("click", () => {
    // Redirect to a YouTube video
    window.location.href = "https://www.youtube.com/shorts/UbQ1vh4gRZk"; // YouTube video link
});

buttonN.addEventListener('mouseover', (event) => {
    // Change the position of the button when the mouse pointer enters its area
    event.target.style.position = 'absolute';
    
    // Change the position of the button on the top side
    let top = Math.round(Math.random() * (window.innerHeight - event.target.offsetHeight));
    event.target.style.top = `${top}px`;

    // Change the position of the button on the left side
    let left = Math.round(Math.random() * (window.innerWidth - event.target.offsetWidth));
    event.target.style.left = `${left}px`;
});

