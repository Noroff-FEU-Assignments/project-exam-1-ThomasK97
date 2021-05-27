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
function displayPost (data){
    console.log(data);
    const title = data.title.rendered;
    const excerpt = data.excerpt.rendered;
    const link = data.link;
    let content = `
    <h1>${title}</h1>
    <p>${data.content.rendered}</p>
    <a href="blogposts.html"> &lt; Back</a>
     
    `
   

    output.innerHTML = 
    content;document.title = title;


} 
    