const input = document.querySelector('.inputfile');
const label = input.nextElementSibling;
const labelVal = label.innerHTML;
const ocrForm = document.querySelector('#ocr-form');
const select = document.querySelector('#select');
const ocrUrl = document.querySelector('#ocr-url');
const language = document.querySelector('#language');
input.addEventListener('change', function(e) {
    var fileName = '';
    if (this.files && this.files.length > 1)
        fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
    else
        fileName = e.target.value.split('\\').pop();

    if (fileName)
        label.querySelector('span').innerHTML = fileName;
    else
        label.innerHTML = labelVal;
});

ocrForm.addEventListener('submit', (e) => {
    console.log('hello');
    e.preventDefault();
    if (select.value == 'file') {
        fetch(`/ocr/file`, {
                body: new FormData(ocrForm),

                method: "post",
            }).then(response => response.json())
            .then(data => console.log(data));
    } else {
        fetch(`/ocr/url`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    link: ocrUrl.value,
                    lang: language.value
                }),

                method: "post",
            }).then(response => response.json())
            .then(data => console.log(data));
    }

});