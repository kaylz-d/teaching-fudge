fetch("/stats")
    .then(response => {
        if (!response.ok) throw new Error("bruh the response not good");
        return response.json();
    })
    .then(data => {
        document.getElementById("hackatime-output").textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error("ughhh fetch error:", error);
        documemt.getElementById("hackatime-output").textContent = "it no load";
    })