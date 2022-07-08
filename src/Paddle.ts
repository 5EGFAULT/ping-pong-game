import Unit from "./Unit";

export default class Paddle {
	private static speed: Unit = new Unit(2);
	public static width: Unit = new Unit(4);
	public static height: Unit = new Unit(10);

	constructor(x:Unit, y:Unit) {

		this.x = x;
		this.y = y;
		this.velocityY = new Unit(0);
	}

	public x: Unit;
	public y: Unit;
	public velocityY: Unit;
}