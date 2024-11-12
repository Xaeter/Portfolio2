// console.log("JavaScript is running");

//     const container = document.getElementById('bubble-container');

//     if (container) {
//         console.log("Container found, adding event listener...");

//         container.addEventListener('mousemove', function (e) {
//             console.log("Mousemove event detected");

//             const bubble = document.createElement('div');
//             bubble.classList.add('bubble');

//             const size = Math.random() * 30 + 20;
//             const left = e.clientX - container.getBoundingClientRect().left - size / 2;
//             const top = e.clientY - container.getBoundingClientRect().top - size / 2;

//             bubble.style.width = `${size}px`;
//             bubble.style.height = `${size}px`;
//             bubble.style.left = `${left}px`;
//             bubble.style.top = `${top}px`;

//             console.log(`Bubble created at (${left}, ${top}) with size ${size}px`);
//             const color1 = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`;
//             const color2 = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.4)`;
            
//             bubble.style.background = `radial-gradient(circle, ${color1} 10%, ${color2} 70%)`;
        
//             container.appendChild(bubble);

//             setTimeout(() => {
//                 bubble.remove();
//             }, 5600);
//         });
//     } else {
//         console.error("Container not found!");
//     }
const container = document.getElementById('bubble-container');
const bubbles = [];
const hasListener = false;

// Function to create a bubble at the mouse position
function createBubble(e) {
    
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 30 + 20; // Random size between 20px and 50px
    const left = e.clientX - container.getBoundingClientRect().left - size / 2; // Position horizontally based on mouse
    const top = e.clientY - container.getBoundingClientRect().top - size / 2; // Position vertically based on mouse

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}px`;
    bubble.style.top = `${top}px`;

    container.appendChild(bubble);

    bubbles.push(bubble);
    if(bubbles.length > 100) {
        bubbles[0].remove();
        bubbles.splice(0, 1);
    };

    // Remove the bubble after the pop effect (around 5.6 seconds)`
    setTimeout(() => {
       bubbles[bubbles.indexOf(bubble)].remove();
       bubbles.splice(bubbles.indexOf(bubble), 1);
    }, 5000); // 5600ms = 5.6 seconds (float + pop duration)
    
}

// Function to handle mouse hovering over the container
container.addEventListener('mousemove', function (e) {
    createBubble(e); // Create a bubble when the mouse moves
});

// Optionally: If you want to start the effect only when mouse enters the container
container.addEventListener('mouseenter', function () {
    // if(hasListener) return; // Check if the listener is already set up
    container.addEventListener('mousemove', createBubble);
    // hasListener = true;
    for(let i = 0; i < bubbles.length; i++) {
        let bubble = bubbles[i];
        bubble.remove();
    }
    bubbles = [];
});

// Stop creating bubbles when the mouse leaves the container
container.addEventListener('mouseleave', function () {
    container.removeEventListener('mousemove', createBubble);
   
});