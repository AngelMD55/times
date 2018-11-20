var search = $("#exampleFormControlInput1").val();
var beginDate = $("#begin").val();

var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&begin_date=" + beginDate + "&apikey=e16a8f856f654bdd81bccef373d3f5ef"

$("#search").on("click", function(event){

    event.preventDefault();

$.ajax({
  url: queryUrl,
  method: 'GET',
}).then(function (response){
    console.log(response)

})
})