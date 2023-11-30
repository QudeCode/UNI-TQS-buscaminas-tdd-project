async function submitForm() {
    var username = document.getElementById("username").value;
    var difficulty = document.getElementById("difficulty").value;

    // Realizar solicitud Fetch
    await fetch('src/controllers/gameController.php?difficult='+difficulty+'&username='+username)
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-content").innerHTML = data;
    })
    .catch(error => console.error('Error:', error));
}