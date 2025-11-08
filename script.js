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
    // create post elements and add to postsDiv
    // loop through blogPosts array and create elements for each post // ref mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    // forEach reference from w3schools: https://www.w3schools.com/jsref/jsref_foreach.asp
// forEach reference from stackoverflow: https://stackoverflow.com/questions/201183/how-to-loop-through-an-array-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// MDN - Node.appendChild()
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

    // i am using forEach to loop through the array and create elements for each post
    // some references are using var instead of const. var is a old so use const//
    // from blogPosts show HTML.
    blogPosts.forEach(function (post) {
    
        const box = document.createElement("div"); 
    
    box.className = "post"; // add class to post bx
    
    box.dataset.id = post.id;
                                // id attr
    const titleEl = document.createElement("h3");
    titleEl.textContent = post.title;
                                         // title element / i am using h3 for title
              const timeEl = document.createElement("small"); // timestamp element // dont forget small tag//
    
    timeEl.textContent = "Created: " + post.timestamp;
        // timestamp
    const contentEl = document.createElement("p");
          contentEl.textContent = post.content;
             // content
    const editBtn = document.createElement("button");
    
                     editBtn.textContent = "Edit";
    
    editBtn.className = "edit-btn";
        editBtn.onclick = function () {
      startEdit(post.id);
    };
// edit btn
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
      deletePost(post.id);
    };
    // i will add event listeners later for edit and delete buttons
// delete btn
    box.appendChild(titleEl);

   box.appendChild(timeEl);
   
 box.appendChild(contentEl);
    box.appendChild(editBtn);
      box.appendChild(deleteBtn); 

postsDiv.appendChild(box); // append post box to posts container
  });


}

// handle form submission 
// i will` add validation here later
//error messages/styles // clear previous errors
// ref mdn https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// ref w3schools https://www.w3schools.com/jsref/prop_element_classlist.asp
// ref stackoverflow https://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript 
// ref youtube https://www.youtube.com/watch?v=In0nB0ABaUk
function clearErrors() { 
  formErrors.textContent = ""; // clear form errors
  
  titleError.textContent = "";
  contentError.textContent = ""; // i am clearing title and content errors but i can add more if needed but giving only these two for now
 // clear field-specific errors // title and content errors
  titleInput.classList.remove("input-error"); // i am removing input-error class if exists
  contentInput.classList.remove("input-error");
}
// ref youtube https://www.youtube.com/watch?v=In0nB0ABaUk // took help from this video for validation
// ref w3schools https://www.w3schools.com/jsref/prop_element_classlist.asp
                                   // Check required fields
//
function validateForm() {
  let ok = true;
// assume form is valid
  if (title.value === "") {
    alert("Please enter a title.");
    ok = false;
  }

  if (content.value === "") {
    alert("Please enter some content.");
    ok = false;
  }

  return ok;
}
 // reset form 
 // check ref notes.js file for references
// function resetForm() { // reset form as per requirement of lesson // i lost my self here // ref mdn https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// ref w3schools https://www.w3schools.com/jsref/prop_element_classlist.asp
// ref stackoverflow https://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript 
function resetForm() {
  postIdInput.value = "";
  titleInput.value = "";
  contentInput.value = "";
  formTitle.textContent = "Create New Post";
  saveBtn.textContent = "Save Post";
  cancelEditBtn.style.display = "none";
}
// handle form submit event` // ref event listener references
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// ref w3schools https://www.w3schools.com/jsref/met_element_addeventlistener.asp
// ref stackoverflow https://stackoverflow.com/questions/6348493/what-does-addeventlistener-do-in-javascript
// i am preventing default behavior of form submission to avoid page refresh
// i will handle form submission manually
// ref mdn https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
// ref w3schools https://www.w3schools.com/jsref/event_preventdefault.asp
// ref stackoverflow https://stackoverflow.com/questions/5963669/what-is-the-use-of-event-preventdefault-in-javascript
// ref youtube https://www.youtube.com/watch?v=PqAaHf7JKls
form.addEventListener("submit", function (event) {
  event.preventDefault(); // should stop page refresh
  // i need to get form values
  let title = titleInput.value; 
  let content = contentInput.value;
  let editingId = postIdInput.value; // if empty = new post // 

  // check if title or content is empty
if (title === "" || content === "") { // title or content is empty
    alert("Please enter a title and content.");
    return; // stop here
  }

if (editingId === "") {
    // new post
    let newPost = {
   id: Date.now().toString(),
   title: title,
     content: content,
      timestamp: new Date().toLocaleString()


    };

    blogPosts.push(newPost); // add new post
  } else {
    // editold post
    let post = blogPosts.find(function (p) {
      return p.id === editingId;
    });

if (post) {
         post.title = title;
post.content = content;
      post.timestamp = new Date().toLocaleString();
    }
  }
  
      savePosts();  
   renderPosts(); 
   resetForm();   
});
// load a post for edit it
// i am connecting the edit button to the form. 
// This function lets the user edit an existing blog post
function startEdit(id) {

  clearErrors();

  // post by ID
  let post = blogPosts.find(function (p) {
    return p.id === id;
  });

  if (!post) {
    return;
  }

     postIdInput.value = post.id;       
     titleInput.value = post.title;     
  contentInput.value = post.content; 

                          // form title and button text
  formTitle.textContent = "Edit Post";   
      saveBtn.textContent = "Update Post";    
  cancelEditBtn.style.display = "inline-block"; // show cancel button
}

//i am adding delete functionality// eventlistener for delete button
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// ref w3schools https://www.w3schools.com/jsref/met_element_addeventlistener.asp
cancelEditBtn.addEventListener("click", function () {
  resetForm(); // reset form on cancel
});
