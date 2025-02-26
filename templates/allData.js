// טקסט שברצוננו להציג
let text = "!כל הקבצים";
let index = 0;
let speed = 150; // מהירות כתיבה (מילישניות)

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed); // קורא לפונקציה שוב אחרי זמן
    }
}



async function getData() {
    const response = await fetch("http://127.0.0.1:5000/files");
    const data = await response.json();
    console.log(data);
    document.getElementById("file").innerText = JSON.stringify(data, null, 2);
}

// מתחילים את כתיבת הטקסט
typeWriter();