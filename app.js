let regex = /[!@#$%^&*()_+\-=\[\]{}'\\|.<>\/]/; // Expresión regular para caracteres especiales
let MAYUSCULAS = /[A-Z]/; // Expresión regular para letras mayúsculas

function animacion(){
    document.getElementById('output_text').removeAttribute('style');
    document.getElementById('boton_copiar').removeAttribute('style');
    document.getElementById('texto_salida').style.display='none';
    document.getElementById('imagen_texto_salida').style.display='none';
}

//accion de encriptar
function encriptar() {
    let textoDeUsuario = document.getElementById('textoUsuario').value;

    if (regex.test(textoDeUsuario)) {
        alert("La cadena de texto contiene caracteres especiales, por favor no introducirlos.");
      } else if (MAYUSCULAS.test(textoDeUsuario)){
        alert("La cadena de texto contiene letras en mayusculas que se cambiaran a minusculas para el encriptado.");
      }

      if(textoDeUsuario===""){
        alert ("No se encontro ningun texto para encriptar");
      } else { 

        textoDeUsuario = textoDeUsuario.toLowerCase();

    let encriptado = textoDeUsuario;

    //Encriptacion
    encriptado = encriptado.replaceAll("e","enter");
    encriptado = encriptado.replaceAll("i","imes");
    encriptado = encriptado.replaceAll("a","ai");
    encriptado = encriptado.replaceAll("o","ober");
    encriptado = encriptado.replaceAll("u","ufat");
    
animacion();

    let elementhtml= document.getElementById('output_text');
    elementhtml.innerHTML = encriptado;
  
    console.log (textoDeUsuario);
    }}
  
    

    
    // accion del boton de desencriptar
function Desencriptar() {
let textoDeUsuario = document.getElementById('textoUsuario').value;
    
        if (regex.test(textoDeUsuario)) {
            alert("La cadena de texto contiene caracteres especiales, por favor no introducirlos.");
          } else if (MAYUSCULAS.test(textoDeUsuario)){
            alert("La cadena de texto contiene letras en mayusculas que no seran encriptadas.");
          } 
    
      if(textoDeUsuario===""){
        alert ("No se encontro ningun texto para desencriptar");
      } else { 

        textoDeUsuario = textoDeUsuario.toLowerCase();

        //desencriptacion 
        let desencriptado = textoDeUsuario;
        desencriptado = desencriptado.replaceAll("enter","e");
        desencriptado = desencriptado.replaceAll("imes","i");
        desencriptado = desencriptado.replaceAll("ai","a");
        desencriptado = desencriptado.replaceAll("ober","o");
        desencriptado = desencriptado.replaceAll("ufat","u");
        
        animacion();

        let elementhtml= document.getElementById('output_text');
    elementhtml.innerHTML = desencriptado;
    console.log (textoDeUsuario);

    alert("¡Por seguridad el mensaje ingresado sera borrado!");

    textoUsuario.value="";

        }
    }
    
//accion de copiado de texto
    function copiarTexto(){
     var textoCopiar = document.getElementById('output_text'); 

     textoCopiar.select();
     textoCopiar.setSelectionRange(0, 99999);
     navigator.clipboard.writeText(textoCopiar.value);
    }