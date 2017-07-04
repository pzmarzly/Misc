var visibleAnswers = false;
var currTeam = 1;
var wynikCzer = 0;
var wynikZiel = 0;
var wynikNieb = 0;
var wynikZolt = 0;
var oldWynikCzer, oldWynikZiel, oldWynikNieb, oldWynikZolt;
var zuzyte = [];
var wtrakcie = false;
var drugiZestaw = false;
var h_pytanie1, h_pytanie2, h_pytanie3, h_pytanie4, h_pytanie5, h_odpa, h_odpb, h_odpc, h_odpd, h_odpe, h_obecnyruch, h_statusa, h_statusb, h_statusc, h_statusd, h_odpowiedzi, h_bledy, h_wyniki1, h_wyniki2, h_wyniki3, h_wyniki4;

function initGame() {
 h_pytanie1 = $('#pytanie1');
 h_pytanie2 = $('#pytanie2');
 h_pytanie3 = $('#pytanie3');
 h_pytanie4 = $('#pytanie4');
 h_pytanie5 = $('#pytanie5');
 h_odpa = $('#odpa');
 h_odpb = $('#odpb');
 h_odpc = $('#odpc');
 h_odpd = $('#odpd');
 h_odpe = $('#odpe');
 h_obecnyruch = $('#obecnyruch');
 h_statusa = $('#statusa');
 h_statusb = $('#statusb');
 h_statusc = $('#statusc');
 h_statusd = $('#statusd');
 h_odpowiedzi = $('#odpowiedzi');
 h_bledy = $('#bledy');
 h_wyniki1 = $('#wyniki1');
 h_wyniki2 = $('#wyniki2');
 h_wyniki3 = $('#wyniki3');
 h_wyniki4 = $('#wyniki4');
 regulyGry(1);
 $('#wybierzdruzyne').css("display", "block");
 $('.czerwony').click(function(){startGame("czerwonej", 1)});
 $('.zielony').click(function(){startGame("zielonej", 2)});
 $('.niebieski').click(function(){startGame("niebieskiej", 3)});
 $('.zolty').click(function(){startGame("żółtej", 4)});
 for (var o=0;o<61;o++) {
  zuzyte[o]=false;
 }
}

function startGame(t, s) {
 $('#wybierzdruzyne').hide();
 $('.czerwony').unbind("click");
 $('.zielony').unbind("click");
 $('.niebieski').unbind("click");
 $('.zolty').unbind("click");
 if (s==1) { obecnyRuch(t, "czerwony", 1, 1) }
 if (s==2) { obecnyRuch(t, "zielony", 1, 2) }
 if (s==3) { obecnyRuch(t, "niebieski", 1, 3) }
 if (s==4) { obecnyRuch(t, "zolty", 0, 4) }
 counterInit(25, function(){endGame(5);});
 for (var i=0;i<47;i++) {
  $('#a'+i).click(function(){setArea($(this).attr('id'))});
 }
}

function obecnyRuch(t, s, b, i) {
 h_obecnyruch.html(t);
 h_obecnyruch.removeClass("czerwony");
 h_obecnyruch.removeClass("zielony");
 h_obecnyruch.removeClass("niebieski");
 h_obecnyruch.removeClass("zolty");
 h_obecnyruch.addClass(s);
 if (b==1) { h_obecnyruch.css("color", "white"); } else { h_obecnyruch.css("color", "black"); }
 currTeam = i;
}

function setArea(a) {
 if(!wtrakcie) {
  var e = a.split("");
  var f = e[1];
  if (e[2] !== undefined) {
   var s = e[2];
   f = f + s; // f to String
  }
  if (f!=0) {
   if (!drugiZestaw) {
     if (f==46) {
	  if (currTeamScore()!=45) {
 	   makeError("Aby wyświetlić finałowe pytanie, drużyna musi być na polu nr 45"); return;
 	  }
	 }
     if (!zuzyte[f]) {
     wtrakcie=true;
     h_statusa.html("A. ");
     h_statusb.html("B. ");
     h_statusc.html("C. ");
     h_statusd.html("D. ");
     h_pytanie1.html("Pytanie nr #"+f);
     h_pytanie2.html(Pytania[a]);
     if (!visibleAnswers) makeAnswersVisible();
     h_odpa.html(OpcjeA[a]);
     h_odpb.html(OpcjeB[a]);
     h_odpc.html(OpcjeC[a]);
     h_odpd.html(OpcjeD[a]);
     h_odpa.click(function(){checkAnswer(1, PoprawneOdpowiedzi[a], f)});
     h_odpb.click(function(){checkAnswer(2, PoprawneOdpowiedzi[a], f)});
     h_odpc.click(function(){checkAnswer(3, PoprawneOdpowiedzi[a], f)});
     h_odpd.click(function(){checkAnswer(4, PoprawneOdpowiedzi[a], f)});
     h_odpe.click(function(){checkAnswer(5, PoprawneOdpowiedzi[a], f)}); // po wybraniu E. zaznaczana jest poprawna odpowiedz
     } else {
      makeError("Na to pytanie już wcześniej odpowiedziała inna drużyna.");
     }
   } else {
    var tmp_liczb = parseInt(f);
     if (f==46) {
	  if (currTeamScore()!=45) {
 	   makeError("Aby wyświetlić finałowe pytanie, drużyna mieć 45 punktów"); return;
 	  }
	 }
     if (!zuzyte[tmp_liczb+46]) {
      wtrakcie=true;
      h_statusa.html("A. ");
      h_statusb.html("B. ");
      h_statusc.html("C. ");
      h_statusd.html("D. ");
      h_pytanie1.html("Pytanie nr #"+f);
      h_pytanie2.html(Pytania["a"+(tmp_liczb+46)]);
      if (!visibleAnswers) makeAnswersVisible();
      h_odpa.html(OpcjeA["a"+(tmp_liczb+46)]);
      h_odpb.html(OpcjeB["a"+(tmp_liczb+46)]);
      h_odpc.html(OpcjeC["a"+(tmp_liczb+46)]);
      h_odpd.html(OpcjeD["a"+(tmp_liczb+46)]);
      h_odpa.click(function(){checkAnswer(1, PoprawneOdpowiedzi["a"+(tmp_liczb+46)], tmp_liczb+46)});
      h_odpb.click(function(){checkAnswer(2, PoprawneOdpowiedzi["a"+(tmp_liczb+46)], tmp_liczb+46)});
      h_odpc.click(function(){checkAnswer(3, PoprawneOdpowiedzi["a"+(tmp_liczb+46)], tmp_liczb+46)});
      h_odpd.click(function(){checkAnswer(4, PoprawneOdpowiedzi["a"+(tmp_liczb+46)], tmp_liczb+46)});
      h_odpe.click(function(){checkAnswer(5, PoprawneOdpowiedzi["a"+(tmp_liczb+46)], tmp_liczb+46)}); // po wybraniu E. zaznaczana jest poprawna odpowiedz
     } else {
      makeError("Na to pytanie już wcześniej odpowiedziała inna drużyna.");
     }
   }
  } else {
   regulyGry(0);
  }
 } else {
  makeError("Aktualnie wybrane jest aktywne pytanie.");
 }
}

function currTeamScore() {
 if (currTeam==1) return wynikCzer;
 if (currTeam==2) return wynikZiel;
 if (currTeam==3) return wynikNieb;
 if (currTeam==4) return wynikZolt;
}

function oldTeamScore() {
 if (currTeam==1) return oldWynikCzer;
 if (currTeam==2) return oldWynikZiel;
 if (currTeam==3) return oldWynikNieb;
 if (currTeam==4) return oldWynikZolt;
}

function makeError(e) {
 h_bledy.html(e);
 setTimeout(function(){$('#bledy').html("")}, 5000);
}

function regulyGry(f) {
 h_pytanie1.html("Reguły gry");
 h_pytanie2.html("1. Klasa pracuje w czterech grupach.");
 h_pytanie3.html("2. Grę zaczyna drużyna, która wyrzuci największą liczbę oczek.");
 h_pytanie4.html("3. Uczniowie wybierają dowolne nieużyte pola z wyjątkiem finałowego.");
 h_pytanie5.html("");
 $('#pytanie6').html("4. Jeżeli:");
 $('#pytanie7').html("- odpowie drużyna, przesuwają się o jedno pole do przodu");
 $('#pytanie8').html("- grupa nie udzieli odpowiedzi – drużyna zostaje na tym samym polu");
 $('#pytanie9').html("- padnie błędna odpowiedź – drużyna cofa się o 1 pole");
 $('#pytanie10').html("5. Wygrywa drużyna, która jako pierwsza dotrze do mety lub będzie na polu o najwyższym numerze o wyznaczonym czasie, bądź o czasie, gdy wszsystkie pytania zostaną już wyświetlone");
 $('#pytanie11').html("6. Czas gry – 25 minut.");
 $('#pytanie').css("vertical-align", "top");
 if (f==0) {
  h_odpowiedzi.hide();
  visibleAnswers = false;  
 }
}

function makeAnswersVisible() {
 h_odpowiedzi.show();
 visibleAnswers = true;
 h_pytanie3.html("");
 h_pytanie4.html("");
 h_pytanie5.html("");
 $('#pytanie6').html("");
 $('#pytanie7').html("");
 $('#pytanie8').html("");
 $('#pytanie9').html("");
 $('#pytanie10').html("");
 $('#pytanie11').html("");
 $('#pytanie').css("vertical-align", "middle");
}

function checkAnswer(w, p, f) {
 var wynik = 0;
 wtrakcie=false;
 if (f<46) { zuzyte[f]=true; }
 if (f>46) { zuzyte[f]=true; }
 h_odpa.unbind("click");
 h_odpb.unbind("click");
 h_odpc.unbind("click");
 h_odpd.unbind("click");
 h_odpe.unbind("click");
 h_statusa.html("A. ");
 h_statusb.html("B. ");
 h_statusc.html("C. ");
 h_statusd.html("D. ");
 if (p==1) h_statusa.html("<span style='font-family: Glyphicons Halflings; font-size: 0.9em;'></span> ");
 if (p==2) h_statusb.html("<span style='font-family: Glyphicons Halflings; font-size: 0.9em;'></span> ");
 if (p==3) h_statusc.html("<span style='font-family: Glyphicons Halflings; font-size: 0.9em;'></span> ");
 if (p==4) h_statusd.html("<span style='font-family: Glyphicons Halflings; font-size: 0.9em;'></span> ");
 if (w!=p) {
  if (w==1) h_statusa.html("<span style='font-family: Glyphicons Halflings; font-size: 0.9em;'></span> ");
  if (w==2) h_statusb.html("<span style='font-family: Glyphicons Halflings; font-size: 0.9em;'></span> ");
  if (w==3) h_statusc.html("<span style='font-family: Glyphicons Halflings; font-size: 0.9em;'></span> ");
  if (w==4) h_statusd.html("<span style='font-family: Glyphicons Halflings; font-size: 0.9em;'></span> ");
 }
 if (w==p) wynik = 1;
 if (w!=p) wynik = -1;
 if (w==5) wynik = 0; // kolejnosc
 if (currTeam == 1) wynikCzer = wynikCzer + wynik;
 if (currTeam == 2) wynikZiel = wynikZiel + wynik;
 if (currTeam == 3) wynikNieb = wynikNieb + wynik;
 if (currTeam == 4) wynikZolt = wynikZolt + wynik;
 UpdateWynik();
 if (currTeamScore()==46) { endGame(currTeam); }
 if (!drugiZestaw) { if (zuzytePytania()) { dajDrugiZestaw()}}
 if (zuzyteWszystkiePytania()) { endGame(5)}
 if (currTeam == 1) { obecnyRuch("zielonej", "zielony", 1, 2); return; }
 if (currTeam == 2) { obecnyRuch("niebieskiej", "niebieski", 1, 3); return; }
 if (currTeam == 3) { obecnyRuch("żółtej", "zolty", 0, 4); return; }
 if (currTeam == 4) { obecnyRuch("czerwonej", "czerwony", 1, 1); return; }
}

function zuzytePytania() {
 var ilp = 0;
 for (var ilt = 1; ilt<46; ilt++) {
  if (zuzyte[ilt]==true) ilp++;
 }
 if (ilp==45) return true;
 return false;
}

function zuzyteWszystkiePytania() {
 var ilp2 = 0;
 for (var ilt2 = 1; ilt2<61; ilt2++) {
  if (zuzyte[ilt2]==true) ilp2++;
 }
 if (ilp2==59) return true;
 return false;
}

function dajDrugiZestaw() {
 drugiZestaw = true;
 $('#mappencjagiery').attr("src", "pliki/plansza2.png");
 oldWynikCzer = wynikCzer;
 oldWynikZiel = wynikZiel;
 oldWynikNieb = wynikNieb;
 oldWynikZolt = wynikZolt;
 for (var i2=15;i2<46;i2++) {
  $('#a'+i2).unbind("click");
 }
}

function UpdateWynik() {
 if (wynikCzer < 0) wynikCzer = 0;
 if (wynikZiel < 0) wynikZiel = 0;
 if (wynikNieb < 0) wynikNieb = 0;
 if (wynikZolt < 0) wynikZolt = 0;
 if (wynikCzer == 0) {
  h_wyniki1.html("start");
 } else {
  h_wyniki1.html(wynikCzer);
 }
 if (wynikZiel == 0) {
  h_wyniki2.html("start");
 } else {
  h_wyniki2.html(wynikZiel);
 }
 if (wynikNieb == 0) {
  h_wyniki3.html("start");
 } else {
  h_wyniki3.html(wynikNieb);
 }
 if (wynikZolt == 0) {
  h_wyniki4.html("start");
 } else {
  h_wyniki4.html(wynikZolt);
 }
}

function endGame(team) {
 h_odpa.unbind("click");
 h_odpb.unbind("click");
 h_odpc.unbind("click");
 h_odpd.unbind("click");
 h_odpe.unbind("click");
 for (var i=0;i<47;i++) {
  $('#a'+i).unbind("click");
 }
 h_odpowiedzi.hide();
 h_obecnyruch.hide();
 h_pytanie1.html("Koniec gry");
 if (team==5) team=NajwiecejPunktow(0);
 if (team==11) { h_pytanie3.html("Wygrała drużyna <span class='czerwonys'>czerwonych</span>."); team=NajwiecejPunktow(11); }
 if (team==12) { h_pytanie3.html("Wygrała drużyna <span class='zielonys'>zielonych</span>."); team=NajwiecejPunktow(12); }
 if (team==13) {
  h_pytanie3.html("Wygrała drużyna <span class='niebieskis'>niebieskich</span>.");
  h_pytanie2.html("Wygrała drużyna <span class='zoltys'>żółtych</span>."); return;
 }
 if (team==50) {
  h_pytanie2.html("Wygrała drużyna <span class='czerwonys'>czerwonych</span>.");
  h_pytanie3.html("Wygrała drużyna <span class='zielonys'>zielonych</span>.");
  h_pytanie4.html("Wygrała drużyna <span class='niebieskis'>niebieskich</span>.");
  h_pytanie5.html("Wygrała drużyna <span class='zoltys'>żółtych</span>."); return;
 }
 if (team==34) {
  h_pytanie2.html("Wygrała drużyna <span class='niebieskis'>niebieskich</span>.");
  h_pytanie3.html("Wygrała drużyna <span class='zoltys'>żółtych</span>."); return;
 }
 if (team==23) { h_pytanie4.html("Wygrała drużyna <span class='niebieskis'>niebieskich</span>."); $('#pytanie5').html("Wygrała drużyna <span class='zielonys'>zielonych</span>."); return; }
 if (team==24) { h_pytanie4.html("Wygrała drużyna <span class='zoltys'>żółtych</span>."); team=NajwiecejPunktow(24); }
 if (team==1) h_pytanie2.html("Wygrała drużyna <span class='czerwonys'>czerwonych</span>.");
 if (team==2) h_pytanie2.html("Wygrała drużyna <span class='zielonys'>zielonych</span>.");
 if (team==3) h_pytanie2.html("Wygrała drużyna <span class='niebieskis'>niebieskich</span>.");
 if (team==4) h_pytanie2.html("Wygrała drużyna <span class='zoltys'>żółtych</span>.");
 $('area').unbind("click");
 stopCounter();
 setTimeout(function(){createFirework(null,null,null,null,null,null,null,null,false,true)},1000);
 setTimeout(function(){createFirework(null,null,null,null,null,null,null,null,false,true)},2000);
 setTimeout(function(){createFirework(null,null,null,null,null,null,null,null,false,true)},3000);
 setTimeout(function(){createFirework(null,null,null,null,null,null,null,null,false,true)},4000);
 setTimeout(function(){createFirework(null,null,null,null,null,null,null,null,false,true)},5000);
}

function NajwiecejPunktow(c) {
 var tmp, naj2;
 if (c==0) {
  var naj = 1;
  var najwynik = wynikCzer;
  if (wynikZiel>najwynik) { naj=2; najwynik=wynikZiel; }
  if (wynikNieb>najwynik) { naj=3; najwynik=wynikNieb; }
  if (wynikZolt>najwynik) { naj=4; najwynik=wynikZolt; }
  if ((naj==1) && (((wynikCzer==wynikZiel) || (wynikCzer==wynikNieb)) || (wynikCzer==wynikZolt))) {
   return 11;
  }
  if ((naj==2) && ((wynikZiel==wynikNieb) || (wynikZiel==wynikZolt))) {
   return 12;
  }
  if ((naj2==3) && (wynikNieb==wynikZolt)) {
   return 13;
  }
  return naj;
 }
 if (c==11) {
  tmp=0;
  if (wynikCzer==wynikZiel) { naj2=2; tmp=tmp+1; }
  if (wynikCzer==wynikNieb) { naj2=3; tmp=tmp+1; }
  if (wynikCzer==wynikZolt) { naj2=4; tmp=tmp+1; }
  if (tmp==1) {
   return naj2;
  }
  if (tmp==2) {
   return "2"+naj2;
  }
  if (tmp==3) {
   return 50;
  }
 }
 if (c==12) {
  tmp=0;
  if (wynikZiel==wynikNieb) { naj2=3; tmp=tmp+1; }
  if (wynikZiel==wynikZolt) { naj2=4; tmp=tmp+1; }
  if (tmp==1) {
   return naj2;
  }
  if (tmp==2) {
   return 34;
  }
 }
 if (c==24) {
  if (wynikCzer==wynikZiel) return 2;
  if (wynikCzer==wynikNieb) return 3;
 }
}

$(document).ready(function(){
 initGame();
 $('img[usemap]').rwdImageMaps()
});