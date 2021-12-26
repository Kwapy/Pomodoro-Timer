import { writable } from "svelte/store";

export const showSettings = writable(false);
export const startingMinutes = writable(20);