function tejeskave() {
    let kave = document.getElementById("kv").value;
    let tej = document.getElementById("tej").value;
    let cukor = document.getElementById("sugar").value;
    let rendel = "";

    if (kave == "nem") {
        rendel = "Ön NEM rendelt kávét.\nHa ez valóban igaz kattintson az 'OK' gombra.\nHa mégis inkább rendelni szeretne, akkor a 'mégse' gombra";
    }
    else {
        rendel = "Ön rendelt kávét " + tej + " és " + cukor + "\nHa mehet a rendelés kattintson az 'OK' gombra.\nHa változtatni szeretne, akkor a 'mégse' gombra";
    }

    if (confirm(rendel) == true) {
        if (kave == "nem") {
            text = "Tehát ön nem parancsol kávét. Talán egy ásványvizet hozhatok?";
        }
        else {
            text = "Parancsára egy kávé " + tej + " és " + cukor + " rendel !";
        }

    } else {
        text = "Ön törölte a rendelését, kérem válasszon újra.";
    }
    document.getElementById("rendeles").innerHTML = text;

}

//----------------------------------------------------
function adatbevitel() {
    let szoveg = document.getElementById("megjegyez").value;
    let szam1 = document.getElementById("bevitel").value;
    let szam2 = document.getElementById("bevitel2").value;
    let ossz;
    
    try {
        if (szam1 == "" || szam2 == "") { throw "Nem adta meg az egyik számot!"; }
        if (isNaN(szam1) || isNaN(szam2)) { throw "Számot szerettem volna kérni mindkét helyre"; }
        szam1 = Number(szam1);
        szam2 = Number(szam2);
        ossz = szam1 + szam2;

        document.getElementById("calculate").innerHTML = "Ön ezt a két számot adta meg:<br>" + szam1 + "; és &nbsp;" + szam2;
        document.getElementById("osszeg").innerHTML = "A két szám összege: <b>" + ossz + "</b>";
    }
    catch (err) {
        alert(err);
        document.getElementById("calculate").innerHTML = "";
        document.getElementById("osszeg").innerHTML = "";
        document.getElementById("prim").innerHTML = "";
    }
    finally {
        document.getElementById("bevitel").value = "";
        document.getElementById("bevitel2").value = "";
    }

    // Prímszám eldöntése
    for (let i = 2; i < ossz; i++) {
        if (ossz % i == 0) {
            document.getElementById("prim").innerHTML = "A kapott összeg (" + ossz + ") NEM prímszám.";
            break;
        }
        else {
            if (i == ossz - 1) {
                document.getElementById("prim").innerHTML = "A kapott összeg (" + ossz + ")<b> PRÍM </b>szám !";
            }
        }
    }

    if (szoveg != "") {
        document.getElementById("txt").innerHTML = "Ön botor módon ezt a szöveget írta be a mezőbe:<br><b>" + szoveg + "</b><br>";
    }

}