<script>
    import Start from "../components/Start.svelte";

    const startingMinutes = 1;
    let time = startingMinutes * 60 * 100;
    let minutes;
    let seconds;
    let count=0;
    let start = false;
    let dashoffset=150;

    setInterval(updateTimer, 10)

    function runTimer(){
    }
    function updateTimer(){
        minutes = Math.floor((time/100)/60);
        seconds= Math.floor((time/100) % 60);
        console.log(minutes, seconds);
        if(seconds<10){
            seconds = "0" + seconds;
        }
        if(minutes<10){
            minutes = "0" + minutes;
        }

        dashoffset = ((time/100)*1350)/(startingMinutes*60);

        time--;
    }
    
</script>


<svelte:head>
    <title>Pomodoro Timer</title>
</svelte:head>

<main class="items-center justify-center content-center text-center flex flex-col">
    <div id="option-container" class="flex flex-row justify-around content-center text-center">
        <h2 class="text-2xl font-bold p-10">Work time</h2>
        <h2 class="text-2xl font-bold p-10">Break time</h2>
    </div>
        <div id="outer" class="bg-color justify-center place-content-center text-center">
            <svg id="timer-container" class="flex -rotate-90 justify-center content-center" xmlns="http://www.w3.org/2000/svg">
                <circle id="circle-timer"  class="shadow" stroke-width="20"
                cx="50%" cy="50%" r="215" fill="transparent" stroke-dashoffset={1500-dashoffset} 
                animation= "dash 5s linear alternate"/>
            </svg>
            <div id="timer-text">
                <p id="time" class="relative text-7xl  font-extrabold text-center">{minutes}:{seconds}</p>
            </div>
            
        </div>
        <div id="start-button" class="justify-around my-72">
            <button on:click={runTimer} class="text-4xl py-4 px-10 text-white font-bold shadow-indigo-500/50">
                Start
            </button>
        </div>
</main>

<style>
    #timer-container{
        height: 450px;
        width: 450px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    #circle-timer{
        height: auto;
        width: auto;
        stroke: #6266F1;
        stroke-linecap: round;
        stroke-dasharray: 1500;
    }
    #outer{
        width: 450px;
        height: 450px;
        background-color: #F9F9F9;
        border-radius: 50%;
        border: inset 10px solid;
        box-shadow: 0px 0px 6px 0px #E2E2E2;
        box-shadow: inset 0px 0px 6px 0px #E2E2E2;
    }
    circle{
        width:150px;height:150px;
        border: solid 1px #555;
        background-color: #eed;
        box-shadow: 10px -10px rgba(0,0,0,0.6);
        -moz-box-shadow: 10px -10px rgba(0,0,0,0.6);
        -webkit-box-shadow: 10px -10px rgba(0,0,0,0.6); 
        -o-box-shadow: 10px -10px rgba(0,0,0,0.6);
        border-radius:100px;
    }
    #time{
        transform: translateY(-16.5rem);
    }
    #start-button{
        margin-top: 5vh;
        background-color: #6266F1;
        border-radius: 20px;
    }
</style>