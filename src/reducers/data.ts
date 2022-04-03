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
  { url: '/sample1.jpg',
    name: "sample 1",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    authorLink: "https://www.instagram.com/pomyad/",
    order: 1
  },
  { url: '/sample2.jpg',
    name: "sample 2", windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    order: 2
  },
  { url: '/sample3.jpg',
    name: "sample 3",
    windowState: "opened",
    originalX: randPositionX(),
    originalY: randPositionY(),
    order: 3
  }
]