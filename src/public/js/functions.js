async function submitForm() {

    var username = document.getElementById("username").value;
    var difficulty = document.getElementById("difficulty").value;
    console.log(username, " ", difficulty);


    // Realizar solicitud Fetch
    await fetch('src/controllers/gameController.php?difficult='+difficulty+'&username='+username)
        .then(response => response.text())
        .then(data => {
            console.log("hola");
            document.getElementById("main-content").innerHTML = data;
    })
    .catch(error => console.error('Error:', error));
}
// esto lo deberiamos haver hecho con TDD 