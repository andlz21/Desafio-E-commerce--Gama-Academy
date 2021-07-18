
const form = document.getElementById('form')

form.addEventListener ('submit', (e ) => {
  e.preventDefault( );

  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
   
  let dados = {
    nome, 
    email
  }
  
  let convertInfo = JSON.stringify(dados);

  localStorage.setItem('User-data', convertInfo)
  alert('Tudo certo! Você receberá as promoções em breve!')

setTimeout(function ( ){
  window.location.reload(3);
}, 5000);
  }
)

