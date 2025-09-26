let count = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

incrementButton.addEventListener('click', () => {
    count++;
    updateCounter();
});

decrementButton.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetButton.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

function updateCounter() {
    counterElement.textContent = count;
    localStorage.setItem('counter', count);
}

// Initialize the counter display
updateCounter();
