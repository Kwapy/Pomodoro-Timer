<script>
    import Nav from "../components/Nav.svelte"
    import Timer from "../components/Timer.svelte";
    import Settings from "../components/Settings.svelte";
    import { showSettings, time_value} from "../stores/store";



    let minutes;
    let seconds;
    let time;
    $: time = ($time_value);

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


<style>
    *{
        font-family: Gotham,sans-serif;
    }
</style>