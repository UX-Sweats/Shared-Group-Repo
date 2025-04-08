// This is for search bar
// Need to Add Search Function Latter
function search(query){
    query.preventDefault();
    let vquery = query.target.elements["search"].value;
    console.log(vquery)
    
 }
 
 something.addEventListener("submit", search, false)