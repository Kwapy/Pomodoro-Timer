<script>
    
</script>


<svelte:head>
    <title>Pomodoro Timer</title>
</svelte:head>

<main class="items-center justify-center content-center text-center flex flex-col">
    <div id="option-container" class="flex flex-row justify-around content-center text-center">
        <h2 class="text-2xl font-bold p-10">Work time</h2>
        <h2 class="text-2xl font-bold p-10">Break time</h2>
    </div>
    <svg id="timer-container" class="flex -rotate-90 justify-center content-center" xmlns="http://www.w3.org/2000/svg">
        <circle id="circle-stop"  class="" stroke-width="10" cx="50%" cy="50%" r="150" fill="transparent" />
    </svg>
</main>

<style>
    #timer-container{
        height: 500px;
        width: 500px;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    #circle-stop{
        height: auto;
        width: auto;
        stroke: purple;
        stroke-linecap: round;
        stroke-dasharray: 1500;
        stroke-dashoffset: 500;
    }
</style>