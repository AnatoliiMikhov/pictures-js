'use strict';

const showModals = (elem) => {
	elem.style.display = 'block';
	document.body.style.overflow = 'hidden';
	document.body.style.marginRight = `${scrollWidth}px`;
};

const hideModals = () => {
	const windows = document.querySelectorAll('[data-modal]');
	windows.forEach(item => {
		item.style.display = 'none';
		document.body.style.overflow = '';
		document.body.style.marginRight = '0';
	});
};

const calcScroll = () => {
	let div = document.createElement('div');
	div.style.width = '50px';
	div.style.height = '50px';
	div.style.overflowY = 'scroll';
	document.body.appendChild(div);

	let scrollWidth = div.offsetWidth - div.clientWidth;
	div.remove();

	return scrollWidth;
};

const showModalByTime = (selector, time) => {
	setTimeout(() => {
		let display;

		document.querySelectorAll('[data-modal]').forEach(item => {
			if (getComputedStyle(item).display !== 'none') {
				display = 'block';
			}
		});

		if (!display) {
			document.querySelector(selector).style.display = 'block';
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = `${scrollWidth}px`;
		}
	}, time);
};

const scrollWidth = calcScroll();

export {showModals, showModalByTime, hideModals};
