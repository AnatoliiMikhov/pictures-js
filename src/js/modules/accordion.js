const accordion = (triggersSelector, contentSelector) => {
	const btns = document.querySelectorAll(triggersSelector),
		blocks = document.querySelectorAll(contentSelector);

	btns.forEach(btn => {
		btn.addEventListener('click', function () {

			if (!this.classList.contains('active-style')) {
				btns.forEach(btn => {
					btn.classList.remove('active-style');
				});

				blocks.forEach(block => {
					block.classList.remove('active-content');
					block.style.maxHeight = '0';
				});
			}

			this.classList.toggle('active-style');
			this.nextElementSibling.classList.toggle('active-content');

			if (this.classList.contains('active-style')) {
				this.nextElementSibling.style.maxHeight = (this.nextElementSibling.scrollHeight + 80) + 'px';
			} else {
				this.nextElementSibling.style.maxHeight = '0';
			}
		});
	});
};


export default accordion;
