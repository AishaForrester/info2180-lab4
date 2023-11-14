document.addEventListener('DOMContentLoaded', function () {
    var searchButton = document.querySelector('.btn');
    var userInput = document.getElementById('userInput');
    var resultDiv = document.getElementById('result');

    searchButton.addEventListener('click', function () {
        var searchTerm = userInput.value;
        

        // Sanitize user input for malicious intentions
        var sanitizedSearchTerm = encodeURIComponent(searchTerm);

        // Fetch superhero information based on the search term
        fetch('superheroes.php?query=' + sanitizedSearchTerm)
            .then(response => response.json())
            .then(superheroes => {  //this is the json array
                // Clear previous results
                resultDiv.innerHTML = '';

                if (superheroes.length > 0) {  //here we traverse through the json array
                    // Display the result in the 'result' div
                    superheroes.forEach(superhero => {
                        var superheroDiv = document.createElement('div');
                        var supRes = document.createElement('h1');  //to display result
                        var aliasHeading = document.createElement('h3');
                        var nameHeading = document.createElement('h4');
                        var bioParagraph = document.createElement('p');

                        supRes.textContent = 'RESULT'; //setting variable to result
                        aliasHeading.textContent = superhero.alias; //setting variable content to alias
                        nameHeading.textContent = superhero.name;
                        bioParagraph.textContent = superhero.biography;

                        superheroDiv.appendChild(supRes);  //adding our content to div
                        superheroDiv.appendChild(aliasHeading);
                        superheroDiv.appendChild(nameHeading);
                        superheroDiv.appendChild(bioParagraph);

                        resultDiv.appendChild(superheroDiv);  //adding div to other div
                    });
                } else {
                    // Display message if superhero not found
                    resultDiv.innerHTML = '<p>Superhero not found.</p>';
                }
            })
            .catch(error => {
                console.log(error);
            });
    });
   
});








                




