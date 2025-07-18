document.addEventListener('DOMContentLoaded', function() {
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
    
    // Function to generate a random hex color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    // Function to change the color box background
    function changeColor() {
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
    }
    
    // Add click event listener to the button
    changeColorBtn.addEventListener('click', changeColor);
    
    // Optional: Change color every 3 seconds automatically
    // setInterval(changeColor, 3000);
});
