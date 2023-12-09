const myLibrary = [];
const libraryList = document.querySelector("#library");
const interaction = document.querySelector("#interaction");
const btnNewEntry = document.querySelector("#new-entry");

function Book(title, author, genre, description) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.description = description;
}

let book1 = new Book(
  "The Hunger Games",
  "Suzanne Collins",
  "Fantasy",
  "Could you survive on your own in the wild, with every one out to make sure you don't live to see the morning? In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love."
);

let book2 = new Book(
  "Harry Potter and the Order of the Phoenix",
  "J.K. Rowling",
  "Fiction",
  "Harry Potter is about to start his fifth year at Hogwarts School of Witchcraft and Wizardry. Unlike most schoolboys, Harry never enjoys his summer holidays, but this summer is even worse than usual. The Dursleys, of course, are making his life a misery, but even his best friends, Ron and Hermione, seem to be neglecting him. Harry has had enough. He is beginning to think he must do something, anything, to change his situation, when the summer holidays come to an end in a very dramatic fashion. What Harry is about to discover in his new year at Hogwarts will turn his world upside down..."
);

let book3 = new Book(
  "Pride and Prejudice",
  "Jane Austen",
  "Classics",
  'Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work "her own darling child" and its vivacious heroine, Elizabeth Bennet, "as delightful a creature as ever appeared in print." The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen\'s radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.'
);

let book4 = new Book(
  "Twilight",
  "Stephenie Meyer",
  "Vampires",
  "About three things I was absolutely positive. First, Edward was a vampire. Second, there was a part of him - and I didn't know how dominant that part might be - that thirsted for my blood. And third, I was unconditionally and irrevocably in love with him.Deeply seductive and extraordinarily suspenseful, Twilight is a love story with bite."
);

function addBookToLibraryArray(book) {
  return myLibrary.push(book);
}

function addBookToLibraryDom(book) {
  let divCard = document.createElement("div");
  let divCardLeftSection = document.createElement("div");
  let divCardRightSection = document.createElement("div");
  let divCardTitle = document.createElement("p");
  let divCardAuthor = document.createElement("p");
  let divCardGenre = document.createElement("p");
  let pCardDescription = document.createElement("p");
  let divCardDesciption = document.createElement("div");
  let divCardReadToggle = document.createElement("div");
  let pCardReadToggle = document.createElement("p");
  let inputCboxCardReadToggle = document.createElement("input");

  inputCboxCardReadToggle.setAttribute("type", "checkbox");

  divCard.classList.toggle("card");
  divCardRightSection.classList.toggle("grid-row");
  divCardRightSection.classList.toggle("padding");
  divCardLeftSection.classList.toggle("divCardLeftSection");
  divCardReadToggle.classList.toggle("read-toggle");
  inputCboxCardReadToggle.classList.toggle("checkbox");
  pCardReadToggle.classList.toggle("center");
  divCardDesciption.classList.toggle("overflow-auto");

  libraryList.appendChild(divCard);
  divCard.appendChild(divCardLeftSection);
  divCard.appendChild(divCardRightSection);
  divCardRightSection.appendChild(divCardTitle);
  divCardRightSection.appendChild(divCardAuthor);
  divCardRightSection.appendChild(divCardGenre);
  divCardRightSection.appendChild(divCardDesciption);
  divCardDesciption.appendChild(pCardDescription);
  divCardRightSection.appendChild(divCardReadToggle);
  divCardReadToggle.appendChild(pCardReadToggle);
  divCardReadToggle.appendChild(inputCboxCardReadToggle);

  divCardTitle.textContent = "Title: " + book.title;
  divCardAuthor.textContent = "Author: " + book.author;
  divCardGenre.textContent = "Genre: " + book.genre;
  pCardDescription.textContent = "Descirption: " + book.description;
  pCardReadToggle.textContent = "Book Read: ";
}

btnNewEntry.addEventListener("click", function (e) {
  // Removing the Button that is the Event Listener - will be addes again with Submit Reset Button

  interaction.removeChild(btnNewEntry);

  // defining Elements

  let divForm = document.createElement("div");
  let formForm = document.createElement("form");
  let labelTitle = document.createElement("label");
  let labelAuthor = document.createElement("label");
  let labelDescription = document.createElement("label");
  let labelGenre = document.createElement("label");
  let inputTitle = document.createElement("input");
  let inputAuthor = document.createElement("input");
  let inputDescription = document.createElement("textarea");
  let inputGenre = document.createElement("input");
  let divFormTitle = document.createElement("div");
  let divFormAuthor = document.createElement("div");
  let divFormGenre = document.createElement("div");
  let divFormDescription = document.createElement("div");
  let divFormButtons = document.createElement("div");
  let buttonFormSubmit = document.createElement("button");
  let buttonFormReset = document.createElement("button");
  let buttonFormCancel = document.createElement("button");

  // Setting Attributes

  formForm.setAttribute("method", "post");
  formForm.setAttribute("action", "./test.html");

  labelTitle.setAttribute("for", "title");
  inputTitle.setAttribute("id", "title");
  inputTitle.setAttribute("name", "title");
  inputTitle.setAttribute("type", "text");

  labelAuthor.setAttribute("for", "author");
  inputAuthor.setAttribute("id", "author");
  inputAuthor.setAttribute("name", "author");
  inputAuthor.setAttribute("type", "text");

  labelGenre.setAttribute("for", "genre");
  inputGenre.setAttribute("id", "genre");
  inputGenre.setAttribute("name", "genre");
  inputGenre.setAttribute("type", "text");

  labelDescription.setAttribute("for", "description");
  inputDescription.setAttribute("id", "description");
  inputDescription.setAttribute("name", "description");
  inputDescription.setAttribute("rows", "15");

  buttonFormSubmit.setAttribute("type", "submit");
  buttonFormSubmit.setAttribute("id", "button-submit");
  buttonFormReset.setAttribute("type", "reset");
  buttonFormCancel.setAttribute("type", "button");

  // Appends

  interaction.appendChild(divForm);
  divForm.appendChild(formForm);
  formForm.appendChild(divFormTitle);
  formForm.appendChild(divFormAuthor);
  formForm.appendChild(divFormGenre);
  formForm.appendChild(divFormDescription);
  formForm.appendChild(divFormButtons);
  divFormTitle.appendChild(labelTitle);
  divFormTitle.appendChild(inputTitle);
  divFormAuthor.appendChild(labelAuthor);
  divFormAuthor.appendChild(inputAuthor);
  divFormGenre.appendChild(labelGenre);
  divFormGenre.appendChild(inputGenre);
  divFormDescription.appendChild(labelDescription);
  divFormDescription.appendChild(inputDescription);
  divFormButtons.appendChild(buttonFormSubmit);
  divFormButtons.appendChild(buttonFormReset);
  divFormButtons.appendChild(buttonFormCancel);

  // adding text

  labelTitle.textContent = "Title: ";
  labelAuthor.textContent = "Author: ";
  labelGenre.textContent = "Genre: ";
  labelDescription.textContent = "Description: ";
  buttonFormSubmit.textContent = "Submit";
  buttonFormReset.textContent = "Reset";
  buttonFormCancel.textContent = "Cancel";

  // setting the classes
  divFormTitle.classList.toggle("grid-form-inputs");
  divFormAuthor.classList.toggle("grid-form-inputs");
  divFormGenre.classList.toggle("grid-form-inputs");
  divFormDescription.classList.toggle("grid-form-description");

  // submit Button Listener
  buttonFormSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    const newBook = new Book(
      inputTitle.value,
      inputAuthor.value,
      inputGenre.value,
      inputDescription.value
    );
    addBookToLibraryDom(newBook);
  });
});

addBookToLibraryArray(book1);
addBookToLibraryArray(book2);
addBookToLibraryArray(book3);
addBookToLibraryArray(book4);

for (book of myLibrary) {
  addBookToLibraryDom(book);
}
console.log(myLibrary);
