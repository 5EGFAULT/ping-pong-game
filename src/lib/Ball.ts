
export default class Ball{
	constructor(width: number, height: number){
		this.width = width;
		this.height = height;
		this.x = width / 2;
		this.y = height / 2;
		this.speed = 0;
		this.dirAngle = 0;
	}
	private width: number;
	private height: number;
	private x: number;
	private y: number;
	private speed: number;
	private dirAngle: number;
}
