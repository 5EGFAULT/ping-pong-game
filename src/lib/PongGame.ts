//import Ball from "./Ball";
import Paddle from "./Paddle";
import {UnitY, UnitX} from "./Unit";

export default class PongGame {
	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		let tmp  = canvas.getContext("2d");
		if (tmp) {
			this.ctx = tmp;
		}
		else
			throw new Error("Ctx is null");	
		
		this.width = this.ctx.canvas.clientWidth;
		this.height = this.ctx.canvas.clientHeight;
		this.resizeGame();
		//this.ball = new Ball(this.width, this.height);
		UnitX.setCanvasParams(this.width);
		UnitY.setCanvasParams(this.height);
		console.log(Paddle.height.getN());
		
		this.p1 = new Paddle(new UnitX(1), UnitY.pexelToUnit(this.height / 2 - Paddle.height.getN() / 2));
		this.p2 = new Paddle(UnitX.pexelToUnit(this.width - Paddle.width.getN() - new UnitX(1).getN()), UnitY.pexelToUnit(this.height / 2 - Paddle.height.getN() / 2));
		
		this.score = { player1: 0, player2: 0 };
		this.gameLoop();

	}
	/**
	  * KEYS BOOLEAN VARIABLES
	  */
	public Wisdown = false;
	public Sisdown = false;
	public ArrowUpisdown = false;
	public ArrowDownisdown = false;
	public canvas: HTMLCanvasElement;
	public ctx: CanvasRenderingContext2D;
	public width: number;
	public height: number;
	//public ball: Ball;
	public p1: Paddle;
	public p2: Paddle;
	public score: { player1: number, player2: number };
	public framerate = 18;
	public gameMode: null | "snow" | "fire" | "crazy" = null;
	public gameLoop = () => {
		this.renderGame();
		//requestAnimationFrame(this.gameLoop);
	}

	private resizeGame() {
		
		console.log("resize", this.ctx);
		
		this.width = this.ctx.canvas.clientWidth;
		this.height = this.ctx.canvas.clientHeight;
		UnitX.setCanvasParams(this.width);
		UnitY.setCanvasParams(this.height);
		this.ctx.canvas.width = this.width;
		this.ctx.canvas.height = this.height;
		window.addEventListener('resize', ()=>{
			this.width = this.ctx.canvas.clientWidth;
			this.height = this.ctx.canvas.clientHeight;
			UnitX.setCanvasParams(this.width);
			UnitY.setCanvasParams(this.height);
			this.ctx.canvas.width = this.width;
			this.ctx.canvas.height = this.height;
			this.renderGame();
		});

	}

	private renderGame() {
		this.ctx.clearRect(0, 0, this.width, this.height);
		this.renderPaddle(this.p1);
		//this.renderPaddle(this.p2);
	}

	private renderPaddle(paddle: Paddle) {
		this.ctx.fillStyle = "white";
		//console.log(paddle, paddle.x.getN(), paddle.y.getN(), Paddle.width.getN(), Paddle.height.getN());
		this.ctx.fillRect(paddle.x.getN(), paddle.y.getN(), Paddle.width.getN(), Paddle.height.getN());
	}
}


