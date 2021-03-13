const container = document.querySelector(".list");
const movies = [
  {name: "Felicità",    url: "felicita/h/14283213_40099",    year: "2020", genre:""  },
  {name: "Yakari, la grande aventure",   url: "yakari-la-grande-aventure/h/14460003_40099",    year: "2020", genre:""  },
  {name: "La vie très privée de monsieur Sim",   url: "la-vie-tres-privee-de-monsieur-sim/h/6031610_40099",    year: "2015", genre:""  },
  {name: "Les acteurs",   url: "les-acteurs/h/310360_40099",    year: "2000", genre:""  },
  {name: "Terra Willy, planète inconnue",   url: "terra-willy-planete-inconnue/h/11364255_40099",    year: "2019", genre:""  },
  {name: "La grande aventure Lego",  url: "la-grande-aventure-lego/h/3753674_40099",    year: "2014", genre:""  },
  {name: "I Love You Phillip Morris",  url: "i-love-you-phillip-morris/h/276693_40099",    year: "2009", genre:""  },
  {name: "Barton Fink",  url: "barton-fink/h/1727329_40099",    year: "1991", genre:""  },
  {name: "Hellboy",  url: "hellboy/h/460023_40099",    year: "2004", genre:""  },
  {name: "Astérix et le coup du menhir",  url: "asterix-et-le-coup-du-menhir/h/267699_40099",    year: "1989", genre:""  },
  {name: "La folie des grandeurs",    url: "la-folie-des-grandeurs/h/437616_40099",    year: "1971", genre:""  },
  {name: "Kill Bill Volume 1",  url: "kill-bill-volume-1/h/447165_40099",    year: "2003", genre:""  },
  {name: "Le cinquième élément",  url: "le-cinquieme-element/h/2799080_40099",    year: "1997", genre:""  },
  {name: "Pulp Fiction",   url: "pulp-fiction/h/113934_40099",    year: "1994", genre:""  },
  {name: "DieHard: Une journée en enfer",    url: "une-journee-en-enfer/h/1784027_40099",    year: "1995", genre:""  },
  {name: "DieHard: 58 minutes pour vivre",   url: "58-minutes-pour-vivre/h/771194_40099",    year: "1990", genre:""  },
  {name: "DieHard: Piège de cristal",   url: "piege-de-cristal/h/771207_40099",    year: "1988", genre:""  },
  {name: "Tout simplement noir",  url: "tout-simplement-noir/h/14250527_40099",    year: "2020", genre:""  },
  {name: "Les Schtroumpfs 2", url: "les-schtroumpfs-2/h/4884171_40099",    year: "2013", genre:""  },
  {name: "Les rebelles de la forêt",  url: "les-rebelles-de-la-foret/h/442100_40099",    year: "2006", genre:""  },
  {name: "Monster House",  url: "monster-house/h/766310_40099",    year: "2006", genre:""  },
  {name: "Les pirates ! Bons à rien, mauvais en tout",  url: "les-pirates-bons-a-rien-mauvais-en-tout/h/490525_40099",    year: "2012", genre:""  },
  {name: "Tartarin de Tarascon",  url: "tartarin-de-tarascon/h/6972241_40099",    year: "1934", genre:""  },
  {name: "Ah ! Si j'étais riche",   url: "ah-si-j-etais-riche/h/114365_40099",    year: "2002", genre:""  },
  {name: "Le dîner de cons",   url: "le-diner-de-cons/h/1445242_40099",    year: "1997", genre:""  },
  {name: "Mais où est donc passée la 7e compagnie ?", url: "mais-ou-est-donc-passee-la-7-e-compagnie/h/625644_40099",    year: "1973", genre:""  },
  {name: "Quelques messieurs trop tranquilles",  url: "quelques-messieurs-trop-tranquilles/h/1064200_40099",    year: "1973", genre:""  },
  {name: "Jour de fête",   url: "jour-de-fete/h/2767115_40099",    year: "1949", genre:""  },
  {name: "Tout le monde il est beau, tout le monde il est gentil", url: "tout-le-monde-il-est-beau-tout-le-monde-il-est-gentil/h/180163_40099",    year: "1972", genre:""  },
  {name: "Quai des Orfèvres",   url: "quai-des-orfevres/h/117558_40099",    year: "1947", genre:""  },
  {name: "Hôtel du Nord", url: "hotel-du-nord/h/3281152_40099",    year: "1938", genre:""  },
  {name: "Le distrait", url: "le-distrait/h/421862_40099",    year: "1970", genre:""  },
  {name: "Marie Antoinette",  url: "marie-antoinette/h/437547_40099",    year: "2006", genre:""  },
  {name: "L'impasse",   url: "l-impasse/h/612062_40099",    year: "1993", genre:""  },
  {name: "Chappie",  url: "chappie/h/4814980_40099",    year: "2015", genre:""  },
  {name: "Le jouet", url: "le-jouet/h/647019_40099",    year: "1976", genre:""  },
  {name: "Passengers", url: "passengers/h/7908222_40099",    year: "2016", genre:""  },
  {name: "Hop",  url: "hop/h/113811_40099",    year: "2011", genre:""  },
  {name: "Le plus beau métier du monde",  url: "le-plus-beau-metier-du-monde/h/387689_40099",    year: "1996", genre:""  },
  {name: "Batman",   url: "batman/h/12590458_40099",    year: "1989", genre:""  },

  {name: "Pierre Lapin", url: "pierre-lapin/h/9742193_40099",    year: "2018", genre:""  },
  {name: "La traversée de Paris",  url: "la-traversee-de-paris/h/106904_40099",    year: "1956", genre:""  },
  {name: "Le coup du parapluie",   url: "le-coup-du-parapluie/h/177993_40099",    year: "1989", genre:""  },
  {name: "Les choristes",   url: "les-choristes/h/3080957_40099",    year: "2004", genre:""  },
  {name: "Les bronzés font du ski",  url: "les-bronzes-font-du-ski/h/4661500_40099",    year: "1979", genre:""  },
  {name: "Les Schtroumpfs et le village perdu",   url: "les-schtroumpfs-et-le-village-perdu/h/8420498_40099",    year: "2017", genre:""  },
  {name: "Paddington 2",   url: "paddington-2/h/9319792_40099",    year: "2017", genre:""  },
  {name: "12 Years a Slave2",   url: "12-years-a-slave/h/3615890_40099",    year: "2013", genre:""  },
  {name: "Bienvenue à Gattaca",  url: "bienvenue-a-gattaca/h/437345_40099",    year: "1997", genre:""  },
  {name: "Master and Commander : de l'autre côté du monde",  url: "master-and-commander-de-l-autre-cote-du-monde/h/1893709_40099",    year: "2003", genre:""  },
  {name: "Hulk",  url: "hulk/h/1101970_40099",    year: "2003", genre:""  },
  {name: "Chinatown",  url: "chinatown/h/200345_40099",    year: "1974", genre:""  },
  {name: "Moi, moche et méchant",  url: "moi-moche-et-mechant/h/733525_40099",    year: "2010", genre:""  },
  {name: "Jumanji",  url: "",    year: "1995", genre:""  },
  {name: "Retour vers le futur 3",  url: "",    year: "1990", genre:""  },
  {name: "Retour vers le futur 2",  url: "",    year: "1989", genre:""  },
  {name: "Retour vers le futur",  url: "",    year: "1985", genre:""  },
  {name: "Les minions",  url: "",    year: "2015", genre:""  },
  {name: "L'armée des ombres",  url: "",    year: "", genre:""  },
  {name: "Playtime",  url: "",    year: "", genre:""  },
  {name: "Les vacances de Mr Hulot",  url: "",    year: "", genre:""  },
  {name: "Mon oncle",  url: "",    year: "", genre:""  },
  {name: "Taxi",  url: "",    year: "", genre:""  },
  {name: "Les barbouzes",  url: "",    year: "", genre:""  },
  {name: "Les tontons flingueurs",  url: "",    year: "", genre:""  },
  {name: "Un chien dans un jeu de quilles",  url: "",    year: "", genre:""  },
  {name: "A gauche en sortant de l'ascenceur", url: "",    year: "", genre:""  },
  {name: "Premier contact", url: "",    year: "", genre:""  },
  {name: "Les animaux fantastiques", url: "",    year: "", genre:""  },
  {name: "Deadpool", url: "",    year: "", genre:""  },
  {name: "Astérix: Le domaine des dieux", url: "",    year: "", genre:""  },
  {name: "Les fils de l'homme", url: "",    year: "", genre:""  },
  {name: "Kong: Skull island", url: "",    year: "", genre:""  },
  {name: "Les aventures de Rabbit Jacob", url: "",    year: "", genre:""  },
  {name: "Océans", url: "",    year: "", genre:""  },
  {name: "Le peuple migrateur", url: "",    year: "", genre:""  },
  {name: "Chimpanzés : Les artisans du Bossou", url: "",    year: "", genre:""  },
  {name: "Nikita", url: "",    year: "", genre:""  },
  {name: "Le grand bleu", url: "",    year: "", genre:""  },
  {name: "Léon", url: "",    year: "", genre:""  },
  {name: "Hook ou la revanche du capitaine Crochet", url: "",    year: "1991", genre:""  },
  {name: "Etre et avoir", url: "",    year: "", genre:""  },
  {name: "Kirikou et la sorcière", url: "",    year: "", genre:""  },
  {name: "Joker", url: "",    year: "", genre:""  },
  {name: "La mule", url: "",    year: "", genre:""  },
  {name: "Le grand bain", url: "",    year: "", genre:""  },
  {name: "Ready Player One", url: "",    year: "", genre:""  },
  {name: "Une affaire de famille", url: "",    year: "", genre:""  },
  {name: "Pentagon Papers", url: "",    year: "", genre:""  },
  {name: "La ch'tite famille", url: "",    year: "", genre:""  },
  {name: "Blade Runner 2049", url: "",    year: "", genre:""  },
  {name: "007 Spectre", url: "",    year: "", genre:""  },
  {name: "Dallas Buyers Club", url: "",    year: "", genre:""  },
  {name: "Paddington", url: "",    year: "", genre:""  },
  {name: "Les gardiens de la galaxie", url: "",    year: "", genre:""  },
  {name: "Gone Girl", url: "",    year: "", genre:""  },
  {name: "Django Unchained", url: "",    year: "", genre:""  },
  {name: "Prisoners", url: "",    year: "", genre:""  },
  {name: "Le Hobbit : la désolation de Smaug", url: "",    year: "", genre:""  },
  {name: "Le Hobbit : un voyage inattendu", url: "",    year: "", genre:""  },
  {name: "Skyfall", url: "",    year: "", genre:""  },
  {name: "Moonrise Kingdom", url: "",    year: "", genre:""  },
  {name: "True Grit", url: "",    year: "", genre:""  },
  {name: "Intouchables", url: "",    year: "", genre:""  },
  {name: "Les petits mouchoirs", url: "",    year: "", genre:""  },
  {name: "Shutter island", url: "",    year: "", genre:""  },
  {name: "Papy fait de la résistance", url: "",    year: "", genre:""  },
  {name: "Les saisons", url: "",    year: "", genre:""  },
  {name: "Terre des Ours", url: "",    year: "", genre:""  },
  {name: "Microcosmos", url: "",    year: "", genre:""  },
  {name: "Brendan et le secret de Kells", url: "",    year: "", genre:""  },
  {name: "Le chant de la mer", url: "",    year: "", genre:""  },
  {name: "Cars", url: "",    year: "", genre:""  },
  {name: "Mickey, la magie de Noël", url: "",    year: "", genre:""  },
  {name: "Les indestructibles", url: "",    year: "", genre:""  },
  {name: "Baby Boss", url: "",    year: "", genre:""  },
  {name: "Bee Movie", url: "",    year: "", genre:""  },
  {name: "Madagascar", url: "",    year: "", genre:""  },
  {name: "Poltergeist", url: "",    year: "", genre:""  },
  {name: "Pride", url: "",    year: "", genre:""  },
  {name: "Hours", url: "",    year: "", genre:""  },
  {name: "Monument Men", url: "",    year: "", genre:""  },
  {name: "The Grand Budapest Hotel", url: "",  year: "", genre:""  },
  {name: "Philomena", url: "",    year: "", genre:""  },
  {name: "Les rois mages", url: "",    year: "", genre:""  },
  {name: "Zulu", url: "",    year: "", genre:""  },
  {name: "Quai d'Orsay", url: "",    year: "", genre:""  },
  {name: "La vallée des loups", url: "",    year: "", genre:""  },
  {name: "La vie rêvée de Walter Mitty", url: "",    year: "", genre:""  },
  {name: "Alceste à bicyclette", url: "",    year: "", genre:""  },
  {name: "L'odyssée de Pi", url: "",    year: "", genre:""  },
  {name: "Voisins du troisième type", url: "",    year: "", genre:""  },
  {name: "The Descendants", url: "",    year: "", genre:""  },
  {name: "La piel que habito", url: "",    year: "", genre:""  },
  {name: "La fille du puisatier", url: "",    year: "", genre:""  },
  {name: "L'age de glace 4", url: "",    year: "", genre:""  },
  {name: "Titeuf, le film", url: "",    year: "", genre:""  },
  {name: "127 heures", url: "",    year: "", genre:""  },
  {name: "Wall Street : l'argent ne dort jamais", url: "",    year: "", genre:""  },
  {name: "Slumdog Millionaire", url: "",    year: "", genre:""  },
  {name: "Le jour d'après", url: "",    year: "", genre:""  },
  {name: "Braveheart", url: "",    year: "", genre:""  },
  {name: "Les trois frères", url: "",    year: "", genre:""  },
  {name: "Sunshine", url: "",    year: "", genre:""  },
  {name: "Phone Game", url: "",    year: "", genre:""  },
  {name: "Madame Doubtfire", url: "",    year: "", genre:""  },
  {name: "Conan le barbare", url: "",    year: "", genre:""  },
  {name: "Chicken run", url: "",    year: "", genre:""  },
  {name: "Brooklyn", url: "",    year: "", genre:""  },
  {name: "Snoopy et les Peanuts", url: "",    year: "", genre:""  },
  {name: "Les suffragettes", url: "",    year: "", genre:""  },
  {name: "Alexandre", url: "",    year: "", genre:""  },
  {name: "La reine Margot", url: "",    year: "", genre:""  },
  {name: "Les gamins", url: "",    year: "", genre:""  },
  {name: "Le cave se rebiffe", url: "",    year: "", genre:""  },
  {name: "Vicky Cristina Barcelona", url: "",    year: "", genre:""  },
  {name: "Les goonies", url: "",    year: "", genre:""  },
  {name: "Marie-Francine", url: "",    year: "", genre:""  },
  {name: "Le grand méchant Renard et autres contes", url: "",    year: "", genre:""  },
  {name: "Problemos", url: "",    year: "", genre:""  },
  {name: "Man of Steel", url: "",    year: "", genre:""  },
  {name: "American Sniper", url: "",    year: "", genre:""  },
  {name: "Interstellar", url: "",    year: "", genre:""  },
  {name: "Le géant de fer", url: "",    year: "", genre:""  },
  {name: "100 000 dollars au soleil", url: "",    year: "", genre:""  },
  {name: "L'arme fatale 3", url: "",    year: "", genre:""  },
  {name: "L'arme fatale 4", url: "",    year: "", genre:""  },
  {name: "L'arme fatale", url: "",    year: "", genre:""  },
  {name: "L'arme fatale 2", url: "",    year: "", genre:""  },
  {name: "Gravity", url: "",    year: "", genre:""  },
  {name: "Matrix", url: "",    year: "", genre:""  },
  {name: "300", url: "",    year: "", genre:""  },
  {name: "Ocean's Eleven", url: "",    year: "", genre:""  },
  {name: "Godzilla", url: "",    year: "", genre:""  },
  {name: "Inherent Vice", url: "",    year: "", genre:""  },
  {name: "Les douze travaux d'Astérix", url: "",    year: "", genre:""  },
  {name: "Astérix le Gaulois", url: "",    year: "", genre:""  },
  {name: "Astérix chez les Bretons", url: "",    year: "", genre:""  },
  {name: "La cité de la peur", url: "",    year: "", genre:""  },
  {name: "Astérix et Cléopâtre", url: "",    year: "", genre:""  },
  {name: "Sur la route de Madison", url: "",    year: "", genre:""  },
  {name: "Autant en emporte le vent", url: "",    year: "", genre:""  },
  {name: "Diversion", url: "",    year: "", genre:""  },
  {name: "San Andreas", url: "",    year: "", genre:""  },
  {name: "Le juge", url: "",    year: "", genre:""  },
  {name: "Harry Potter à l'école des sorciers", url: "",    year: "", genre:""  },
  {name: "Voyage au centre de la terre 2", url: "",    year: "", genre:""  },
  {name: "Pacific Rim", url: "",    year: "", genre:""  },
  {name: "Gremlins 2", url: "",    year: "", genre:""  },
  {name: "Gremlins", url: "",    year: "", genre:""  },
  {name: "Le nouveau stagiaire", url: "",    year: "", genre:""  },
  {name: "Strictly Criminal", url: "",    year: "", genre:""  },



];


const rowWidth = 50 // how many images per row?
const showMovies = () => {
  const options = {
    valueNames: [ 'name', 'year' ],
    item: ({ name, url, year, index }) => {
      const row = index === 0 ? 0 : Math.floor(index / rowWidth)
      const xPos = -185 * (index - row * rowWidth)
      const yPos = -278 * row
      return `<li>
        <a href="https://vod.canalplus.com/cinema/${url}" >
          <div class="pi"  style="background-position: ${xPos}px ${yPos}px;"></div>
          <h3 class="name">${name}</h3>
          <h4 class="year">${year}</h4>
          </a>
      </li>`
    }
  };
const userList = new List('collection', options);
const movieCallback = (movie, index) => userList.add({ ...movie, index })
movies.forEach(movieCallback);
};

// const movieCallback = (movie, index) => userList.add({ name: movie.name, year: movie.year, genre: genre, index: index })
/*
const movieCallback = (movie, index) => {
  movie.index = index
  return userList.add(movie)
}


*/





  document.addEventListener("DOMContentLoaded", showMovies);

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err));
    });
  }
