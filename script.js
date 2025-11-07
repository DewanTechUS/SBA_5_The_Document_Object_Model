"use strict"; // strict mode for better error checking and to avoid common mistakes 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
// Dewan Mahmud Rocky
// this is a note is for who use my codes but dont mention me
// please give me credits if you are using my codes or acknowledge me in your project
// i spent a lot of time and effort to write these codes and i would appreciate it 
// check my notes.js file for more notes
// thank you.
//DFMR
//---------------------------------------------------------------------
// take/grab elements from html file
// now i have handles to all the ids added in HTML. i can use these handles to manipulate the DOM elements
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// w3schools reference: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
// stackoverflow reference: https://stackoverflow.com/questions/10192391/what-does-document-getelementbyid-do-in-javascript
// i am adding a cheat sheet so that you dont forget these things 
// https://htmlcheatsheet.com/js/ // javascript cheat sheet to call DOM elements and other things
//---------------------------------------------------------------------
const form = document.getElementById("post-form"); // form element
 const postIdInput = document.getElementById("post-id"); // post ID input
 const titleInput = document.getElementById("title"); // title input
const contentInput = document.getElementById("content"); // content input
//------------------------
 const formTitle = document.getElementById("form-title"); // form title
   const saveBtn = document.getElementById("save-btn"); // save button
 const cancelEditBtn = document.getElementById("cancel-edit-btn"); // cancel edit button
//--
 const formErrors = document.getElementById("form-errors"); // form errors div
const titleError = document.getElementById("title-error"); // title error div
const contentError = document.getElementById("content-error"); // content error div
//--
const postsDiv = document.getElementById("posts"); // posts container
  const emptyMsg = document.getElementById("empty-message"); // empty message
  const DFMRFooter = document.getElementById("DFMR-footer"); // DFMR footer
//------------------------
// now i have handles to all the ids added in HTML.
// i can use these handles to manipulate the DOM elements
//------
// global array to store blog posts // in real applications, this data would come from a server or database when i will working with backend
// ref mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// ref w3schools: https://www.w3schools.com/js/js_arrays.asp
// ref stackoverflow: https://stackoverflow.com/questions/5223/what-is-an-array-in-javascript
// i need one place to store posts before saving or rendering. // so i am using an array here
let blogPosts = []; // array to store blog posts
//----
// Load saved posts from localStorage // this is a refertence from our teacher's lecture notes Mr. Bryan Sontos
// ref mdn: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// ref w3schools: https://www.w3schools.com/jsref/prop_win_localstorage.asp
// ref stackoverflow: https://stackoverflow.com/questions/5224906/how-to-save-javascript-array-to-localstorage

function loadPosts() {
  // get saved posts from localStorage

                // when i refresh, it should bring back my any saved posts.
    const saved = localStorage.getItem("blog-posts");

  if (saved) {

    blogPosts = JSON.parse(saved); // converting string back to array
  } else {
blogPosts = []; // no saved posts, empty array
  }
}

//console.log("localStorage testing", blogPosts); // i am testing
// console.log to check if loading works
// Save posts to localStorage
// this is a refertence from our teacher's lecture notes Mr. Bryan Sontos
// ref mdn: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// ref w3schools: https://www.w3schools.com/jsref/prop_win_localstorage.asp
// ref stackoverflow: https://stackoverflow.com/questions/5224906/how-to-save-javascript-array-to-localstorage
// MDN - JSON.stringify() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// this referance is haved in notes.js file also
function savePosts() {

  const json = JSON.stringify(blogPosts);  // this is my instructor Bryan Santos instruction stringify-setItem // convert array to string
  
  localStorage.setItem("blog-posts", json);
}
//console.log("localStorage saving testing", blogPosts); // i am testing in console

// should show all posts on the page
function renderPosts() {

  postsDiv.innerHTML = "";

  // no posts, show message in console
  // display message/ logic
  if (blogPosts.length === 0) {
    emptyMsg.style.display = "block";
    
    //console.log("no posts."); testing it in console
    
    return;

  } else {
    emptyMsg.style.display = "none";
  }

  // testing
  // console.log("Rendering posts:", blogPosts);
}
