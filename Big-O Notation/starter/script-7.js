function booooo(n) {
	for (let i = 0; i < n.length; i++) {
		console.log('booooo!');
	}
}

// Space complexity: O(1)
// 只有 i 這個變數
booooo([1, 2, 3, 4, 5]);

function arrayOfHiNTimes(n) {
	const hiArray = [];

	for (let i = 0; i < n; i++) {
		hiArray[i] = 'hi';
	}

	return hiArray;
}

// Space complexity: O(n)
// hiArray 這個 array 的變數
arrayOfHiNTimes(6);
