
const params = new URLSearchParams(window.location.search) //it extracts parameters
const eventId = params.get('id') 

const container = document.getElementById('event-container')

const loadEvent = async () => {
  
    const response = await fetch(`/api/v1/events/${eventId}`)
    const event = await response.json()
    container.innerHTML = `
      <h1>${event.name}</h1>
      <p>Location: ${event.location}</p>
      <p>Date: ${event.date}</p>
      <p>Time: ${event.time}</p>
    `
  
}

loadEvent()
