const userInput = document.querySelector(".entrada-user");
const btnEnvio = document.querySelector(".envioBtn");
const btnBack = document.querySelector(".btnBack");
const success = document.querySelector(".success");
const main = document.querySelector("main");
const errorMessage = document.querySelector(".labels .error-email");
const emailUser = document.querySelector("#emailUser");

btnEnvio.addEventListener("click", () => {
  // Define o valor do emailUser antes de limpar o userInput
  inputUser = userInput.value;
  emailUser.textContent = userInput.value;

  // Adiciona a classe 'hide' à mensagem de erro ao clicar no botão
  errorMessage.classList.add("hide");

  if (inputUser === "" || !inputUser.includes("@")) {
    errorMessage.classList.remove("hide");
    errorUser.classList.add(".");
    console.log("Digite um e-mail válido");
  } else {
    success.classList.remove("hide");
    main.classList.add("hide");
  }
});

btnBack.addEventListener("click", () => {
  // Limpa o valor do userInput
  userInput.value = "";

  success.classList.add("hide");
  main.classList.remove("hide");
});
