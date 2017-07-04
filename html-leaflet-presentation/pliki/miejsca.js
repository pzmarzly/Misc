"use strict";
// (c) Paweł Zmarzły
var locationsList = [
		{title: 'Prezentacja: Atrakcje Europy',                  latlng: [48.662, 4],            zoom: 5, opis: '', foto: 'Europa.jpg'},
		{title: 'Stonehenge',                                    latlng: [51.178844, -1.826189], zoom: 7, opis: '', foto: 'Stonehenge.jpg'},
		{title: 'Wieża Eiffla',                                  latlng: [48.858347, 2.29455],   zoom: 7, opis: '', foto: 'Eiffel.jpg'},
		// Luwr
		{title: 'Katedra Najświętszej Marii Panny w Strasburgu', latlng: [48.581667, 7.750833],  zoom: 7, opis: '', foto: 'Strasburg.jpg'},
		{title: 'Großglockner',                                  latlng: [47.075, 12.694444],    zoom: 7, opis: '', foto: 'Grosglockner.jpg'},
		{title: 'Park Narodowy Krka',                            latlng: [43.8, 15.966667],      zoom: 7, opis: '', foto: 'Krka.jpg'},
		{title: 'Akropol ateński',                               latlng: [37.97155, 23.726561],  zoom: 7, opis: '', foto: 'Akropol.jpg'}
		// Rzym
		// Wezuwiusz
	];

// Preze
locationsList[0].opis += '<h4 style="font-style: italic; text-align: center;">Podróż przez Europę na ukos</h4>';
locationsList[0].opis += '<p style="float: left;">F11 - pełny ekran</p>';
locationsList[0].opis += '<p style="float: right;">Wykonanie: Paweł Zmarzły</p>';

// Stone
locationsList[1].opis += '<p>Jedna z najsłynniejszych europejskich budowli megalitycznych, pochodząca z epoki neolitu albo brązu. ';
locationsList[1].opis += 'Najprawdopodobniej związana była z kultem Księżyca i Słońca - ';
locationsList[1].opis += 'uważa się, iż Stonehenge mogło być używane do przewidywania zaćmień. ';
locationsList[1].opis += 'Obiekt od 1986 roku jest wpisany na listę światowego dziedzictwa UNESCO wraz z Avebury oraz kilkoma innymi okolicznymi obiektami. ';
locationsList[1].opis += 'Obecny wygląd zabytku jest wynikiem prac renowacyjnych i rekonstrukcyjnych wykonanych w XX wieku. </p>';
locationsList[1].opis += '<p>Stonehenge jest używane w kulturze od setek lat i stało się przez to jednym z symboli historii i kultury brytyjskiej. Na temat Stonehenge powstały liczne wiersze, obrazy i filmy.</p>'

// Eiffle
locationsList[2].opis += '<figure style="float: right;"><video id="myVideo" width="100%" autoplay loop muted preload="auto"><source src="pliki/zabytki/Eiffel.mp4" type="video/mp4">Błąd: brak HTML5.</video><figcaption>Zdjęcia z budowy</figcaption></figure>';
locationsList[2].opis += '<p>Najbardziej znana budowla w Paryżu, uznawana za symbol tego miasta i niekiedy całej Francji. Jest ona najwyższą konstrukcją w Paryżu i piątą najwyższą we Francji. ';
locationsList[2].opis += 'Wybudowana z okazji setnej rocznicy rewolucji francuskiej na paryskią wystawę światową w 1889 roku.</p>';
locationsList[2].opis += '<p style="border-left: solid orange 3px; padding-left: 5px;"><strong>Wystawy światowa (Expo)</strong> - cykliczne ekspozycje prezentujące dorobek kulturalny, naukowy i techniczny krajów i narodów świata, odbywające się od 1851. Następna wystawa światowa odbędzie się w 2017 w Astanie, stolicy Kazachstanu.</p>';
locationsList[2].opis += '<p>Budowla miała zostać rozebrana po 20 latach, jednak zdecydowano użyć wieżę jako stację radiową. Podczas I wojny światowej używana była do utrzymywania łączności w posterunkami na granicy. ';
locationsList[2].opis += 'Waga budowli wynosi około 10 000 ton. Wieża Eiffla była najwyższym budynkiem na świecie do 1930 roku.</p>';
locationsList[2].funk = function() { document.getElementById('myVideo').playbackRate = 0.2; };

// Katedra
locationsList[3].opis += '<p>Najwyższa XV-wieczna budowla na świecie, w latach 1647-1874 najwyższy budynek świata, wzniesiony w latach 1176-1439. ';
locationsList[3].opis += 'Początkowo miał być w stylu romańskim, lecz w trakcie budowy zdecydowano się na użycie koncepcji gotyckich. ';
locationsList[3].opis += 'Katedra miała podobno stanowić inspirację dla m.in. poety Jana Wolfganga Goethego.</p>';
locationsList[3].opis += '<p>Najstarszy zachowany dzwon pochodzi z 1427 i widnieje na nim napis oznaczający: </p>';
locationsList[3].opis += '<blockquote>Roku Pańskiego 1427, miesiąca lipca, ten dzwon odlał Mistrz Jan ze Straßburga. Niech zwiastuje święta, budzi strach, głosi wieści i opłakuje zmarłych.</blockquote>';

// Gros
locationsList[4].opis += '<h4 style="font-style: italic; text-align: center;">3798 m n.p.m.</h4>';
locationsList[4].opis += '<p>Najwyższy szczyt Austrii, czwarty najwyższy w Europie. Należy do Alp Centralnych.</p>';
locationsList[4].opis += '<p>Na szczycie znajduje się tzw. krzyż cesarski, który został umieszczony w 25. rocznicę ślubu cesarza Franciszka Józefa I z Elżbietą Bawarską.</p>';

// Krka
locationsList[5].opis += '<figure style="float: right;"><img src="pliki/zabytki/Krka2.jpg" width="100%"><figcaption>Klasztor na Jeziorze Visovac</figcaption></figure>';
locationsList[5].opis += '<p>Park Narodowy Krka (chor. Nacionalni Park Krka) to park narodowy w Chorwacji, położony wzdłuż rzeki Krka, niedaleko miast Szybenik.</p>';
locationsList[5].opis += 'Na terenie parku znajdują się liczne wodospady, XV-wieczny klasztor Franciszkanów oraz pozostałości jednej z pierwszych elektrowni wodnych na świecie (wybudowanej w 1895 roku). </p>';

// Akropol
locationsList[6].opis += '<p>Wzgórze w Atenach o wysokości 157 m n.p.m. (wysokość względna 90 m). ';
locationsList[6].opis += 'Już od VI wieku p.n.e. znajdowały się na nim świątynie, początkowo ku czci bogów greckich (w tym Partenon, czyli świątynia zbudowana w V wieku p.n.e. ku czci Ateny, wewnątrz której znajdował się posąg Ateny ze złota i kości słoniowej). ';
locationsList[6].opis += 'Przez tysiące lat świątynie na Akropolu wielokrotnie zmieniały swój cel, na przykład czciły ideały rzymskie, Boga chrześcijańskiego, Allaha oraz służyły jako baza wojsk tureckich i niemieckich.</p>';
locationsList[6].opis += '<p>Ważnym wydarzeniem w historii tego miejsca było ostrzelanie Akropolu przez flotę wenecką 26 września 1687, co doprowadziło do eksplozji prochu zgromadzonego w budynkach i zniszczenia wielu z nich.</p>'