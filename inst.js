// Display an instruction and gather user input
alert("Welcome to our website! Please follow the instructions.");

const userResponse = confirm("Would you like to continue?");

if (userResponse) {
    const userName = prompt("Please enter your name:");
    alert(`Hello, ${userName}! Thank you for using our website.`);
} else {
    alert("You chose not to continue. Please come back later.");
}
