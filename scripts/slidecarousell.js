const url ="https://www.flowerp.online/wp-json/wp/v2/posts";
const display = document.querySelector(".carousel-slider");
const container = document.querySelector(".slider");




fetch(url)
    .then(response => response.json())
    .then(data => posts(data))
    .catch(error => {
      
      display.innerHTML = "Page not found"
    })
   

post = (posts) => {
  console.log(posts);

      
      for (post of posts) {
          
        
          let newPost = `
          <div class "postAll">
          <h3>${post.content}</h3>
          </div>  
         
          `;
          display.innerHTML += newPost;
          
        }
      }
    
