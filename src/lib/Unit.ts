

export class UnitX  {
	private n: number;
	protected static UNIT: number = 0;
	constructor(n: number) {
		this.n = n;
	}
	public getN(): number {
		return this.n * UnitX.UNIT;
	}
	public static setCanvasParams(param: number): void {
		this.UNIT = param / 1000;
	}
	public static pexelToUnit(pexels:number):UnitX  {
		return new UnitX(pexels / UnitX.UNIT);
	}
}

export  class UnitY  {
	private n: number;
	private static UNIT: number = 0;
	constructor(n: number) {
		this.n = n;
	}
	public getN(): number {
		return this.n * UnitY.UNIT;
	}
	public static setCanvasParams(param: number): void {
		this.UNIT = param / 1000;
	}
	public static pexelToUnit(pexels:number):UnitY  {
		return new UnitY(pexels / UnitY.UNIT);
	}
}