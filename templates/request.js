

async function fatchData() { 
    try {
    
    const response = await fetch("http://127.0.0.1:5000/1");
    const data = await response.text();
    console.log(data);
    return data;
        
}catch(error){
    console.error("Error:",error)

}
}
async function getData() {
    let data = await fatchData()
    let box = document.getElementById("box")
    box.innerText = data
    
}

async function startRecording() {
    try {
        const response = await fetch('http://localhost:5000/start-recording'); // שנה לכתובת ה-API שלך
        const data = await response.json(); // מניח שהשרת מחזיר JSON
        document.getElementById('box').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('box').innerText = 'Error fetching data!';
    }
}
getData()