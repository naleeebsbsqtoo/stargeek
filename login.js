const email = document.getElementById("email")
const senha = document.getElementById("senha")
const formulario = document.getElementById("formulario")
const msg = document.querySelector(".msg")


formulario.onsubmit = (evt)=>{
    let dados = JSON.parse(localStorage.getItem("dados"));
    let logado;
    dados.forEach((elemento) => {
        if(elemento.email == email.value && elemento.senha == senha.value){
            msg.innerHTML = "Aguarde redirecionando..."
            sessionStorage.setItem("email", email.value);
            window.location.assign("catalogo.html");
            evt.preventDefault();
            logado = true;
        }
    })

    if(logado!= true){
        alert("email ou senha invalido")
    }
}