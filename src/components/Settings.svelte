<script>
    import { showSettings } from "../stores/store";
    import { fade } from "svelte/transition";
    
    function toggleSettings(){
        showSettings.set(false)
        console.log({showSettings})
    }
</script>

<div transition:fade={{duration: 200}} class="modal-bg">
    <div class="modal grid grid-cols-2 px-12 py-12">
        <span on:click={toggleSettings} class="modal-close font-extrabold">X</span>
        <div class="work-time-setting px-5">
            <h1 class="font-extrabold">Work Time</h1>
            <div class="minutes-settings-container py-1">
                <input type="text" name="work-minutes" placeholder="Minutes">
            </div>
            <div class="seconds-settings-container py-1">
                <input type="text" name="work-seconds" placeholder="Seconds"> 
            </div>
        </div>
        <div class="break-time-settings px-5">
            <h1 class="font-extrabold">Break Time</h1>
            <div class="minutes-settings-container py-1">
                <input type="text" name="break-minutes" placeholder="Minutes">
            </div>
            <div class="seconds-settings-container py-1">
                <input type="text" name="break-seconds" placeholder="Seconds"> 
            </div>
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
        border: 2px solid rgb(187, 187, 187);
        border-radius: 4px;
    }
</style>