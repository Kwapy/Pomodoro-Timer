<script>
    import { run } from "svelte/internal";
    import Start from "../components/Start.svelte";
    import Nav from "../components/Nav.svelte"
    import Timer from "../components/Timer.svelte";
    import Settings from "../components/Settings.svelte";
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
<Timer></Timer>
<h1>{showSettings_value}</h1>
{#if showSettings_value == true}
<Settings></Settings>
{/if}

<style>
    
</style>