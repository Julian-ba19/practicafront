alert("Bienvenido a la pagina web de Comidas Argentinas");
document.getElementById("BotonModoOscuro").addEventListener("click", function() {
    document.body.classList.toggle("ModoOscuro");
});
document.getElementById("infoCreador").addEventListener("click", function() {
    alert("Pagina web creada por: Julian Barrionuevo\nE.E.S.T N°2 5to INF");
});
