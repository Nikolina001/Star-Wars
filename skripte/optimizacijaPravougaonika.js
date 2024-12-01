
let divAsokaOpis = document.getElementById('AsokaOpis');
const visinaAhsokaElementa = divAsokaOpis ? divAsokaOpis.offsetTop : 0;
let posteri = document.getElementsByClassName('posteri'); 

window.addEventListener('resize', osvezavanjeSirine);

function osvezavanjeSirine() {
    let sirina = document.documentElement.clientWidth;
    let triPravoug = document.getElementById("TriPravougaonika");

    if (triPravoug) {
        if (sirina <= 753) {
            triPravoug.style.marginBottom = "1100px";
        } else if (sirina <= 900) {
            triPravoug.style.marginBottom = "600px";
        } else {
            triPravoug.style.marginBottom = "0";
        }
    }
}

osvezavanjeSirine();
