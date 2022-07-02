const bar_len = 25;
const bar_width = 4;
const ball_raduis = 4;
const mvmentspeed = 2;
let Wisdown = false;
let Sisdown = false;
let ArrowUpisdown = false;
let ArrowDownisdown = false;

const canvas = document.getElementById('game_canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'white';

let playerone = { x: 2, y: 2 };
let playertwo = { x: ctx.canvas.width - bar_width - 2, y: 2 };
let ball = { x: ctx.canvas.width / 2, y: ctx.canvas.height / 2, speed: 1.3, dirAngle: 30 * (Math.PI / 180) };
let score = { playerone: 0, playertwo: 0 };
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
	ctx.font = "15px Arial";
	ctx.fillText(score.playerone + " : " + score.playertwo, ctx.canvas.width / 2, 17);
	moveplayers();
	moveball();
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

const moveball = () => {
	ball.x += ball.speed * Math.cos(ball.dirAngle);
	ball.y += ball.speed * Math.sin(ball.dirAngle);

	if ((ball.x + ball_raduis > playertwo.x && ball.y + ball_raduis > playertwo.y && ball.y - ball_raduis < playertwo.y + bar_len) || 
	(ball.x - ball_raduis < playerone.x + bar_width && ball.y - ball_raduis > playerone.y && ball.y - ball_raduis < playerone.y + bar_len)
	)
	{
		ball.dirAngle = Math.PI - ball.dirAngle;
	}
	else if (ball.x > playertwo.x || ball.x < playerone.x) {
		if (ball.x > playertwo.x) {
			score.playerone++;
		}
		else {
			score.playertwo++;
		}
		ball.x = ctx.canvas.width / 2;
		ball.y = ctx.canvas.height / 2;
	}
	if (ball.y + ball_raduis > ctx.canvas.height || ball.y - ball_raduis < 0) {
		ball.dirAngle = - ball.dirAngle;
	}
}

setInterval(reRender, 10);