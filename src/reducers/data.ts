import { ContentInterface } from "../interfaces";

function randPosition(max: number) : string {
  const number = Math.floor(max * Math.random());
  return `${number}%`;
}

function randPositionX() : string {
  return randPosition(75);
}


function randPositionY() : string {
  return randPosition(40);
}



export const posts : ContentInterface[] = [
  { url: '/01/Camille-Canard.jpg',
    name: "1",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    authorLink: "https://www.instagram.com/pomyad/",
    order: 1
  },
  { url: '/01/Constantin_vilain petit canard.jpg',
    name: "2",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    order: 2
  },
  { url: '/01/Guillaume-DUCK-IN-A-DUCK-IN-A-DUCK.jpg',
    name: "3",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    order: 3
  },
  { url: '/01/Marie-Canard.jpg',
    name: "4",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    order: 4
  },
  { url: '/01/Romwald-Business-duck-colo.jpg',
    name: "5",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    order: 5
  },
  { url: '/01/Romwald-Canard_3_Pattes.jpg',
    name: "6",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    order: 6
  },
  { url: '/01/Romwald-canard-boys-club-badge.jpg',
    name: "7",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    order: 7
  },
  { url: '/01/Romwald-Canard-boys-club-print.jpg',
    name: "8",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    order: 8
  },
  { url: '/01/Romwald-Canard-joues.jpg',
    name: "9",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    order: 9
  },
  { url: '/01/Romwald- Duck-the-police-2.jpg',
    name: "10",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    order: 10
  },
  { url: '/01/Sebastien-bd_duck_mazett000_seb.jpg',
    name: "11",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    order: 11
  },
  { url: '/01/seb_poopup2.jpg',
    name: "12",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    order: 12
  }


]