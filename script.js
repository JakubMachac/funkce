function jeSude(c) {
  return c % 2 == 0;
}
function vypisPromennou(nazev, hodnota) {
  console.log("# "+nazev+":"+hodnota);
}
function poNacteni() {
 let c1 = 5;
 let c2 = 3;
 let vysl = c1 + c2;

vypisPromennou("c1", c1);
vypisPromennou("c2", c2);
vypisPromennou("vysl", vysl);

if (jeSude(7)) {
  console.log("je");
} else {
  console.log("neni");
 }
}
function jePrvocislo(c) {
  for (let d=2; d<=Math.sqrt(c); d++) {
    if (c % d == 0) {
      return false;
    }
  }
  return true;
}
function overPrvocislo() {
  let cislo = document.getElementById("cislo").valueAsNumber;
  if (jePrvocislo(cislo)) {
    alert("je");
   }   else {
        alert("neni");
      }
  }
function faktorial(c) {
if (c == 0) {
  return 1; 
} else if (c > 1) {
  return c * faktorial(c-1);
} else {
  return c;
}

}
  function vypocetFaktorialu() {
    let cislo = document.getElementById("cislo2").valueAsNumber;
    let fakt = faktorial(cislo);
    document.getElementById("faktorial").value = fakt;
  }