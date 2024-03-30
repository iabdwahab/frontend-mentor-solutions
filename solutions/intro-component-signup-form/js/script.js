const submitBtn = document.querySelector('.form__submit-btn');
const inputFields = document.querySelectorAll('.form__input-field');

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  
  inputFields.forEach(field => {
    const parentElement = field.parentElement;


    if (!field.value) {
      parentElement.classList.add('form__field-container--error');
    }

    field.addEventListener('input', () => {

      if (parentElement.classList.contains('form__field-container--error')) {
        parentElement.classList.remove('form__field-container--error')
      }

    })

  })


})