import { writable } from "svelte/store";

export const showSettings = writable(false);
export const pomodoro = writable(45);
export const shBreak = writable(5);
export const lgBreak = writable(15);
export const breakInterval = writable(4);
export const time_value = writable(0);
export const autoStart = writable(true);
export const sessions = writable(1)


