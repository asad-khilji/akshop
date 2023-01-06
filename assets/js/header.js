const createHeader = () => {
    let header = document.querySelector('header');

    header.innerHTML = `
    <header>
    <a href="index.html"><h1>AK Shop</h1></a>

    <div class="search">
        <input type="text" name="search" id="searchbar" onkeyup="search_animal()" placeholder="Search...">
        <button class="btn">Search</button>
    </div>
</header>
    `;
}

createHeader();