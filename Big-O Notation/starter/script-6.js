function printAllNumbersThenAllPairSums(numbers) {
	console.log('These are the numbers: ');
	numbers.forEach(function (number) {
		console.log(number);
	});

	console.log('and these are their sums: ');
	numbers.forEach(function (firstNumber) {
		numbers.forEach(function (secondNumber) {
			console.log(firstNumber + secondNumber);
		});
	});
}

// O(n + n ^ 2) = O(n ^ 2)

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);
