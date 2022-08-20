const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(1000).fill('nemo');

function findNemo(array) {
	const t0 = performance.now();

	for (let i = 0; i < array.length; i++) {
		if (array[i] === 'nemo') {
			console.log('Found Nemo');
		}
	}

	// if (array.includes('nemo')) {
	// 	console.log('Found Nemo');
	// }

	const t1 = performance.now();

	console.log('Call to find Nemo took ', t1 - t0);
}

function findNemo2(array) {
	array.forEach(item => {
		if (item === 'nemo') {
			console.log('Found Nemo2');
		}
	});
}

function findNemo3(array) {
	for (let fish of array) {
		if (fish === 'nemo') {
			console.log('Found Nemo3');
		}
	}
}

findNemo(everyone); // O(n), Linear time
findNemo2(everyone); // O(n), Linear time
findNemo3(everyone); // O(n), Linear time

const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
	console.log(boxes[0]); // O(1)
	console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2)
