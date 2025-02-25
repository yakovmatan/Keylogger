function startRecording() {
    fetch("http://127.0.0.1:5000/startRecording", {
        method: "POST"
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
}

function stopRecording() {
    fetch("http://127.0.0.1:5000/stopRecording", {
        method: "POST"
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
}

