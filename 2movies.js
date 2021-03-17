const container = document.querySelector(".list");
const movies = [
  {name: "Felicità",    url: "felicita/h/14283213_40099",    year: "2020", genre:"Comédie"  },
  {name: "Yakari, la grande aventure",   url: "yakari-la-grande-aventure/h/14460003_40099",    year: "2020", genre:"Animation"  },
  {name: "La vie très privée de monsieur Sim",   url: "la-vie-tres-privee-de-monsieur-sim/h/6031610_40099",    year: "2015", genre:"Comédie Dramatique"  },
  {name: "Les acteurs",   url: "les-acteurs/h/310360_40099",    year: "2000", genre:"Comédie"  },
  {name: "Terra Willy, planète inconnue",   url: "terra-willy-planete-inconnue/h/11364255_40099",    year: "2019", genre:"Animation"  },
  {name: "La grande aventure Lego",  url: "la-grande-aventure-lego/h/3753674_40099",    year: "2014", genre:"Animation"  },
  {name: "I Love You Phillip Morris",  url: "i-love-you-phillip-morris/h/276693_40099",    year: "2009", genre:"Comédie"  },
  {name: "Barton Fink",  url: "barton-fink/h/1727329_40099",    year: "1991", genre:"Comédie Dramatique"  },
  {name: "Hellboy",  url: "hellboy/h/460023_40099",    year: "2004", genre:"Fantastique"  },
  {name: "Astérix et le coup du menhir",  url: "asterix-et-le-coup-du-menhir/h/267699_40099",    year: "1989", genre:"Jeunesse"  },
  {name: "La folie des grandeurs",    url: "la-folie-des-grandeurs/h/437616_40099",    year: "1971", genre:"Comédie"  },
  {name: "Kill Bill Volume 1",  url: "kill-bill-volume-1/h/447165_40099",    year: "2003", genre:"Action"  },
  {name: "Le cinquième élément",  url: "le-cinquieme-element/h/2799080_40099",    year: "1997", genre:"Science-fiction"  },
  {name: "Pulp Fiction",   url: "pulp-fiction/h/113934_40099",    year: "1994", genre:"Suspense"  },
  {name: "DieHard: Une journée en enfer",    url: "une-journee-en-enfer/h/1784027_40099",    year: "1995", genre:"Action"  },
  {name: "DieHard: 58 minutes pour vivre",   url: "58-minutes-pour-vivre/h/771194_40099",    year: "1990", genre:"Action"  },
  {name: "DieHard: Piège de cristal",   url: "piege-de-cristal/h/771207_40099",    year: "1988", genre:"Action"  },
  {name: "Tout simplement noir",  url: "tout-simplement-noir/h/14250527_40099",    year: "2020", genre:"Comédie"  },
  {name: "Les Schtroumpfs 2", url: "les-schtroumpfs-2/h/4884171_40099",    year: "2013", genre:"Animation"  },
  {name: "Les rebelles de la forêt",  url: "les-rebelles-de-la-foret/h/442100_40099",    year: "2006", genre:"Animation"  },
  {name: "Monster House",  url: "monster-house/h/766310_40099",    year: "2006", genre:"Animation"  },
  {name: "Les pirates ! Bons à rien, mauvais en tout",  url: "les-pirates-bons-a-rien-mauvais-en-tout/h/490525_40099",    year: "2012", genre:"Animation"  },
  {name: "Tartarin de Tarascon",  url: "tartarin-de-tarascon/h/6972241_40099",    year: "1934", genre:"Comédie"  },
  {name: "Ah ! Si j'étais riche",   url: "ah-si-j-etais-riche/h/114365_40099",    year: "2002", genre:"Comédie"  },
  {name: "Le dîner de cons",   url: "le-diner-de-cons/h/1445242_40099",    year: "1997", genre:"Comédie"  },
  {name: "Mais où est donc passée la 7e compagnie ?", url: "mais-ou-est-donc-passee-la-7-e-compagnie/h/625644_40099",    year: "1973", genre:"Comédie"  },
  {name: "Quelques messieurs trop tranquilles",  url: "quelques-messieurs-trop-tranquilles/h/1064200_40099",    year: "1973", genre:"Comédie"  },
  {name: "Jour de fête",   url: "jour-de-fete/h/2767115_40099",    year: "1949", genre:"Comédie"  },
  {name: "Tout le monde il est beau, tout le monde il est gentil", url: "tout-le-monde-il-est-beau-tout-le-monde-il-est-gentil/h/180163_40099",    year: "1972", genre:"Comédie"  },
  {name: "Quai des Orfèvres",   url: "quai-des-orfevres/h/117558_40099",    year: "1947", genre:"Policier"  },
  {name: "Hôtel du Nord", url: "hotel-du-nord/h/3281152_40099",    year: "1938", genre:"Drame"  },
  {name: "Le distrait", url: "le-distrait/h/421862_40099",    year: "1970", genre:"Comédie"  },
  {name: "Marie Antoinette",  url: "marie-antoinette/h/437547_40099",    year: "2006", genre:"Histoire"  },
  {name: "L'impasse",   url: "l-impasse/h/612062_40099",    year: "1993", genre:"Suspense"  },
  {name: "Chappie",  url: "chappie/h/4814980_40099",    year: "2015", genre:"Science-fiction"  },
  {name: "Le jouet", url: "le-jouet/h/647019_40099",    year: "1976", genre:"Comédie"  },
  {name: "Passengers", url: "passengers/h/7908222_40099",    year: "2016", genre:"Science-fiction"  },
  {name: "Hop",  url: "hop/h/113811_40099",    year: "2011", genre:"Jeunesse"  },
  {name: "Le plus beau métier du monde",  url: "le-plus-beau-metier-du-monde/h/387689_40099",    year: "1996", genre:"Comédie"  },
  {name: "Batman",   url: "batman/h/12590458_40099",    year: "1989", genre:"Fantastique"  },
  {name: "Pierre Lapin", url: "pierre-lapin/h/9742193_40099",    year: "2018", genre:"Jeunesse"  },
  {name: "La traversée de Paris",  url: "la-traversee-de-paris/h/106904_40099",    year: "1956", genre:"Comédie dramatique"  },
  {name: "Le coup du parapluie",   url: "le-coup-du-parapluie/h/177993_40099",    year: "1989", genre:"Comédie"  },
  {name: "Les choristes",   url: "les-choristes/h/3080957_40099",    year: "2004", genre:"Comédie dramatique"  },
  {name: "Les bronzés font du ski",  url: "les-bronzes-font-du-ski/h/4661500_40099",    year: "1979", genre:"Comédie"  },
  {name: "Les Schtroumpfs et le village perdu",   url: "les-schtroumpfs-et-le-village-perdu/h/8420498_40099",    year: "2017", genre:"Animation"  },
  {name: "Paddington 2",   url: "paddington-2/h/9319792_40099",    year: "2017", genre:"Jeunesse"  },
  {name: "12 Years a Slave2",   url: "12-years-a-slave/h/3615890_40099",    year: "2013", genre:"Drame"  },
  {name: "Bienvenue à Gattaca",  url: "bienvenue-a-gattaca/h/437345_40099",    year: "1997", genre:"Science-fiction"  },
  {name: "Master and Commander : de l'autre côté du monde",  url: "master-and-commander-de-l-autre-cote-du-monde/h/1893709_40099",    year: "2003", genre:"Aventure"  },
  {name: "Hulk",  url: "hulk/h/1101970_40099",    year: "2003", genre:"Action"  },
  {name: "Chinatown",  url: "chinatown/h/200345_40099",    year: "1974", genre:"Suspense"  },
  {name: "Moi, moche et méchant",  url: "moi-moche-et-mechant/h/733525_40099",    year: "2010", genre:"Animation"  },
  {name: "Jumanji",  url: "jumanji/h/667007_40099",    year: "1995", genre:"Fantastique"  },
  {name: "Retour vers le futur 3",  url: "retour-vers-le-futur-3/h/1063987_40099",    year: "1990", genre:"Science-fiction"  },
  {name: "Retour vers le futur 2",  url: "retour-vers-le-futur-2/h/1063986_40099",    year: "1989", genre:"Science-fiction"  },
  {name: "Retour vers le futur",  url: "retour-vers-le-futur/h/1063985_40099 ",    year: "1985", genre:"Science-fiction"  },
  {name: "Les minions",  url: "les-minions/h/5281800_40099",    year: "2015", genre:"Animation"  },
  {name: "L'armée des ombres",  url: "l-armee-des-ombres/h/437688_40099",    year: "1969", genre:"Drame"  },
  {name: "Playtime",  url: "playtime/h/2863218_40099",    year: "1967", genre:"Comédie"  },
  {name: "Les vacances de Mr Hulot",  url: "les-vacances-de-monsieur-hulot/h/2799017_40099",    year: "1953", genre:"Comédie"  },
  {name: "Mon oncle",  url: "mon-oncle/h/2830409_40099",    year: "1958", genre:"Comédie"  },
  {name: "Taxi",  url: "taxi/h/267817_40099",    year: "1997", genre:"Action"  },
  {name: "Les barbouzes",  url: "les-barbouzes/h/267781_40099",    year: "1964", genre:"Comédie"  },
  {name: "Les tontons flingueurs",  url: "les-tontons-flingueurs/h/438484_40099",    year: "1963", genre:"Comédie"  },
  {name: "Un chien dans un jeu de quilles",  url: "un-chien-dans-un-jeu-de-quilles/h/516885_40099",    year: "1983", genre:"Comédie"  },
  {name: "A gauche en sortant de l'ascenceur", url: "a-gauche-en-sortant-de-l-ascenseur/h/413625_40099",    year: "1988", genre:"Comédie"  },
  {name: "Premier contact", url: "premier-contact/h/7798919_40099",    year: "2016", genre:"Science-fiction"  },
  {name: "Les animaux fantastiques", url: "les-animaux-fantastiques/h/7681782_40099",    year: "2016", genre:"Fantastique"  },
  {name: "Deadpool", url: "deadpool/h/6303697_40099",    year: "2016", genre:"Comédie"  },
  {name: "Astérix: Le domaine des dieux", url: "asterix-le-domaine-des-dieux/h/4891937_40099",    year: "2014", genre:"Animation"  },
  {name: "Les fils de l'homme", url: "les-fils-de-l-homme/h/113969_40099",    year: "", genre:"Science-fiction"  },
  {name: "Kong: Skull island", url: "kong-skull-island/h/8297216_40099",    year: "2017", genre:"Aventure"  },
  {name: "Les aventures de Rabbit Jacob", url: "les-aventures-de-rabbi-jacob/h/1060462_40099",    year: "1973", genre:"Comédie"  },
  {name: "Océans", url: "oceans/h/174956_40099",    year: "2009", genre:"Documentaire"  },
  {name: "Le peuple migrateur", url: "le-peuple-migrateur/h/459649_40099",    year: "2001", genre:"Documentaire"  },
  {name: "Chimpanzés : Les artisans du Bossou", url: "chimpanzes-les-artisans-du-bossou/h/1994860_40099",    year: "2001", genre:"Documentaire"  },
  {name: "Nikita", url: "nikita/h/96172_40099",    year: "1990", genre:"Suspense"  },
  {name: "Le grand bleu", url: "le-grand-bleu-version-longue/h/15199135_40099",    year: "1988", genre:"Aventure"  },
  {name: "Léon", url: "leon/h/437617_40099",    year: "1994", genre:"Suspense"  },
  {name: "Hook ou la revanche du capitaine Crochet", url: "hook-ou-la-revanche-du-capitaine-crochet/h/1060663_40099",    year: "1991", genre:"Fantastique"  },
  {name: "Etre et avoir", url: "etre-et-avoir/h/437915_40099",    year: "2002", genre:"Documentaire"  },
  {name: "Kirikou et la sorcière", url: "kirikou-et-la-sorciere/h/569183_40099",    year: "1998", genre:"Animation"  },
  {name: "Joker", url: "joker/h/12513133_40099",    year: "2019", genre:"Suspense"  },
  {name: "La mule", url: "la-mule/h/10939764_40099",    year: "2018", genre:"Drame"  },
  {name: "Le grand bain", url: "le-grand-bain/h/10445994_40099",    year: "2018", genre:"Comédie dramatique"  },
  {name: "Ready Player One", url: "ready-player-one/h/9716666_40099",    year: "2018", genre:"Science-fiction"  },
  {name: "Une affaire de famille", url: "une-affaire-de-famille/h/10719337_40099",    year: "2018", genre:"Drame"  },
  {name: "Pentagon Papers", url: "pentagon-papers/h/9488776_40099",    year: "2017", genre:"Drame"  },
  {name: "La ch'tite famille", url: "la-ch-tite-famille/h/9620337_40099",    year: "2018", genre:"Comédie"  },
  {name: "Blade Runner 2049", url: "blade-runner-2049/h/9078527_40099",    year: "2017", genre:"Science-fiction"  },
  {name: "007 Spectre", url: "007-spectre/h/5851241_40099",    year: "2015", genre:"Action"  },
  {name: "Dallas Buyers Club", url: "dallas-buyers-club/h/3716357_40099",    year: "2013", genre:"Drame"  },
  {name: "Paddington", url: "paddington/h/4940838_40099",    year: "2014", genre:"Jeunesse"  },
  {name: "Les gardiens de la galaxie", url: "les-gardiens-de-la-galaxie/h/4452285_40099",    year: "2014", genre:"Science-fiction"  },
  {name: "Gone Girl", url: "gone-girl/h/4720696_40099",    year: "2014", genre:"Suspense"  },
  {name: "Django Unchained", url: "django-unchained/h/1820212_40099",    year: "2012", genre:"Western"  },
  {name: "Prisoners", url: "prisoners/h/3126176_40099",    year: "2013", genre:"Suspense"  },
  {name: "Le Hobbit : la désolation de Smaug", url: "le-hobbit-la-desolation-de-smaug/h/3464227_40099",    year: "2013", genre:"Fantastique"  },
  {name: "Le Hobbit : un voyage inattendu", url: "le-hobbit-un-voyage-inattendu/h/1710478_40099",    year: "2012", genre:"Fantastique"  },
  {name: "Skyfall", url: "skyfall/h/2746717_40099",    year: "2012", genre:"Action"  },
  {name: "Moonrise Kingdom", url: "moonrise-kingdom/h/667109_40099",    year: "2012", genre:"Comédie"  },
  {name: "True Grit", url: "true-grit/h/118252_40099",    year: "2010", genre:"Western"  },
  {name: "Intouchables", url: "intouchables/h/151459_40099",    year: "2011", genre:"Comédie dramatique"  },
  {name: "Les petits mouchoirs", url: "les-petits-mouchoirs/h/805882_40099",    year: "2010", genre:"Comédie dramatique"  },
  {name: "Shutter island", url: "shutter-island/h/276747_40099",    year: "2010", genre:"Suspense"  },
  {name: "Papy fait de la résistance", url: "papy-fait-de-la-resistance/h/3311841_40099",    year: "1983", genre:"Comédie"  },
  {name: "Les saisons", url: "les-saisons/h/6231028_40099",    year: "2015", genre:"Documentaire"  },
  {name: "Terre des Ours", url: "terre-des-ours/h/6045042_40099",    year: "2014", genre:"Documentaire"  },
  {name: "Microcosmos", url: "microcosmos-le-peuple-de-l-herbe/h/433830_40099",    year: "1996", genre:"Documentaire"  },
  {name: "Brendan et le secret de Kells", url: "brendan-et-le-secret-de-kells/h/446992_40099",    year: "2009", genre:"Animation"  },
  {name: "Le chant de la mer", url: "le-chant-de-la-mer/h/5108908_40099",    year: "2014", genre:"Animation"  },
  {name: "Cars", url: "cars-quatre-roues/h/603415_40099",    year: "2006", genre:"Animation"  },
  {name: "Mickey, la magie de Noël", url: "mickey-la-magie-de-noel/h/928081_40099",    year: "2001", genre:"Animation"  },
  {name: "Les indestructibles", url: "les-indestructibles/h/205541_40099",    year: "2004", genre:"Animation"  },
  {name: "Baby Boss", url: "baby-boss/h/8390252_40099",    year: "2017", genre:"Animation"  },
  {name: "Bee Movie", url: "bee-movie-drole-d-abeille/h/115385_40099",    year: "2007", genre:"Animation"  },
  {name: "Madagascar", url: "madagascar/h/2919648_40099",    year: "2005", genre:"Animation"  },
  {name: "Poltergeist", url: "poltergeist/h/5225552_40099",    year: "2015", genre:"Fantastique"  },
  {name: "Pride", url: "pride/h/4634326_40099",    year: "2014", genre:"Comédie dramatique"  },
  {name: "Hours", url: "hours/h/4085430_40099",    year: "2013", genre:"Suspense"  },
  {name: "Monument Men", url: "monuments-men/h/3864104_40099",    year: "2013", genre:"Guerre"  },
  {name: "The Grand Budapest Hotel", url: "the-grand-budapest-hotel/h/4053009_40099",  year: "2014", genre:"Comédie dramatique"  },
  {name: "Philomena", url: "philomena/h/3568774_40099",    year: "2013", genre:"Drame"  },
  {name: "Les rois mages", url: "les-rois-mages/h/650676_40099",    year: "2001", genre:"Comédie"  },
  {name: "Zulu", url: "zulu/h/3434946_40099",    year: "2013", genre:"Action"  },
  {name: "Quai d'Orsay", url: "quai-d-orsay/h/3221383_40099",    year: "2013", genre:"Comédie"  },
  {name: "La vallée des loups", url: "la-vallee-des-loups/h/7948131_40099",    year: "2016", genre:"Documentaire"  },
  {name: "La vie rêvée de Walter Mitty", url: "la-vie-revee-de-walter-mitty/h/3669184_40099",    year: "2013", genre:"Aventure"  },
  {name: "Alceste à bicyclette", url: "alceste-a-bicyclette/h/1820209_40099",    year: "2012", genre:"Comédie dramatique"  },
  {name: "L'odyssée de Pi", url: "l-odyssee-de-pi/h/1635398_40099",    year: "2012", genre:"Aventure"  },
  {name: "Voisins du troisième type", url: "voisins-du-troisieme-type/h/1210319_40099",    year: "2012", genre:"Comédie"  },
  {name: "The Descendants", url: "the-descendants/h/151408_40099",    year: "2011", genre:"Comédie dramatique"  },
  {name: "La piel que habito", url: "la-piel-que-habito/h/436037_40099",    year: "2011", genre:"Drame"  },
  {name: "La fille du puisatier", url: "la-fille-du-puisatier/h/911527_40099",    year: "2011", genre:"Drame"  },
  {name: "L'age de glace 4", url: "l-age-de-glace-4-la-derive-des-continents/h/981890_40099",    year: "2012", genre:"Animation"  },
  {name: "Titeuf, le film", url: "titeuf-le-film/h/113632_40099",    year: "2011", genre:"Animation"  },
  {name: "127 heures", url: "127-heures/h/911521_40099",    year: "2010", genre:"Drame"  },
  {name: "Wall Street : l'argent ne dort jamais", url: "wall-street-l-argent-ne-dort-jamais/h/242194_40099",    year: "2010", genre:"Drame"  },
  {name: "Slumdog Millionaire", url: "slumdog-millionaire/h/911525_40099",    year: "2008", genre:"Drame"  },
  {name: "Le jour d'après", url: "le-jour-d-apres/h/1198620_40099",    year: "2004", genre:"Action"  },
  {name: "Braveheart", url: "braveheart/h/573582_40099",    year: "1995", genre:"Aventure"  },
  {name: "Les trois frères", url: "les-trois-freres/h/2919583_40099",    year: "1995", genre:"Comédie"  },
  {name: "Sunshine", url: "sunshine/h/438278_40099",    year: "2007", genre:"Science-fiction"  },
  {name: "Phone Game", url: "phone-game/h/1401982_40099",    year: "2002", genre:"Suspense"  },
  {name: "Madame Doubtfire", url: "madame-doubtfire/h/168665_40099",    year: "1993", genre:"Comédie"  },
  {name: "Conan le barbare", url: "conan-le-barbare/h/2229368_40099",    year: "1982", genre:"Aventure"  },
  {name: "Chicken run", url: "chicken-run/h/413605_40099",    year: "2000", genre:"Animation"  },
  {name: "Brooklyn", url: "brooklyn/h/6464158_40099",    year: "2015", genre:"Drame"  },
  {name: "Snoopy et les Peanuts", url: "snoopy-et-les-peanuts-le-film/h/6067032_40099",    year: "2015", genre:"Animation"  },
  {name: "Les suffragettes", url: "les-suffragettes/h/5890850_40099",    year: "2015", genre:"Drame"  },
  {name: "Alexandre", url: "alexandre/h/437101_40099",    year: "2004", genre:"Histoire"  },
  {name: "La reine Margot", url: "la-reine-margot/h/1512012_40099",    year: "1993", genre:"Drame"  },
  {name: "Les gamins", url: "les-gamins/h/2329165_40099",    year: "2013", genre:"Comédie"  },
  {name: "Le cave se rebiffe", url: "le-cave-se-rebiffe/h/433204_40099",    year: "1961", genre:"Comédie"  },
  {name: "Vicky Cristina Barcelona", url: "vicky-cristina-barcelona/h/1784018_40099",    year: "2008", genre:"Comédie dramatique"  },
  {name: "Les goonies", url: "les-goonies/h/435659_40099",    year: "1985", genre:"Jeunesse"  },
  {name: "Marie-Francine", url: "marie-francine/h/8643789_40099",    year: "2017", genre:"Comédie"  },
  {name: "Le grand méchant Renard et autres contes", url: "le-grand-mechant-renard-et-autres-contes/h/8716590_40099",    year: "2017", genre:"Animation"  },
  {name: "Problemos", url: "problemos/h/8569306_40099",    year: "2017", genre:"Comédie"  },
  {name: "Man of Steel", url: "man-of-steel/h/2669070_40099",    year: "2013", genre:"Fantastique"  },
  {name: "American Sniper", url: "american-sniper/h/5268666_40099",    year: "2014", genre:"Guerre"  },
  {name: "Interstellar", url: "interstellar/h/4920580_40099",    year: "2014", genre:"Science-fiction"  },
  {name: "Le géant de fer", url: "le-geant-de-fer/h/240404_40099",    year: "1999", genre:"Animation"  },
  {name: "100 000 dollars au soleil", url: "100-000-dollars-au-soleil/h/120667_40099",    year: "1964", genre:"Aventure"  },
  {name: "L'arme fatale 3", url: "l-arme-fatale-3/h/1797802_40099",    year: "1992", genre:"Policier"  },
  {name: "L'arme fatale 4", url: "l-arme-fatale-4/h/1797743_40099",    year: "1998", genre:"Policier"  },
  {name: "L'arme fatale", url: "l-arme-fatale/h/1777460_40099",    year: "1987", genre:"Policier"  },
  {name: "L'arme fatale 2", url: "l-arme-fatale-2/h/1797801_40099",    year: "1989", genre:"Policier"  },
  {name: "Gravity", url: "gravity/h/3229004_40099",    year: "2013", genre:"Science-fiction"  },
  {name: "Matrix", url: "matrix/h/114045_40099",    year: "1999", genre:"Science-fiction"  },
  {name: "300", url: "300/h/438047_40099",    year: "2006", genre:"Action"  },
  {name: "Ocean's Eleven", url: "ocean-s-eleven/h/435044_40099",    year: "2001", genre:"Action"  },
  {name: "Godzilla", url: "godzilla/h/4107699_40099",    year: "2014", genre:"Science-fiction"  },
  {name: "Inherent Vice", url: "inherent-vice/h/4815003_40099",    year: "2014", genre:"Policier"  },
  {name: "Astérix: Les douze travaux d'Astérix", url: "les-douze-travaux-d-asterix/h/363817_40099",    year: "1976", genre:"Animation"  },
  {name: "Astérix le Gaulois", url: "asterix-le-gaulois/h/302917_40099",    year: "1967", genre:"Animation"  },
  {name: "Astérix chez les Bretons", url: "asterix-chez-les-bretons/h/235948_40099",    year: "1986", genre:"Animation"  },
  {name: "La cité de la peur", url: "la-cite-de-la-peur/h/437562_40099",    year: "1994", genre:"Comédie"  },
  {name: "Astérix et Cléopâtre", url: "asterix-et-cleopatre/h/163731_40099",    year: "1968", genre:"Animation"  },
  {name: "Sur la route de Madison", url: "sur-la-route-de-madison/h/435500_40099",    year: "1995", genre:"Drame"  },
  {name: "Autant en emporte le vent", url: "autant-en-emporte-le-vent/h/200225_40099",    year: "1939", genre:"Drame"  },
  {name: "Diversion", url: "diversion/h/4852272_40099",    year: "2015", genre:"Suspense"  },
  {name: "San Andreas", url: "san-andreas/h/5145500_40099",    year: "2015", genre:"Action"  },
  {name: "Le juge", url: "le-juge/h/4888831_40099",    year: "2014", genre:"Drame" },
  {name: "Harry Potter à l'école des sorciers", url: "harry-potter-a-l-ecole-des-sorciers/h/435039_40099",    year: "2001", genre:"Fantastique"  },
  {name: "Voyage au centre de la terre 2", url: "voyage-au-centre-de-la-terre-2-l-ile-mysterieuse/h/436656_40099",    year: "2012", genre:"Aventure"  },
  {name: "Pacific Rim", url: "pacific-rim/h/2787913_40099",    year: "", genre:"Science-fiction"  },
  {name: "Gremlins 2", url: "u-s-marshals/h/725197_40099",    year: "2013", genre:"Fantastique"  },
  {name: "Gremlins", url: "gremlins/h/800965_40099",    year: "1984", genre:"Fantastique"  },
  {name: "Le nouveau stagiaire", url: "le-nouveau-stagiaire/h/5674590_40099",    year: "2015", genre:"Comédie"  },
  {name: "Strictly Criminal", url: "strictly-criminal/h/5929348_40099",    year: "2015", genre:"Suspense"  },
  {name: "Les affranchis", url: "les-affranchis/h/436381_40099",    year: "1990", genre:"Suspense"  },
  {name: "U.S. Marshals", url: "u-s-marshals/h/725197_40099",    year: "1998", genre:"Policier"  },
  {name: "Happy Feet", url: "happy-feet/h/437810_40099",    year: "2006", genre:"Animation"  },
  {name: "L'associé du Diable", url: "l-associe-du-diable/h/200216_40099",    year: "1997", genre:"Fantastique"  },
  {name: "Sherlock Holmes : jeu d'ombres", url: "sherlock-holmes-jeu-d-ombres/h/436368_40099",    year: "2011", genre:"Action"  },
  {name: "Sherlock Holmes", url: "sherlock-holmes/h/199769_40099",    year: "2009", genre:"Action"  },
  {name: "Blood Diamond", url: "blood-diamond/h/438089_40099",    year: "2006", genre:"Aventure"  },
  {name: "Les sous-doués", url: "les-sous-doues/h/303001_40099",    year: "1980", genre:"Comédie"  },
  {name: "Le château de ma mère", url: "le-chateau-de-ma-mere/h/438490_40099",    year: "1990", genre:"Comédie dramatique"  },
  {name: "Les triplettes de Belleville", url: "les-triplettes-de-belleville/h/4247757_40099",    year: "2003", genre:"Animation"  },
  {name: "La gloire de mon père", url: "la-gloire-de-mon-pere/h/438499_40099",    year: "1990", genre:"Comédie dramatique"  },
  {name: "Le téléphone sonne toujours deux fois", url: "le-telephone-sonne-toujours-deux-fois/h/351196_40099",    year: "1984", genre:"Comédie"  },
  {name: "Le pôle express", url: "le-pole-express/h/1038437_40099",    year: "2004", genre:"Animation"  },
  {name: "Charlie et la chocolaterie", url: "charlie-et-la-chocolaterie/h/437201_40099",    year: "2005", genre:"Jeunesse"  },
  {name: "L'opération Corned Beef", url: "l-operation-corned-beef/h/1064009_40099",    year: "1990", genre:"Comédie"  },
  {name: "Le Caire confidentiel", url: "le-caire-confidentiel/h/8768703_40099",    year: "2017", genre:"Policier"  },  
  {name: "Inception", url: "inception/h/510368_40099",    year: "2010", genre:"Science-fiction"  },
  {name: "Invictus", url: "invictus/h/871468_40099",    year: "2009", genre:"Drame"  },
  {name: "Midnight Special", url: "midnight-special/h/6503602_40099",    year: "2016", genre:"Science-fiction"  },
  {name: "Agents très spéciaux : Code U.N.C.L.E.", url: "agents-tres-speciaux-code-u-n-c-l-e/h/5576427_40099",    year: "2015", genre:"Policier"  },
  {name: "L'affaire Pélican", url: "l-affaire-pelican/h/812558_40099",    year: "1993", genre:"Suspense"  },
  {name: "Au coeur de l'océan", url: "au-coeur-de-l-ocean/h/5997955_40099",    year: "2015", genre:"Aventure"  },  
  {name: "Batman Begins", url: "batman-begins/h/437179_40099",    year: "2005", genre:"Action"  },
  {name: "Orange mécanique", url: "orange-mecanique/h/435045_40099",    year: "1971", genre:"Drame"  },
  {name: "Gran Torino", url: "gran-torino/h/3441559_40099",    year: "2008", genre:"Suspense"  },
  {name: "Je suis une légende", url: "je-suis-une-legende/h/185102_40099",    year: "2007", genre:"Science-fiction"  },
  {name: "Impitoyable", url: "impitoyable/h/434653_40099",    year: "1992", genre:"Western"  },
  {name: "Argo", url: "argo/h/1515972_40099",    year: "2012", genre:"Suspense"  },  
  {name: "Blade Runner (Final Cut)", url: "blade-runner-final-cut/h/1099194_40099",    year: "1982", genre:"Science-fiction"  },
  {name: "Citizen Kane", url: "citizen-kane/h/305809_40099",    year: "1941", genre:"Drame"  },
  {name: "Conjuring 2", url: "conjuring-2-le-cas-enfield/h/7009425_40099",    year: "2016", genre:"Horreur"  },
  {name: "Conjuring", url: "conjuring-les-dossiers-warren/h/2892135_40099",    year: "2013", genre:"Horreur"  },  
  {name: "Kiss Kiss Bang Bang", url: "kiss-kiss-bang-bang/h/361058_40099",    year: "2005", genre:"Policier"  },
  {name: "Les pleins pouvoirs", url: "les-pleins-pouvoirs/h/435548_40099",    year: "1997", genre:"Suspense"  },
  {name: "Marseille", url: "marseille/h/6503644_40099",    year: "2016", genre:"Comédie dramatique"  },
  {name: "Batman: The Dark Knight", url: "the-dark-knight-le-chevalier-noir/h/433162_40099",    year: "2008", genre:"Action"  },  
  {name: "Batman: The Dark Knight Rises", url: "the-dark-knight-rises/h/1033296_40099",    year: "2012", genre:"Action"  },
  {name: "Le prestige", url: "le-prestige/h/2863354_40099",    year: "2006", genre:"Suspense"  },
  {name: "Le monde de Nemo", url: "le-monde-de-nemo/h/116353_40099",    year: "2003", genre:"Animation"  },  
  {name: "Zootopie", url: "zootopie/h/6344462_40099",    year: "2016", genre:"Animation"  },
  {name: "Very Bad Trip", url: "very-bad-trip/h/611911_40099",    year: "2009", genre:"Comédie"  },
  {name: "Edge of Tomorrow", url: "vivre-mourir-recommencer-edge-of-tomorrow/h/4217208_40099",    year: "2014", genre:"Science-fiction"  },  
  {name: "Zodiac", url: "zodiac/h/942876_40099",    year: "2007", genre:"Suspense"  },
  {name: "Mad Max : Fury Road", url: "mad-max-fury-road/h/5738491_40099",    year: "2015", genre:"Action"  },
  {name: "Didier", url: "didier/h/911536_40099",    year: "1996", genre:"Comédie"  },  
  {name: "Le Père Noël est une ordure", url: "le-pere-noel-est-une-ordure/h/4519507_40099",    year: "1982", genre:"Comédie"  },
  {name: "#Chef", url: "chef/h/4833418_40099",    year: "2014", genre:"Comédie"  },  
  {name: "La tortue rouge", url: "la-tortue-rouge/h/7009426_40099",    year: "2016", genre:"Animation"  },
  {name: "Paris pieds nus", url: "ouvert-la-nuit/h/7981356_40099",    year: "2016", genre:"Comédie"  },
  {name: "Vice-Versa", url: "vice-versa/h/5196978_40099",    year: "2015", genre:"Animation"  },
  {name: "Un idiot à Paris", url: "un-idiot-a-paris/h/432921_40099",    year: "1967", genre:"Comédie"  },
  {name: "Bodyguard", url: "bodyguard/h/107112_40099",    year: "1992", genre:"Policier"  },
  {name: "Eyes Wide Shut", url: "eyes-wide-shut/h/199812_40099",    year: "1999", genre:"Drame"  },
  {name: "Spotlight", url: "spotlight/h/6231044_40099",    year: "2015", genre:""  },
  {name: "The Shining", url: "shining/h/435556_40099",    year: "1980", genre:"Horreur"  },
  {name: "Full Metal Jacket", url: "full-metal-jacket/h/435558_40099",    year: "1987", genre:"Guerre"  },  
  {name: "L'illusionniste", url: "l-illusionniste/h/242145_40099",    year: "2010", genre:"Animation"  },
  {name: "Ouvert la nuit", url: "ouvert-la-nuit/h/7981356_40099",    year: "2016", genre:"Comédie dramatique"  },  
  {name: "Ernest et Célestine", url: "ernest-et-celestine/h/1617071_40099",    year: "2012", genre:"Animation"  },  
  {name: "Somewhere", url: "somewhere/h/1144244_40099",    year: "2010", genre:"Comédie dramatique"  },  
  {name: "Moi, Tonya", url: "moi-tonya/h/9595706_40099",    year: "2017", genre:"Drame"  },  
  {name: "Lawrence d'Arabie", url: "lawrence-d-arabie/h/850551_40099",    year: "1962", genre:"Histoire"  },  
  {name: "Le stratège", url: "le-stratege/h/776360_40099",    year: "2011", genre:"Drame"  },  
  {name: "Godzilla", url: "godzilla/h/437531_40099",    year: "1998", genre:"Science-fiction"  },  
  {name: "L'ours", url: "l-ours/h/433064_40099",    year: "1988", genre:"Aventure"  },  
  {name: "Les ripoux", url: "les-ripoux/h/236010_40099",    year: "1984", genre:"Comédie"  },  
  {name: "Drôle de drame", url: "drole-de-drame/h/375220_40099",    year: "1937", genre:"Comédie"  },  
  {name: "Tchao pantin", url: "tchao-pantin/h/5525434_40099",    year: "1983", genre:"Drame"  },  
  {name: "Se souvenir des belles choses", url: "se-souvenir-des-belles-choses/h/2235125_40099",    year: "2002", genre:"Drame"  },  
  {name: "Un cœur en hiver", url: "un-coeur-en-hiver/h/438706_40099",    year: "1992", genre:"Drame"  },  
  {name: "Nelly et monsieur Arnaud", url: "nelly-et-monsieur-arnaud/h/286005_40099",    year: "1995", genre:"Drame"  },  
  ];


const rowWidth = 50 // how many images per row?
const showMovies = () => {
  const options = {
    valueNames: [ 'name', 'year', 'genre' ],
    item: ({ name, url, year, genre, index }) => {
      const row = index === 0 ? 0 : Math.floor(index / rowWidth)
      const xPos = -148 * (index - row * rowWidth)
      const yPos = -222 * row
      return `<li>
        <a href="https://vod.canalplus.com/cinema/${url}" >
          <div class="pi"  style="background-position: ${xPos}px ${yPos}px;"></div>
          <h3 class="name">${name}</h3>
          <h4 class="genre">${genre}</h4>
          <h4 class="year">${year}</h4>
          </a>
      </li>`
    }
  };
const userList = new List('collection', options);
const movieCallback = (movie, index) => userList.add({ ...movie, index })
movies.forEach(movieCallback);

var filterJeunesse = document.getElementById("filter-jeunesse");
var filterComedie = document.getElementById("filter-comedie");
var filterAction = document.getElementById("filter-action");

var removeFiltersButton = document.getElementById("removeFilters");

filterJeunesse.addEventListener("click", function() {userList.filter(function(item) {if (item.values().genre == "Animation") {return true;} else {return false;}});});
filterComedie.addEventListener("click", function() {userList.filter(function(item) {if (item.values().genre == "Comédie") {return true;} else {return false;}});});
filterAction.addEventListener("click", function() {userList.filter(function(item) {if (item.values().genre == "Action") {return true;} else {return false;}});});

removeFiltersButton.addEventListener("click", function() {userList.filter();});

};



  document.addEventListener("DOMContentLoaded", showMovies);

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err));
    });
  }
