const createSection = () => {
    let section = document.querySelector('section');

    section.innerHTML = `
    <section>
    <ol id='list'>
        <a href="hat.html"><li class="animals">Hat</li></a>
        <a href="projector.html"><li class="animals">Projector</li></a>
        <a href="projectorscreen.html"><li class="animals">Projector Screen</li></a>
        <a href="messengerbag.html"><li class="animals">Messenger Bag</li></a>
        <a href="microphoneset.html"><li class="animals">Mic Set</li></a>
        <a href="microphonestand.html"><li class="animals">Mic Stand</li></a>
        <a href="azanclock.html"><li class="animals">Azan Clock</li></a>
        <a href="wirelessrouter.html"><li class="animals">Wireless Router</li></a>
        <a href="headwear.html"><li class="animals">Headwear</li></a>
    </ol>
    </section>
    `;
}

createSection();