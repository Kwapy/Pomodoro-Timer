<script>
    import { run } from "svelte/internal";

    import Start from "../components/Start.svelte";
    import Timer from "../components/Timer.svelte";
    import {showSettings} from "../components/Nav.svelte";
       
</script>


<svelte:head>
    <title>Pomodoro Timer</title>
</svelte:head>
{#if showSettings == false}
<Timer></Timer>
{:else}
<h1>Hola</h1>
{/if}

<style>
    
</style>