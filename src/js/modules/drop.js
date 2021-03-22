import { postData } from '../services/requests';

const drop = () => {
	const fileInputs = document.querySelectorAll('[name="upload"]');

	['dragenter', 'dragleave', 'dragover', 'drop'].forEach((eventName) => {
		fileInputs.forEach((input) => {
			input.addEventListener(eventName, preventDefaults, false);
		});
	});

	function preventDefaults(event) {
		event.preventDefault();
		event.stopPropagation();
	}

	function highlight(item) {
		item.closest('.file_upload').style.border = '1px dotted yellow';
		item.closest('.file_upload').style.backgroundColor = 'rgba(248, 233, 232, 0.7)';
	}
	function unhighlight(item) {
		item.closest('.file_upload').style.border = '';
		item.closest('.file_upload').style.backgroundColor = 'inherit';
	}

	['dragenter', 'dragover'].forEach((eventName) => {
		fileInputs.forEach((input) => {
			input.addEventListener(eventName, () => highlight(input), false);
		});
	});

	['dragleave', 'drop'].forEach((eventName) => {
		fileInputs.forEach((input) => {
			input.addEventListener(eventName, () => unhighlight(input), false);
		});
	});

	fileInputs.forEach((input) => {
		input.addEventListener('drop', (event) => {
			input.files = event.dataTransfer.files;

			if (input.getAttribute('data-upload') === 'firstUpload') {

				let formData = new FormData();

				[...input.files].forEach((file) => {
					formData.append('image', file);
					postData('assets/server.php', formData)
						.then((res) => {
							console.log(res);
						})
						.catch((err) => console.log(err));
				});
			}

			let dots;
			const arr = input.files[0].name.split('.');
			dots = arr[0].length > 6 ? '...' : '.';
			const imgName = arr[0].substring(0, 6) + dots + arr[1];
			input.previousElementSibling.textContent = imgName;
		});
	});
};
export default drop;
