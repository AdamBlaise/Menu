//items
const menu = [
    {
      id: 1,
      title: "English Breakfast",
      category: "breakfast",
      price: "6,300",
      img: "./images/item-1.jpeg",
      desc: `Toast with sauteed mushrooms | Bacon | Caramelized Onions | Grilled Tomatoes | Sausage | Baked Beans | Eggs of your choice`,
    },
    {
      id: 2,
      title: "American Breakfast",
      category: "breakfast",
      price: "6,500",
      img: "./images/item-2.jpeg",
      desc: `Fluffy Buttermilk Pancakes with Eggs of your choice| Bacon | Hash Brown and Maple Syrup`,
    },
    {
      id: 3,
      title: "Milkshake",
      category: "shakes",
      price: "3,800",
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "Pancakes",
      category: "breakfast",
      price: "3,600",
      img: "./images/item-4.jpeg",
      desc: `Delicious Pan Cakes with a light dusting of icing sugar served with bananas and maple syrup `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "steak dinner buddy",
        category: "dinner",
        price: 39.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
  ];
 
const sectionCenter = document.querySelector(".section-center")
const container = document.querySelector(".btn-container")

  //load items
window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu)
    displayMenuButtons()
})


function displayMenuButtons(){
    const categories = menu.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category)
        }
        return values
    }, ["all"])
    const categoryBtns = categories.map(function(category){
        return ` <button type="button" class="filter-btn" 
        data-id=${category}>${category}</button>`
    }).join("")
    container.innerHTML = categoryBtns
    const filterBtn = document.querySelectorAll(".filter-btn")

     //filter items
  filterBtn.forEach(function(btn){
    btn.addEventListener("click", function(e){
      const category = e.currentTarget.dataset.id
      const menuCategory = menu.filter(function(menuItems){
          if(menuItems.category === category){
              return menuItems
          }      
      }) 
          if (category === "all"){
              displayMenuItems(menu)
      } else{
          displayMenuItems(menuCategory)
      }
    })
})
}


function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">₦${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p></div>
      </article>`
    })
    displayMenu = displayMenu.join("")
    sectionCenter.innerHTML = displayMenu
}

