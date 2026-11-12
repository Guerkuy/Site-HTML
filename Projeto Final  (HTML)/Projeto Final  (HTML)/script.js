// Função para validar o formulário de contato
function validarFormulario() {
    // Verifique se o nome foi preenchido
    if (document.getElementById("nome").value == "") {
      alert("O campo 'Nome' é obrigatório.");
      return false;
    }

    if(!/^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3,50}$/.test(document.getElementById("nome").value)) {
        alert("O campo 'Nome' não é válido");
        return false;

    }
  
    // Verifique se o e-mail foi preenchido
    if (document.getElementById("email").value == "") {
      alert("O campo 'E-mail' é obrigatório.");
      return false;
    }
  
    // Verifique se o e-mail é válido
    if (!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}/.test(document.getElementById("email").value)) {
      alert("O campo 'E-mail' não é válido.");
      return false;
    }
  
    // Verifique se a mensagem foi preenchida
    if (document.getElementById("mensagem").value == "") {
      alert("O campo 'Mensagem' é obrigatório.");
      return false;
    }
  
    // O formulário é válido
    return true;
  }