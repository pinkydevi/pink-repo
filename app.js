const searchBook = () => {

    const searchField = document.getElementById('Book-search');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = ' ';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    // fetch()
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
}
const displaySearchResult = docs => {

    const searchResult = document.getElementById('search-result');

    docs.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div id = "container-div">
        <div class = "col">

        <div class="card shadow-lg  h-100">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body bg-black">
                    <h5 class=" ">Title: ${book.title}</h5>

                    <p class="card-text"> Author :${book.author_name}</p>
                    <p class="card-text"> Published :${book.publisher}</p>
                    <p class="card-text"> First publish Year :${book.first_publish_year}</p>
                    <p class="card-text"> Language :${book.language}</p>
                    <p class="card-text"> Author :${book._version_}</p>
                </div>
            </div>
            </div>
            </div>
        `;
        searchResult.appendChild(div);
    })

}


