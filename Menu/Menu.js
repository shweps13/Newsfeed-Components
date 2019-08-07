/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

// /* 

//   Step 1: Write a function that will create a menu component as seen below:

//   <div class="menu">
//     <ul>
//       {each menu item as a list item}
//     </ul>
//   </div>

const header = document.querySelector('.header');
header.appendChild(newMenu(menuItems));


function newMenu(array) {
  // Creating new elements here
  const menu = document.createElement('div');
  const menuList = document.createElement('ul');

  // Making a new structure here
  menu.appendChild(menuList);

  // Applying stiles to elements here
  menu.classList.add('menu');
  
  // Creating new array for internal operations
  let menuText = [];
  
  for(let i = 0; i < menuItems.length; i++) {
    // Adding new single unit li
    let menuItem = document.createElement('li');
    // Adding content from main array
    menuItem.textContent = array[i];
    // Adding classes
    menuItem.className = 'menuItem';
    // Moving elements to new array
    menuText.push(menuItem);
    // Aplying it to ul
    menuList.appendChild(menuItem);
  }
  
  console.log(menuText[0]);

  // Adding click event here
  const menuButton = document.querySelector('.menu-button');
  
  menuButton.addEventListener('click', event => {
    menuList.classList.toggle('menuOpen');
    menu.classList.toggle('menuOpen');
    
    menuText.forEach(item => {
      item.classList.toggle('menuOpenitems')
    })
    
  })

  return menu;
}

  
//   Pass the function an array as it's only argument.

//   Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
//   Add those items to the <ul>

//   Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
//   Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

//   Step 5: return the menu component.

//   Step 6: add the menu component to the DOM.
  
// */




