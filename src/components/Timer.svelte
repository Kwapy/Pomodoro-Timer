<script>
	import {
		workMinutes,
		breakMinutes,
		time_value,
		sessions,
		autoStart,
		showReset
	} from '../stores/store';
	import { fade } from 'svelte/transition';
	import { session } from '$app/stores';

	let work_time = true;

	let startingMinutes_value;

	let sessions_value;
	let current_session = 1;
	let autoStart_value;
	$: sessions_value = $sessions;
	$: autoStart_value = $autoStart;

	$: if (work_time == true) {
		startingMinutes_value = $workMinutes;
	} else {
		startingMinutes_value = $breakMinutes;
	}

	let aux;
	let time;
	let minutes;
	let seconds;
	$: aux = startingMinutes_value;
	$: time = startingMinutes_value * 60;
	$: $time_value = time;
	$: minutes = Math.floor(time / 60);
	$: if (minutes < 10) {
		minutes = '0' + minutes;
	} else {
	}
	$: seconds = Math.floor((time) % 60);
	$: if (seconds < 10) {
		seconds = '0' + seconds;
	} else {
	}

	let timerRunning = false;
	let showReset_value = $showReset;
	$: showReset_value = $showReset;

	let dashoffset;
	$: if (time === startingMinutes_value * 60) {
		dashoffset = 1500;
	}

	let timer;

	function runTimer() {
        timer = setInterval(() => {
					updateTimer();
				}, 1000);
	}

	function stop() {
		console.log('stop');
		timerRunning = false;
		clearInterval(timer);
	}

	function toggleReset() {
		if (showReset_value == false) {
			showReset.set(true);
		} else {
			showReset.set(false);
		}
	}

	function reset() {
		console.log('reset');
		timerRunning = false;
		clearInterval(timer);
		time = startingMinutes_value * 60;
	}

	function updateTimer() {
		timerRunning = true;
		console.log(minutes, seconds);

		if (time == 0) {
			stop();
			startingMinutes_value = aux;
			time = startingMinutes_value * 60;
			if (work_time == true) {
				alert('Work time has finished \n');
				work_time = false;
			} else {
				if (current_session === sessions_value) {
					alert('Your work time has finished, good job!');
				} else {
					alert(
						'Break time has finished \nSession ' +
							current_session +
							' has finished\nStarting session ' +
							(current_session + 1)
					);
					current_session++;
				}
				work_time = true;
			}

			if (autoStart_value == true && (current_session < sessions_value || work_time == false)) {
				runTimer();
			} else {
			}
		} else {
		}

		if (seconds < 10) {
			seconds = '0' + seconds;
		} else {
		}

		if (minutes < 10) {
			minutes = '0' + minutes;
		} else {
		}

		dashoffset = ((time) * 1350) / (startingMinutes_value * 60);

		time--;
	}
</script>

<main class="items-center justify-center content-center text-center flex flex-col">
	<div id="option-container" class="flex flex-row justify-around content-center text-center">
		{#if work_time == true}
			<h2 id="active" class="text-2xl font-bold m-5 rounded transition transform ease-in">
				Work time
			</h2>
			<h2
				id="unactive"
				on:click={stop}
				on:click={() => (work_time = false)}
				class="text-2xl font-bold m-5 border-0 transition transform ease-in"
			>
				Break time
			</h2>
		{:else}
			<h2
				id="unactive"
				on:click={stop}
				on:click={() => (work_time = true)}
				class="text-2xl font-bold m-5 border-0 transition transform ease-in"
			>
				Work time
			</h2>
			<h2 id="active" class="text-2xl font-bold m-5 transition transform ease-in">Break time</h2>
		{/if}
	</div>
	<div id="outer" class="justify-center place-content-center text-center">
		<svg
			id="timer-container"
			class="flex -rotate-90 justify-center content-center"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				id="circle-timer-big"
				class=""
				stroke-width="20"
				cx="50%"
				cy="50%"
				r="215"
				fill="transparent"
				stroke-dashoffset={1500 - dashoffset}
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
				stroke-dashoffset={1500 - ((time) * 1050) / (startingMinutes_value * 60)}
				animation="dash 5s linear alternate"
			/>
		</svg>
		<div id="timer-text" class="content-center text-center">
			<div id="time" class="grid grid-cols-9 text-7xl font-extrabold">
				<p class="block col-span-4 justify-self-end">{minutes}</p>
				<p id="dot" class="block">:</p>
				<p class="block col-span-4 justify-self-start">{seconds}</p>
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
			<button
				id="reset-button"
				on:click={toggleReset}
				class="text-4xl py-4 px-10 text-white font-bold shadow-md rounded-[14px] transition ease-in-out bg-blue-600 hover:scale-105 hover:bg-blue-600 hover:shadow-xl duration-200"
			>
				Reset
			</button>
		</div>
	{/if}

	{#if showReset_value == true}
		<div transition:fade={{ duration: 200 }} class="modal-bg">
			<div class="modal grid grid-row-3 px-12 py-12">
				<span on:click={() => showReset.set(false)} class="modal-close font-black">X</span>
				<div class="autoStart-settings px-1">
					<h1 class="font-extrabold">Are you sure?</h1>
					<div class="minutes-settings-container pt-5 pb-5 flex">
						<button
							on:click={reset}
							on:click={() => showReset.set(false)}
							class="w-20 rounded-l-md bg-blue-600 hover:bg-blue-700 duration-200 text-white font-bold"
							>Yes</button
						>
						<button
							on:click={() => showReset.set(false)}
							class="w-20 rounded-r-md bg-blue-600 hover:bg-blue-700 duration-200 text-white font-bold"
							>No</button
						>
					</div>
				</div>
			</div>
			<div on:click={reset} on:click={() => showReset.set(false)} class="modal-bg-out" />
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

	.modal-bg {
		position: fixed;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.modal-bg-out {
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		cursor: pointer;
	}
	.modal {
		position: relative;
		background-color: white;
		border-radius: 20px;
		z-index: 1;
	}
	.modal-close {
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
	}
</style>
