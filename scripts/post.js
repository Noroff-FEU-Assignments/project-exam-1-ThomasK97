const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
if (!id) {window.location = "blogposts.html";}

const url = `https://www.flowerp.online/wp-json/wp/v2/posts/${id}`;
fetch(url)
.then(response => response.json())
.then(data => {
    displayPost(data);
})

.catch((error) =>{
    console.error('Error:', error);
});

const output = document.querySelector("#post");
function displayPost (data) {
    console.log(data);
    

    let content = `
    <li>
        <a href="bloggspesific.html?id=${post.id}">
        <h3>${post.title.rendered}</h3>
        
        
            
            
            
        
        </a>
    </li>`;

    output.innerHTML = content;
    
}