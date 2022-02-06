import { writable } from "svelte/store";

export const showSettings = writable(false);
export const workMinutes = writable(45);
export const breakMinutes = writable(15);
export const time_value = writable(0);
export const sessions = writable(1);
export const autoStart = writable(true);
export const showReset = writable(false);
export const startingMinutes = writable(0);

export function reset(){
    console.log("reset");
    timerRunning = false;
    clearInterval(timer);
    time_value.set(startingMinutes_value * 60 * 100);
}
