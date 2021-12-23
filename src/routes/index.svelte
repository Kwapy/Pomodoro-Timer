<script>
    import { run } from "svelte/internal";
    import Start from "../components/Start.svelte";
    import Nav from "../components/Nav.svelte"
    import Timer from "../components/Timer.svelte";
    import { showSettings } from "../stores/store";
    let showSettings_value;
    showSettings.subscribe(value => {
		showSettings_value = value;
	});

       
</script>


<svelte:head>
    <title>Pomodoro Timer</title>
</svelte:head>

<Nav/>

{#if showSettings_value == false}
<Timer></Timer>
<h1>{showSettings_value}</h1>
{:else}
<h1>Hola</h1>
{/if}

<style>
    
</style>