// Get the HTML element where you want to display the follower count
var spanElement = document.querySelector('.purecounter');

// Make a GET request to the Instagram web-facing API
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.instagram.com/mariam.m.magdi/');
xhr.onload = function() {
  if (xhr.status === 200) {
    // Parse the JSON response
    var data = JSON.parse(xhr.responseText);
    // Get the follower count
    var followers = data.graphql.user.edge_followed_by.count;
    // Update the HTML element with the follower count
    spanElement.setAttribute('data-purecounter-end', followers);
  }
  else {
    // Handle error
    console.log('Request failed: ' + xhr.status);
  }
};
xhr.send();