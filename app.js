function yourName() {
    let userName = prompt("Enter your first name :");
    alert(`Your name is ${userName.slice(0,1).toUpperCase()}${userName.slice(1).toLowerCase()}`);
}

yourName();