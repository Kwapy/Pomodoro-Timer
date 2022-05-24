import { writable } from "svelte/store";

export const showSettings = writable(false);
export const pomodoro = writable(localStorage.getItem("pomodoro"))
export const shBreak = writable(localStorage.getItem("shBreak"));
export const lgBreak = writable(localStorage.getItem("lgBreak"));
export const breakInterval = writable(4);
export const time_value = writable(0);
export const autoStart = writable(true);
export const sessions = writable(1)


