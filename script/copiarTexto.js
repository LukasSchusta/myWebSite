function copiarTexto(){
    textoCopiado = "29f5a83c-b3a8-49b1-a2d8-209b5b7d6ea0"
    document.getElementById("copiado").style.visibility = "visible"
    navigator.clipboard.writeText(textoCopiado)
    document.getElementById("qr-code-pix").src="../img/julius-rock.jpg";
    
}
