const canvas = document.getElementById('game_canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const framerate = 18;

/**
 * KEYS BOOLEAN VARIABLES
 */
let Wisdown = false;
let Sisdown = false;
let ArrowUpisdown = false;
let ArrowDownisdown = false;
/**
 * Game size Constants 
 */
let bar_len = ctx.canvas.height / 5;
let bar_width = ctx.canvas.width / 100;
let ball_raduis = ctx.canvas.height / 50;
let mvmentspeed = 0;
let ballSpeed = 0;
/**
 * Game Variables
 */
let playerone = { x: 2, y: 2 };
let playertwo = { x: ctx.canvas.width - bar_width - bar_width / 2, y: 2 };
let ball = {
	x: ctx.canvas.width / 2, y: ctx.canvas.height / 2,
	speed: ballSpeed,
	dirAngle: 30 * (Math.PI / 180)
};
let score = { playerone: 0, playertwo: 0 };

const resizeCanvasGame = () => {
	ctx.canvas.width = ctx.canvas.clientWidth;
	ctx.canvas.height = ctx.canvas.clientHeight;

	bar_len = ctx.canvas.height / 5;
	bar_width = ctx.canvas.width / 100;
	ball_raduis = ctx.canvas.height / 50;
	mvmentspeed = (ctx.canvas.height / 700) * framerate;
	ballSpeed = (ctx.canvas.height / 800) * framerate;
	playertwo = { x: ctx.canvas.width - bar_width - bar_width / 2, y: 2 };
	playerone = { x: 2, y: 2 };
	ball = {
		x: ctx.canvas.width / 2, y: ctx.canvas.height / 2,
		speed: ballSpeed,
		dirAngle: 30 * (Math.PI / 180)
	};
	console.log("speed  ", ball.speed);
}

resizeCanvasGame();
window.addEventListener('resize', resizeCanvasGame);

const reRender = () => {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	ctx.beginPath();
	ctx.fillStyle = 'white';
	ctx.fillRect(playerone.x, playerone.y, bar_width, bar_len);
	ctx.fillRect(playertwo.x, playertwo.y, bar_width, bar_len);
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(ball.x, ball.y, ball_raduis, 0, Math.PI * 2);
	ctx.fill();
	ctx.closePath();
	ctx.font = ctx.canvas.height / 12 + "px Arial";
	ctx.fillText(String(score.playerone), ctx.canvas.width / 4, ctx.canvas.height / 13);
	ctx.fillText(String(score.playertwo), 3 * ctx.canvas.width / 4, ctx.canvas.height / 13);
	moveplayers();
	drawdashedline();
	moveball();
}

const drawdashedline = () => {
	let y = 0;
	let x = ctx.canvas.width / 2 - 1;

	while (y < ctx.canvas.height) {
		ctx.beginPath();
		ctx.fillStyle = 'white';
		ctx.fillRect(x, y, 2, 10);
		ctx.closePath();
		y += 20;
	}
}

document.body.addEventListener('keyup', (e) => {
	if (e.key === 'w')
		Wisdown = false;
	else if (e.key === 's')
		Sisdown = false;
	if (e.key === 'ArrowUp')
		ArrowUpisdown = false;
	else if (e.key === 'ArrowDown')
		ArrowDownisdown = false;
}
);

document.body.addEventListener('keydown', (e) => {
	if (e.key === 'w') {
		Wisdown = true;
		Sisdown = false;
	}
	else if (e.key === 's') {
		Sisdown = true;
		Wisdown = false;
	}
	if (e.key === 'ArrowUp') {
		ArrowUpisdown = true;
		ArrowDownisdown = false;
	}
	else if (e.key === 'ArrowDown') {
		ArrowDownisdown = true;
		ArrowUpisdown = false;
	}
}
);
const moveplayers = () => {
	if (Wisdown && playerone.y - mvmentspeed > 0) {
		playerone.y -= mvmentspeed;
	}
	if (Sisdown && playerone.y + bar_len + mvmentspeed < ctx.canvas.height) {
		playerone.y += mvmentspeed;
	}
	if (ArrowUpisdown && playertwo.y - mvmentspeed > 0) {
		playertwo.y -= mvmentspeed;
	}
	if (ArrowDownisdown && playertwo.y + bar_len + mvmentspeed < ctx.canvas.height) {
		playertwo.y += mvmentspeed;
	}
}

const collision = () => {
	if ((ball.x + ball_raduis > playertwo.x && ball.y + ball_raduis > playertwo.y && ball.y - ball_raduis < playertwo.y + bar_len) ||
		(ball.x - ball_raduis < playerone.x + bar_width && ball.y - ball_raduis > playerone.y && ball.y - ball_raduis < playerone.y + bar_len)
	) {
		ball.dirAngle = Math.PI - ball.dirAngle;
		ball.speed += ballSpeed*.1;
	}
	if (ball.y + ball_raduis > ctx.canvas.height || ball.y - ball_raduis < 0) {
		ball.dirAngle = - ball.dirAngle;
	}
}

const goal = () => {
	if (ball.x > playertwo.x || ball.x < playerone.x) {
		if (ball.x > playertwo.x) {
			score.playerone++;
		}
		else {
			score.playertwo++;
		}
		ball.x = ctx.canvas.width / 2;
		ball.y = ctx.canvas.height / 2;
		ball.speed = ballSpeed;
	}
}

const moveball = () => {
	ball.x += ball.speed * Math.cos(ball.dirAngle);
	ball.y += ball.speed * Math.sin(ball.dirAngle);
	collision();
	goal();
}

setInterval(reRender, framerate);