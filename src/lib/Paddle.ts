import {UnitX, UnitY} from "./Unit";

export default class Paddle {
	private static speed: UnitY = new UnitY(2);
	public static width: UnitX = new UnitX(4);
	public static height: UnitY = new UnitY(200);

	constructor(x:UnitX, y:UnitY) {

		this.x = x;
		this.y = y;
		this.velocityY = new UnitY(0);
	}

	public x: UnitX;
	public y: UnitY;
	public velocityY: UnitY;
}