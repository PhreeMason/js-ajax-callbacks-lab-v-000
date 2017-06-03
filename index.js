function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});

function searchRepositories() {
  var query = $('#searchTerms').value;
  var url  = `https://api.github.com/search/repositories/?q=${query}`;
  $.get(url, showRepositories(data)).fail(displayError(error));
  debugger
}

function showRepositories(data) {
  repos = data.items
  template = Handlebars.compile($('#repository-template'))
  repoList = template(repos)
  $('#results').html(repoList)
}


function displayError(error) {
  $('#errors').html(`error: ${error}`)
}
