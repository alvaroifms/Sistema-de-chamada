const Cadastro = () => {
const card = document.createElement("div");
  card.classList.add("loginCard");

  card.innerHTML = `
    <form id="meuFormulario">
        <div class="icone-container"></div>
        <h2>Cadastrar-se:</h2>
        
        <input type="email" name="email" placeholder="E-mail" class="info" required />
        <br/>
        
        <input type="password" name="senha" placeholder="Digite sua senha" class="info" required />
        <br>
        
        <input 
          type="password" 
          name="confirmar-senha" 
          placeholder="Escolha uma senha segura" 
          minlength="8" 
          required
          class="info"
        >
        <br>
        
        <input type="text" name="usuario" placeholder="Nome de usuário" class="info" required />
        <br>
        
        <button type="submit" class="boataoLo">Enviar Cadastro</button>
        <div class="spaceButtons"></div>
    </form>

  `;

 
  const iconContainer = card.querySelector(".icone-container");
  const image = document.createElement("img");
  image.src = "./src/assets/icone2.png";
  image.classList.add("icone");
  iconContainer.appendChild(image);


  const spaceButtons = card.querySelector(".spaceButtons");
  const voltarBtn = document.createElement('button');
  voltarBtn.classList.add("botaoVoltar");
  voltarBtn.innerText = "<";

  voltarBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (typeof navigate === "function") {
      navigate("/login");
    } else {
      console.error("Função de navegação não definida");
    }
  });

  spaceButtons.appendChild(voltarBtn);

  const form = card.querySelector("#meuFormulario");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log("Dados para cadastro:", Object.fromEntries(formData));
  });

  return card
}

export default Cadastro;