'use  strict'
// import all component and function 

import { sidebar } from "./sidebar.js"
import { api_key,imageBaseURL,fetchDataFromServer } from "./api.js"

const pageContent = document.querySelector("[page-content]");




sidebar();

fetchDataFromServer(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1` , heroBanner );

const heroBanner = function({results:Movielist}){

    const banner = document.createElement("section");
    banner.classList.add("banner");
    banner.ariaLabel = "Popular Movies";

    banner.innerHTML = ``;

    let controlItemIndex = 0;

    for(const [index , movie] of movielist.entries()){
        
    }


}
