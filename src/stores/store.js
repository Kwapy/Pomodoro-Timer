import { writable } from "svelte/store";

export const showSettings = writable(false);
export const workMinutes = writable(45);
export const breakMinutes = writable(15);
export const time_value = writable(0);
export const autoStart = writable(true);
export const sessions = writable(1)


