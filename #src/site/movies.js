const container = document.querySelector(".list");
const movies = [
  {name: "Felicità",    id: "felicita",    url: "felicita/h/14283213_40099",    year: "2020", genre:""  },
  {name: "Yakari, la grande aventure",    id: "yakari",    url: "yakari-la-grande-aventure/h/14460003_40099",    year: "2020", genre:""  },
  {name: "La vie très privée de monsieur Sim",    id: "msim",    url: "la-vie-tres-privee-de-monsieur-sim/h/6031610_40099",    year: "2015", genre:""  },
  {name: "Les acteurs",    id: "lesacteurs",    url: "les-acteurs/h/310360_40099",    year: "2000", genre:""  },
  {name: "Terra Willy, planète inconnue",    id: "terrawilly",    url: "terra-willy-planete-inconnue/h/11364255_40099",    year: "2019", genre:""  },
  {name: "La grande aventure Lego",    id: "lego",    url: "la-grande-aventure-lego/h/3753674_40099",    year: "2014", genre:""  },
  {name: "I Love You Phillip Morris",    id: "pmorris",    url: "i-love-you-phillip-morris/h/276693_40099",    year: "2009", genre:""  },
  {name: "Barton Fink",    id: "bfink",    url: "barton-fink/h/1727329_40099",    year: "1991", genre:""  },
  {name: "I Love You Phillip Morris",    id: "pmorris",    url: "i-love-you-phillip-morris/h/276693_40099",    year: "2009", genre:""  },
  {name: "Hellboy",    id: "hellboy",    url: "hellboy/h/460023_40099",    year: "2004", genre:""  },
  {name: "Astérix et le coup du menhir",    id: "asterix-menhir",    url: "asterix-et-le-coup-du-menhir/h/267699_40099",    year: "1989", genre:""  },
  {name: "La folie des grandeurs",    id: "folie-grandeurs",    url: "la-folie-des-grandeurs/h/437616_40099",    year: "1971", genre:""  },
  {name: "Kill Bill Volume 1",    id: "killbill",    url: "kill-bill-volume-1/h/447165_40099",    year: "2003", genre:""  },
  {name: "Le cinquième élément",    id: "cinqelement",    url: "le-cinquieme-element/h/2799080_40099",    year: "1997", genre:""  },
  {name: "Pulp Fiction",    id: "pulpfiction",    url: "pulp-fiction/h/113934_40099",    year: "1994", genre:""  },
  {name: "DieHard: Une journée en enfer",    id: "diehard3",    url: "une-journee-en-enfer/h/1784027_40099",    year: "1995", genre:""  },
  {name: "DieHard: 58 minutes pour vivre",    id: "diehard2",    url: "58-minutes-pour-vivre/h/771194_40099",    year: "1990", genre:""  },
  {name: "DieHard: Piège de cristal",    id: "diehard",    url: "piege-de-cristal/h/771207_40099",    year: "1988", genre:""  },
  {name: "Tout simplement noir",    id: "toutnoir",    url: "tout-simplement-noir/h/14250527_40099",    year: "2020", genre:""  },
  {name: "Les Schtroumpfs 2",    id: "smurf2",    url: "les-schtroumpfs-2/h/4884171_40099",    year: "2013", genre:""  },
  {name: "Les rebelles de la forêt",    id: "rebellesforet",    url: "les-rebelles-de-la-foret/h/442100_40099",    year: "2006", genre:""  },
  {name: "Monster House",    id: "monsterhouse",    url: "monster-house/h/766310_40099",    year: "2006", genre:""  },
  {name: "Les pirates ! Bons à rien, mauvais en tout",    id: "piratesanim",    url: "les-pirates-bons-a-rien-mauvais-en-tout/h/490525_40099",    year: "2012", genre:""  },
  {name: "Tartarin de Tarascon",    id: "tartarin",    url: "tartarin-de-tarascon/h/6972241_40099",    year: "1934", genre:""  },
  {name: "Ah ! Si j'étais riche",    id: "ahriche",    url: "ah-si-j-etais-riche/h/114365_40099",    year: "2002", genre:""  },
  {name: "Le dîner de cons",    id: "dinercons",    url: "le-diner-de-cons/h/1445242_40099",    year: "1997", genre:""  },
  {name: "Mais où est donc passée la 7e compagnie ?",    id: "sepcompagnie",    url: "mais-ou-est-donc-passee-la-7-e-compagnie/h/625644_40099",    year: "1973", genre:""  },
  {name: "Quelques messieurs trop tranquilles",    id: "qlqmessieurs",    url: "quelques-messieurs-trop-tranquilles/h/1064200_40099",    year: "1973", genre:""  },
  {name: "Jour de fête",    id: "jourfete",    url: "jour-de-fete/h/2767115_40099",    year: "1949", genre:""  },
  {name: "Tout le monde il est beau, tout le monde il est gentil",    id: "beaugentil",    url: "tout-le-monde-il-est-beau-tout-le-monde-il-est-gentil/h/180163_40099",    year: "1972", genre:""  },
  {name: "Quai des Orfèvres",    id: "quaior",    url: "quai-des-orfevres/h/117558_40099",    year: "1947", genre:""  },
  {name: "Hôtel du Nord",    id: "hotelnord",    url: "hotel-du-nord/h/3281152_40099",    year: "1938", genre:""  },
  {name: "Le distrait",    id: "distrait",    url: "le-distrait/h/421862_40099",    year: "1970", genre:""  },
  {name: "Marie Antoinette",    id: "marieantoinette",    url: "marie-antoinette/h/437547_40099",    year: "2006", genre:""  },
  {name: "L'impasse",    id: "limpasse",    url: "l-impasse/h/612062_40099",    year: "1993", genre:""  },
  {name: "Chappie",    id: "chappie",    url: "chappie/h/4814980_40099",    year: "2015", genre:""  },
  {name: "Le jouet",    id: "lejouet",    url: "le-jouet/h/647019_40099",    year: "1976", genre:""  },
  {name: "Passengers",    id: "passengers",    url: "passengers/h/7908222_40099",    year: "2016", genre:""  },
  {name: "Hop",    id: "hop",    url: "hop/h/113811_40099",    year: "2011", genre:""  },
  {name: "Le plus beau métier du monde",    id: "metiermonde",    url: "le-plus-beau-metier-du-monde/h/387689_40099",    year: "1996", genre:""  },
  {name: "Batman",    id: "batman",    url: "batman/h/12590458_40099",    year: "1989", genre:""  },


];

  const showMovies = () => {
    let output = "";
    movies.forEach(
      ({ name, id, url, year }) =>
        (output += `
                <li>
                    <a href="https://vod.canalplus.com/cinema/${url}" >
                    <div class="pi ${id}"></div>
                    <h3 class="name">${name}</h3>
                    <h4 class="year">${year}</h4>
                    </a>
                </li>
         
                `)
    );
    container.innerHTML = output;
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
