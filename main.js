document.addEventListener('DOMContentLoaded', () => {
    displayEvents(events);

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredEvents = events.filter(event => 
            event.name.toLowerCase().includes(searchTerm) ||
            event.description.toLowerCase().includes(searchTerm) ||
            event.location.toLowerCase().includes(searchTerm)
        );
        displayEvents(filteredEvents);
    });
});

function displayEvents(eventsToDisplay) {
    const eventsContainer = document.getElementById('eventsContainer');
    eventsContainer.innerHTML = '';

    eventsToDisplay.forEach(event => {
        const eventCard = createEventCard(event);
        eventsContainer.appendChild(eventCard);
    });
}

function createEventCard(event) {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';

    const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    col.innerHTML = `
        <div class="event-card">
            <h3>${event.name}</h3>
            <div class="date-time">
                <i class="fas fa-calendar"></i> ${formattedDate} at ${event.time}
            </div>
            <div class="location">
                <i class="fas fa-map-marker-alt"></i> ${event.location}
            </div>
            <div class="description">
                ${event.description}
            </div>
            <a href="#" class="btn btn-register">Register Now</a>
        </div>
    `;

    return col;
} 
