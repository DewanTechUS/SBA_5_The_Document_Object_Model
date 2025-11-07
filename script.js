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
const form = document.getElementById("post-form");
 const postIdInput = document.getElementById("post-id");
 const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
//--
 const formTitle = document.getElementById("form-title");
   const saveBtn = document.getElementById("save-btn");
 const cancelEditBtn = document.getElementById("cancel-edit-btn");
//--
 const formErrors = document.getElementById("form-errors");
const titleError = document.getElementById("title-error");
    const contentError = document.getElementById("content-error");
//--
const postsDiv = document.getElementById("posts");
  const emptyMsg = document.getElementById("empty-message");

  const DFMRFooter = document.getElementById("DFMR-footer");//DFMR
//------------------------
// now i have handles to all the ids added in HTML.
// i can use these handles to manipulate the DOM elements
