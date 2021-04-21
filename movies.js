const container = document.querySelector(".listaa");
const movies = [
  {
    "name": "Felicità",
    "original-name": "Felicità",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/felicita/h/14283213_40099",
    "year": 2020,
    "genre": "Comédie",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Bruno Merle",
    "people": "Pio Marmai, Rita Merle, Camille Rutherford",
    "storyline": "Pour Tim et Chloé, le bonheur c'est au jour le jour et sans attache. Mais demain l'été s'achève. Leur fille, Tommy, rentre au collège et cette année, c'est promis, elle ne manquera pas ce grand rendez vous. C'était avant que Chloé disparaisse, que Tim vole une voiture et qu'un cosmonaute débarque dans l'histoire."
  },
  {
    "name": "Yakari, la grande aventure",
    "original-name": "Yakari, le film",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/yakari-la-grande-aventure/h/14460003_40099",
    "year": 2020,
    "genre": "Animation",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Toby Genkel, Xavier Giacometti",
    "people": "Aloïs Agaësse-Mahieu, Arielle Vaubien, Hannah Vaubien",
    "storyline": "Alors que la migration de sa tribu est imminente, Yakari le petit Sioux part vers l'inconnu pour suivre la piste de Petit-Tonnerre, un mustang réputé indomptable. En chemin, Yakari fera la rencontre magique de Grand-Aigle, son animal totem, de qui il recevra une superbe plume... et un don incroyable : pouvoir parler aux animaux. Seul pour la première fois, sa quête va l'entraîner à travers les plaines, jusqu'au territoire des terribles chasseurs à peaux de puma... Mais comment retrouver la trace du tipi ? Au bout du voyage, le souffle de l'aventure scellera pour toujours l'amitié entre le plus brave des papooses et le mustang plus rapide que le vent."
  },
  {
    "name": "La vie très privée de monsieur Sim",
    "original-name": "La vie très privée de monsieur Sim",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/la-vie-tres-privee-de-monsieur-sim/h/6031610_40099",
    "year": 2015,
    "genre": "Drame",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Michel Leclerc",
    "people": "Jean-Pierre Bacri, Mathieu Amalric, Valeria Golino",
    "storyline": "Monsieur Sim n’a aucun intérêt. C’est du moins ce qu’il pense de lui-même. Sa femme l’a quitté, son boulot l’a quitté et lorsqu’il vient voir son père à l’autre bout du monde, il n’a pas le temps de déjeuner avec lui. C'est alors qu'il reçoit une proposition inattendue..."
  },
  {
    "name": "Les acteurs",
    "original-name": "Les acteurs",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/les-acteurs/h/310360_40099",
    "year": 2000,
    "genre": "Comédie",
    "lang": "Fr",
    "keyword": "",
    "stars": "star-three",
    "director": "Bertrand Blier",
    "people": "Pierre Arditi, Josiane Balasko, Jean-Paul Belmondo",
    "storyline": "Quelques portraits de comédiens (rien que des hommes en dehors de Josiane Balasko) qui se rencontrent et se racontent de facon organisée ou fortuite. Ils s'interrogent avec une certaine distance et ironie sur leur métier."
  },
  {
    "name": "Terra Willy, planète inconnue",
    "original-name": "Terra Willy, planète inconnue",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/terra-willy-planete-inconnue/h/11364255_40099",
    "year": 2019,
    "genre": "Animation",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Eric Tosti",
    "people": "Timothé Vom Dorp, Edouard Baer, Barbara Tissier",
    "storyline": "Suite à la destruction de leur vaisseau, le jeune Willy est séparé de ses parents avec lesquels il voyageait dans l’espace. Sa capsule de secours atterrit sur une planète sauvage et inexplorée. Avec l’aide de Buck, un robot de survie, il va devoir tenir jusqu’à l’arrivée d’une mission de sauvetage."
  },
  {
    "name": "La grande aventure Lego",
    "original-name": "The Lego Movie",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/la-grande-aventure-lego/h/3753674_40099",
    "year": 2014,
    "genre": "Animation",
    "lang": "En",
    "keyword": "",
    "stars": "star-four",
    "director": "Phil Lord, Christopher Miller",
    "people": "Arnaud Ducret, Will Ferrell, Tal",
    "storyline": "Emmet est un petit personnage banal et conventionnel que l'on prend par erreur pour un être extraordinaire, capable de sauver le monde. Il se retrouve entraîné, parmi d'autres, dans un périple des plus mouvementés, dans le but de mettre hors d'état de nuire un redoutable despote. Mais le pauvre Emmet n'est absolument pas prêt à relever un tel défi !"
  },
  {
    "name": "I Love You Phillip Morris",
    "original-name": "I Love You Phillip Morris",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/i-love-you-phillip-morris/h/276693_40099",
    "year": 2009,
    "genre": "Comédie",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Glenn Ficarra, John Requa",
    "people": "Jim Carrey, Ewan McGregor, Leslie Mann",
    "storyline": "L'histoire vraie d'un ex-flic, ex-mari, ex-arnaqueur aux assurances, ex-prisonnier modèle et éternel amant du codétenu Phillip Morris. Steven Russell est prêt à tout pour ne jamais être séparé de l'homme de sa vie. Ce qui implique notamment de ne pas moisir en prison. Jusqu'où peut-on aller par amour? Très loin si l'on en croit l'histoire incroyable de Steven Russell, un génie de l'évasion rattrapé par son romantisme."
  },
  {
    "name": "Barton Fink",
    "original-name": "Barton Fink",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/barton-fink/h/1727329_40099",
    "year": 1991,
    "genre": "Drame",
    "lang": "En",
    "keyword": "",
    "stars": "star-four",
    "director": "Joel Coen, Ethan Coen",
    "people": "John Turturro, John Goodman, Michael Lerner",
    "storyline": "En 1941, Barton Fink est un jeune auteur timide et effacé de pièces de théâtre, dont la dernière pièce est encensée par la critique à New York. Son agent le pousse à tenter sa chance à Hollywood comme scénariste sous contrat pour un studio, Capitol Pictures."
  },
  {
    "name": "Hellboy",
    "original-name": "Hellboy",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/hellboy/h/460023_40099",
    "year": 2004,
    "genre": "Fantastique",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Guillermo del Toro",
    "people": "Jeremy Zimmermann (I), Ron Perlman, John Hurt",
    "storyline": "Né dans les flammes de l'enfer, le démon Hellboy est transporté sur Terre lors d'une sombre cérémonie célébrée par les nazis, désireux d'utiliser les forces infernales à des fins de conquête. Sauvé par le docteur Broom, Hellboy est alors élevé pour combattre les forces du Mal. Armé, possédant un bras droit en pierre, il fait équipe avec le télépathe Abe Sapien et Liz Sherman, capable de contrôler le feu..."
  },
  {
    "name": "Astérix et le coup du menhir",
    "original-name": "Astérix et le coup du menhir",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/asterix-et-le-coup-du-menhir/h/267699_40099",
    "year": 1989,
    "genre": "Jeunesse",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Philippe Grimond",
    "people": "Roger Carel, Pierre Tornade, Henri Labussière",
    "storyline": "Lorsqu'Obélix percute le pauvre Panoramix avec un menhir, le druide s'évanouit et, au réveil, devient incapable de retrouver la formule de sa potion magique. Astérix et son fidèle compagnon vont alors devoir s'employer pour déjouer les tours des Romains et d'un étrange devin..."
  },
  {
    "name": "La folie des grandeurs",
    "original-name": "La folie des grandeurs",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/la-folie-des-grandeurs/h/437616_40099",
    "year": 1971,
    "genre": "Comédie",
    "lang": "Fr",
    "keyword": "",
    "stars": "star-four",
    "director": "Gérard Oury",
    "people": "Louis de Funès, Yves Montand, Alice Sapritch",
    "storyline": "Don Salluste profite de ses fonctions de ministre des Finances du roi d'Espagne pour racketter le peuple. Mais la Reine qui le déteste réussit à le chasser de la cour. Ivre de vengeance, il décide de la compromettre. Son neveu Don César ayant refusé de se mêler du complot,c'est finalement le valet de Don Salluste, Blaze, transi d'amour pour la souveraine, qui tiendra le rôle du Prince charmant. Malheureusement à force de quiproquos, il ne parvient qu'à s'attirer les faveurs de la peu avenante Dona Juana."
  },
  {
    "name": "Kill Bill Volume 1",
    "original-name": "Kill Bill Volume 1",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/kill-bill-volume-1/h/447165_40099",
    "year": 2003,
    "genre": "Action",
    "lang": "En",
    "keyword": "",
    "stars": "star-four",
    "director": "Quentin Tarantino",
    "people": "Uma Thurman, Sonny Chiba, Lucy Liu",
    "storyline": "Au cours d'une cérémonie de mariage en plein désert, un commando fait irruption dans la chapelle et tire sur les convives. Laissée pour morte, la Mariée enceinte retrouve ses esprits après un coma de quatre ans. Celle qui a auparavant exercé les fonctions de tueuse à gages au sein du Détachement International des Vipères Assassines n'a alors plus qu'une seule idée en tête : venger la mort de ses proches en éliminant tous les membres de l'organisation criminelle, dont leur chef Bill qu'elle se réserve pour la fin."
  },
  {
    "name": "Le cinquième élément",
    "original-name": "The fifth element",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/le-cinquieme-element/h/2799080_40099",
    "year": 1997,
    "genre": "Science-fiction",
    "lang": "En",
    "keyword": "",
    "stars": "star-four",
    "director": "Luc Besson",
    "people": "Bruce Willis, Gary Oldman, Ian Holm",
    "storyline": "Au XXIII siècle, dans un univers étrange et coloré, où tout espoir de survie est impossible sans la découverte du cinquième élément, un héros affronte le mal pour sauver l'humanité."
  },
  {
    "name": "Pulp Fiction",
    "original-name": "Pulp Fiction",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/pulp-fiction/h/113934_40099",
    "year": 1994,
    "genre": "Action",
    "lang": "En",
    "keyword": "",
    "stars": "star-four",
    "director": "Quentin Tarantino",
    "people": "John Travolta, Samuel L. Jackson, Uma Thurman",
    "storyline": "L'odyssée sanglante et burlesque de petits malfrats dans la jungle de Hollywood à travers trois histoires qui s'entremêlent."
  },
  {
    "name": "DieHard: Une journée en enfer",
    "original-name": "Die Hard: With a Vengeance",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/une-journee-en-enfer/h/1784027_40099",
    "year": 1995,
    "genre": "Action",
    "lang": "En",
    "keyword": "",
    "stars": "star-four",
    "director": "John McTiernan",
    "people": "Bruce Willis, Jeremy Irons, Samuel L. Jackson",
    "storyline": "Le lieutenant John McClane est de retour et il est demandé en personne par un terroriste, Simon, qui menace New York. Alors qu'il fait équipe avec Zeus, un commerçant du quartier d'Harlem embarqué dans l'aventure malgré lui, McLane se livre à un petit jeu à travers toute la ville, devant résoudre des énigmes. S'il rate son coup, une bombe explose, c'est la règle imposée par Simon..."
  },
  {
    "name": "DieHard: 58 minutes pour vivre",
    "original-name": "Die Hard 2",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/58-minutes-pour-vivre/h/771194_40099",
    "year": 1990,
    "genre": "Action",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Renny Harlin",
    "people": "Bruce Willis, William Sadler, Bonnie Bedelia",
    "storyline": "L'inspecteur de police McClane attend que l'avion de son épouse atterrisse dans un aéroport international proche de Washington. D'étranges allers et venues attirent son attention. Il suit des hommes qui communiquent discrètement entre eux jusqu'au sous-sol de l'aéroport. Là, des inconnus tirent sur lui et des mercenaires prennent le contrôle de l'aeroport, coupant toute communication avec l'extérieur. Les passagers des avions prêts a l'atterrissage, dont la femme de McClane, n'ont plus que cinquante-huit minutes pour vivre !"
  },
  {
    "name": "DieHard: Piège de cristal",
    "original-name": "Die Hard",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/piege-de-cristal/h/771207_40099",
    "year": 1988,
    "genre": "Action",
    "lang": "En",
    "keyword": "",
    "stars": "star-four",
    "director": "John McTiernan",
    "people": "Bruce Willis, Alan Rickman, Alexander Godunov",
    "storyline": "John McClane, policier new-yorkais, est venu rejoindre sa femme Holly, dont il est séparé depuis plusieurs mois, pour les fêtes de Noël dans le secret espoir d'une réconciliation. Celle-ci est cadre dans une multinationale japonaise, la Nakatomi Corporation. Son patron, M. Takagi, donne une soirée en l'honneur de ses employés, à laquelle assiste McClane. Tandis qu'il s'isole pour téléphoner, un commando investit l'immeuble et coupe toutes les communications avec l'extérieur..."
  },
  {
    "name": "Tout simplement noir",
    "original-name": "Tout simplement noir",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/tout-simplement-noir/h/14250527_40099",
    "year": 2020,
    "genre": "Comédie",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Jean-Pascal Zadi, John Wax",
    "people": "Jean-Pascal Zadi, Caroline Anglade, Fary",
    "storyline": "JP, un acteur raté de 40 ans, décide d’organiser la première grosse marche de contestation noire en France, mais ses rencontres, souvent burlesques, avec des personnalités influentes de la communauté et le soutien intéressé qu’il reçoit de Fary, le font osciller entre envie d’être sur le devant de la scène et véritable engagement militant..."
  },
  {
    "name": "Les Schtroumpfs 2",
    "original-name": "The Smurfs 2",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/les-schtroumpfs-2/h/4884171_40099",
    "year": 2013,
    "genre": "Animation",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Raja Gosnell",
    "people": "Neil Patrick Harris, Brendan Gleeson, Jayma Mays",
    "storyline": "Cherchant désespérément à s’emparer de la puissance de l’essence magique des Schtroumpfs, Gargamel a inventé les Canailles, de minuscules créatures. Mais pour que leur transformation en vrais Schtroumpfs soit complète, il lui manque encore la formule secrète que détient la Schtroumpfette. Il parvient à kidnapper la demoiselle et l’emmène à Paris pour accomplir son plan diabolique… Pour avoir une chance de sauver la belle, il va falloir tous les talents du Grand Schtroumpf, du Schtroumpf maladroit, du Schtroumpf grognon, du Schtroumpf coquet et de leurs amis humains, Patrick et Grace. Ils vont être obligés de rivaliser d’ingéniosité et de courage, car le danger est partout. Ils  vont aussi devoir convaincre la Schtroumpfette que sa place est bien parmi eux, et pas avec les Canailles…"
  },
  {
    "name": "Les rebelles de la forêt",
    "original-name": "Open Season",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/les-rebelles-de-la-foret/h/442100_40099",
    "year": 2006,
    "genre": "Animation",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Jill Culton, Anthony Stacchi, Roger Allers",
    "people": "Martin Lawrence, Ashton Kutcher, Gary Sinise",
    "storyline": "Depuis la nuit des temps, l'homme a toujours régné sur la forêt, mais cette fois, les choses pourraient bien changer... Dans la petite ville de Timberline, Boog, un ours apprivoisé et heureux de l'être, va voir sa paisible existence bouleversée par sa rencontre avec Elliot, un cerf sauvage aussi maigrichon que bavard. Elliot arrive à convaincre Boog de quitter sa vie de rêve auprès de Beth, la ranger qui l'a élevé depuis qu'il est ourson, pour aller \"vivre en liberté dans la nature\"... Mais Boog ignore tout de la vie sauvage, et les choses vont vite déraper. Avec l'ouverture de la chasse et les chasseurs à leurs trousses, Elliot doit absolument aider Boog à réveiller ses instincts pour qu'avec l'aide des autres animaux de la forêt, ils aient une chance de contre-attaquer tous ensemble..."
  },
  {
    "name": "Monster House",
    "original-name": "Monster House",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/monster-house/h/766310_40099",
    "year": 2006,
    "genre": "Animation",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Gil Kenan",
    "people": "Mitchel Musso, Sam Lerner, Spencer Locke",
    "storyline": "D.J. Walters, un petit garçon de 12 ans est doté d'une imagination débordante. C'est pourquoi personne ne le prend au sérieux lorsqu'il fait part de ses craintes au sujet de son horrible voisin qui terrorise tous les enfants du quartier. Il est en effet persuadé que celui-ci est responsable de la disparition mystérieuse de sa femme. Il a également remarqué d'autres phénomènes inquiétants se déroulant dans la maison de ce dernier. Ce que personne ne sait, c'est que D.J. n'invente rien et que cela va empirer."
  },
  {
    "name": "Les pirates ! Bons à rien, mauvais en tout",
    "original-name": "The Pirates! Band of Misfits",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/les-pirates-bons-a-rien-mauvais-en-tout/h/490525_40099",
    "year": 2012,
    "genre": "Animation",
    "lang": "En",
    "keyword": "Aaardman",
    "stars": "star-three",
    "director": "Peter Lord, Jeff Newitt",
    "people": "Edouard Baer, Caterina Murino, Hervé Grull",
    "storyline": "Malgré son enthousiasme, le Capitaine Pirate a beaucoup de mal à se faire passer pour une terreur des mers. Secondé par un équipage aussi peu doué que lui, le Capitaine rêve pourtant de battre ses rivaux, Black Bellamy et Liz Lafaucheuse, en remportant le prestigieux Prix du Pirate de l'Année. Pour le Capitaine et son drôle d'équipage, c'est le début d'une incroyable odyssée qui, des rivages de Blood Island jusqu'aux rues embrumées de Londres, va les conduire d'épreuves en rencontres. S'ils vont faire équipe avec un jeune scientifique du nom de Charles Darwin, ils vont aussi devoir affronter mille dangers et tenter de survivre à la reine Victoria, qui voue une haine absolue aux pirates... En avant pour l'aventure !"
  },
  {
    "name": "Tartarin de Tarascon",
    "original-name": "Tartarin de Tarascon",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/tartarin-de-tarascon/h/6972241_40099",
    "year": 1934,
    "genre": "Comédie",
    "lang": "Fr",
    "keyword": "",
    "stars": "star-three",
    "director": "Raymond Bernard",
    "people": "Raimu, Fernand Charpin, Sinoël",
    "storyline": "Tartarin est un bourgeois fanfaron et robuste qui vit à Tarascon, sa réputation repose sur des récits de voyages et d'aventures, plus ou moins inventés. Il se voit alors obligé de quitter son pays et rejoindre l'Afrique pour y chasser le fauve afin d'impressionner son entourage. Là-bas, il vivra des aventures dignes d'un Don Quichotte !"
  },
  {
    "name": "Ah ! Si j'étais riche",
    "original-name": "Ah ! Si j'étais riche",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/ah-si-j-etais-riche/h/114365_40099",
    "year": 2002,
    "genre": "Comédie",
    "lang": "Fr",
    "keyword": "",
    "stars": "star-three",
    "director": "Michel Munz, Gérard Bitton",
    "people": "Jean-Pierre Darroussin, Valeria Bruni Tedeschi, Richard Berry",
    "storyline": "Entre sa femme qui engage une procédure de divorce, les dettes qui s'accumulent et un emploi menacé, Aldo Bonnard voit sa vie se déliter, jusqu'au jour où il gagne une fortune au loto. Alors qu'il est sur le point d'annoncer la nouvelle à son épouse, il découvre qu'elle le trompe avec son nouveau patron. Deux solutions se présentent alors à lui : soit partager ses gains faramineux avec elle et... son rival, soit dissimuler sa fortune et feindre avoir gagné après le divorce. Il choisit cette dernière option, mais vit parallèlement et clandestinement comme un homme richissime."
  },
  {
    "name": "Le dîner de cons",
    "original-name": "Le dîner de cons",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/le-diner-de-cons/h/1445242_40099",
    "year": 1997,
    "genre": "Comédie",
    "lang": "Fr",
    "keyword": "",
    "stars": "star-four",
    "director": "Francis Veber",
    "people": "Thierry Lhermitte, Jacques Villeret, Francis Huster",
    "storyline": "Tous les mercredis, Pierre Brochant et ses amis organisent un dîner où chacun doit amener un con. Celui qui a trouvé le plus spectaculaire est declaré vainqueur. Ce soir, Brochant exulte, il est sur d'avoir trouvé la perle rare, un con de classe mondiale: Francois Pignon, comptable au ministère des Finances et passionné de modèles réduits en allumettes. Ce qu'il ignore c'est que Pignon est passe maître dans l'art de déclencher des catastrophes."
  },
  {
    "name": "Mais où est donc passée la 7e compagnie ?",
    "original-name": "Mais où est donc passée la septieme compagnie ?",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/mais-ou-est-donc-passee-la-7-e-compagnie/h/625644_40099",
    "year": 1973,
    "genre": "Comédie",
    "lang": "Fr",
    "keyword": "",
    "stars": "star-four",
    "director": "Robert Lamoureux",
    "people": "Jean Lefebvre, Pierre Mondy, Aldo Maccione",
    "storyline": "Pendant la débâcle française de 1940, la 7ème compagnie se réfugie dans les bois. Mais, elle est prise en embuscade par l'armée allemande. Seuls trois hommes partis en éclaireur en réchappent. Ils se retrouvent livrés à eux-mêmes dans une France occupée."
  },
  {
    "name": "Quelques messieurs trop tranquilles",
    "original-name": "Quelques messieurs trop tranquilles",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/quelques-messieurs-trop-tranquilles/h/1064200_40099",
    "year": 1973,
    "genre": "Comédie",
    "lang": "Fr",
    "keyword": "",
    "stars": "star-three",
    "director": "Georges Lautner",
    "people": "André Pousse, Michel Galabru, Henri Guybet",
    "storyline": "Les habitants de Loubressac voient d'un mauvais oeil l'installation chez eux d'une bande de hippies. Un meurtre est commis, on accuse les nouveaux venus. Quelques citoyens décident nonobstant de mener une enquête..."
  },
  {
    "name": "Jour de fête",
    "original-name": "Jour de fête",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/jour-de-fete/h/2767115_40099",
    "year": 1949,
    "genre": "Comédie",
    "lang": "Fr",
    "keyword": "",
    "stars": "star-three",
    "director": "Jacques Tati",
    "people": "Roger Rafal, Jacques Beauvais, Robert Balpo",
    "storyline": "Des forains s'installent dans un calme village. Parmi les attractions se trouve un cinéma ambulant où le facteur découvre un film documentaire sur ses collègues américains. Il décide alors de se lancer dans une tournée à \"l'américaine\"."
  },
  {
    "name": "Tout le monde il est beau, tout le monde il est gentil",
    "original-name": "Tout le monde il est beau, tout le monde il est gentil",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/tout-le-monde-il-est-beau-tout-le-monde-il-est-gentil/h/180163_40099",
    "year": 1972,
    "genre": "Comédie",
    "lang": "Fr",
    "keyword": "",
    "stars": "star-three",
    "director": "Jean Yanne",
    "people": "Michel Serrault, Jean Yanne, Bernard Blier",
    "storyline": "Selon \"Radio plus près de Dieu\", rien n'est conçu sans Dieu, surtout pas les shampoings, produits de beauté, la vente des disques... Un animateur dénonce cette escroquerie à l'antenne, ce qui lui vaut d'être licencié. Il réapparaîtra sur de nouvelles ondes avec \"Radio plus près de la Vérité\"."
  },
  {
    "name": "Quai des Orfèvres",
    "original-name": "Quai des Orfèvres",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/quai-des-orfevres/h/117558_40099",
    "year": 1947,
    "genre": "Action",
    "lang": "Fr",
    "keyword": "",
    "stars": "star-four",
    "director": "Henri-Georges Clouzot",
    "people": "Louis Jouvet, Suzy Delair, Bernard Blier",
    "storyline": "Jenny Lamour, chanteuse de music-hall douée, ne manque pas d'ambition. Elle accepte l'invitation à dîner de Brignon, homme riche et puissant qui peut l'aider dans sa carrière malgré l'opposition de Maurice, son époux. Jaloux et se croyant trompé, Maurice se précipite chez Brignon pour découvrir son rival assassiné."
  },
  {
    "name": "Hôtel du Nord",
    "original-name": "Hôtel du Nord",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/hotel-du-nord/h/3281152_40099",
    "year": 1938,
    "genre": "Drame",
    "lang": "Fr",
    "keyword": "",
    "stars": "star-four",
    "director": "Marcel Carné",
    "people": "Louis Jouvet, Arletty, Annabella",
    "storyline": "Un hôtel modeste au bord du canal Saint-Martin abrite une clientèle bigarrée. Pierre et Renée, un couple d'amoureux, décident d'en finir avec la vie. Ce qui va s'avérer plus difficile que prévu. Un autre couple, M. Edmond, mystérieux homme, et Raymonde, une prostituée, vont se mêler à l'histoire des amoureux désespérés."
  },
  {
    "name": "Le distrait",
    "original-name": "Le distrait",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/le-distrait/h/421862_40099",
    "year": 1970,
    "genre": "Comédie",
    "lang": "Fr",
    "keyword": "",
    "stars": "star-three",
    "director": "Pierre Richard",
    "people": "Pierre Richard, Marie-Christine Barrault, Maria Pacôme",
    "storyline": "Difficile de faire plus maladroit et tête en l'air que Pierre Malaquet. Cependant, sa mère réussit à convaincre son amant de le faire engager dans son agence de publicité. Comme il fallait s'y attendre, Pierre se fait rapidement remarquer, notamment par son humour noir qu'il essaye d'imposer dans les campagnes de pub. Mais c'est lorsqu'il rencontre M. Klerdenne, un client de la société encore plus excentrique que lui, que les choses se gâtent..."
  },
  {
    "name": "Marie Antoinette",
    "original-name": "Marie Antoinette",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/marie-antoinette/h/437547_40099",
    "year": 2006,
    "genre": "Histoire",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Sofia Coppola",
    "people": "Kirsten Dunst, Jason Schwartzman, Rip Torn",
    "storyline": "Évocation de la vie de la reine d'origine autrichienne, épouse mal-aimée de Louis XVI, guillotinée en 1793. Au sortir de l'adolescence, une jeune fille découvre un monde hostile et codifié, un univers frivole où chacun observe et juge l'autre sans aménité. Mariée à un homme maladroit qui la délaisse, elle est rapidement lassée par les devoirs de représentation qu'on lui impose. Elle s'évade dans l'ivresse de la fête et les plaisirs des sens pour réinventer un monde à elle. Y a-t-il un prix à payer à chercher le bonheur que certains vous refusent ?"
  },
  {
    "name": "L'impasse",
    "original-name": "Carlito's Way",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/l-impasse/h/612062_40099",
    "year": 1993,
    "genre": "Action",
    "lang": "En",
    "keyword": "",
    "stars": "star-four",
    "director": "Brian De Palma",
    "people": "Al Pacino, Sean Penn, Penelope Ann Miller",
    "storyline": "New-York, 1975. Libéré après 5 années de prison grâce à son avocat véreux, Carlito Brigante, ancienne figure du milieu, rentre chez lui dans le quartier espagnol de Harlem. Il souhaite se réinsérer dans la vie et monter aux Bahamas une affaire honnête avec la femme de sa vie. Mais son passé le rattrape, et ce qui a fait de lui un caïd autrefois risque bien de lui coûter la vie aujourd'hui..."
  },
  {
    "name": "Chappie",
    "original-name": "Chappie",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/chappie/h/4814980_40099",
    "year": 2015,
    "genre": "Science-fiction",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Neill Blomkamp",
    "people": "Sharlto Copley, Dev Patel, Hugh Jackman",
    "storyline": "Dans un futur proche, la population, opprimée par une police entièrement robotisée, commence à se rebeller. Chappie, l’un de ces droïdes policiers, est kidnappé. Reprogrammé, il devient le premier robot capable de penser et ressentir par lui-même. Mais des forces puissantes, destructrices, considèrent Chappie comme un danger pour l’humanité et l’ordre établi. Elles vont tout faire pour maintenir le statu quo et s’assurer qu’il soit le premier, et le dernier, de son espèce."
  },
  {
    "name": "Le jouet",
    "original-name": "Le jouet",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/le-jouet/h/647019_40099",
    "year": 1976,
    "genre": "Comédie",
    "lang": "Fr",
    "keyword": "",
    "stars": "star-three",
    "director": "Francis Veber",
    "people": "Pierre Richard, Michel Bouquet, Fabrice Greco",
    "storyline": "Un milliardaire et son jeune fils se baladent dans un grand magasin, afin de choisir un cadeau. Le choix de l'enfant se porte sur un journaliste, qui va être mis à sa disposition et devenir son jouet."
  },
  {
    "name": "Passengers",
    "original-name": "Passengers",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/passengers/h/7908222_40099",
    "year": 2016,
    "genre": "Science-fiction",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Morten Tyldum",
    "people": "Jennifer Lawrence, Chris Pratt, Michael Sheen",
    "storyline": "Alors que 5000 passagers endormis pour longtemps voyagent dans l’espace vers une nouvelle planète, deux d’entre eux sont accidentellement tirés de leur sommeil artificiel 90 ans trop tôt. Jim et Aurora doivent désormais accepter l’idée de passer le reste de leur existence à bord du vaisseau spatial. Alors qu’ils éprouvent peu à peu une indéniable attirance, ils découvrent que le vaisseau court un grave danger. La vie des milliers de passagers endormis est entre leurs mains…"
  },
  {
    "name": "Hop",
    "original-name": "Hop",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/hop/h/113811_40099",
    "year": 2011,
    "genre": "Jeunesse",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Tim Hill",
    "people": "Michael Gregorio, James Marsden, Kaley Cuoco",
    "storyline": "Robbie est un lapin adolescent dont le père dirige une chocolaterie secrète qui produit chaque année les délicieuses confiseries pour les fêtes de Pâques (cloches, lapins et œufs en chocolat). Le père de Robbie, personnage enjoué et connu pour être le Lapin de Pâques, est prêt à céder la chocolaterie familiale à son fils. Cependant, Robbie ne rêve que d’une chose : devenir batteur dans un groupe de Rock. A la veille de la passation de pouvoir, Robbie s’enfuit..."
  },
  {
    "name": "Le plus beau métier du monde",
    "original-name": "Le plus beau métier du monde",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/le-plus-beau-metier-du-monde/h/387689_40099",
    "year": 1996,
    "genre": "Comédie",
    "lang": "Fr",
    "keyword": "",
    "stars": "star-three",
    "director": "Gérard Lauzier",
    "people": "Gérard Depardieu, Michèle Laroque, Souad Amidou",
    "storyline": "Pour se rapprocher de ses enfants a la suite de son divorce, Laurent Monier, professeur d'histoire-geographie dans un paisible lycee de province, accepte un poste dans un college sensible de la banlieue parisienne. On lui attribue la classe la plus dure, la quatrieme techno, et il trouve un appartement a la cite des Muriers, un quartier particulierement difficile."
  },
  {
    "name": "Batman",
    "original-name": "Batman",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/batman/h/12590458_40099",
    "year": 1989,
    "genre": "Fantastique",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Tim Burton",
    "people": "Michael Keaton, Kim Basinger, Jack Nicholson",
    "storyline": "Le célèbre et impitoyable justicier, Batman, est de retour. Plus beau, plus fort et plus dépoussiéré que jamais, il s'apprête à nettoyer Gotham City et à affronter le terrible Joker..."
  },
  {
    "name": "Pierre Lapin",
    "original-name": "Peter Rabbit",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/pierre-lapin/h/9742193_40099",
    "year": 2018,
    "genre": "Jeunesse",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Will Gluck",
    "people": "Philippe Lacheau, Julien Arruti, Élodie Fontan",
    "storyline": "Le petit lapin préféré des jeunes lecteurs depuis des générations est désormais le héros d’un film plein d’aventures et d’espièglerie ! L'éternelle lutte de Pierre Lapin avec M. McGregor pour les légumes du potager va atteindre des sommets. Sans parler de leur rivalité pour plaire à cette charmante voisine qui adore les animaux… Bien au-delà du jardin, de nombreuses péripéties les entraîneront de la magnifique région des lacs en Angleterre jusqu’à Londres !"
  },
  {
    "name": "La traversée de Paris",
    "original-name": "La traversée de Paris",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/la-traversee-de-paris/h/106904_40099",
    "year": 1956,
    "genre": "Drame",
    "lang": "Fr",
    "keyword": "",
    "stars": "star-four",
    "director": "Claude Autant-Lara",
    "people": "Jean Gabin, Bourvil, Louis de Funès",
    "storyline": "Sous l'Occupation, Martin, brave homme au chômage, doit convoyer à l'autre bout de Paris quatre valises pleines de porc. Son acolyte habituel ayant été arrêté, il fait appel à un inconnu, Grandgil. Mais celui-ci se révèle vite incontrôlable et le trajet périlleux. Au terme de leur périple, Martin découvrira que Grandgil est un peintre connu qui s'est offert le luxe d'une petite aventure. Ils finiront par se faire arrêter et Martin paiera seul le prix de cette traversée."
  },
  {
    "name": "Le coup du parapluie",
    "original-name": "Le coup du parapluie",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/le-coup-du-parapluie/h/177993_40099",
    "year": 1989,
    "genre": "Comédie",
    "lang": "Fr",
    "keyword": "",
    "stars": "star-three",
    "director": "Gérard Oury",
    "people": "Pierre Richard, Valérie Mairesse, Gérard Jugnot",
    "storyline": "Grégoire Lecomte, acteur raté, se retrouve confondu avec un dangereux tueur à gages dont il est chargé du nouveau contrat : tuer à l'aide de la pointe d'un parapluie un riche industriel..."
  },
  {
    "name": "Les choristes",
    "original-name": "The Chorus",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/les-choristes/h/3080957_40099",
    "year": 2004,
    "genre": "Drame",
    "lang": "Fr",
    "keyword": "",
    "stars": "star-four",
    "director": "Christophe Barratier",
    "people": "Gérard Jugnot, François Berléand, Jacques Perrin",
    "storyline": "En 1948, Clément Mathieu, professeur de musique sans emploi accepte un poste de surveillant dans un internat de rééducation pour mineurs ; le système répressif appliqué par le directeur, Rachin, bouleverse Mathieu. En initiant ces enfants difficiles à la musique et au chant choral, Mathieu parviendra à transformer leur quotidien."
  },
  {
    "name": "Les bronzés font du ski",
    "original-name": "Les bronzés font du ski",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/les-bronzes-font-du-ski/h/4661500_40099",
    "year": 1979,
    "genre": "Comédie",
    "lang": "Fr",
    "keyword": "",
    "stars": "star-four",
    "director": "Patrice Leconte",
    "people": "Michel Blanc, Marie-Anne Chazel, Christian Clavier",
    "storyline": "Après le Club méditerranée, la joyeuse troupe d'amis (plus connu sous le nom Des Bronzés) se retrouvent aux sports d'hiver. Ils vivront encore d'autres problèmes sentimentaux, et mésaventures. L'équipe ira même se perdre en montagne."
  },
  {
    "name": "Les Schtroumpfs et le village perdu",
    "original-name": "Smurfs: The Lost Village",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/les-schtroumpfs-et-le-village-perdu/h/8420498_40099",
    "year": 2017,
    "genre": "Animation",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Kelly Asbury",
    "people": "Laëtitia Milot, Gérard Hernandez, Arié Elmaleh",
    "storyline": "La Schtroumpfette, le Schtroumpf costaud, le Schtroumpf à lunettes et le Schtroumpf maladroit ont filé en douce pour suivre une carte vers un mystérieux village. Mais le chemin qui y mène regorge d'embuches, de créatures magiques et de souterrains labyrinthiques. Il leur faudra par ailleurs redoubler de prudence puisque Gargamel n'est pas loin et compte bien les arrêter."
  },
  {
    "name": "Paddington 2",
    "original-name": "Paddington 2",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/paddington-2/h/9319792_40099",
    "year": 2017,
    "genre": "Jeunesse",
    "lang": "En",
    "keyword": "",
    "stars": "star-four",
    "director": "Paul King",
    "people": "Guillaume Gallienne, Hugh Bonneville, Sally Hawkins",
    "storyline": "Paddington coule des jours heureux chez les Brown, sa famille d’adoption, dans un quartier paisible de Londres, où il est apprécié de tous. Alors qu’il recherche un cadeau exceptionnel pour les cent ans de sa tante adorée, il repère un magnifique livre animé, très ancien, chez un antiquaire. Pas de temps à perdre : il enchaîne les petits boulots pour pouvoir l’acheter ! Mais lorsque le précieux ouvrage est volé, Paddington est accusé à tort et incarcéré. Convaincus de son innocence, les Brown se lancent dans une enquête pour retrouver le coupable…"
  },
  {
    "name": "12 Years a Slave",
    "original-name": "12 Years a Slave",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/12-years-a-slave/h/3615890_40099",
    "year": 2013,
    "genre": "Drame",
    "lang": "En",
    "keyword": "",
    "stars": "star-four",
    "director": "Steve McQueen (II)",
    "people": "Chiwetel Ejiofor, Michael Fassbender, Benedict Cumberbatch",
    "storyline": "Les États-Unis, quelques années avant la guerre de Sécession. Solomon Northup, jeune homme noir originaire de l’État de New York, est enlevé et vendu comme esclave. Face à la cruauté d’un propriétaire de plantation de coton, Solomon se bat pour rester en vie et garder sa dignité."
  },
  {
    "name": "Bienvenue à Gattaca",
    "original-name": "Gattaca",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/bienvenue-a-gattaca/h/437345_40099",
    "year": 1997,
    "genre": "Science-fiction",
    "lang": "En",
    "keyword": "",
    "stars": "star-four",
    "director": "Andrew Niccol",
    "people": "Ethan Hawke, Uma Thurman, Jude Law",
    "storyline": "Dans un monde parfait, Gattaca est un centre d'études et de recherches spatiales pour des jeunes gens au patrimoine génétique impeccable. Jérôme, candidat idéal, voit sa vie détruite par un accident tandis que Vincent, enfant naturel, rêve de partir pour l'espace. Chacun des deux va permettre à l'autre d'obtenir ce qu'il souhaite en déjouant les lois de Gattaca."
  },
  {
    "name": "Master and Commander : de l'autre côté du monde",
    "original-name": "Master & Commander : The Far Side of the World",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/master-and-commander-de-l-autre-cote-du-monde/h/1893709_40099",
    "year": 2003,
    "genre": "Aventure",
    "lang": "En",
    "keyword": "",
    "stars": "star-four",
    "director": "Peter Weir",
    "people": "Russell Crowe, Paul Bettany, Billy Boyd",
    "storyline": "En 1805, le capitaine Jack Aubrey est une des figures les plus brillantes de la Marine Royale britannique. Son courage, sa ténacité, son sens tactique lui ont valu le respect et l'admiration des officiers et matelots du vaisseau de guerre Surprise. Fidèle compagnon de ces aventures, le Docteur Stephen Maturin est son exact opposé. Chirurgien, chercheur et naturaliste passionné, son amour de la musique est son seul point commun avec Aubrey. Ces deux hommes, si contrastés, n'en ont pas moins forgé de solides liens d'amitié..."
  },
  {
    "name": "Hulk",
    "original-name": "Hulk",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/hulk/h/1101970_40099",
    "year": 2003,
    "genre": "Action",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Ang Lee",
    "people": "Lou Ferrigno, Stan Lee, Eric Bana",
    "storyline": "Au cours d'une opération scientifique qui a mal tourné, le docteur Bruce Banner est exposé à une surdose de radiations nucléaires. Miraculeusement indemne, il sort néanmoins affecté de cette douloureuse expérience et développe le pouvoir de se transformer en Hulk, un monstre vert à la force surhumaine et à la rage incontrôlable. Cette créature ne se manifeste que lorsque ce dernier est soumis à une intense émotion. Mis au ban de la société, le docteur Banner est obligé de se cacher pour ne pas faire subir aux autres sa métamorphose. Le général Ross, le père de Betty, l'ex-petite amie de Bruce, est chargé de stopper le monstre par tous les moyens. Glenn Talbot, rival scientifique de Banner, est également sur les traces de Hulk. Lorsque Betty découvre que la créature a un rapport avec les recherches du père de Bruce, elle devient la seule à pouvoir comprendre ce qu'est Hulk..."
  },
  {
    "name": "Chinatown",
    "original-name": "Chinatown",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/chinatown/h/200345_40099",
    "year": 1974,
    "genre": "Action",
    "lang": "En",
    "keyword": "",
    "stars": "star-four",
    "director": "Roman Polanski",
    "people": "Jack Nicholson, Faye Dunaway, John Huston",
    "storyline": "Gittes, détective privé, reçoit la visite d'une fausse Mme Mulwray, qui lui demande de filer son mari, ingénieur des eaux à Los Angeles. Celui-ci est retrouvé mort, noyé. Gittes s'obstine dans son enquête, malgré les menaces de tueurs professionnels."
  },
  {
    "name": "Moi, moche et méchant",
    "original-name": "Desplicable me",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/moi-moche-et-mechant/h/733525_40099",
    "year": 2010,
    "genre": "Animation",
    "lang": "En",
    "keyword": "",
    "stars": "star-four",
    "director": "Chris Renaud, Pierre Coffin",
    "people": "Gad Elmaleh, Steve Carell, Jason Segel",
    "storyline": "Dans un charmant quartier résidentiel délimité par des clôtures de bois blanc et orné de rosiers fleurissants se dresse une bâtisse noire entourée d’une pelouse en friche. Cette façade sinistre cache un secret : Gru, un méchant vilain, entouré d’une myriade de sous-fifres et armé jusqu’aux dents, qui, à l’insu du voisinage, complote le plus gros casse de tous les temps : voler la lune (Oui, la lune !)... Gru affectionne toutes sortes de sales joujoux. Il possède une multitude de véhicules de combat aérien et terrestre et un arsenal de rayons immobilisants et rétrécissants avec lesquels il anéantit tous ceux qui osent lui barrer la route... jusqu’au jour où il tombe nez à nez avec trois petites orphelines qui voient en lui quelqu’un de tout à fait différent : un papa. Le plus grand vilain de tous les temps se retrouve confronté à sa plus dure épreuve : trois fillettes prénommées Margo, Edith et Agnes."
  },
  {
    "name": "Jumanji",
    "original-name": "Jumanji",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/jumanji/h/667007_40099",
    "year": 1995,
    "genre": "Fantastique",
    "lang": "En",
    "keyword": "",
    "stars": "star-four",
    "director": "Joe Johnston",
    "people": "Robin Williams, Kirsten Dunst, Bradley Pierce",
    "storyline": "Lors d'une partie de Jumanji, un jeu très ancien, le jeune Alan est propulsé sous les yeux de son amie d'enfance, Sarah, dans un étrange pays. Il ne pourra s'en échapper que lorsqu'un autre joueur reprendra la partie et le libèrera sur un coup de dés. Vingt-six ans plus tard, il retrouve le monde réel par le coup de dés de deux autres jeunes joueurs."
  },
  {
    "name": "Retour vers le futur 3",
    "original-name": "Back to the Future Part III",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/retour-vers-le-futur-3/h/1063987_40099",
    "year": 1990,
    "genre": "Science-fiction",
    "lang": "En",
    "keyword": "",
    "stars": "star-four",
    "director": "Robert Zemeckis",
    "people": "Michael J. Fox, Christopher Lloyd, Thomas F. Wilson",
    "storyline": "Après son voyage mouvementé entre passé, présent et futur, Marty McFly apprend par une lettre vieille de cent ans que son vieil ami Emmett \"Doc\" Brown se serait crashé en 1880 au volant de sa DeLorean, restant ainsi prisonnier du far-west, sous la menace de Buford \"Molosse\" Tannen qui s'est juré de le tuer. Il n'a que cinq jours pour retrouver Doc et le ramener vivant vers le présent..."
  },
  {
    "name": "Retour vers le futur 2",
    "original-name": "Back to the Future Part II",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/retour-vers-le-futur-2/h/1063986_40099",
    "year": 1989,
    "genre": "Science-fiction",
    "lang": "En",
    "keyword": "",
    "stars": "star-four",
    "director": "Robert Zemeckis",
    "people": "Michael J. Fox, Christopher Lloyd, Thomas F. Wilson",
    "storyline": "Lors de son premier voyage en 1985, Marty a commis quelques erreurs. L'avenir qu'il s'était tracé n'est pas si rose, et son rejeton est tombé sous la coupe du voyou Griff Tannen, qui veut régner sur la ville. En compagnie de son ami Emmett \"Doc\" Brown et de sa fiancée Jennifer, Marty va devoir entreprendre un voyage vers le futur, pour tenter de donner un peu plus de moralité à son héritier. Un voyage aux conséquences dramatiques..."
  },
  {
    "name": "Retour vers le futur",
    "original-name": "Back to the Future Part I",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/retour-vers-le-futur/h/1063985_40099",
    "year": 1985,
    "genre": "Science-fiction",
    "lang": "En",
    "keyword": "",
    "stars": "star-four",
    "director": "Robert Zemeckis",
    "people": "Michael J. Fox, Christopher Lloyd, Thomas F. Wilson",
    "storyline": "1985. Le jeune Marty McFly mène une existence anonyme auprès de sa petite amie Jennifer, seulement troublée par sa famille en crise et un proviseur qui serait ravi de l'expulser du lycée. Ami de l'excentrique professeur Emmett Brown, il l'accompagne un soir tester sa nouvelle expérience : le voyage dans le temps via une DeLorean modifiée. La démonstration tourne mal : des trafiquants d'armes débarquent et assassinent le scientifique. Marty se réfugie dans la voiture et se retrouve transporté en 1955. Là, il empêche malgré lui la rencontre de ses parents, et doit tout faire pour les remettre ensemble, sous peine de ne pouvoir exister..."
  },
  {
    "name": "Les minions",
    "original-name": "The Minions",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/les-minions/h/5281800_40099",
    "year": 2015,
    "genre": "Animation",
    "lang": "En",
    "keyword": "",
    "stars": "star-three",
    "director": "Pierre Coffin, Kyle Balda",
    "people": "Marion Cotillard, Guillaume Canet, Christian Gonon",
    "storyline": "A l'origine de simples organismes monocellulaires de couleur jaune, les Minions ont évolué au cours des âges au service de maîtres plus abjectes les uns que les autres. Les disparitions répétitives de ceux-ci, des tyrannosaures à Napoléon, ont plongé les Minions dans une profonde dépression. Mais l'un d'eux, prénommé Kevin, a une idée. Flanqué de Stuart, l'adolescent rebelle et de l'adorable petit Bob, Kevin part à la recherche d'un nouveau patron malfaisant pour guider les siens. Nos trois Minions se lancent dans un palpitant voyage qui va les conduire à leur nouveau maître : Scarlet Overkill, la première superméchante de l'histoire. De l'Antarctique au New York des années 60, nos trois compères arrivent finalement à Londres, où ils vont devoir faire face à la plus terrible menace de leur existence : l'annihilation de leur espèce."
  },
  {
    "name": "L'armée des ombres",
    "original-name": "",
    "available": "available-off",
    "url": "https://vod.canalplus.com/cinema/l-armee-des-ombres/h/437688_40099",
    "year": 1969,
    "genre": "Drame",
    "lang": "Fr",
    "keyword": "",
    "stars": "star-four",
    "director": "Jean-Pierre Melville",
    "people": "Lino Ventura, Simone Signoret, Paul Crauchet",
    "storyline": "France 1942. Gerbier, ingénieur des Ponts et Chaussées est également l'un des chefs de la Résistance. Dénoncé et capturé, il est incarcéré dans un camp de prisonniers. Alors qu'il prépare son évasion, il est récupéré par la Gestapo..."
  }
 ];
  
  
const rowWidth = 50 // how many images per row?
const showMovies = () => {
  const options = {
    valueNames: [ 'name' ],
    item: ({ name, url, year, genre, stars, index }) => {
      const row = index === 0 ? 0 : Math.floor(index / rowWidth)
      const xPos = -111 * (index - row * rowWidth)
      const yPos = -167 * row
      return `<li class="fade-in movie" style="animation-delay: calc(1s * 0.005 * ${index} ); ">
        <a href="${url}"  >
          <div class="poster"  style="background-position: ${xPos}px ${yPos}px; z-index:0;"></div>
          <h3 class="name">${name}</h3></a>
          <div class="star ${stars}"></div>
          <h4 class="genre">${genre}</h4>
          <h4 class="year">${year}</h4>         
      </li>`
    }
  };
const userList = new List('collection', options);
const movieCallback = (movie, index) => userList.add({ ...movie, index })
movies.forEach(movieCallback);



var filterFR = document.getElementById("filter-fr");
var filterJeunesse = document.getElementById("filter-jeunesse");
var filterComedie = document.getElementById("filter-comedie");
var filterAction = document.getElementById("filter-action");
var filterDisney = document.getElementById("filter-disney");
var filterDocumentaire = document.getElementById("filter-documentaire");
var filterDrame = document.getElementById("filter-drame");
var filterSF = document.getElementById("filter-SF");
var filterWestern = document.getElementById("filter-Western");
var removeFiltersButton = document.getElementById("removeFilters");

filterFR.addEventListener("click", function() {userList.filter(function(item) {if (item.values().lang == "Fr") {return true;} else {return false;}});});
filterJeunesse.addEventListener("click", function() {userList.filter(function(item) {if (item.values().genre == "Animation") {return true;} else {return false;}});});
filterComedie.addEventListener("click", function() {userList.filter(function(item) {if (item.values().genre == "Comédie") {return true;} else {return false;}});});
filterAction.addEventListener("click", function() {userList.filter(function(item) {if (item.values().genre == "Action") {return true;} else {return false;}});});
filterDisney.addEventListener("click", function() {userList.filter(function(item) {if (item.values().keyword == "Disney") {return true;} else {return false;}});});
filterDocumentaire.addEventListener("click", function() {userList.filter(function(item) {if (item.values().genre == "Documentaire") {return true;} else {return false;}});});
filterDrame.addEventListener("click", function() {userList.filter(function(item) {if (item.values().genre == "Drame") {return true;} else {return false;}});});
filterSF.addEventListener("click", function() {userList.filter(function(item) {if (item.values().genre == "Science-fiction") {return true;} else {return false;}});});
filterWestern.addEventListener("click", function() {userList.filter(function(item) {if (item.values().genre == "Western") {return true;} else {return false;}});});
removeFiltersButton.addEventListener("click", function() {userList.filter();});


};



  document.addEventListener("DOMContentLoaded", showMovies);
  document.addEventListener( 'DOMContentLoaded', function () { new Splide( '.splide' ).mount();  } );

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/m1/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err));
    });
  }

