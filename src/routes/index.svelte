<script>
    import { run } from "svelte/internal";
    import Start from "../components/Start.svelte";
    import Nav from "../components/Nav.svelte"
    import Timer, {reset} from "../components/Timer.svelte";
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
    let showReset_value;
    showReset.subscribe(value => {
		showReset_value = value;
	});

    $: minutes= Math.floor((time/100)/60);
    $: if(minutes<10){
            minutes = "0" + minutes;
        }
        else{}
    $: seconds= Math.floor((time/100) % 60);
    $: if(seconds<10){
            seconds = "0" + seconds;
        }
        else{}
       
</script>


<svelte:head>
    <title>{minutes}:{seconds} | Pomodoro Timer</title>
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