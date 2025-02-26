function startRecording() {
    fetch("http://127.0.0.1:5000/startRecording", {
        method: "POST"
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
    document.getElementById("box").innerText = "recording...."
}

function stopRecording() {
    fetch("http://127.0.0.1:5000/stopRecording", {
        method: "POST"
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
    document.getElementById("box").innerText = "recording stopped!!"
}


async function getData() {
    const response = await fetch("http://127.0.0.1:5000/receiveData");
    const data = await response.json();
    console.log(data);
    document.getElementById("shuki").innerText = JSON.stringify(data, null, 2);
}


