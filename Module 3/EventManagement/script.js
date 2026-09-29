// =====================================
// EVENT DATA
// =====================================

const events = [

    {
        id: 1,
        name: "Tech Innovation Summit",
        category: "Technology",
        date: "October 10, 2026",
        time: "10:00 AM - 4:00 PM",
        venue: "Main Auditorium",
        description:
            "A technology event focused on innovation, AI and emerging technologies."
    },

    {
        id: 2,
        name: "Cultural Fest 2026",
        category: "Cultural",
        date: "October 18, 2026",
        time: "9:00 AM - 7:00 PM",
        venue: "College Ground",
        description:
            "A celebration of music, dance, art and cultural activities."
    },

    {
        id: 3,
        name: "AI & ML Workshop",
        category: "Workshop",
        date: "October 25, 2026",
        time: "10:00 AM - 3:00 PM",
        venue: "Computer Lab",
        description:
            "Hands-on workshop covering Artificial Intelligence and Machine Learning."
    },

    {
        id: 4,
        name: "Annual Sports Meet",
        category: "Sports",
        date: "November 2, 2026",
        time: "8:00 AM - 5:00 PM",
        venue: "Sports Ground",
        description:
            "Annual sports competition featuring multiple indoor and outdoor games."
    },

    {
        id: 5,
        name: "Web Development Workshop",
        category: "Workshop",
        date: "November 10, 2026",
        time: "10:00 AM - 2:00 PM",
        venue: "Seminar Hall",
        description:
            "Learn the fundamentals of modern web development using HTML, CSS and JavaScript."
    },

    {
        id: 6,
        name: "Entrepreneurship Meet",
        category: "Technology",
        date: "November 20, 2026",
        time: "11:00 AM - 4:00 PM",
        venue: "Innovation Center",
        description:
            "An event for students interested in startups, entrepreneurship and business ideas."
    }

];


// =====================================
// LOCAL STORAGE
// =====================================

const storageKey = "eventParticipants";

let participants =
    JSON.parse(
        localStorage.getItem(storageKey)
    ) || [];


// =====================================
// GET ELEMENTS
// =====================================

const eventContainer =
    document.getElementById("eventContainer");

const eventSelect =
    document.getElementById("eventSelect");

const searchEvent =
    document.getElementById("searchEvent");

const categoryFilter =
    document.getElementById("categoryFilter");

const eventForm =
    document.getElementById("eventForm");

const participantTable =
    document.getElementById("participantTable");

const participantCount =
    document.getElementById("participantCount");


// =====================================
// DISPLAY EVENTS
// =====================================

function displayEvents() {

    eventContainer.innerHTML = "";


    const searchText =
        searchEvent.value.toLowerCase();

    const selectedCategory =
        categoryFilter.value;


    const filteredEvents =
        events.filter(function (event) {

            const matchesSearch =
                event.name
                    .toLowerCase()
                    .includes(searchText);

            const matchesCategory =
                selectedCategory === "All" ||
                event.category === selectedCategory;

            return matchesSearch &&
                   matchesCategory;

        });


    if (filteredEvents.length === 0) {

        eventContainer.innerHTML = `
            <div class="no-data">
                No events found.
            </div>
        `;

        return;

    }


    filteredEvents.forEach(function (event) {

        const card = document.createElement("div");

        card.className = "event-card";


        card.innerHTML = `

            <div class="event-top">

                <span class="category">
                    ${event.category}
                </span>

                <h3>
                    ${event.name}
                </h3>

            </div>


            <div class="event-body">

                <p>
                    📅 <strong>Date:</strong>
                    ${event.date}
                </p>

                <p>
                    🕐 <strong>Time:</strong>
                    ${event.time}
                </p>

                <p>
                    📍 <strong>Venue:</strong>
                    ${event.venue}
                </p>

                <p>
                    ${event.description}
                </p>


                <button
                    class="event-register-btn"
                    onclick="selectEvent(${event.id})">

                    Register for Event

                </button>

            </div>

        `;


        eventContainer.appendChild(card);

    });

}


// =====================================
// LOAD EVENT OPTIONS
// =====================================

function loadEventOptions() {

    eventSelect.innerHTML = `

        <option value="">
            Select an event
        </option>

    `;


    events.forEach(function (event) {

        const option =
            document.createElement("option");

        option.value = event.name;

        option.textContent =
            event.name;

        eventSelect.appendChild(option);

    });

}


// =====================================
// SELECT EVENT
// =====================================

function selectEvent(eventId) {

    const selectedEvent =
        events.find(function (event) {

            return event.id === eventId;

        });


    if (selectedEvent) {

        eventSelect.value =
            selectedEvent.name;

        document
            .getElementById("registration")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

}


// =====================================
// SEARCH EVENT
// =====================================

searchEvent.addEventListener(
    "input",
    displayEvents
);


// =====================================
// FILTER EVENT
// =====================================

categoryFilter.addEventListener(
    "change",
    displayEvents
);


// =====================================
// FORM SUBMISSION
// =====================================

eventForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        clearErrors();


        let valid = true;


        const name =
            document
                .getElementById("participantName")
                .value
                .trim();


        const email =
            document
                .getElementById("participantEmail")
                .value
                .trim();


        const phone =
            document
                .getElementById("participantPhone")
                .value
                .trim();


        const selectedEvent =
            document
                .getElementById("eventSelect")
                .value;


        const ticketType =
            document
                .getElementById("ticketType")
                .value;


        const tickets =
            document
                .getElementById("tickets")
                .value;


        const message =
            document
                .getElementById("message")
                .value
                .trim();


        const terms =
            document
                .getElementById("terms")
                .checked;


        // =================================
        // NAME
        // =================================

        if (name === "") {

            document.getElementById(
                "nameError"
            ).textContent =
                "Please enter your name.";

            valid = false;

        }
        else if (name.length < 3) {

            document.getElementById(
                "nameError"
            ).textContent =
                "Name must contain at least 3 characters.";

            valid = false;

        }


        // =================================
        // EMAIL
        // =================================

        if (email === "") {

            document.getElementById(
                "emailError"
            ).textContent =
                "Please enter your email.";

            valid = false;

        }
        else if (!validateEmail(email)) {

            document.getElementById(
                "emailError"
            ).textContent =
                "Please enter a valid email.";

            valid = false;

        }


        // =================================
        // PHONE
        // =================================

        if (phone === "") {

            document.getElementById(
                "phoneError"
            ).textContent =
                "Please enter your phone number.";

            valid = false;

        }
        else if (!/^[0-9]{10}$/.test(phone)) {

            document.getElementById(
                "phoneError"
            ).textContent =
                "Phone number must contain 10 digits.";

            valid = false;

        }


        // =================================
        // EVENT
        // =================================

        if (selectedEvent === "") {

            document.getElementById(
                "eventError"
            ).textContent =
                "Please select an event.";

            valid = false;

        }


        // =================================
        // TICKET
        // =================================

        if (ticketType === "") {

            document.getElementById(
                "ticketError"
            ).textContent =
                "Please select a ticket type.";

            valid = false;

        }


        // =================================
        // NUMBER OF TICKETS
        // =================================

        if (
            tickets === "" ||
            Number(tickets) < 1 ||
            Number(tickets) > 5
        ) {

            document.getElementById(
                "ticketsError"
            ).textContent =
                "Select between 1 and 5 tickets.";

            valid = false;

        }


        // =================================
        // TERMS
        // =================================

        if (!terms) {

            document.getElementById(
                "termsError"
            ).textContent =
                "Please accept the terms and conditions.";

            valid = false;

        }


        // =================================
        // SUCCESS
        // =================================

        if (valid) {

            const participant = {

                id: Date.now(),

                name: name,

                email: email,

                phone: phone,

                event: selectedEvent,

                ticket: ticketType,

                tickets: tickets,

                message: message

            };


            participants.push(participant);


            saveParticipants();


            displayParticipants();


            document.getElementById(
                "successMessage"
            ).textContent =
                "Registration successful!";

            document.getElementById(
                "successMessage"
            ).style.backgroundColor =
                "#d1e7dd";

            document.getElementById(
                "successMessage"
            ).style.color =
                "#0f5132";


            eventForm.reset();


            setTimeout(function () {

                document.getElementById(
                    "successMessage"
                ).textContent = "";

                document.getElementById(
                    "successMessage"
                ).style.backgroundColor = "";

            }, 3000);

        }

    }
);


// =====================================
// EMAIL VALIDATION
// =====================================

function validateEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}


// =====================================
// CLEAR ERRORS
// =====================================

function clearErrors() {

    document.getElementById(
        "nameError"
    ).textContent = "";

    document.getElementById(
        "emailError"
    ).textContent = "";

    document.getElementById(
        "phoneError"
    ).textContent = "";

    document.getElementById(
        "eventError"
    ).textContent = "";

    document.getElementById(
        "ticketError"
    ).textContent = "";

    document.getElementById(
        "ticketsError"
    ).textContent = "";

    document.getElementById(
        "termsError"
    ).textContent = "";

}


// =====================================
// PHONE - ONLY NUMBERS
// =====================================

document
    .getElementById("participantPhone")
    .addEventListener(
        "input",
        function () {

            this.value =
                this.value.replace(
                    /[^0-9]/g,
                    ""
                );

        }
    );


// =====================================
// SAVE PARTICIPANTS
// =====================================

function saveParticipants() {

    localStorage.setItem(
        storageKey,
        JSON.stringify(participants)
    );

}


// =====================================
// DISPLAY PARTICIPANTS
// =====================================

function displayParticipants() {

    participantTable.innerHTML = "";


    participantCount.textContent =
        participants.length;


    if (participants.length === 0) {

        participantTable.innerHTML = `

            <tr>

                <td
                    colspan="8"
                    class="no-data">

                    No participants registered yet.

                </td>

            </tr>

        `;

        return;

    }


    participants.forEach(
        function (participant, index) {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>
                    ${index + 1}
                </td>

                <td>
                    ${participant.name}
                </td>

                <td>
                    ${participant.email}
                </td>

                <td>
                    ${participant.phone}
                </td>

                <td>
                    ${participant.event}
                </td>

                <td>
                    ${participant.ticket}
                </td>

                <td>
                    ${participant.tickets}
                </td>

                <td>

                    <button
                        class="delete-btn"
                        onclick="deleteParticipant(${participant.id})">

                        Delete

                    </button>

                </td>

            `;


            participantTable.appendChild(row);

        }
    );

}


// =====================================
// DELETE PARTICIPANT
// =====================================

function deleteParticipant(id) {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this participant?"
        );


    if (confirmDelete) {

        participants =
            participants.filter(
                function (participant) {

                    return participant.id !== id;

                }
            );


        saveParticipants();

        displayParticipants();

    }

}


// =====================================
// CLEAR ALL PARTICIPANTS
// =====================================

document
    .getElementById("clearParticipants")
    .addEventListener(
        "click",
        function () {

            if (participants.length === 0) {

                alert(
                    "There are no participants to clear."
                );

                return;

            }


            const confirmClear =
                confirm(
                    "Are you sure you want to remove all participants?"
                );


            if (confirmClear) {

                participants = [];

                saveParticipants();

                displayParticipants();

            }

        }
    );


// =====================================
// INITIAL LOAD
// =====================================

loadEventOptions();

displayEvents();

displayParticipants();
