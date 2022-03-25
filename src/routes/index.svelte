<script>
    import { run } from "svelte/internal";
    import Start from "../components/Start.svelte";
    import Nav from "../components/Nav.svelte"
    import Timer from "../components/Timer.svelte";
    import Settings from "../components/Settings.svelte";
    import Reset from "../components/Reset.svelte";
    import { showSettings, time_value, showReset } from "../stores/store";



    let minutes;
    let seconds;
    let time;
    $: time = ($time_value);
    $: showReset_value = ($showReset)

    let showSettings_value;
    showSettings.subscribe(value => {
		showSettings_value = value;
	});

    $: minutes= Math.floor((time)/60);
    $: seconds= Math.floor((time) % 60);
       
</script>

<svelte:head>
    <title>{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")} | Pomodoro Timer</title>
</svelte:head>
    <Nav/>
    <Timer></Timer>
{#if showSettings_value == true}
    <Settings></Settings>
{/if}
{#if showReset_value == true}
    <Reset></Reset>
{/if}


<style>
    *{
        font-family: Gotham,sans-serif;
    }
</style>