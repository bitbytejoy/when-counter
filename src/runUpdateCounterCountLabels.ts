import { runUpdateCounterCountLabel } from "./runUpdateCounterCountLabel";

export function runUpdateCounterCountLabels(counters: Element[], count: number) {
	counters.forEach(counter => runUpdateCounterCountLabel(counter, count));
}

