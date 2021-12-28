<script>
    import { showSettings } from "../stores/store";
    import { workMinutes, breakMinutes } from "../stores/store";
    import { fade } from "svelte/transition";

    let startingMinutes_value;
    let breakMinutes_value;
    startingMinutes_value = ($workMinutes);
    breakMinutes_value = ($breakMinutes);
    function setStartingMinutes(){
        startingMinutes.set(startingMinutes_value)
        console.log($workMinutes)
    }

    function toggleSettings(){
        showSettings.set(false)
        console.log({showSettings})
    }
</script>

<div transition:fade={{duration: 200}} class="modal-bg">
    <div class="modal grid grid-row-3 px-12 py-12">
        <span on:click={toggleSettings} class="modal-close font-extrabold">X</span>
        <div class="work-time-setting px-4">
            <h1 class="font-extrabold">Work Time</h1>
            <div class="minutes-settings-container py-1">
                <input bind:value={ startingMinutes_value } class="w-20" type="number" placeholder="Minutes" min=0 max=90>
                <input bind:value={ startingMinutes_value } class="w-40" type="range" max=90>
            </div>
        </div>
        <div class="break-time-settings px-4">
            <h1 class="font-extrabold">Break Time</h1>
            <div class="minutes-settings-container py-1">
                <input bind:value={ breakMinutes_value } class="w-20" type="number" name="break-minutes" placeholder="Minutes" min=0 max=90>
                <input bind:value={ breakMinutes_value } class="w-40" type="range" max=90>
            </div>
        </div>
        <div id="done-button" class="justify-around">
            <button on:click={setStartingMinutes} on:click={toggleSettings} class="text-2xl py-4 content-center text-white font-bold shadow-indigo-500/50">
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
    #done-button{
        position: relative;
        width: 50%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-self: center;
        margin-top: 3vh;
        background-image: linear-gradient(45deg, #6266F1 0%, #7D53DE 100%);
        border-radius: 20px;
    }  
</style>