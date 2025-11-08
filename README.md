# SBA 5 - The Document Object Model
## Interactive Personal Blog Platform

## Author
Name: Dewan Mahmud (Rocky)  
Cohort: Per Scholas 2025-Software Engineer (MERN Stack)  
GitHub: [https://github.com/DewanTechUS](https://github.com/DewanTechUS)  
Portfolio: [https://dewantech.com](https://dewantech.com)

## Update
Added a modal pop-up feature with smooth open/close functionality and glowing CSS effects. Updated the HTML, CSS, and JavaScript files accordingly. It took quite a LOTS of effort to get everything working smoothly, but it was a great learning experience.

## Note
Please give proper credit if you use any part of my code in your project.
I’ve invested a lot of time and effort into developing these files - acknowledgment or a mention is always appreciated.
Thank you for respecting my work. DEWAN MAHMUD ROCKY

## Overview
This project is my completed work for SBA 5 — The Document Object Model (DOM).  
It is an Interactive Personal Blog Platform that allows users to:

- Create new posts  
- Edit or delete them  
- Save and load posts directly in the browser  

All data is stored using the localStorage, so posts remain saved even after refreshing the page. (TESTED)  
The goal of this SBA is to demonstrate DOM manipulation, event handling, and localStorage persistence without using a backend.


## Learning Objectives
- Use DOM methods to create and update HTML elements dynamically.  
- Handle user events with `addEventListener()`.  
- Apply form validation and display custom error messages.  
- Store and retrieve data using `localStorage`.  
- Update the DOM in real time without page reloads.  

## Features
- Create, edit, and delete blog posts  
- Real-time validation of title and content fields  
- All posts persist in `localStorage`  
- Instant DOM updates — no refresh required  
- Simple, clean, and user-friendly interface  

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6 DOM + Events + localStorage)

## Tools Used
- Visual Studio Code
- Chrome Developer Tools  
- Git & GitHub  
- Live Server Extension

## File Structure
index.html--------------main page  
styles.css--------------all styles for layout and design  
script.js---------------JavaScript DOM logic  
notes.js----------------my learning and test notes  
README.md---------------project documentation  
Rocky400x400.jpg--------my picture  
BryanSantos.png---------instructor image  
TishanaTrainor.jpg------instructor image  
gitignore---------------ignored files  
study_ref/--------------extra study files for future practice


## Requirements Implementation
### Create Posts
Users enter a title and content in the form.  
Both fields are required and validated.  
Posts are added instantly without page reload.

### Display Posts
All posts appear in a “My Posts List” section and are rendered dynamically using JavaScript.

### Edit Posts
Each post has an Edit button that loads its content into the form for updates.  
Validation still applies and the updated post is re-rendered immediately.

### Delete Posts
Each post has a Delete button to remove it from both the page and `localStorage`.

### Data Persistence
Posts are stored as objects (`id`, `title`, `content`) in `localStorage` and automatically load on page refresh.

## Reflection
### 1. What did I learn about the DOM in this project?
I learned how to create, edit, and delete HTML elements dynamically using DOM methods like `createElement()` and `appendChild()`.  
It showed me how powerful JavaScript is for building interactive apps without frameworks.

### 2. How did event.preventDefault() help in this project?
It stopped the form from refreshing the page so that validation and DOM updates could run first.  
This made the interface smooth and responsive.

### 3. How was localStorage used and what are its limits?
I used `localStorage.setItem()` to save posts and `localStorage.getItem()` to load them back.  
It’s great for small projects but not secure for sensitive data like passwords.

### 4. What was challenging while implementing edit and delete?
Getting the right post to update in localStorage was tricky.  
I solved it by assigning a unique ID to each post and matching that when editing or deleting.

### 5. What did I learn about DOM validation and user feedback?
Showing clear, short messages below each input made the UX much better.  
I understood the importance of helpful feedback and clear form guidance.

### What I Learned
- Building a fully client-side interactive web app  
- Validating form input using JavaScript and HTML5  
- Saving and retrieving data using localStorage  
- Updating the DOM dynamically without page reloads  
- Writing modular, readable, and testable JavaScript code  

## Special Thanks
### Per Scholas and Instructors
MY BEST TEACHERS EVER - Tishana Trainor and Bryan Santos thank you for your continuous support, patience, and feedback.  
You made learning JavaScript and DOM concepts clear, fun, and inspiring.

### Classmates
To my Per Scholas classmates thank you for your teamwork, collaboration, and encouragement.  
Our shared knowledge and practice made this journey meaningful.

### Personal Effort & Dedication
I worked long long hours on this project-studying, testing, and fixing every detail until everything finally worked the way it should.
There were many challenges along the way, but I never gave up.
I spent time watching tutorials, reading documentation, and practicing again and again to understand how the DOM and localStorage really work together.

This project represents more than just code — it shows my patience, discipline, and commitment to becoming a better developer.
If anyone uses or learns from this project, please give proper credit - I put real time, effort, and heart into building and understanding it step-by-step.

## References- Used While Learning
- ref follow this for commit like developer---- https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716
- ref https://www.freecodecamp.org/news/git-cherry-pick-avoid-duplicate-commits/
- ref https://ps-lms.vercel.app/curriculum/se/412/sba#:~:text=Create%20New%20Posts,if%20validation%20fails.
- ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
- ref https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
- ref w3schools reference: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
- ref stackoverflow reference: https://stackoverflow.com/questions/10192391/what-does-document-getelementbyid-do-in-javascript
- ref https://htmlcheatsheet.com/js/ // javascript cheat sheet to call DOM elements and other things
- ref mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- ref w3schools: https://www.w3schools.com/js/js_arrays.asp
- ref stackoverflow: https://stackoverflow.com/questions/5223/what-is-an-array-in-javascript
- ref mdn: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- ref w3schools: https://www.w3schools.com/jsref/prop_win_localstorage.asp
- ref stackoverflow: https://stackoverflow.com/questions/5224906/how-to-save-javascript-array-to-localstorage
- ref MDN - Window.localStorage https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- ref MDN - JSON.parse() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
- ref MDN - Document.createElement() https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
- ref MDN  Node.appendChild() https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
- ref MDN https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
- ref w3schools https://www.w3schools.com/jsref/prop_element_classlist.asp
- ref stackoverflow https://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript
- ref MDN https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- ref w3schools https://www.w3schools.com/jsref/met_element_addeventlistener.asp
- ref stackoverflow https://stackoverflow.com/questions/6348493/what-does-addeventlistener-do-in-javascript
- ref MDN https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- ref w3schools https://www.w3schools.com/jsref/met_element_addeventlistener.asp
- ref stackoverflow https://stackoverflow.com/questions/6348493/what-does-addeventlistener-do-in-javascript
- ref MDN https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
- ref w3schools https://www.w3schools.com/jsref/event_preventdefault.asp
- ref stackoverflow https://stackoverflow.com/questions/5963669/what-is-the-use-of-event-preventdefault-in-javascript
- ref youtube https://www.youtube.com/watch?v=PqAaHf7JKls -- YouTube 
- ref youtube https://www.youtube.com/watch?v=HkFlM73G-hk -- YouTube
- ref youtube https://www.youtube.com/watch?v=bVl5_UdcAy0 -- YouTube
- ref https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- ref w3schools https://www.w3schools.com/jsref/met_element_addeventlistener.asp