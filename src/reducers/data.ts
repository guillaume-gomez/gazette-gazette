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



export const posts : ContentInterface[] = [
  { url: '/00-Ducks/Camille-Canard.jpg',
    name: "1",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "kalinkajam",
    order: 1
  },
  { url: '/00-Ducks/Constantin_vilain petit canard.jpg',
    name: "2",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "constantin_zamfiresco",
    order: 2
  },
  { url: '/00-Ducks/Guillaume-DUCK-IN-A-DUCK-IN-A-DUCK.jpg',
    name: "3",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "guillaumebracciali",
    order: 3
  },
  { url: '/00-Ducks/Marie-Canard.jpg',
    name: "4",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "toulymarie",
    order: 4
  },
  { url: '/00-Ducks/Romwald-Business-duck-colo.jpg',
    name: "5",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "pomyad",
    order: 5
  },
  { url: '/00-Ducks/Romwald-Canard_3_Pattes.jpg',
    name: "6",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "pomyad",
    order: 6
  },
  { url: '/00-Ducks/Romwald-canard-boys-club-badge.jpg',
    name: "7",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author:"pomyad",
    order: 7
  },
  { url: '/00-Ducks/Romwald-Canard-boys-club-print.jpg',
    name: "8",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "pomyad",
    order: 8
  },
  { url: '/00-Ducks/Romwald-Canard-joues.jpg',
    name: "9",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "pomyad",
    order: 9
  },
  { url: '/00-Ducks/Romwald- Duck-the-police-2.jpg',
    name: "10",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "pomyad",
    order: 10
  },
  { url: '/00-Ducks/Sebastien-bd_duck_mazett000_seb.jpg',
    name: "11",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "kob.bar2000",
    order: 11
  },
  { url: '/00-Ducks/seb_poopup2.jpg',
    name: "12",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    author: "kob.bar2000",
    order: 12
  }


]