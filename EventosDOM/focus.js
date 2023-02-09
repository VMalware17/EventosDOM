//DOM

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");

input1.addEventListener("focus", () => {
    console.log("OK.....ingres el texto");
});

input2.addEventListener("blur", () => {
    //input2.style = "background-color:red; color:white;";

    input2.setAttribute(
        "style",
        "background-color:red;border:solid 5px cyan;padding:10px;color:white;"
    );
});