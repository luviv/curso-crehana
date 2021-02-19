window.addEventListener('load', () => {

    const button = document.querySelector('.createBtn');
    const genderOptions = document.querySelectorAll('.gender__option');
    console.log(genderOptions);
    
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
});