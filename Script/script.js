const myLibrary = [];
const libraryList = document.querySelector("#library");
const interaction = document.querySelector("#interaction");
const btnNewEntry = document.querySelector("#new-entry");
const dialog = document.querySelector("dialog");
const readButtons = document.querySelectorAll("buttonReadStatus");

//Modal elements

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

dialog.appendChild(divForm);
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
divFormButtons.classList.toggle("grid-form-buttons");
formForm.classList.toggle("grid-form");

// Book Constructor

function Book(title, author, genre, description, readStatus) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.description = description;
  this.readStatus = readStatus;
}

// Book Prototype

Book.prototype.setReadStatus = function () {
  if (this.readStatus === "read") {
    this.readStatus = "unread";
  } else if (this.readStatus === "unread" || this.readStatus === undefined) {
    this.readStatus = "read";
  }
};

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
  // Variables

  let divCard = document.createElement("div");
  let divCardLeftSection = document.createElement("div");
  let divCardRightSection = document.createElement("div");
  let divCardConatinerTitleAuthorGenre = document.createElement("div");
  let divCardTitle = document.createElement("p");
  let divCardAuthor = document.createElement("p");
  let divCardGenre = document.createElement("p");
  let pCardDescription = document.createElement("p");
  let divCardDesciption = document.createElement("div");
  let divCardReadToggle = document.createElement("div");

  let buttonCardReadStatus = document.createElement("button");
  let buttonCardRemove = document.createElement("button");
  // Setting Attributes

  buttonCardReadStatus.setAttribute("class", "buttonReadStatus");
  buttonCardRemove.setAttribute("class", "buttonCardRemove");
  // Adding Classes

  divCard.classList.toggle("card");
  divCardRightSection.classList.toggle("grid-row");
  divCardRightSection.classList.toggle("padding");
  divCardLeftSection.classList.toggle("divCardLeftSection");
  divCardReadToggle.classList.toggle("read-toggle");
  divCardDesciption.classList.toggle("overflow-auto");

  // Adding to the DOM

  libraryList.appendChild(divCard);
  divCard.appendChild(divCardLeftSection);
  divCard.appendChild(divCardRightSection);
  divCardRightSection.appendChild(divCardConatinerTitleAuthorGenre);
  divCardConatinerTitleAuthorGenre.appendChild(divCardTitle);
  divCardConatinerTitleAuthorGenre.appendChild(divCardAuthor);
  divCardConatinerTitleAuthorGenre.appendChild(divCardGenre);
  divCardRightSection.appendChild(divCardDesciption);
  divCardDesciption.appendChild(pCardDescription);
  divCardRightSection.appendChild(divCardReadToggle);
  divCardReadToggle.appendChild(buttonCardReadStatus);
  divCardReadToggle.appendChild(buttonCardRemove);

  //Adding Text

  divCardTitle.textContent = "Title: " + book.title;
  divCardAuthor.textContent = "Author: " + book.author;
  divCardGenre.textContent = "Genre: " + book.genre;
  pCardDescription.textContent = "Descirption: " + book.description;
  buttonCardReadStatus.textContent = "Read";
  buttonCardRemove.textContent = "Remove";

  buttonCardRemove.addEventListener("click", function (e) {});
}

btnNewEntry.addEventListener("click", function (e) {
  dialog.showModal();
});

buttonFormCancel.addEventListener("click", function (e) {
  dialog.close();
});

// submit Button Listener

buttonFormSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  dialog.close();
  const newBook = new Book(
    inputTitle.value,
    inputAuthor.value,
    inputGenre.value,
    inputDescription.value
  );
  addBookToLibraryDom(newBook);
  addBookToLibraryArray(newBook);
  newBook.index = myLibrary.length - 1;
});

addBookToLibraryArray(book1);
addBookToLibraryArray(book2);
addBookToLibraryArray(book3);
addBookToLibraryArray(book4);

for (let i = 0; i < myLibrary.length; i++) {
  myLibrary[i].index = i;
}
for (book of myLibrary) {
  addBookToLibraryDom(book);
}
console.log(myLibrary);

const removeButtons = document.querySelectorAll(".buttonCardRemove");

libraryList.addEventListener("click", function (e) {
  if (e.target.classList.contains("buttonCardRemove")) {
    e.preventDefault();
    const card = e.target.closest(".card");
    const index = Array.from(libraryList.children).indexOf(card);
    removeBookFromLibrary(index);
    libraryList.removeChild(card);
  }
});

libraryList.addEventListener("click", function (e) {
  if (e.target.classList.contains("buttonReadStatus")) {
    e.preventDefault();
    const card = e.target.closest(".card");
    const index = Array.from(libraryList.children).indexOf(card);
    myLibrary[index].setReadStatus();
    console.log(myLibrary[index]);
    card.classList.toggle("card-read");
    if (e.target.textContent === "Read") {
      e.target.textContent = "Unread";
    } else if (e.target.textContent === "Unread") {
      e.target.textContent = "Read";
    }
  }
});

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
}
