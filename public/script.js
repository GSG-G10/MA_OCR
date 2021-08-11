const ocrForm = document.querySelector('#ocr-form');
const select = document.querySelector('#select');
const ocrUrl = document.querySelector('#ocr-url');
const language = document.querySelector('#language');
const textArea = document.querySelector('textarea');
const imgContainer = document.querySelector('#ocr-img-container');
const ocrImg = imgContainer.firstElementChild;
const ocrFile = document.querySelector('#file');
console.log(ocrFile);
ocrImg.onerror = () => {
    imgContainer.appendChild(document.createTextNode('Select an img'));
    ocrImg.style.display = 'none';
};

const imgRender = () => {
    if (ocrFile.files && ocrFile.files[0]) {
        console.log('hell');
        ocrImg.src = URL.createObjectURL(ocrFile.files[0]);
        ocrImg.style.display = 'block';
    }
}
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