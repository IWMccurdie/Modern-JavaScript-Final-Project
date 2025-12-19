const getMenus=async()=>{
    const response=await fetch('/api/v1/menu')
    return await response.json()
}


const loadMenus=async()=>{
    const menus=await getMenus();
    console.log(menus)
    const container=document.getElementById('container')
    container.innerHTML=""
    menus.forEach(item => {
        container.innerHTML+=
    ` <div class="menu-card">
    <img src="${item.url}"  alt="Cheeseburger">
  <h3>${item.name}</h3>
  <p>${item.description}</p>
  <span>$${item.price}</span>
  </div>
    `
});

   
}
loadMenus()