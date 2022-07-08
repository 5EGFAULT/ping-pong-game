import Ball from "./Ball";
import Paddle from "./Paddle";
import Unit from "./Unit";

export default class PongGame {
	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.resizeGame();
		window.addEventListener('resize', this.resizeGame);
		//this.ball = new Ball(this.width, this.height);
		//this.paddle = new Paddle(this.width, this.height);
		this.p1 = new Paddle(Unit.pexelToUnit(new Unit(1).getN()), Unit.pexelToUnit(this.height / 2 - Paddle.height.getN() / 2));
		this.p2 = new Paddle(Unit.pexelToUnit(this.width - Paddle.width.getN() - new Unit(1).getN()), Unit.pexelToUnit(this.height / 2 - Paddle.height.getN() / 2));
		this.score = { player1: 0, player2: 0 };
		this.gameLoop();

	}
	/**
	  * KEYS BOOLEAN VARIABLES
	  */
	private Wisdown = false;
	private Sisdown = false;
	private ArrowUpisdown = false;
	private ArrowDownisdown = false;
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private width: number;
	private height: number;
	private ball: Ball;
	private p1: Paddle;
	private p2: Paddle;
	private score: { player1: number, player2: number };
	private framerate = 18;
	private gameMode: null | "snow" | "fire" | "crazy" = null;
	private gameLoop = () => {
		this.renderGame();
		//requestAnimationFrame(this.gameLoop);
	}

	private resizeGame() {
		this.width = this.ctx.canvas.clientWidth;
		this.height = this.ctx.canvas.clientHeight;
		this.ctx.canvas.width = this.width;
		this.ctx.canvas.height = this.height;
	}

	private renderGame() {
		this.ctx.clearRect(0, 0, this.width, this.height);
		this.renderPaddle(this.p1);
		this.renderPaddle(this.p2);
	}

	private renderPaddle(paddle: Paddle) {
		this.ctx.fillStyle = "white";
		console.log(paddle);

		this.ctx.fillRect(paddle.x.getN(), paddle.y.getN(), Paddle.width.getN(), Paddle.height.getN());
	}
}


