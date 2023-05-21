// menu toggle
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const slideElems = document.querySelectorAll('.has-slide');

btnHamburger.addEventListener('click', function(){
  // console.log('click hamburger');

  if(header.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    slideElems.forEach(function(element){
      element.classList.remove('slide-in');
      element.classList.add('slide-out');
    });
    
  }
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    slideElems.forEach(function(element){
      element.classList.remove('slide-out');
      element.classList.add('slide-in');
    });

  }  
});



  // hidding navlinks after clicking nav
  function hideNavOnSmallScreen() {
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    slideElems.forEach(function(element){
        element.classList.remove('slide-in');
        element.classList.add('slide-out');
      });
  }
  
  document.querySelectorAll('.nav-link').forEach(nav => {
    nav.addEventListener('click', hideNavOnSmallScreen);
  });



// section selection
const navs =  document.querySelectorAll('.nav-link');
const sections =  document.querySelectorAll('.sections');


navs.forEach(nav => {
    nav.addEventListener('click', function() {
        const target = nav.dataset.target;

        // deactivate all navs
        navs.forEach(nav => nav.classList.remove('active'));

        // activate clicked nav
        nav.classList.add('active');

        // hide all sections in main-content
        sections.forEach(section => section.classList.remove('active'));

        // show target section
        document.getElementById(target).classList.add('active');
    });
});



//create a new ajax object
var ajax = new XMLHttpRequest();

// when the page is loaded have a callback function prefill our div
ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(ajax.responseText)
      // console.log(response.entertainment);

      let entertainmentBtn =  document.querySelector('#more-entertainment');
      let entertainmentFactImg =  document.querySelector('#entertainment-img');
      let entertainmentFactText =  document.querySelector('#entertainment-text');

      let politicsBtn =  document.querySelector('#more-politics');
      let politicsFactImg =  document.querySelector('#politics-img');
      let politicsFactText =  document.querySelector('#politics-text');

      let sportBtn =  document.querySelector('#more-sport');
      let sportFactImg =  document.querySelector('#sport-img');
      let sportFactText =  document.querySelector('#sport-text');

      let historyBtn =  document.querySelector('#more-history');
      let historyFactImg =  document.querySelector('#history-img');
      let historyFactText =  document.querySelector('#history-text');



      
      entertainmentBtn.addEventListener('click', function() {
        let random = Math.floor(Math.random() * response.entertainment.length);
        
        entertainmentFactImg.src = response.entertainment[random].image;
        entertainmentFactImg.alt = response.entertainment[random].alt;
        entertainmentFactText.innerText = response.entertainment[random].fact;
      });

    politicsBtn.addEventListener('click', function() {
      let random = Math.floor(Math.random() * response.politics.length);
      
      politicsFactImg.src = response.politics[random].image;
      politicsFactImg.alt = response.politics[random].alt;
      politicsFactText.innerText = response.politics[random].fact;
    });

    sportBtn.addEventListener('click', function() {
      let random = Math.floor(Math.random() * response.sport.length);
      
      sportFactImg.src = response.sport[random].image;
      sportFactImg.alt = response.sport[random].alt;
      sportFactText.innerText = response.sport[random].fact;
    });

    historyBtn.addEventListener('click', function() {
      let random = Math.floor(Math.random() * response.history.length);
      
      historyFactImg.src = response.history[random].image;
      historyFactImg.alt = response.history[random].alt;
      historyFactText.innerText = response.history[random].fact;
    });

  }
};

// open requested file and transmit the data
ajax.open('GET', "./js/facts.json", true);
ajax.send();








































  // variables

// let btn =  document.querySelector('#new-quote');
// let quote =  document.querySelector('.quote');
// let person =  document.querySelector('.person');

// const quotes = [
//     {
//         quote: `"Big surprise; to create a form, you use a <form> element. Now, just about any blocklevel element can go inside the <form> element, but there’s 
//         a whole new set of elements."`,
//         person: `Maharma Brahmat`
//     },
//     {
//         quote: `"that are made especially for forms. Each of these form elements provides a different
//         way for you to enter information: text boxes, checkboxes, menus of options."`,
//         person: `Bryio Frah`
//     },
//     {
//         quote: `"We’ll examine all these elements, but first take another look back at the HTML on the
//         previous page and see how the elements."`,
//         person: `Yoiiuh Poiloe`
//     },
//     {
//         quote: `"You’ll find the contest form in your “chapter14/contest” folder. Open it, take
//         another look around, then load it in your browser and enter the contest."`,
//         person: `Reaner Conter`
//     },
//     {
//         quote: `"Let’s take a closer look at the <form> element—not only does it hold
//         all the elements that make up the form."`,
//         person: `Leao Qeen`
//     },
//     {
//         quote: `"where to send your form data when you submit the form (and the
//             method the browser should use to send it."`,
//         person: `Vilao Weretop`
//     }

// ];

// btn.addEventListener('click', function() {
//     let random = Math.floor(Math.random() * quotes.length);
    
//     quote.innerText = quotes[random].quote;
//     person.innerText = quotes[random].person;
// })