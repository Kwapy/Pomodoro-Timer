<script>
    import Start from "../components/Start.svelte";
</script>


<svelte:head>
    <title>Pomodoro Timer</title>
</svelte:head>

<main class="items-center justify-center content-center text-center flex flex-col">
    <div id="option-container" class="flex flex-row justify-around content-center text-center">
        <h2 class="text-2xl font-bold p-10">Work time</h2>
        <h2 class="text-2xl font-bold p-10">Break time</h2>
    </div>
        <div id="outer" class="bg-color justify-center place-content-center">
            <svg id="timer-container" class="flex -rotate-90 justify-center content-center" xmlns="http://www.w3.org/2000/svg">
                <circle id="circle-stop"  class="shadow" stroke-width="20" cx="50%" cy="50%" r="215" fill="transparent" />
            </svg>
            <p id="time" class="relative text-7xl  font-extrabold">25:00</p>
        </div>
        <Start class="my-72"></Start>
</main>

<style>
    #timer-container{
        height: 450px;
        width: 450px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    #circle-stop{
        height: auto;
        width: auto;
        stroke: #6266F1;
        stroke-linecap: round;
        stroke-dasharray: 1500;
        stroke-dashoffset: 1250;
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
</style>