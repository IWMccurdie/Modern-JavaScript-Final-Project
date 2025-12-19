const getMenu = async () => {
    const response = await fetch('/api/v1/menu')
    return await response.json()
}
const getEvents = async () => {
    const response = await fetch('/api/v1/events')
    return await response.json()
}


const loadMenu = async () => {
    const menu = await getMenu();
    //console.log(menu)
    const container = document.getElementById('menu-container')
    container.innerHTML = ""
    menu.forEach(item => {
        const menuItem = document.createElement("div")
        menuItem.className = "menu-item"
        menuItem.innerHTML =
            `<div class="menu-card">
            <img src="${item.url}"  alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span>$${item.price}</span>
            </div>`

        container.appendChild(menuItem)     
    });
}

const loadEvents = async () => {
    const events = await getEvents();
    //console.log(menu)
    const eventContainer = document.getElementById('event-container')
    eventContainer.innerHTML = ""
    events.forEach(event => {
        const eventItem = document.createElement("div")
        eventItem.className = "event-item"
        eventItem.innerHTML =
            `<div class="menu-card">
            <h3>${event.name}</h3>
            <span>${event.date}</span>
            </div>`

        eventContainer.appendChild(eventItem)
    });
}




loadMenu()
loadEvents()