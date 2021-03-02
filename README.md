# LINK NAAR APP #

Hieronder de link naar een live demo van mijn app:

https://johancvb.github.io/web-app-from-scratch-2021/

- Overview page: 
![Overview Page](https://github.com/johancvb/web-app-from-scratch-2021/blob/master/nba_app/img/overview.JPG?raw=true)

- Detailed page:
![Detailed Page](https://github.com/johancvb/web-app-from-scratch-2021/blob/master/nba_app/img/overview.JPG?raw=true)


# Waarom deze app? #

Ik ben een groot fan van NBA beasketbal, dus leek het me daarom leuk om een soort spelers-database te maken. <br><br>
Door middel van deze app kun je per team, alle spelers zien die voor dat team hebben gespeeld/spelen. Ook kun je, indien beschikbaar, verschillende informatie van een speler zien. <br><br>
Per team kun je ook zoeken naar een specifieke speler via een zoekbalk, om zo sneller een speler te vinden. 

# Hoe zit de app in elkaar? #

De app werkt als volgt:
<br><br>
De gebruiker opent de app, en komt terecht op de overview page.
Op de overview page ziet de gebruiker alle NBA teams. <br>
Als de gebruiker op een van de teams klikt, gaat de app alle spelers van dat team laden. <br><br>
Als alle spelers van het aangeklikte team zijn geladen, komt de gebruiker op de detailed page. Vanuit deze pagina is het mogelijk voor de gebruiker om een speler aan te klikken, en om hier zijn statistieken te zien. <br>
Ook kan de gebruiker een bepaalde speler opzoeken door middel van de zoekbalk.

# De gebruikte API #

Tijdens dit project heb ik gebruik gemaakt van een gratis API, genaamd "Free NBA" van theapiguy (https://rapidapi.com/theapiguy/api/free-nba/details). 
<br><br>
Deze API heeft een paar verschillende endpoints, namelijk:
- Players
- Teams
- Games
- Stats

Ik maak tijdens dit project gebruik van de endpoints Players en Teams.<br><br>
Dit is de eerste keer dat ik met een API heb gewerkt, en zag het als een enorme uitdaging. Ik merk dat ik tijdens dit project veel heb geleerd, maar dat ik de volgende keer met een iets minder complexe API ga werken.<br><br>
Tijdens het programmeren liep ik steeds vast op de structuur waarop de data is opgeslagen in de API. Dit zorgde voor veel problemen en irritaties, aangezien de API maar 100 spelers per array kan hebben. De API bestaat uit 35 arrays, dus ik moest een itertaie maken waardoor de app door elke pagina heen moest itereren over de 100 spelers.<br>
Dit zorgde, voor mij als nieuweling, voor veel irritaties.

# ReadMe's #
- ReadMe week 3 

Deze week heb ik met hulp van een teamgenoot mijn code veel overzichtelijker en effetiever gemaakt.
Ook heb ik deze week mijn routing geïmplementeerd, en de detail pagina werkend gemaakt.

De spelers per team worden nu op een veel effectievere en efficientere manier gerendert uit de iteraties
van de API data.

Ik ga in de vakantie vooral werken aan het afronden van de app. Ik moet nog een loading state implementeren,
en de styling van de app veranderen. Ook wil ik nog een nieuwe functie voor mijn detailed pagina toepassen.

- ReadMe week 2 

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



- ReadMe week 1 

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