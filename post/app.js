// document.addEventListener('DOMContentLoaded',function(){

// } )

// Selecting element in our page

// getELementById
// querySelector
// querySelectorAll

// // changing text
// const logo = document.getElementById("logo");

// // logo.textContent = 'My Blog';
// // logo.innerText = "My innertText Blog"
// logo.innerHTML =
//   "<img src='https://images.unsplash.com/photo-1682685790910-1f3e7c5b6d8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHx8&w=1000&q=80' alt='logo' />";

const postSection = document.getElementById("post_container");
const postCard = document.querySelector(".post_card");
const postCards = document.querySelectorAll(".post_card");

// changing / adding html content to the post section
// postSection.innerHTML = `
//    <div class="post_card flex bg-green-300 rounded p-2">
//             <div class="flex flex-col gap-2 space-y-2 p-2">
//               <h2 class="font-bold">eum et est occaecati</h2>
//               <p class="">
//                 ullam et saepe reiciendis voluptatem adipisci\nsit amet autem
//                 assumenda provident rerum culpa\nquis hic commodi nesciunt rem
//                 tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo
//                 velit
//               </p>
//             </div>
//             <div class="flex justify-center items-start">
//               <span class="py-2 px-3 rounded-full bg-green-400">4</span>
//             </div>
//           </div>
// `;


// Working with styling in js

// const logo = document.getElementById("logo");

// logo.style.color = "red";
// logo.style.fontSize = "2rem";
// logo.style.display = 'none'

const form =  document.querySelector('form')

form.classList.remove('flex')
form.classList.add('grid', 'place-items-center', 'gap-2', 'grid-cols-1')

const input = document.createElement('input')
input.type = 'text'
input.placeholder = 'Enter your name'
input.classList.add('border','border-gray-300','rounded','p-2')
input.required = true

// start
form.prepend(input)
// end
form.append(input)