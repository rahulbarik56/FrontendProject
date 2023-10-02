"use strict";

const api_key = "953d2e8e75ce7d238d333a6e1cd3eb8b";

const imageBaseURL = "https://image.tmdb.org/t/p/"

const  fetchDataFromServer = function(url , callback ,optionalparam){
    fetch(url)
    .then(response => response.json())
     .then(data => callback(data , optionalparam));
}

export { imageBaseURL ,api_key , fetchDataFromServer};

