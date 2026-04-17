const buttonP = () => {
  const presenca = document.createElement("button");
  
  presenca.classList.add("buttonP");
  presenca.textContent = "Presente"; 

  presenca.addEventListener("click", () => {

    const estaFaltando = presenca.classList.toggle("Falta");
    
    presenca.classList.toggle("buttonP", !estaFaltando);

    presenca.textContent = estaFaltando ? "Faltou" : "Presente";
  });


  return presenca;
};

export default buttonP;
