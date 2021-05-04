const url = "https://www.flowerp.online/wp-json/wp/v2/posts";
fetch(url)
.then(response => response.json())
.then(data => {
    listPosts(data);
})
.catch((error) => {
    console.error('Error:', error);
});

const output = document.querySelector("#posts");
function listPosts (posts) {
    let myList = "";
    for (let post of posts){
        console.log(post);
        myList += `
        <li>
            <a href="bloggspesific.html?id=${post.id}">
            <h3>${post.title.rendered}</h3>
            <p>${post.excerpt.rendered}</p>
    
            
            
                
                
                
            
            </a>
        </li>`;

    }
    output.innerHTML = myList;
}



  