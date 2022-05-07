import { ContentInterface } from "../interfaces";

function randPosition(max: number) : string {
  const number = Math.floor(max * Math.random());
  return `${number}%`;
}

function randPositionX() : string {
  return randPosition(300);
}


function randPositionY() : string {
  return randPosition(55);
}

export function generateID({name, theme}: ContentInterface) {
  return `${theme}-${name}`
}


export const posts : ContentInterface[] = [
  // number 01
  { url: '/00-Ducks/Camille-Canard.jpg',
    name: "1",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "kalinkajam",
    order: 1,
    theme: "00"
  },
  { url: '/00-Ducks/Constantin_vilain petit canard.jpg',
    name: "2",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "constantin_zamfiresco",
    order: 2,
    theme: "00"
  },
  { url: '/00-Ducks/Guillaume-DUCK-IN-A-DUCK-IN-A-DUCK.jpg',
    name: "3",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "guillaumebracciali",
    order: 3,
    theme: "00"
  },
  { url: '/00-Ducks/Marie-Canard.jpg',
    name: "4",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "toulymarie",
    order: 4,
    theme: "00"
  },
  { url: '/00-Ducks/Romwald-Business-duck-colo.jpg',
    name: "5",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "pomyad",
    order: 5,
    theme: "00"
  },
  { url: '/00-Ducks/Romwald-Canard_3_Pattes.jpg',
    name: "6",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "pomyad",
    order: 6,
    theme: "00"
  },
  { url: '/00-Ducks/Romwald-canard-boys-club-badge.jpg',
    name: "7",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author:"pomyad",
    order: 7,
    theme: "00"
  },
  { url: '/00-Ducks/Romwald-Canard-boys-club-print.jpg',
    name: "8",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "pomyad",
    order: 8,
    theme: "00"
  },
  { url: '/00-Ducks/Romwald-Canard-joues.jpg',
    name: "9",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "pomyad",
    order: 9,
    theme: "00"
  },
  { url: '/00-Ducks/Romwald- Duck-the-police-2.jpg',
    name: "10",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "pomyad",
    order: 10,
    theme: "00"
  },
  { url: '/00-Ducks/Sebastien-bd_duck_mazett000_seb.jpg',
    name: "11",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "kob.bar2000",
    order: 11,
    theme: "00"
  },
  { url: '/00-Ducks/seb_poopup2.jpg',
    name: "12",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "kob.bar2000",
    order: 12,
    theme: "00"
  },


  //number 2
  /*  { url: '/01-Occults/CaioMartins_Seer.png',
    name: "1",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "",
    order: 13,
    theme: "01"
  },
  { url: '/01-Occults/Coco_laVache.jpg',
    name: "2",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "constantin_zamfiresco",
    order: 14,
    theme: "01"
  },
    { url: '/01-Occults/Guillaume_P’tit rituel de minuit.jpg',
    name: "3",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "guillaumebracciali",
    order: 15,
    theme: "01"
  },
  { url: '/01-Occults/Occulte.png',
    name: "4",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "",
    order: 16,
    theme: "01"
  },
  { url: '/00-Ducks/Ocultb.jpg',
    name: "5",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "",
    order: 17,
    theme: "01"
  },
  { url: '/01-Occults/Romwald-Crystal-Gazette.jpg',
    name: "6",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "",
    order: 18,
    theme: "01"
  },
  { url: '/01-Occults/Romwald-Goat-gazette.jpg',
    name: "7",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "pomyad",
    order: 19,
    theme: "01"
  },
  { url: '/01-Occults/Seb_BD.JPG',
    name: "8",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "kob.bar2000",
    order: 20,
    theme: "01"
  },
  { url: '/01-Occults/Seb_Magicien.JPG',
    name: "9",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "kob.bar2000",
    order: 21,
    theme: "01"
  }*/
]