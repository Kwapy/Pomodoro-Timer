import { writable } from "svelte/store";

export const showSettings = writable(false);
if (typeof window !== 'undefined') {
    var pomodoroStored = localStorage.pomodoro
}
if (typeof window !== 'undefined') {
    var shBreakStored = localStorage.shBreak
}
if (typeof window !== 'undefined') {
    var lgBreakStored = localStorage.lgBreak
}
export const pomodoro = writable(pomodoroStored|| 25);
export const shBreak = writable(shBreakStored|| 5);
export const lgBreak = writable(lgBreakStored|| 15);
export const breakInterval = writable(4);
export const time_value = writable(0);
export const autoStart = writable(true);
export const sessions = writable(1)


