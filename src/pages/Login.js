
const Login = () => {
  // Create container
  const card = document.createElement("div");
  card.classList.add("loginCard");

  card.innerHTML = `
  <form id="meuFormulario">
    <div class="icone"></div>
    <h2>Fazer login:</h2>
    <input type="text" placeholder="Nome de usuário" class = "info"/>
    <br/>
    <input type="password" placeholder="Digite sua senha" class = "info"/>
    <br><button type="submit" class="boataoLo">Login</button>
    <div style="margin-top: 20px;">
      <p>Ainda não fez o cadastro?<a class="cadastrar">Cadastrar</a></p>
    </div>
     <div class="spaceButtons"></div>
    </form>
  `;
  const iconContainer = card.querySelector(".icone");
  const image = document.createElement("img");
  image.src = "./src/assets/icone2.png";
  image.classList.add("icone")

  const linkCadastro = card.querySelector(".cadastrar");
  linkCadastro.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof navigate === "function") {
      navigate("/cadastrar");
    } else {
      console.error("Função de navegação não definida");
    }
  });
    const spaceButtons = card.querySelector(".spaceButtons");
  const voltarBtn = document.createElement('button');
  voltarBtn.classList.add("botaoVoltar");
  voltarBtn.innerText = "<";

  voltarBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (typeof navigate === "function") {
      navigate("/home");
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
  
  iconContainer.appendChild(image);

  return card;  
};

export default Login;