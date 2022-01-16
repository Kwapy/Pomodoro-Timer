<script>
    import { workMinutes, breakMinutes, time_value, sessions, autoStart} from "../stores/store";
    import { fade } from 'svelte/transition';
import { session } from "$app/stores";

    let work_time = true;

    let startingMinutes_value;

    let sessions_value;
    let current_session = 1;
    let autoStart_value;
    $: sessions_value = ($sessions);
    $: autoStart_value = ($autoStart);

    $: if(work_time == true){
        startingMinutes_value = ($workMinutes);
    }
        else{
            startingMinutes_value = ($breakMinutes);
        }
    

    let aux;
    let time;
    let minutes;
    let seconds;
    $: aux = startingMinutes_value;
    $: time = startingMinutes_value * 60 * 100;
    $: ($time_value) = time;
    $: minutes= Math.floor((time/100)/60);
    $: if(minutes<10){
            minutes = "0" + minutes;
        }
        else{}
    $: seconds= Math.floor((time/100) % 60);
    $: if(seconds<10){
            seconds = "0" + seconds;
        }
        else{}
    
    let timerRunning=false;
    
    let dashoffset;
    $: if(time === (startingMinutes_value * 60 * 100)){
        dashoffset=1500;
        }
    
    let timer;

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
        console.log(minutes, seconds);

        if(time==0){
            stop();
            startingMinutes_value=aux;
            time = startingMinutes_value * 60 * 100;
            if(work_time == true){
                alert("Work time has finished \n");
                work_time = false;
            }
            else{
                if(current_session === sessions_value){
                    alert("Your work time has finished, good job!")

                }
                else{
                    alert("Break time has finished \nSession " + current_session + " has finished\nStarting session "+(current_session+1));
                    current_session++;
                }
                work_time = true;

            }

            if((autoStart_value == true)&&((current_session < sessions_value)||(work_time==false))){
                runTimer();
            }
            else{

            }
            
            
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
        
        dashoffset = ((time/100)*1350)/(startingMinutes_value*60);

        time--;
    }


    function underline(node, {duration = 300}){
        
    }

</script>


<main class="items-center justify-center content-center text-center flex flex-col">
    <div id="option-container" class="flex flex-row justify-around content-center text-center">
        {#if work_time == true}
        <h2 id="active" class="text-2xl font-bold m-5 rounded transition transform ease-in">Work time</h2>
        <h2 id="unactive" on:click={stop} on:click={() => work_time = false} class="text-2xl font-bold m-5 border-0 transition transform ease-in">Break time</h2>
        {:else}
        <h2 id="unactive" on:click={stop} on:click={() => work_time = true} class="text-2xl font-bold m-5 border-0 transition transform ease-in" >Work time</h2>
        <h2 id="active" class="text-2xl font-bold m-5 transition transform ease-in">Break time</h2>
        {/if}
        
    </div>
        <div id="outer" class="justify-center place-content-center text-center">
            <svg id="timer-container" class="flex -rotate-90 justify-center content-center" xmlns="http://www.w3.org/2000/svg">
                <circle id="circle-timer-big"  class="" stroke-width="20"
                cx="50%" cy="50%" r="215" fill="transparent" stroke-dashoffset={1500-dashoffset} 
                animation= "dash 5s linear alternate"/>
                <circle id="circle-timer-small"  class="" stroke-width="20"
                cx="50%" cy="50%" r="165" fill="transparent" stroke-dashoffset={1500-((time/100)*1050)/(startingMinutes_value*60)} 
                animation= "dash 5s linear alternate"/>
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
        <div id="start-button" class="justify-around my-12">
            <button id="start-button" on:click={runTimer} class="text-4xl py-4 px-10 text-white font-bold shadow-md transition ease-in-out delay-150 bg-blue-600 hover:scale-101 hover:bg-blue-600 hover:shadow-xl duration-200">
                Start
            </button>
        </div>
        {:else}
        <div id="start-button" class="justify-around my-12">
            <button  on:click={stop} class="text-4xl py-4 px-10 text-white font-bold shadow-md transition ease-in-out delay-150 bg-blue-600 hover:scale-101 hover:bg-blue-600 hover:shadow-xl duration-200">
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
    #option-container h2{
        cursor: pointer;
    }
    #option-container h2::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0%;
        height: 3px;
        background: rgb(37 99 235);
        transition: 0.4s ease-out;

    }
    #option-container #active::after{
        left: 0;
        width: 100%;
    }
    #timer-container{
        height: 450px;
        width: 450px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    #circle-timer-big{
        height: auto;
        width: auto;
        stroke: rgb(37 99 235);
        stroke-linecap: round;
        stroke-dasharray: 1500;
    }
    #circle-timer-small{
        display: none;
    }
    #outer{
        width: 450px;
        height: 450px;
        background-color: #FFFFFF;
        border-radius: 50%;
        border: inset 10px solid;
        box-shadow: 0px 0px 6px 0px #c2c2c2;
        box-shadow: inset 0px 0px 6px 0px #c2c2c2;
        text-align: center;
        justify-content: center;
    }
    #timer-text{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #time{
        width: 14rem;
        transform: translateY(-16.5rem);
        /*border: solid 2px black;*/
        text-align: center;
        
    }

    button{
        border-radius: 14px;
    }

    @media only screen and (max-width: 500px){
        #timer-container{
            width: 350px;
            height: 350px;
            display: flex;
        }
        #circle-timer-big{
            display: none;
        }
        #circle-timer-small{
            display: block;
            stroke: rgb(37 99 235);
            stroke-linecap: round;
            stroke-dasharray: 1500;
            width: 350px;
            height: 350px;
        }
        #outer{
            width: 350px;
            height: 350px;
            margin-top: 10vh;
        }
        #time{
            transform: translateY(-13.5rem);
            font-size: 4rem;
        }
    }
</style>