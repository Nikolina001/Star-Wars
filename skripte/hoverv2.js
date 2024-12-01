
let gore = document.getElementsByClassName("gore");
let sredina = document.querySelectorAll(".sredina");
let dole = document.querySelectorAll(".dole");
let levo = document.querySelectorAll(".levo");
let desno = document.querySelectorAll(".desno");

function addHoverEffects() {
    for (const proizvodGore of gore) {
        proizvodGore.addEventListener('mouseenter', goreEnterHandler);
        proizvodGore.addEventListener('mouseleave', goreLeaveHandler);
    }

    for (const proizvodDole of dole) {
        proizvodDole.addEventListener('mouseenter', doleEnterHandler);
        proizvodDole.addEventListener('mouseleave', doleLeaveHandler);
    }

    for (const pl of levo) {
        pl.addEventListener('mouseenter', levoEnterHandler);
        pl.addEventListener('mouseleave', levoLeaveHandler);
    }

    for (const pd of desno) {
        pd.addEventListener('mouseenter', desnoEnterHandler);
        pd.addEventListener('mouseleave', desnoLeaveHandler);
    }

    for (const ps of sredina) {
        ps.addEventListener('mouseenter', sredinaEnterHandler);
        ps.addEventListener('mouseleave', sredinaLeaveHandler);
    }
}

function removeHoverEffects() {
    for (const proizvodGore of gore) {
        proizvodGore.removeEventListener('mouseenter', goreEnterHandler);
        proizvodGore.removeEventListener('mouseleave', goreLeaveHandler);
    }

    for (const proizvodDole of dole) {
        proizvodDole.removeEventListener('mouseenter', doleEnterHandler);
        proizvodDole.removeEventListener('mouseleave', doleLeaveHandler);
    }

    for (const pl of levo) {
        pl.removeEventListener('mouseenter', levoEnterHandler);
        pl.removeEventListener('mouseleave', levoLeaveHandler);
    }

    for (const pd of desno) {
        pd.removeEventListener('mouseenter', desnoEnterHandler);
        pd.removeEventListener('mouseleave', desnoLeaveHandler);
    }

    for (const ps of sredina) {
        ps.removeEventListener('mouseenter', sredinaEnterHandler);
        ps.removeEventListener('mouseleave', sredinaLeaveHandler);
    }
}

function goreEnterHandler() {
    for (const proizvodDole of dole) {
        proizvodDole.classList.add("klasaUdole");
    }
}

function goreLeaveHandler() {
    for (const proizvodDole of dole) {
        proizvodDole.classList.remove("klasaUdole");
    }
}

function doleEnterHandler() {
    for (const proizvodGore of gore) {
        proizvodGore.classList.add("klasUgore");
    }
}

function doleLeaveHandler() {
    for (const proizvodGore of gore) {
        proizvodGore.classList.remove("klasUgore");
    }
}

function levoEnterHandler() {
    for (const proizvodGore of gore) {
        proizvodGore.classList.add("klasaUdesno");
        gore[0].classList.remove("klasaUdesno");
    }

    for (const proizvodDole of dole) {
        proizvodDole.classList.add("klasaUdesno");
        levo[1].classList.remove("klasaUdesno");
    }
}

function levoLeaveHandler() {
    for (const proizvodGore of gore) {
        proizvodGore.classList.remove("klasaUdesno");
    }

    for (const proizvodDole of dole) {
        proizvodDole.classList.remove("klasaUdesno");
    }
}

function desnoEnterHandler() {
    for (const proizvodGore of gore) {
        proizvodGore.classList.add("klasaUlevo");
        desno[0].classList.remove("klasaUlevo");
    }

    for (const proizvodDole of dole) {
        proizvodDole.classList.add("klasaUlevo");
        desno[1].classList.remove("klasaUlevo");
    }
}

function desnoLeaveHandler() {
    for (const proizvodGore of gore) {
        proizvodGore.classList.remove("klasaUlevo");
    }

    for (const proizvodDole of dole) {
        proizvodDole.classList.remove("klasaUlevo");
    }
}

function sredinaEnterHandler() {
    for (const pl of levo) {
        pl.classList.add("klasaUlevo");
    }

    for (const pd of desno) {
        pd.classList.add("klasaUdesno");
    }
}

function sredinaLeaveHandler() {
    for (const pl of levo) {
        pl.classList.remove("klasaUlevo");
    }

    for (const pd of desno) {
        pd.classList.remove("klasaUdesno");
    }
}

window.addEventListener('resize', osvezavanjeSirine);


function osvezavanjeSirine() {
    let sirina = document.documentElement.clientWidth;
    if (parseInt(sirina) >= 1492) {
        addHoverEffects();
    } else {
        removeHoverEffects();
    }
}

osvezavanjeSirine();
