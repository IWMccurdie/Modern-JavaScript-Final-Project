// Event form
document.getElementById('addEvent').addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    data.id = Date.now().toString()
    
    try {
        const response = await fetch('/api/v1/events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        if (response.ok) {
            alert('Event added successfully!')
            e.target.reset()
        } else {
            alert('Failed to add event')
        }
    } catch (error) {
        console.error('Error:', error)
    }
})

// Menu form
document.getElementById('addMenuItem').addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    data.id = Date.now().toString()
    
    try {
        const response = await fetch('/api/v1/menu', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        if (response.ok) {
            alert('Menu item added successfully!')
            e.target.reset()
        } else {
            alert('Failed to add menu item')
        }
    } catch (error) {
        console.error('Error:', error)
    }
})