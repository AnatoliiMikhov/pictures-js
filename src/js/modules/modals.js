import { showModals, showModalByTime, hideModals } from '../libs-js/modals-func';

const modals = () => {
	'use strict';

	let btnPressed = false;

	function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector);

		/* --------------------------------- events --------------------------------- */
		trigger.forEach((item) => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}

				btnPressed = true;

				if (destroy) {
					item.remove();
				}

				hideModals();
				showModals(modal);
			});
		});

		close.addEventListener('click', () => {
			hideModals();
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				hideModals();
			}
		});
	}

	const openByScroll = (selector) => {
		window.addEventListener('scroll', () => {
			let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
			if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= scrollHeight) {
				document.querySelector(selector).click();
			}
		});
	};

	bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
	bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
	openByScroll('.fixed-gift');
	// showModalByTime('.popup-consultation', 5000);
};

export default modals;
