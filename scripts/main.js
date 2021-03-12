window.addEventListener('load', () => {

    const button = document.querySelector('.createBtn');
    const genderOptions = document.querySelectorAll('.gender__option');
    const formContainer = document.querySelector('#formScreen');
    const genderContainer = document.querySelector('#genderScreen')
    

    genderOptions.forEach(option => {
        option.addEventListener('click', optionClickHandler);
    });

    function optionClickHandler(event) {

        genderOptions.forEach(option => {
            option.classList.remove('gender__option--active');
        });

        event.target.classList.add('gender__option--active');

        button.disabled = false;
    }

    button.addEventListener('click', buttonClickHandler);
    function buttonClickHandler(event) {
        formContainer.classList.remove('inactive');
        genderContainer.classList.add('inactive');

        const selectedOption = document.querySelector('.gender__option--active');
        const isMale = selectedOption.dataset.ismale == 'true';
        console.log(selectedOption.dataset.ismale);

        const img = formContainer.querySelector('img');
        const genderText = formContainer.querySelector('h2');

        if(isMale) {
            formContainer.classList.add('container--reverse');
            img.setAttribute('src', './assets/boy.png');
            genderText.innerText = 'BOY';
        } else {
            img.setAttribute('src', './assets/girl.png');
            genderText.innerText = 'GIRL';
        }
        button.disabled = true;
    }
});