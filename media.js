var txt1;
var txt2;
var txt3;
var n1;
var n2;
var n3;
var resp;

function calcularMedia(){
    ler();
    var r = (n1 + n2 + n3)/3;
    resp.innerHTML = `<br> A media de ${n1} e ${n2} e ${n3} é  igual ${ r.toPrecision(3)} </br>`;
     
}
function ler(){
    txt1 =  window.document.getElementById('txtn1').value;
    txt2 =  window.document.getElementById('txtn2').value;
    txt3 =  window.document.getElementById('txtn3').value;
    resp =  window.document.getElementById('resposta');

    n1= Number(txt1);
    n2= Number(txt2);
    n3= Number(txt3);
    resp.style.textAlign = "center";
}

function limpar(){
    txtn1.value = "";
    txtn2.value = "";
    txtn3.value = "";
    txtn1.focus = "";

}
