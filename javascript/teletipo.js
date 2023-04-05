function teletipo(cad, tmp, iden, cnt) {
  if (cnt == null) cnt = 0;
  var letra = cad.substr(cnt, 1);
  cuadro = document.getElementById(iden);
  while (letra == " ") {
    cnt++;
    letra += cad.substr(cnt, 1);
  }
  cuadro.innerHTML += letra;
  cnt++;
  if (cnt < cad.length) {
    tempor = setTimeout(teletipo, tmp, cad, tmp, iden, cnt);
  }
}

