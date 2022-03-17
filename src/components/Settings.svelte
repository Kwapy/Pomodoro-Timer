<script>
    import { showSettings } from "../stores/store";
    import { workMinutes, breakMinutes, autoStart } from "../stores/store";
    import { fade } from "svelte/transition";

    let workMinutes_value;
    let breakMinutes_value;
    let sessions_value;
    let autoStart_value;
    $: workMinutes_value = ($workMinutes);
    $: breakMinutes_value = ($breakMinutes);
    $: autoStart_value = ($autoStart);

    function setWorkMinutes(){
        workMinutes.set(workMinutes_value)
        console.log($workMinutes)
    }

    function setBreakMinutes(){
        breakMinutes.set(breakMinutes_value)
        console.log($breakMinutes)
    }

    function toggleSettings(){
        showSettings.set(false)
        console.log({showSettings})
    }

    function toggleAutoStart(){
        console.log($autoStart)
    }
</script>

<div transition:fade={{duration: 200}} class="modal-bg">
    <div class="modal grid grid-row-3 px-12 py-12">
        <span on:click={toggleSettings} class="modal-close font-extrabold">X</span>
        <div class="work-time-setting px-4">
            <h1 class="font-extrabold">Work Time</h1>
            <div class="minutes-settings-container py-1">
                <input bind:value={ workMinutes_value } class="w-20" type="number" placeholder="Minutes" min=0 max=90>
                <input bind:value={ workMinutes_value } class="w-40" type="range" max=90>
            </div>
        </div>
        <div class="break-time-settings px-4">
            <h1 class="font-extrabold">Break Time</h1>
            <div class="minutes-settings-container py-1">
                <input bind:value={ breakMinutes_value } class="w-20" type="number" name="break-minutes" placeholder="Minutes" min=0 max=90>
                <input bind:value={ breakMinutes_value } class="w-40" type="range" max=90>
            </div>
        </div>
        <div class="autoStart-settings px-4">
            <h1 class="font-extrabold">Auto Start</h1>
            <div class="minutes-settings-container pt-1 pb-5 pr-10 grid grid-cols-2 content-start">
                {#if autoStart_value == true }
                <button on:click={ toggleAutoStart } on:click={ () => autoStart.set(true) }  class="w-20 rounded-l-xl bg-blue-600 hover:bg-blue-700 duration-200 text-white font-bold">Yes</button>
                <button on:click={ toggleAutoStart } on:click={ () => autoStart.set(false) } class="w-20 rounded-r-xl bg-gray-300 hover:bg-gray-400 duration-200 text-white font-bold">No</button>
                {:else}
                <button on:click={ toggleAutoStart } on:click={ () => autoStart.set(true) } class="w-20 rounded-l-xl bg-gray-300 hover:bg-gray-400 duration-200 text-white font-bold">Yes</button>
                <button on:click={ toggleAutoStart } on:click={ () => autoStart.set(false) } class="w-20 rounded-r-xl bg-blue-600 hover:bg-blue-700 duration-200 text-white font-bold">No</button>
                {/if}
            </div>
        </div>
        <div id="done-button" class="justify-around transition ease-in-out delay-150 bg-blue-600 hover:scale-101 hover:bg-blue-700 hover:shadow-xl duration-200">
            <button on:click={setWorkMinutes} on:click={setBreakMinutes} on:click={toggleSettings} class="text-2xl py-4 content-center text-white font-bold">
                Done
            </button>
        </div>
        
        
    </div>
    <div on:click={toggleSettings} class="modal-bg-out"></div>
</div>

<style>
    .modal-bg{
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.5);
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-bg-out{
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        cursor: pointer;
    }
    .modal{
        position: relative;
        background-color: white;
        border-radius: 20px;
        z-index: 1;
    }
    .modal-close{
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
    .modal input{
        border-bottom: 2px solid rgb(187, 187, 187);
    }
    .autoStart-settings button{
        position: relative;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-self: center;
        margin-top: 1vh;
    }
    #done-button{
        position: relative;
        width: 50%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-self: center;
        margin-top: 3vh;
        border-radius: 14px;
    }  
</style>