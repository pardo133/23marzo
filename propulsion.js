
let energiaMotores = false;


const btnMotores = document.getElementById("btn-motores");
const btnDespegue = document.getElementById("btn-despegue");
const estadoTexto = document.getElementById("estado-motores");


btnMotores.addEventListener("click", () => {
   
    energiaMotores = true;
    
    
    estadoTexto.textContent = "LISTOS";
    estadoTexto.style.color = "green";
    
    console.log("Energía activada:", energiaMotores);
});


btnDespegue.addEventListener("click", () => {
   
    btnDespegue.classList.add("activado");
});