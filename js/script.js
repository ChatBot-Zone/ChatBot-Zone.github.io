let contador = 0;

function clica() {

    if (contador == 0) {
        document.querySelector(".teste").addEventListener("click", myFunction);
        function myFunction() {
            document.querySelector(".face2").style.transform = "translateY(0px)";
            document.querySelector(".face2").style.backgroundColor = "yellow";
            contador++;
            console.log(contador);
        }
    }
}
setTimeout(clica(), 100);

function desclica() {

    if (contador >= 1) {
        document.querySelector(".teste").addEventListener("click", myFunction);
        function myFunction() {
            document.querySelector(".face2").style.transform = "translateY(-780px)";
            document.querySelector(".face2").style.backgroundColor = "yellow";
            contador--;
            console.log(contador);
        }
    }
}
setTimeout(desclica(), 1000);