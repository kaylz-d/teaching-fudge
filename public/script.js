fetch("/stats")
    .then(response => {
        if (!response.ok) throw new Error("bruh the response not good");
        return response.json();
    })
    .then(data => {
        
        console.log("API data: ", data);
        
        // document.getElementById("hackatime-output").textContent = JSON.stringify(data, null, 2);
        const daOutput = document.getElementById("hackatime-output");

        const humanReadable = data.data.human_readable_total;
        console.log("human readable:", humanReadable);
        daOutput.textContent = "Kaylee's Hackatime stats today: " + humanReadable;
    })
    .catch(error => {
        console.error("ughhh fetch error:", error);
        document.getElementById("hackatime-output").textContent = "it no load";
    })