import { Data } from "./Data";
import { whenIncrementClicked } from './whenIncrementClicked';
import { runCreateCounter } from "./runCreateCounter";

export function thenRenderCounter(data: Data) {
	const counter = runCreateCounter(data.count, () => whenIncrementClicked(data));
	data.counters.push(counter);
}

