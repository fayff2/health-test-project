// function eyeTest(click_id) {


//     if (click_id == 1 ) {
//         document.getElementById('panel1').classList.toggle('active');
//     } 
//     else if (click_id == 2) {
//         document.getElementById('panel2').classList.toggle('active');  
//     }

//     else if (click_id == 3){
//         document.getElementById('panel3').classList.toggle('active');
//     }


//     else if (click_id == 4){
//         document.getElementById('panel4').classList.toggle('active');
        
//     }

//     else if (click_id == 5){
//         document.getElementById('panel5').classList.toggle('active');
        
//     }

//     else if (click_id == 6){
       
//         document.getElementById('panel6').classList.toggle('active');

    
// }

// else if (click_id == 7){

//     document.getElementById('panel7').classList.toggle('active');


// }

// else if (click_id == 8){
//     document.getElementById('panel8').classList.toggle('active');



// }

// else if (click_id == 9){
//     document.getElementById('panel9').classList.toggle('active');



// }
// else if (click_id == 10){

//     document.getElementById('panel10').classList.toggle('active');


// }
// else if (click_id == 11){


//     document.getElementById('panel11').classList.toggle('active');

// }

    

// }





// grab all the buttons
let eyesImges = document.querySelectorAll(".s-imges .row");

// loop through the buttons using for..of 
for (let eyesImge of eyesImges) {

    // listen for a click event 
    eyesImge.addEventListener('click', (e) => {
     // Store the event target in a const
     const et = e.target;
   
     // select active class
     const active = document.querySelector(".active");
   
     /* when a button is clicked, remove the active class 
   from the button that has it */
     if (active) {
       active.classList.remove("active");
      }
   
     // Add active class to the clicked element
     et.classList.add("active");
   
     // select all classes with the name content
     let allContent = document.querySelectorAll('.content');
   
     // loop through all content classes
     for (let content of allContent) {
   
       /* display the content if the value in the data attribute of the button and content are the same */
       if(content.getAttribute('data-number') === eyesImge.getAttribute('data-number')) {
         content.style.display = "block";
        }
   
        // if it's not equal then hide it.
        else {
           content.style.display = "none";
         }
       }
    });
   }

