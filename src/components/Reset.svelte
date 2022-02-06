<script>
import { fade } from "svelte/transition";
import { showReset } from "../stores/store.js";
import Timer, { reset } from "./Timer.svelte";

</script>
<div transition:fade={{duration: 200}} class="modal-bg">
    <div class="modal grid grid-row-3 px-12 py-12">
        <span on:click={() => showReset.set(false)} class="modal-close font-black">X</span>
        <div class="autoStart-settings px-4">
            <h1 class="font-extrabold">Auto Start</h1>
            <div class="minutes-settings-container pt-1 pb-5 pr-10 grid grid-cols-2 content-start">
                <button on:click={ reset } on:click={ () => showReset.set(false) }  class="w-20 rounded-l-xl bg-blue-600 hover:bg-blue-700 duration-200 text-white font-bold">Yes</button>
                <button on:click={ () => showReset.set(false) } class="w-20 rounded-r-xl bg-gray-300 hover:bg-gray-400 duration-200 text-white font-bold">No</button>
            </div>
        </div>
        
        
    </div>
    <div on:click={reset} on:click={ () => showReset.set(false)} class="modal-bg-out"></div>
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