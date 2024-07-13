const buttons = document.querySelectorAll("button");

for(button of buttons){
    button.addEventListener("click", () => {
        console.log("button was clicked");
    });
}