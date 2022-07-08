import PongGame from "./PongGame";

const canvas = document.getElementById('game_canvas') as HTMLCanvasElement;

const game = new PongGame(canvas);

//setInterval(reRender, framerate);