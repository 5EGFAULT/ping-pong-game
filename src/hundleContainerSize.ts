const maxGameContainerWidth = 1000;
//const maxGameContainerWidth = window.innerWidth;
const maxGameContainerHeight = 500;
//const maxGameContainerHeight = window.innerHeight;


const gameContainer = document.getElementById('game_container');
const resizeGameContainer = () => {
	let winHeight = window.innerHeight > maxGameContainerHeight ? maxGameContainerHeight : window.innerHeight;
	let winWidth = window.innerWidth > maxGameContainerWidth ? maxGameContainerWidth : window.innerWidth;

	if (winWidth < winHeight * 2) {
		gameContainer.style.width = `${winWidth}px`;
		gameContainer.style.height = `${winWidth / 2}px`;
	}
	else {
		gameContainer.style.width = `${winHeight * 2}px`;
		gameContainer.style.height = `${winHeight}px`;
	}
}
resizeGameContainer();
window.addEventListener('resize', resizeGameContainer);
