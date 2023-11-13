document.addEventListener('DOMContentLoaded', function(){  //execute when html page loads
    var search = this.querySelector('button');  //having a reference to our html button

    search.addEventListener('click', function(){  //setting a trigger for when button is clicked
        fetch('superheroes.php')  //get our php file
        .then(response=>response.text()) //if we get it we will convert what it returns to text
        .then(data => {  //when we get that text value we will display as an alert when user clicks
            alert(data);
        }) 
    });//end of button event listener
}); //end of DOM