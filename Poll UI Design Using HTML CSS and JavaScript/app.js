// const options = document.querySelectorAll("label");

// for (let i = 0; i < options.length; i++) {
//   options[i].addEventListener("click", () => {
//     for(let k = 0; k<options.length; k++){
//         if(options[k].classList.contains('selected')){
//             options[k].classList.remove("selected");
//         }

//     }

//     options[i].classList.add("selected");

//     for (let j = 0; j < options.length; j++) {
//       options[j].classList.add("selectAll");
//     }
//   });
// }

let pollContainer = document.querySelectorAll(".poll-container");
let radiobutton = document.querySelectorAll(".radiobutton");
let percentage = document.querySelectorAll(".percentage");
let progress = document.querySelectorAll("progress");

for (let i = 0; i < pollContainer.length; i++) {
  pollContainer[i].addEventListener("click", () => {
    for (let l = 0; l < pollContainer.length; l++) {
      if (pollContainer[l].classList.contains("selected")) {
        pollContainer[l].classList.remove("selected");
      }
    }
    // select class added
    pollContainer[i].classList.add("selected");

    // percentage show
    for (let j = 0; j < pollContainer.length; j++) {
      percentage[j].style.display = "block";
    }
    // progress show
    for (let k = 0; k < pollContainer.length; k++) {
      progress[k].style.display = "block";
    }
  });
}
