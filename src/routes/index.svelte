<script>
    import Nav from "../components/Nav.svelte"
    import Timer from "../components/Timer.svelte";
    import Settings from "../components/Settings.svelte";
    import { showSettings, time_value} from "../stores/store";
    import { onMount} from "svelte"

    //If there one of these varibles is null, assign to that variable a default value
    onMount(() => {
		if(localStorage.getItem("pomodoro") === null){
			localStorage.setItem("pomodoro", 25)
		}
		if(localStorage.getItem("shBreak") === null){
			localStorage.setItem("shBreak", 5)
		}
		if(localStorage.getItem("lgBreak") === null){
			localStorage.setItem("lgBreak", 15)
		}
	})



    let minutes;
    let seconds;
    let time;
    $: time = ($time_value);

    $: minutes= Math.floor((time)/60);
    $: seconds= Math.floor((time) % 60);


    
    
       
</script>

<svelte:head>
    <title>{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")} | Pomodoro Timer</title>
</svelte:head>
    <Nav/>
    <Timer></Timer>
{#if $showSettings == true}
    <Settings></Settings>
{/if}