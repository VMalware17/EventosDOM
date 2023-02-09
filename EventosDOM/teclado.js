const input = document.querySelector("#input");

input.addEventListener("keyup", (e) => {
    console.log(e); //todo el arreglo de caracteristicas del evento

    if (e.keyCode === 87) {
        alert("ganaste");
    } else {
        console.log("incorrecto, siga jugando");
    }
});

/*input.addEventListener('keydown',(e) => 

{

    console.log("e.keycode");

})*/

/*input.addEventListener('keypress',(e) => 

{

    console.log("e.keycode");

})*/