const maskInput = (selector) => {
	'use strict';

	const setCursorPosition = (pos, elem) => {
		elem.focus();

		if (elem.setSelectionrange) {
			elem.setSelectionrange(pos, pos);
		} else if (elem.createTextRange) {
			let range = elem.createTextRange();
			range.collapse = true;
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}

		/* elem.addEventListener('click', (e) => {
			if (e.target) {
				if ((pos - 1) < 4) {
					elem.setSelectionRange(pos, pos);
				}
			}
		}); */
	};

	function createMask(event) {
		let matrix = '+380(__) ___ __ __',
			i = 0,
			def = matrix.replace(/\D/g, ''),
			val = this.value.replace(/\D/g, '');

		if (def.length >= val.length) {
			val = def;
		}

		this.value = matrix.replace(/./g, function (a) {
			return /[_\d]/.test(a) && i < val.length ?
				val.charAt(i++) :
				(i >= val.length ? '' : a);
		});

		if (event.type === 'blur') {
			if (this.value.length == 4) {
				this.value = '';
			}
		} else {
			setCursorPosition(this.value.length, this);
		}

	}

	let inputs = document.querySelectorAll(selector);
	inputs.forEach(input => {
		input.addEventListener('input', createMask);
		input.addEventListener('focus', createMask);
		input.addEventListener('blur', createMask);
	});
};

export default maskInput;
