<script>
import { run } from "svelte/internal";

    import Start from "../components/Start.svelte";

    let startingMinutes = 1;
    let aux = startingMinutes;
    let time = startingMinutes * 60 * 100;
    let minutes= Math.floor((time/100)/60);
    if(minutes<10){
            minutes = "0" + minutes;
        }
        else{}
    let seconds= "0" + Math.floor((time/100) % 60);
    let timerRunning=false;
    let dashoffset=1500;
    var timer;
    

    function runTimer(){
        timer = setInterval(() => {
            updateTimer();
        }, 10)
    }


    function stop(){
        console.log("stop");
        timerRunning=false;
        clearInterval(timer);
    }

    function updateTimer(){
        timerRunning=true;
        minutes = Math.floor((time/100)/60);
        seconds= Math.floor((time/100) % 60);
        console.log(minutes, seconds);

        if(time==0){
            stop();
            startingMinutes=aux;
            time = startingMinutes * 60 * 100;
            minutes = Math.floor((time/100)/60);
            seconds= Math.floor((time/100) % 60);
            alert("The time has finished");
        }
        else{
        }

        if(seconds<10){
            seconds = "0" + seconds;
        }
        else{}

        if(minutes<10){
            minutes = "0" + minutes;
        }
        else{}
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
            <div id="timer-text" class="content-center text-center">
                <div id="time" class="grid grid-cols-7 text-center content-center text-7xl font-extrabold">
                    <p class="col-span-3">{minutes}</p>
                    <p id="double-dot" class="">:</p>
                    <p class="col-span-3">{seconds}</p>
                </div>
            </div> 
        </div>
        {#if timerRunning == false}
        <div id="start-button" class="justify-around my-72">
            <button on:click={runTimer} class="text-4xl py-4 px-10 text-white font-bold shadow-indigo-500/50">
                Start
            </button>
        </div>
        {:else}
        <div id="start-button" class="justify-around my-72">
            <button  on:click={stop} class="text-4xl py-4 px-10 text-white font-bold shadow-indigo-500/50">
                Stop
            </button>
        </div>
        {/if}
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
        background: linear-gradient(45deg, #6266F1 0%, #7D53DE 100%);
    }
    #outer{
        width: 450px;
        height: 450px;
        background-color: #F9F9F9;
        border-radius: 50%;
        border: inset 10px solid;
        box-shadow: 0px 0px 6px 0px #E2E2E2;
        box-shadow: inset 0px 0px 6px 0px #E2E2E2;
        text-align: center;
        justify-content: center;
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
    #timer-text{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #time{
        width: auto;
        flex: row;
        justify-content: space-evenly;
        transform: translateY(-16.5rem);
        /*border: solid 2px black;*/
        text-align: center;
        
    }
    #start-button{
        margin-top: 5vh;
        background-image: linear-gradient(45deg, #6266F1 0%, #7D53DE 100%);
        border-radius: 20px;
    }
    
</style>