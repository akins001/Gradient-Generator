/*const leftSide = document.getElementById("left-side");
const rightSide = document.getElementById("right-side");
let body =document.getElementsByTagName("body")[0];
body.style.background = `linear-gradient(to right, ${leftSide.value}, ${rightSide.value})`;

let pickColor = () => {
    const updatedLeftSide = document.getElementById("left-side");
    const updatedRightSide = document.getElementById("right-side");
    const leftColorValue = document.getElementById("leftColorValue");
    const rightColorValue = document.getElementById("rightColorValue");
    let body =document.getElementsByTagName("body")[0];
    body.style.background = `linear-gradient(to right, ${updatedLeftSide.value}, ${updatedRightSide.value})`;
    leftColorValue.innerText = updatedLeftSide.value;
    rightColorValue.innerText = updatedRightSide.value;
}
*/

// Define a function to set the background gradient and add event listeners to the copy button
const pickColor = () => {
    // Get the left and right color inputs and color value displays from the DOM
    const updatedLeftSide = document.getElementById("left-side");
    const updatedRightSide = document.getElementById("right-side");
    const leftColorValue = document.getElementById("leftColorValue");
    const rightColorValue = document.getElementById("rightColorValue");
    
    // Get the body element from the DOM
    const body = document.getElementsByTagName("body")[0];
    
    // Create a gradient value using the selected colors
    const gradientValue = `linear-gradient(to right, ${updatedLeftSide.value}, ${updatedRightSide.value})`;
    
    // Set the background of the body to the gradient value
    body.style.background = gradientValue;
    
    // Update the color value displays with the selected colors
    leftColorValue.innerText = updatedLeftSide.value;
    rightColorValue.innerText = updatedRightSide.value;
    
    // Get the copy button from the DOM
    const copyButton = document.getElementById("copy-button");
    
    // Add an event listener to the copy button to copy the gradient value to the clipboard
    copyButton.addEventListener("click", () => {
      navigator.clipboard.writeText(gradientValue)
        .then(() => {
          console.log("Gradient copied to clipboard successfully!");
        })
        .catch((error) => {
          // Log any errors to the console
          console.error("Error copying gradient: ", error);
        });
    });
  }
  
  // Call the pickColor function to set the initial gradient value and add event listeners
  pickColor();
  
