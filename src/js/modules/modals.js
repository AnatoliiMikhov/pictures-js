import {showModals, showModalByTime, hideModals} from '../libs-js/modals-func';

const modals = () => {
	'use strict';

	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector);

		/* --------------------------------- events --------------------------------- */
		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
				showModals(modal);
			});
		});

		close.addEventListener('click', () => {
			hideModals();
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeClickOverlay) {
				hideModals();
			}
		});
	}

	bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
	showModalByTime('.popup-consultation', 60000);
};

export default modals;
