function userWords(str) {
    return str.trim().split(/\s+/).map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}

function validFullName(name) {
    return /^[A-ZА-Я][a-zа-я]*(?:[-\s][A-ZА-Я][a-zа-я]*)*$/.test(name);
}

function fullName(promptMassage) {
    while (true) {
        let user = prompt(promptMassage).trim();
        user = userWords(user);
        if (validFullName(user)) {
            return user;
        } else {
            alert('Try again!');
        }
    }
}

let userName = fullName('Enter your name:');
let userSurname = fullName('Enter your surname:');
document.write(`Full name: ${userName} ${userSurname} <br>`);


function userEmail(em) {
    return em.replace(/\s+/g, '').toLowerCase();
}

function validEmail(email) {
    let emailTrue = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.includes('@')) {
        return `not valid email <b>${email}</b> (symbol @ not exist)`;
    } else if (email.indexOf('@') === 0) {
        return `not valid email <b>${email}</b> (symbol @ find in first place)`;
    } else if (email.indexOf('@') === email.length - 1) {
        return `not valid email <b>${email}</b> (symbol @ find in last place)`;
    } else if (!emailTrue.test(email)) {
        return `not valid email <b>${email}</b>`;
    }
    return null;
}

function Email(promptMessage) {
    while (true) {
        let email = prompt(promptMessage).trim();
        email = userEmail(email);
        let validEm = validEmail(email);
        if (validEm === null) {
            return email;
        } else {
            return validEm;
        }
    }
}

let email = Email('Enter your email:');
document.write(`Email: ${email} <br>`);

function userAge(promptMessage) {
    while (true) {
        let userYear = prompt(promptMessage).replace(/\s+/g, '');
        let year = parseInt(userYear, 10);
        if (!isNaN(year) && year >= 1900 && year <= new Date().getFullYear()) {
            return year;
        } else {
            alert('Invalid year, try again!');
        }
    }
}

let yearBirth = userAge('Enter your year of birth:');
let age = new Date().getFullYear() - yearBirth;
document.write(`Age: ${age}`);



