import { writable } from "svelte/store";

export const showSettings = writable(false);
export const workMinutes = writable(25);
export const breakMinutes = writable(5);