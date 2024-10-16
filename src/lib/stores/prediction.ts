import { writable } from "svelte/store";

export let prediction = writable<string>("");
