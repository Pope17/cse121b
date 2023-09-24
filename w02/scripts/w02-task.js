/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Ayrton Juárez";
let currentYear = date.getFullYear();
let profilePicture = "images/CVFOTO.jpeg";


/* Step 3 - Element Variables */
let nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
let imageElement = document.querySelector("#year");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ['Pizza', 'Pasta', 'Asado'];
let foodString = favoriteFoods.join(', ');
foodElement.innerHTML = foodString;
let anotherFavoriteFood = "Pollo";
favoriteFoods.push(anotherFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}</br>`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}</br>`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}</br>`;





