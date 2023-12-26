const userInput = document.querySelector(".entrada-user");
const btnEnvio = document.querySelector(".envioBtn");
const btnBack = document.querySelector(".btnBack");
const success = document.querySelector(".success");
const main = document.querySelector("main");
const errorMessage = document.querySelector(".labels .error-email");

btnEnvio.addEventListener("click", () => {
  inputUser = userInput.value;

  // Adiciona a classe 'hide' à mensagem de erro ao clicar no botão
  errorMessage.classList.add("hide");

  if (inputUser === "" || !inputUser.includes("@")) {
    errorMessage.classList.remove("hide");
    console.log("Digite um e-mail válido");
  } else {
    success.classList.remove("hide");
    main.classList.add("hide");
  }
});

btnBack.addEventListener("click", () => {
  success.classList.add("hide");
  main.classList.remove("hide");

  userInput.value = "";
});
