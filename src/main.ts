import { Data } from './Data';
import './style.css'
import { whenAppStarts } from './whenAppStarts';

function main() {
	const data: Data = {
		count: 0,
		counters: [],
	};

	whenAppStarts(data);
}

main();
