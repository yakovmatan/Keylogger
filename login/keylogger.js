function login() {
   
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const correctUsername = "yakov";
    const correctPassword = "matan";


    if (username === correctUsername && password === correctPassword) {
     
        window.location.href = "page2.html";
    } else {

        alert("אלעזר לא לגעת.");
    }
}
// הוספנו את פונקציית ה-event listener כדי לטפל בלחיצה על Enter
const passwordInput = document.getElementById("password");
passwordInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // מונע את התנהגות ברירת המחדל של הטופס (שליחה)
        login(); // הפעל את פונקציית ההתחברות
    }
});
 const usernameInput = document.getElementById("username");
 usernameInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // מונע את התנהגות ברירת המחדל של הטופס (שליחה)
        login(); // הפעל את פונקציית ההתחברות
    }
});
