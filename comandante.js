const mario = "Mario";
const destinos = ["Marte", "Jupiter", "Saturno"];

// 1. Añadimos comillas al ID
const btnidentificar = document.querySelector("#btn-identificar");

// 2. Añadimos la COMA después de "click"
btnidentificar.addEventListener("click", () => {
    document.querySelector("#nombre-id").innerText = mario;
    
    // Accedemos al segundo (índice 1)
    document.querySelector("#destino-id").innerText = destinos[1];

    // 3. Cambiamos miNombre por mario para que coincida con tu variable
    console.log("Comandante identificado: " + mario);
});
