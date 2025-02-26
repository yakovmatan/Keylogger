// let currentDate = new Date();

// function renderCalendar(date) {
//     const calendar = document.getElementById("calendar");
//     const monthYear = document.getElementById("month-year");

//     monthYear.innerText = new Intl.DateTimeFormat('he-IL', { month: 'long', year: 'numeric' }).format(date);
    
//     let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
//     if (firstDay === 0) firstDay = 7;
//     let lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

//     calendar.innerHTML = '';
//     for (let i = 1; i < firstDay; i++) {
//         let emptyDiv = document.createElement("div");
//         calendar.appendChild(emptyDiv);
//     }

//     for (let day = 1; day <= lastDate; day++) {
//         let dayDiv = document.createElement("div");
//         dayDiv.classList.add("calendar-day");
//         dayDiv.innerText = day;
        
//         if (day === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
//             dayDiv.classList.add("today");
//         }
//         function formatWithLeadingZero(num) {
//             return num < 10 ? `0${num}` : num;
//         }
//         function getShortYear(year) {
//             return year.toString().slice(-2); // לוקח רק את שתי הספרות האחרונות
//         }
        
//         dayDiv.addEventListener('click', function() {
//             // fetch(`http://127.0.0.1:5000/getData/${day}-${date.getMonth()+1}-${date.getFullYear()}`)
//             fetch(`http://127.0.0.1:5000/getData/${formatWithLeadingZero(day)}-${formatWithLeadingZero(date.getMonth()+1)}-${getShortYear(date.getFullYear())}`)
//                 .then(response => response.json())
//                 .then(data => {
//                     document.getElementById("box").innerText = JSON.stringify(data, null, 2);
//                 })
//                 .catch(() => {
//                     document.getElementById("box").innerText = "אין מידע";
//                 });
//         });
        
//         calendar.appendChild(dayDiv);
//     }
// }
// function createTable(data) {
//     const box = document.getElementById("box");
//     box.innerHTML = ""; // מנקה את התוכן הקודם

//     if (!data || data.length === 0) {
//         box.innerText = "אין מידע";
//         return;
//     }

//     const table = document.createElement("table");
//     table.border = "1"; // הוספת מסגרת לטבלה
//     table.style.width = "100%";

//     // יצירת כותרות הטבלה
//     const thead = document.createElement("thead");
//     const headerRow = document.createElement("tr");
//     const headers = Object.keys(data[0]); // כותרות מהמידע

//     headers.forEach(header => {
//         const th = document.createElement("th");
//         th.innerText = header;
//         headerRow.appendChild(th);
//     });

//     thead.appendChild(headerRow);
//     table.appendChild(thead);

//     // יצירת גוף הטבלה
//     const tbody = document.createElement("tbody");

//     data.forEach(item => {
//         const row = document.createElement("tr");
//         headers.forEach(header => {
//             const td = document.createElement("td");
//             td.innerText = item[header];
//             row.appendChild(td);
//         });
//         tbody.appendChild(row);
//     });

//     table.appendChild(tbody);
//     box.appendChild(table);
// }

// function handleDayClick(day, date) {
//     const formattedDate = `${formatWithLeadingZero(day)}-${formatWithLeadingZero(date.getMonth() + 1)}-${getShortYear(date.getFullYear())}`;

//     fetch(`http://127.0.0.1:5000/getData/${formattedDate}`)
//         .then(response => response.json())
//         .then(data => createTable(data))
//         .catch(() => {
//             document.getElementById("box").innerText = "אין מידע";
//         });
// }

// function renderCalendar(date) {
//     const calendar = document.getElementById("calendar");
//     const monthYear = document.getElementById("month-year");

//     monthYear.innerText = new Intl.DateTimeFormat('he-IL', { month: 'long', year: 'numeric' }).format(date);
    
//     let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
//     if (firstDay === 0) firstDay = 7;
//     let lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

//     calendar.innerHTML = '';
//     for (let i = 1; i < firstDay; i++) {
//         let emptyDiv = document.createElement("div");
//         calendar.appendChild(emptyDiv);
//     }

//     for (let day = 1; day <= lastDate; day++) {
//         let dayDiv = document.createElement("div");
//         dayDiv.classList.add("calendar-day");
//         dayDiv.innerText = day;
        
//         if (day === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
//             dayDiv.classList.add("today");
//         }
        
//         dayDiv.addEventListener('click', function() {
//             handleDayClick(day, date);
//         });
        
//         calendar.appendChild(dayDiv);
//     }
// }

// document.addEventListener('DOMContentLoaded', function() {
//     renderCalendar(currentDate);
// });

// function prevMonth() {
//     currentDate.setMonth(currentDate.getMonth() - 1);
//     renderCalendar(currentDate);
// }

// function nextMonth() {
//     currentDate.setMonth(currentDate.getMonth() + 1);
//     renderCalendar(currentDate);
// }

// document.addEventListener('DOMContentLoaded', function() {
//     renderCalendar(currentDate);
// })

// function startRecording() {
//     fetch("http://127.0.0.1:5000/startRecording", {
//         method: "POST"
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error:", error));
//     document.getElementById("box").innerText = "recording...."
// }

// function stopRecording() {
//     fetch("http://127.0.0.1:5000/stopRecording", {
//         method: "POST"
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error:", error));
//     document.getElementById("box").innerText = "recording stopped!!"
// };


let currentDate = new Date();

function formatWithLeadingZero(num) {
    return num < 10 ? `0${num}` : num;
}

function getShortYear(year) {
    return year.toString().slice(-2);
}

function handleDayClick(day, date) {
    const formattedDate = `${formatWithLeadingZero(day)}-${formatWithLeadingZero(date.getMonth() + 1)}-${getShortYear(date.getFullYear())}`;
    
    console.log(`📅 תאריך נבחר: ${formattedDate}`);

    fetch(`http://127.0.0.1:5000/getData/${formattedDate}`)
        .then(response => response.json())
        .then(data => {
            console.log("📊 נתונים שהתקבלו מהשרת:", data);
            if (!data || Object.keys(data).length === 0) {
                document.getElementById("box").innerText = "אין מידע";
            } else {
                createTable(data);
            }
        })
        .catch(() => {
            document.getElementById("box").innerText = "אין מידע";
        });
}

function createTable(data) {
    const box = document.getElementById("box");
    box.innerHTML = "";

    const tableContainer = document.createElement("div");
    tableContainer.style.maxHeight = "200px";
    tableContainer.style.overflowY = "auto";
    tableContainer.style.border = "1px solid #ccc";
    tableContainer.style.padding = "5px";

    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.fontSize = "12px";

    // כותרות
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    ["שעה", "טקסט מוקלד"].forEach(header => {
        const th = document.createElement("th");
        th.innerText = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // שורות
    const tbody = document.createElement("tbody");
    Object.entries(data).forEach(([hour, text]) => {
        const row = document.createElement("tr");

        const timeCell = document.createElement("td");
        timeCell.innerText = hour;
        row.appendChild(timeCell);

        const textCell = document.createElement("td");
        textCell.innerText = text.trim() ? text : "אין מידע";
        row.appendChild(textCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
    box.appendChild(tableContainer);
}

function renderCalendar(date) {
    const calendar = document.getElementById("calendar");
    const monthYear = document.getElementById("month-year");

    monthYear.innerText = new Intl.DateTimeFormat('he-IL', { month: 'long', year: 'numeric' }).format(date);
    
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    if (firstDay === 0) firstDay = 7;
    let lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    calendar.innerHTML = '';
    for (let i = 1; i < firstDay; i++) {
        let emptyDiv = document.createElement("div");
        calendar.appendChild(emptyDiv);
    }

    for (let day = 1; day <= lastDate; day++) {
        let dayDiv = document.createElement("div");
        dayDiv.classList.add("calendar-day");
        dayDiv.innerText = day;
        
        if (day === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
            dayDiv.classList.add("today");
        }
        
        dayDiv.addEventListener('click', function() {
            handleDayClick(day, date);
        });
        
        calendar.appendChild(dayDiv);
    }
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
}

document.addEventListener('DOMContentLoaded', function() {
    renderCalendar(currentDate);
});

function startRecording() {
    fetch("http://127.0.0.1:5000/startRecording", { method: "POST" })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error:", error));
    
    document.getElementById("box").innerText = "recording....";
}

function stopRecording() {
    fetch("http://127.0.0.1:5000/stopRecording", { method: "POST" })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error:", error));
    
    document.getElementById("box").innerText = "recording stopped!!";
}
