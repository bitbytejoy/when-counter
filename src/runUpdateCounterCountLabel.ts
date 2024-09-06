export function runUpdateCounterCountLabel(counter: Element, count: number) {
	const countLabel = counter.querySelector("h1");
	if (countLabel) {
		countLabel.innerText = count.toString();
	}
}

