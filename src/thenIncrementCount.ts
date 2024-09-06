import { Data } from "./Data";
import { runUpdateCounterCountLabels } from "./runUpdateCounterCountLabels";

export function thenIncrementCount(data: Data) {
	data.count++;
	runUpdateCounterCountLabels(data.counters, data.count);
}

