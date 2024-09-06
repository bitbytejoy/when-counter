import { Data } from "./Data";
import { thenRenderCounter } from "./thenRenderCounter";

export function whenAppStarts(data: Data) {
	thenRenderCounter(data);
}

