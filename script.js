const title = document.querySelector('#first-title');
const description = document.querySelector('#description');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const button = document.querySelector('#button');
const left = document.querySelector('.left');

window.onload = checkData = () => {
    if (localStorage.getItem('eventStorage') === null) {
        eventData = [];

    } else {
        eventData = JSON.parse(localStorage.getItem('eventStorage'));
        renderEvents();
    }
}


let id = 0;


button.addEventListener("click", (e) => {
    e.preventDefault()
    const eventValues = {
        title: title.value,
        description: description.value,
        date: '${date.value}, ${time.value}',
        id: id++
    };

    eventData.push(eventValues)
    localStorage.setItem('eventStorage', JSON.stringify(eventData));

    title.value = "";
    description.value = "";
    date.value = "";
})

const renderEvents = () => {
    eventData.map((event) => {
        const card = document.createElement('div');
        const time = document.createElement('div');
        const description = document.createElement('div');

        time.textContent = event.date;
        description.textContent = event.title, event.description;

        card.className = 'event-box';
        time.className = 'date-box';
        description.className = 'description';

        card.append(time, description);
        left.append(card);
    })
}