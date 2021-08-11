/* eslint-disable no-undef */
const ocrForm = document.querySelector('#ocr-form');
const select = document.querySelector('#select');
const ocrUrl = document.querySelector('#ocr-url');
const language = document.querySelector('#language');
const textArea = document.querySelector('textarea');
const imgContainer = document.querySelector('#ocr-img-container');
const ocrImg = imgContainer.firstElementChild;
const ocrFile = document.querySelector('#file');

const imgRenderFile = () => {
    if (ocrFile.files && ocrFile.files[0]) {
        ocrImg.src = URL.createObjectURL(ocrFile.files[0]);
        ocrImg.style.display = 'block';
    } else ocrImg.src = './img/defalut.png';
}
ocrForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (select.value == 'file') {
        if (ocrFile.files && ocrFile.files[0]) {
            fetch('/ocr/file', {
                    body: new FormData(ocrForm),
                    method: 'post',
                }).then((response) => response.json())
                .then((data) => {
                    if (textArea.firstChild) textArea.removeChild(textArea.firstChild);
                    textArea.appendChild(document.createTextNode(data == '' ? 'The img doesn\'t include any text...' : data));
                }).catch((err) => console.log(err));
        }

    } else {
        if (ocrUrl.value != '') {
            fetch('/ocr/url', {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        link: ocrUrl.value,
                        lang: language.value,
                    }),
                    method: 'post',
                }).then((response) => response.json())
                .then((data) => {
                    if (textArea.firstChild) textArea.removeChild(textArea.firstChild);
                    textArea.appendChild(document.createTextNode(data == '' ? 'The img doesn\'t include any text...' : data));
                }).catch((err) => console.log(err));
        }

    }
});

const changeFileUrl = document.querySelector('.type-select');
const inputField = document.querySelector('.input-img-input');
const urlInput = document.querySelector('.url-input');
const textLabel = document.querySelector('.input-img-label');
const btnSubmit = document.querySelector('.input-btn');

changeFileUrl.addEventListener('click', () => {
    const typeFile = select.options[select.selectedIndex].value;
    if (typeFile === 'file') {
        urlInput.style.display = 'none';
        inputField.style.display = 'block';
        textLabel.textContent = 'Choose your Picture';
    } else if (typeFile === 'url') {
        inputField.style.display = 'none';
        urlInput.style.display = 'block';
        textLabel.textContent = 'Enter Picture Url';
    }
});

const imgRenderUrl = () => {
    ocrImg.src = ocrUrl.value;
};

const imgErrHandler = () => {
    ocrImg.src = './img/defalut.png';
}


btnSubmit.addEventListener('click', () => {
    const validEmail = urlInput.value.includes('https://www.google.com');
    if (urlInput.value === '') {
        urlInput.placeholder = 'This Field cannot be empty !';
    } else if (validEmail === false) {
        urlInput.placeholder = 'Please Enter a Valid Link ! ';
    }
});