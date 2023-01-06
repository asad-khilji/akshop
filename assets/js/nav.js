const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
    <nav>
        <a href="hat.html">Hat</a>
        <a href="projector.html">Projector</a>
        <a href="projectorscreen.html">Projector Screen</a>
        <a href="messengerbag.html">Messenger Bag</a>
        <a href="microphoneset.html">Microphone Set</a>
        <a href="microphonestand.html">Microphone Stand</a>
        <a href="azanclock.html">Azan Clock</a>
        <a href="wirelessrouter.html">Wireless Router</a>
        <a href="headwear.html">Headwear</a>
    </nav>
    `;
}

createNav();