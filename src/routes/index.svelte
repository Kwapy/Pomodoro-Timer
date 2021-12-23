<script>
    import { run } from "svelte/internal";
    import Start from "../components/Start.svelte";
    import Nav from "../components/Nav.svelte"
    import Timer from "../components/Timer.svelte";
    import { showSettings } from "../components/Nav.svelte";
       
</script>


<svelte:head>
    <title>Pomodoro Timer</title>
</svelte:head>
{#if showSettings == false}
<Timer></Timer>
<h1>{showSettings}</h1>
{:else}
<h1>Hola</h1>
{/if}

<style>
    
</style>