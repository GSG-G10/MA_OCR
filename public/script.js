const ocrForm = document.querySelector('#ocr-form');
const select = document.querySelector('#select');
const ocrUrl = document.querySelector('#ocr-url');
const language = document.querySelector('#language');
const textArea = document.querySelector('textarea');
ocrForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (select.value == 'file') {
        fetch('/ocr/file', {
                body: new FormData(ocrForm),

                method: 'post',
            }).then((response) => response.json())
            .then((data) => {
                if (textArea.firstChild)
                    textArea.removeChild(textArea.firstChild);
                textArea.appendChild(document.createTextNode(data == '' ? 'The img doesn\'t include any text...' : data));
            }).catch(err => console.log(err));
    } else {
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
                if (textArea.firstChild)
                    textArea.removeChild(textArea.firstChild);
                textArea.appendChild(document.createTextNode(data == '' ? 'The img doesn\'t include any text...' : data));
            }).catch(err => console.log(err));
    }
});