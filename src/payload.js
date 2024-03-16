!(async function () {
    document.body.style = "display:none;";
    document.body.parentElement.style = "background-color:#242424";

    // Don't trigger on profiles
    if (window.location.pathname == "/profile") {
        console.info("Skipping CSS injection on profile.");
        return;
    }

    let styleEl = document.createElement("style");

    content
        .fetch(
            "https://raw.githubusercontent.com/RealFX-Code/rocks.realfx.SpaceHeyDarkMode/master/src/styles/index.css"
        )
        .then(async function (response) {
            styleEl.innerText = await response.text();
            document.body.appendChild(styleEl);
            document.body.style = "display:block;";
        });
})();
