const form = document.querySelector('#shortenForm');
const shortenCard = document.querySelector('#shortenCard');
const inputUrl = document.querySelector('#url');
const btnShortenUrl = document.querySelector('#btnShortenUrl');

const errorMessages = {
    'INVALID_ARG_URL': "Impossible to shorten this link. It is not a valid url",
    'MISSING_ARG_URL': "Please provide a valid URL"
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    fetch('/ajax/shorten', {
        method: 'POST',
        body: new FormData(e.target)
    })
        .then(response => response.json())
        .then(handleData);
});

const handleData = function(data) {
    // ERROR
    if (data.statusCode >= 400) {
        return handleError(data);
    }

    inputUrl.value = data.link;
    btnShortenUrl.innerText = "Copy";

    btnShortenUrl.addEventListener('click', function(e) {
       e.preventDefault();

       inputUrl.select();
       document.execCommand('copy');

       this.innerText = "Shorten URL";
    }, { once: true });
}

const handleError = function(data) {
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-danger', 'mt-2');
    alert.innerText = errorMessages[data.statusText];

    shortenCard.after(alert);
}