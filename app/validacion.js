const formulario=document.getElementById("formulario");
const userName=document.getElementById("name");
const userEmail=document.getElementById("email");

const alertSuccess=document.getElementById('alertSuccess');
const alertEmail=document.getElementById('alertEmail');
const alertName=document.getElementById('alertName');

const regUserName=/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail=/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const pintarMensajeExito=()=> {
    alertSuccess.classList.remove('d-none');
}

const pintarMensajeError=(errores)=>{
        errores.forEach(item => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent=item.msg;
        item.tipo.classList.add("is-invalid");
        });
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    alertSuccess.classList.add('d-none');
    alertEmail.classList.add('d-none');
    alertName.classList.add('d-none');

    const errores=[];

    // devuelve true si el nombre son solo espacios
    //console.log(!userName.value.trim());

    if(!regUserName.test(userName.value) || !userName.value.trim()){
        userName.classList.add("is-invalid");
        errores.push({
            tipo: alertName,
            msg: "Escriba un nombre válido",
        });
    }else{
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add('d-none');
    }
    if(!regUserEmail.test(userEmail.value)|| !userEmail.value.trim()){
        userEmail.classList.add("is-invalid");
        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo válido",
        });
    }else{
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add('d-none');
    }

    if(errores.length!== 0){
        console.log(errores.length);
        pintarMensajeError(errores);
        return;
    }

    console.log("formulario valido");
    pintarMensajeExito();
    document.getElementById("formulario").submit();
});