
export default class Unit {
	private n: number;
	private static UNIT: number = 0;
	constructor(n: number) {
		this.n = n;
	}
	public getN(): number {
		return this.n * Unit.UNIT;
	}
	public static setCanvasParams(width: number, height: number): void {
		this.UNIT = (width * height) / 1000;
	}
	public static pexelToUnit(pexels:number):Unit  {
		return new Unit(pexels / Unit.UNIT);
	}
}
