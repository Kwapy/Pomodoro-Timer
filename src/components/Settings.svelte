<script>
    import { showSettings } from "../stores/store";
    import { pomodoro, shBreak, lgBreak, autoStart, sessions } from "../stores/store";
    import { fade } from "svelte/transition";

    let pomodoro_value;
    let shBreak_value;
    let lgBreak_value;
    let sessions_value;
    let autoStart_value;
    $: pomodoro_value = ($pomodoro);
    $: shBreak_value = ($shBreak);
    $: lgBreak_value = ($lgBreak)
    $: autoStart_value = ($autoStart);
    $: sessions_value = ($sessions)

    function setPomodoro(){
        pomodoro.set(pomodoro_value)
        console.log($pomodoro)
    }

    function setShBreak(){
        shBreak.set(shBreak_value)
        console.log($shBreak)
    }
    function setLgBreak(){
        lgBreak.set(lgBreak_value)
        console.log($lgBreak)
    }

    function toggleSettings(){
        showSettings.set(false)
        console.log({showSettings})
    }

    function toggleAutoStart(){
        console.log($autoStart)
    }
    function setSessions(){
        sessions.set(sessions_value)
        console.log($sessions)
    }
</script>

<div transition:fade={{duration: 200}} class="modal-bg">
    <div class="modal grid grid-row-3 px-12 py-12">
        <span on:click={toggleSettings} class="modal-close font-extrabold">X</span>
        <div class="pomodoro-setting px-4">
            <h1 class="font-extrabold">Work Time</h1>
            <div class="minutes-settings-container py-1">
                <input bind:value={ pomodoro_value } class="w-20" type="number" placeholder="Minutes" min=0 max=90>
                <input bind:value={ pomodoro_value } class="w-40" type="range" max=90>
            </div>
        </div>
        <div class="shBreak-settings px-4">
            <h1 class="font-extrabold">Short Break</h1>
            <div class="minutes-settings-container py-1">
                <input bind:value={ shBreak_value } class="w-20" type="number" name="break-minutes" placeholder="Minutes" min=0 max=90>
                <input bind:value={ shBreak_value } class="w-40" type="range" max=90>
            </div>
        </div>
        <div class="lgBreak-settings px-4">
            <h1 class="font-extrabold">Long Break</h1>
            <div class="minutes-settings-container py-1">
                <input bind:value={ lgBreak_value } class="w-20" type="number" name="break-minutes" placeholder="Minutes" min=0 max=90>
                <input bind:value={ lgBreak_value } class="w-40" type="range" max=90>
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
        <div class="sessions-settings px-4">
            <h1 class="font-extrabold">Sessions</h1>
            <div class="minutes-settings-container py-1">
                <input bind:value={ sessions_value } class="w-20" type="number" name="sessions_value" placeholder="Sessins" min=1 max=8>
                <input bind:value={ sessions_value } class="w-40" type="range" min=1 max=8>
            </div>
        </div>
        <div id="done-button" class="justify-around transition ease-in-out delay-150 bg-blue-600 hover:scale-101 hover:bg-blue-700 hover:shadow-xl duration-200">
            <button on:click={setPomodoro} on:click={setShBreak} on:click={setLgBreak} on:click={toggleSettings} class="text-2xl py-4 content-center text-white font-bold">
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