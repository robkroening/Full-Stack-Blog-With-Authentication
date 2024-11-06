// setups and targets
const peopleSection = document.getElementById('people-section');
const personForm = document.createElement('form');

// Creating the form to add a person
async function createNewPersonForm() {
    // form section
    // const personForm = document.createElement('form');
    personForm.setAttribute('id', 'newPersonForm');
    const firstNameDiv = document.createElement('div');
    const lastNameDiv = document.createElement('div');
    const emailDiv = document.createElement('div');
    // first name section
    const firstNameLabel = document.createElement('label');
    firstNameLabel.setAttribute('for', 'first_name');
    firstNameLabel.innerText = 'Input First Name:';
    const firstNameInput = document.createElement('input');
    firstNameInput.setAttribute('placeholder', 'First Name')
    firstNameInput.setAttribute('type', 'text');
    firstNameInput.setAttribute('name', 'first_name');
    firstNameInput.setAttribute('id', 'firstNameInput');
    // last name section
    const lastNameLabel = document.createElement('label');
    lastNameLabel.setAttribute('for', 'last_name');
    lastNameLabel.innerText = 'Input Last Name:';
    const lastNameInput = document.createElement('input');
    lastNameInput.setAttribute('placeholder', 'Last Name')
    lastNameInput.setAttribute('type', 'text');
    lastNameInput.setAttribute('name', 'last_name');
    lastNameInput.setAttribute('id', 'lastNameInput');
    // email section
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.innerText = 'Input Email:';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('placeholder', 'Email')
    emailInput.setAttribute('type', 'text');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('id', 'emailInput');
    // submit button section
    const peopleFormSubmitButton = document.createElement('input');
    peopleFormSubmitButton.setAttribute('type', 'submit');
    peopleFormSubmitButton.setAttribute('name', 'peopleFormSubmitButton');
    peopleFormSubmitButton.setAttribute('id', 'peopleFormSubmitButton');
    // appends section
    peopleSection.appendChild(personForm);
    personForm.appendChild(firstNameDiv);
    personForm.appendChild(lastNameDiv);
    personForm.appendChild(emailDiv);
    personForm.appendChild(peopleFormSubmitButton);
    firstNameDiv.appendChild(firstNameLabel);
    firstNameDiv.appendChild(firstNameInput);
    lastNameDiv.appendChild(lastNameLabel);
    lastNameDiv.appendChild(lastNameInput);
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);
    // event listener for submitting the form after it is created
    personForm.addEventListener('submit', submitNewPersonForm);
};
createNewPersonForm();

// submit form data for creating a new person to express server to go to database
async function submitNewPersonForm(e) {
    try {
        const url = `http://localhost:3030/people`;
        e.preventDefault();
        const formData = new FormData(personForm);
        const formDataObject = Object.fromEntries(formData.entries());
        const options = {
            method: "POST",
            mode: "cors",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formDataObject)
        };
        const response = await fetch(url, options);
        const person = await response.json();
    } catch (error) {
        console.log(error);
    }
};
