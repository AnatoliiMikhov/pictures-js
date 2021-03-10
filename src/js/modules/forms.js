const forms = () => {
	'use strict';
	const form = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input'),
		textArea = document.querySelectorAll('textarea'),
		uploadInput = document.querySelectorAll('[name="upload"]');

	/* -------------------------------- messages -------------------------------- */

	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо. Данные отправлены.',
		failure: 'Данные не отправлены<br>Проверьте подключение к интернету...',
		spinner: 'assets/img/spinner.gif',
		ok: 'assets/img/ok.png',
		fail: 'assets/img/fail.png'
	};

	const path = {
		designer: 'assets/server.php',
		question: 'assets/question.php'
	};

	/* -------------------------------- post Data ------------------------------- */

	const postData = async (url, data = {}) => {

		let response = await fetch(url, {
			method: 'POST',
			body: data
		});
		return await response.text();
	};

	/* ------------------------------ clear inputs ------------------------------ */
	const clearFields = () => {
		inputs.forEach(item => {
			item.value = '';
		});

		textArea.forEach(item => {
			item.value = '';
		});

		uploadInput.forEach(item => {
			item.previousElementSibling.textContent = 'Файл не выбран';
		});
	};

/* ------------------------------- uploadInput ------------------------------ */
	uploadInput.forEach(item => {
		item.addEventListener('input', () => {
			let dots;
			const arr = item.files[0].name.split('.');

			dots = arr[0].length > 6 ? '...' : '.';
			const imgName = arr[0].substring(0, 6) + dots + arr[1];

			item.previousElementSibling.textContent = imgName;
		});
	});

	/* ------------------------------- submit form ------------------------------ */

	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.parentNode.appendChild(statusMessage);

			// item.classList.add('animated', 'fadeOutUp');
			setTimeout(() => {
				// item.style.display = 'none';
				item.style.opacity = 0;
			}, 400);

			let statusImg = document.createElement('img');
			statusImg.setAttribute('src', message.spinner);
			statusImg.classList.add('animated', 'fadeInUp');
			statusMessage.appendChild(statusImg);

			let textMessage = document.createElement('div');
			textMessage.textContent = message.loading;
			statusMessage.appendChild(textMessage);

			/* -------------------------------- formData -------------------------------- */
			const formData = new FormData(item);
			let api;
			api = item.closest('.popup-design') || item.classList.contains('calc_form') ?
				path.designer :
				path.question;

			console.log('the api: ' + api);

			postData(api, formData)
				.then(res => {
					console.log(res);
					statusImg.setAttribute('src', message.ok);
					textMessage.textContent = message.success;
				})
				.catch(() => {
					statusImg.setAttribute('src', message.fail);
					textMessage.innerHTML = message.failure;
				})
				.finally(() => {
					clearFields();
					setTimeout(() => {
						statusMessage.remove();
						item.style.opacity = 1;
						// item.style.display = 'block';
						// item.classList.remove('fadeOutUp');
						// item.classList.add('fadeIn');
					}, 3000);
				});
		});
	});
};

export default forms;