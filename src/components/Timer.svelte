<script>
	import {
		pomodoro,
		shBreak,
		lgBreak,
		breakInterval,
		time_value,
		autoStart,
		sessions
	} from '../stores/store';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	let options;
	$: options = [
		[1, $pomodoro],
		[2, $shBreak],
		[3, $lgBreak]
	];
	let stage;
	$: stage = options[0];
	let startingMinutes;

	$: startingMinutes = stage[1];

	let active = ['active', 'unactive', 'unactive'];
	$: if (stage === options[0]) {
		active = ['active', 'unactive', 'unactive'];
	} else if (stage === options[1]) {
		active = ['unactive', 'active', 'unactive'];
	} else {
		active = ['unactive', 'unactive', 'active'];
	}

	let currentInterval = 0;

	let time;
	let timeDasharray;
	let minutes;
	let seconds;

	$: time = startingMinutes * 60;
	$: time_value.set(time);
	$: minutes = Math.floor(time / 60);
	$: seconds = Math.floor(time % 60);

	let timerRunning = false;
	$: if (!timerRunning) {
		timeDasharray = time;
	}

	let timer;

	function runTimer() {
		timerRunning = true;
		let goal = new Date().getTime() + startingMinutes * 60 * 1000;
		timer = setInterval(() => {
			ticking(goal);
			if (time <= 0) {
				switch (stage[0]) {
					case 1:
						stage = options[1];
						break;
					case 2:
						if (currentInterval < $breakInterval) {
							stage = options[0];
						} else {
							stage = options[2];
						}
						break;
					case 3:
						stage = options[0];
						break;
					default:
						console.error('Something is wrong');
				}
				if (stage[0] == 2) {
					if (currentInterval < 4) {
						currentInterval++;
					} else {
						currentInterval = 0;
					}
				}
				console.log(stage);
				startingMinutes = stage[1];
				stop();
				alert('Time has finished');
				if ($autoStart == true) {
					runTimer();
				}
			}
		}, 100);
	}

	function stop() {
		console.log('stop');
		timerRunning = false;
		clearInterval(timer);
		time = startingMinutes * 60;
		timeDasharray = startingMinutes * 60;
	}

	function ticking(goal) {
		let now = new Date().getTime();
		timeDasharray = (goal - now) / 1000;
		time = Math.floor((goal - now) / 1000);
	}
</script>

<main class="items-center text-[#1F1F1F] justify-center content-center text-center flex flex-col">
	<div id="option-container" class="flex flex-row justify-around items-center content-center text-center">
		<h2
			id={active[0]}
			class="text-2xl font-bold m-5 rounded transition transform ease-in"
			on:click={() => (stage = options[0])}
		>
			Pomodoro
		</h2>
		<h2
			id={active[1]}
			on:click={stop}
			on:click={() => (stage = options[1])}
			class="text-2xl font-bold m-5 border-0 transition transform ease-in"
		>
			Short Break
		</h2>
		<h2
			id={active[2]}
			on:click={stop}
			on:click={() => (stage = options[2])}
			class="text-2xl font-bold m-5 border-0 transition transform ease-in"
		>
			Long Break
		</h2>
	</div>
	<div id="outer" class="justify-center place-content-center text-center">
		<svg
			id="timer-container"
			class="flex -rotate-90 justify-center content-center"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				id="circle-timer-big"
				class="transition-all ease-linear"
				stroke-width="20"
				cx="50%"
				cy="50%"
				r="215"
				fill="#FDFEFF"
				stroke-dashoffset={1500 - (timeDasharray * 1350) / (startingMinutes * 60)}
				animation="dash 5s linear alternate"
			/>
			<circle
				id="circle-timer-small"
				class=""
				stroke-width="20"
				cx="50%"
				cy="50%"
				r="165"
				fill="transparent"
				stroke-dashoffset={1500 - (timeDasharray * 1050) / (startingMinutes * 60)}
				animation="dash 5s linear alternate"
			/>
		</svg>
		<div id="timer-text" class="content-center text-center">
			<div id="time" class="grid grid-cols-9 text-7xl font-extrabold">
				<p class="block col-span-4 justify-self-end">{minutes.toString().padStart(2, '0')}</p>
				<p id="dot" class="block">:</p>
				<p class="block col-span-4 justify-self-start">{seconds.toString().padStart(2, '0')}</p>
			</div>
		</div>
	</div>
	{#if timerRunning == false}
		<div class="justify-around my-12">
			<button
				id="ctrl-button"
				on:click={runTimer}
				class="text-4xl py-4 px-10 text-white font-bold shadow-md transition ease-in-out bg-blue-600 hover:scale-105 hover:bg-blue-600 hover:shadow-xl duration-200"
			>
				Start
			</button>
		</div>
	{:else}
		<div class="my-12">
			<button
				id="stop-button"
				on:click={stop}
				class="text-4xl py-4 px-10 text-white font-bold shadow-md rounded-[14px] transition ease-in-out bg-blue-600 hover:scale-105 hover:bg-blue-600 hover:shadow-xl duration-200"
			>
				Stop
			</button>
		</div>
	{/if}
</main>

<style>
	*::after {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	#option-container h2 {
		cursor: pointer;
	}
	#option-container h2::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 0%;
		height: 3px;
		background: rgb(37 99 235);
		transition: 0.4s ease-out;
	}
	#option-container #active::after {
		left: 0;
		width: 100%;
	}
	#timer-container {
		height: 450px;
		width: 450px;
		text-align: center;
		align-items: center;
		justify-content: center;
	}
	#circle-timer-big {
		height: auto;
		width: auto;
		stroke: rgb(37 99 235);
		stroke-linecap: round;
		stroke-dasharray: 1500;
	}
	#circle-timer-small {
		display: none;
	}
	#outer {
		width: 450px;
		height: 450px;
		background-color: #ffffff;
		border-radius: 50%;
		border: inset 10px solid;
		box-shadow: 0px 0px 6px 0px #c2c2c2;
		box-shadow: inset 0px 0px 6px 0px #c2c2c2;
		text-align: center;
		justify-content: center;
	}
	#timer-text {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#time {
		width: 14rem;
		transform: translateY(-16.5rem);
		/*border: solid 2px black;*/
		text-align: center;
	}

	#ctrl-button {
		border-radius: 14px;
	}

	@media only screen and (max-width: 500px) {
		#timer-container {
			width: 350px;
			height: 350px;
			display: flex;
		}
		#circle-timer-big {
			display: none;
		}
		#circle-timer-small {
			display: block;
			stroke: rgb(37 99 235);
			stroke-linecap: round;
			stroke-dasharray: 1500;
			width: 350px;
			height: 350px;
		}
		#outer {
			width: 350px;
			height: 350px;
			margin-top: 10vh;
		}
		#time {
			transform: translateY(-13.5rem);
			font-size: 4rem;
		}
	}
</style>
