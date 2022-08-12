async function fetchJson() {
    try {
        let response1 = await fetch('https://api.teleport.org/api/urban_areas/');
        let data1 = await response1.json();
        let ukBrGradova = data1["_links"]["ua:item"].length;
        let randomBr = Math.floor(Math.random() * ukBrGradova + 1);
        let url = data1["_links"]["ua:item"][randomBr]["href"] + 'images/';
        let name = data1["_links"]["ua:item"][randomBr]["name"];
        let response2 = await fetch(url);
        let data2 = await response2.json();
        let webImg = data2["photos"][0]["image"]["web"];
        ispisi(name, webImg);
    }
    catch (err) {
        console.error(err);
    }
}

fetchJson();

function ispisi(name, webImg) {
    document.querySelector("#city span").textContent = " " + name + " ! ! !";
    document.querySelector("#city span").style.color = "red";
    let img = document.createElement("img");
    img.src = webImg;
    img.alt = name;
    city.after(img);
}
