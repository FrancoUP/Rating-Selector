const submit = document.querySelector(".button");
const overlay = document.querySelector(".overlay");
const rating_choice = document.querySelector(".rating-choice");
const box_rating = document.querySelector(".box-ratings");

const arr_classes_rating = ["number-1", "number-2", "number-3", "number-4", "number-5"];
let num;
let key = false;
overlay.style.zIndex = "0";
// Added because of toch event


const setDefaultColors = (element) => {
  document.querySelector(`.${element}`).style.backgroundColor = "hsl(213, 7%, 25%)";
  document.querySelector(`.${element}`).style.color = "hsl(216, 12%, 54%)";
}

const setNum_5Color = (element) => {
  document.querySelector(`.${element}`).style.backgroundColor = "hsl(25, 97%, 53%)";
  document.querySelector(`.${element}`).style.color = "white";
}

const setGeneralNumColor = (element) => {
  document.querySelector(`.${element}`).style.backgroundColor = "hsl(217, 12%, 63%)";
  document.querySelector(`.${element}`).style.color = "white";
}

const setRatingButtonsLayout = function(targetElement) {

  arr_classes_rating.forEach( el => {
  
    // Here in the if statement i set the color of the button that has been clicked, in the else i set the default color for the other buttons , i do that just in case a button has been clicked before but now i want to change the selection so i put the precendent clicked button with his defaul color and in the if statement i set the color for the new clicked button.
    if(el === targetElement) (el === "number-5") ? setNum_5Color(el) : setGeneralNumColor(el);
    else setDefaultColors(el);

  })

}



box_rating.addEventListener("click", function(e) {
    e.preventDefault();
    
    const check = arr_classes_rating.includes(`${e.target.classList[1]}`);
    const _class = e.target.classList[1];
    const class_query = document.querySelector(`.${_class}`);


    // I check if the button has been already clicked, if in the if statement the color is white it menas that the button has benn already clicked so i set his defaul color otherwise in the else statenet if it hasen't been already clicked i set the color, and the function setRatingButtonsLayout set the color of the button. This works like selection or deselaction of a button , this means that if a button has been already cliked, cliking on it for the second time I deselect it, otherwise i select it clicking for the first time time.
    if(check && class_query.style.color === "white") {
       key = false;
       setDefaultColors(_class);
    } else if(check && class_query.style.color !== "white") {
       num = _class.match(/\d/)[0];
       key  = true;
       setRatingButtonsLayout(_class);
    }
 
}) 



submit.addEventListener("click", function(e)  {
  e.preventDefault();

  if(key){
    overlay.style.opacity = "1";
    overlay.style.zIndex = "2";
    rating_choice.innerHTML = `You selected ${num} out of 5`;
    key = false;
  }
})


///////////// TOUCH EVENT ///////////////////



box_rating.addEventListener("touchend", function(e) {
  e.preventDefault();
  
  const check = arr_classes_rating.includes(`${e.target.classList[1]}`);
  const _class = e.target.classList[1];
  const class_query = document.querySelector(`.${_class}`);


  if(check && class_query.style.color === "white") {
     key = false;
     setDefaultColors(_class);
  } else if(check && class_query.style.color !== "white") {
     num = _class.match(/\d/)[0];
     key  = true;
     setRatingButtonsLayout(_class);
  }

}, {passive: true}) 




submit.addEventListener("touchstart", function(e)  {
  e.preventDefault();
  submit.style.backgroundColor =  "white";
  submit.style.color = "hsl(25, 97%, 53%)"
  
}, {passive: false})



submit.addEventListener("touchend", function(e)  {
  e.preventDefault();
  submit.style.backgroundColor =  "hsl(25, 97%, 53%)";
  submit.style.color = "white";

  if(key){
    overlay.style.opacity = "1";
    overlay.style.zIndex = "2";
    rating_choice.innerHTML = `You selected ${num} out of 5`;
    key = false;
  }
}, {passive: false})



