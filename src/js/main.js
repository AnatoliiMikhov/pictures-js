import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import maskInput from './modules/maskInput';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calcCost from './modules/calcCost';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	modals();
	sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
	sliders('.main-slider-item', 'vertical');
	forms();
	maskInput('[name=phone]');
	checkTextInputs('[name=name]');
	checkTextInputs('[name=message]');
	showMoreStyles('.button-styles', '#styles .row');
	calcCost('#size', '#material', '#options', '.calc-form .promocode', '.calc-form .calc-price');
	filter();
	pictureSize('.sizes-block');
	accordion('.accordion-heading');
	burger('.burger-menu', '.burger');
});
