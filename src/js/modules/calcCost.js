const calcCost = (size, material, options, promocode, result) => {
	const sizeSelectElem = document.querySelector(size),
		materialSelectElem = document.querySelector(material),
		optionsSelectElem = document.querySelector(options),
		promocodeElem = document.querySelector(promocode),
		totalCostElem = document.querySelector(result);

	let totalCost = 0;

	const calcCost = () => {
		totalCost = Math.round((+sizeSelectElem.value) * (+materialSelectElem.value) + (+optionsSelectElem.value));

		if (sizeSelectElem.value == '' || materialSelectElem.value == '') {
			totalCostElem.textContent = 'Пожалуйста, выберите размер и материал картины';
		} else if (promocodeElem.value == 'IWANTPOPART') {
			totalCostElem.textContent ='Со скидкой: ' + (Math.round(totalCost * 0.7));
		} else {
			totalCostElem.textContent = totalCost;
		}
	};

	sizeSelectElem.addEventListener('change', calcCost);
	materialSelectElem.addEventListener('change', calcCost);
	optionsSelectElem.addEventListener('change', calcCost);
	promocodeElem.addEventListener('input', calcCost);

};

export default calcCost;
