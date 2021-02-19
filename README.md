#### LINK NAAR APP ###

https://johancvb.github.io/web-app-from-scratch-2021/

# ReadMe week 3 #

Deze week heb ik met hulp van een teamgenoot mijn code veel overzichtelijker en effetiever gemaakt.
Ook heb ik deze week mijn routing geïmplementeerd, en de detail pagina werkend gemaakt.

De spelers per team worden nu op een veel effectievere en efficientere manier gerendert uit de iteraties
van de API data.

Ik ga in de vakantie vooral werken aan het afronden van de app. Ik moet nog een loading state implementeren,
en de styling van de app veranderen. Ook wil ik nog een nieuwe functie voor mijn detailed pagina toepassen.

# ReadMe week 2 #

Ik heb deze week mijn web app uitgebreid met een detailed page.
Hij werkt, alleen moet er nog veel gedaan worden aan de styling. Ook moet ik nog routing toepassen, maar zie dat als een grote uitdaging.
Deze week heb ik ook mijn actor diagram en interaction diagram gemaakt. Deze laten de structuur en werking van mijn app zien.

Actor Diagram:

![Actor diagram](https://github.com/johancvb/web-app-from-scratch-2021/blob/master/nba_app/img/actor_diagram.JPG?raw=true)

Interaction Diagram:

![Interaction diagram](https://github.com/johancvb/web-app-from-scratch-2021/blob/master/nba_app/img/interaction_diagram.JPG?raw=true)

Op mijn overview page zie je nu de 30 NBA teams. Het is de bedoeling dat als je op een team klikt, 
je naar de detailed page gaat met een lijst van de basketballspelers van dat team. 

Als je op een van de spelers klikt, verschijnt er een popup met de bijbehorende informatie van die speler, zoals lengte, positie, gewicht enz.

Volgende week wil ik de routing werkend hebben, zodat ik daarna kan beginnen aan het stylen van de web app.



# ReadMe week 1 #

---Hier een link naar mijn opdracht:---
https://johancvb.github.io/web-app-from-scratch-2021/

---Wat doet mijn app en wat is het doel?---
Mijn app laat verschillende informatie zijn van alle NBA spelers die ooit actief zijn geweest in de NBA.

---Welke actors zitten in mijn app?---
De actors in mijn app zijn de spelers zelf. Hun data wordt laten zien op de overview page.
Ook zijn de teams op de overview page actors.

---Van welke API maak ik gebruik?---
Ik maak gebruik van de API: Free NBA van theapiguy (https://rapidapi.com/theapiguy/api/free-nba/details)

Ik gebruik voor de overview page de endpoint ".../teams", om zo alle teams uit de NBA te renderen.
Ook wil ik gebruik maken van de endpoint ".../players", om zo uiteindelijk per speler de bijbehorende informatie te laten zien.

De API geeft data over bijvoorbeeld: naam van speler, lengte van speler, positie van speler, in welk team deze speler speelt/heeft gespeeld, etc.

---Hoe zit het met interactie in mijn app?---
Ik wil mijn app het de gebruiker gemakkelijk maken, door bijvoorbeeld een overzichtelijke style te gebruiken, en de gebruiker duidelijk te vragen/zeggen wat te doen.

Op de overview page zie je alle 30 NBA teams. Hierop dient de gebruiker te klikken.
Dit leidt de gebruiker naar een pagina waar je alle spelers die voor dat team spelen/hebben gespeeld kunt zien.

Als de gebruiker op een speler klikt, komt er informatie tevoorschijn via een popup scherm, met de bijbehorende informatie/statistieken

---Welk design ga ik gebruiken?---
Ik wil een overview page met alle teams, met per team een lijst met spelers. Als je op een speler klikt, komt er een detailed page popup die alle informatie van die speler laat zien.

---Wat wil ik nog toevoegen?---
Aangezien ik nog nooit met API's heb gewerkt lijkt het me qua tijd verstandig om het niet te overdreven te maken. 
Maar als ik tijd genoeg heb, wil ik nog filters toepassen, en een zoekbalk.
Ook zou ik graag nog een API willen koppelenn met mijn app, zodat er per speler ook nog een foto van de speler tevoorschijn komt.