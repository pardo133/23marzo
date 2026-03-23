
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



const Despegue = document.getElementById("btn-despegue");


Despegue.addEventListener("click", () => {
    
   
    Despegue.classList.add("activado");
    
    console.log("Iniciando secuencia de despegue.");
});