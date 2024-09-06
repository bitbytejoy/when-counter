import { runCreateElement } from "./runCreateElement";

export function runCreateCounter(count: number, onIncrement: () => void): Element {
	const counter = runCreateElement(`
		<div style="display: flex; flex-direction: column; align-items: center;">
			<h1 style="text-align: center;">${count}</h1>
			<div>
				<button>Increment</button>
			</div>
		</div>
 `);

	const incrementButton = counter.querySelector("button");

	if (incrementButton instanceof HTMLButtonElement) {
			incrementButton.onclick = () => onIncrement();
	}

	document.body.append(counter);

	return counter;
}

