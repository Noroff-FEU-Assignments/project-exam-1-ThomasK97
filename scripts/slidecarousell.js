
/*api fetch*/

const url = "https://www.flowerp.online/wp-json/wp/v2/posts";
fetch(url)
.then(response => response.json())
.then(data => {
    listPosts(data);
})
.catch((error) => {
    console.error('Error:', error);
});

const output = document.querySelector(".slider");
function listPosts (posts) {
    let mySlides = "";
    for (let post of posts){
        console.log(post);
        mySlides += `
        <div class = "carousel-slider">
       
            
            <h3>${post.title.rendered}</h3>
            <p>${post.content.rendered}</p>

        </div>
        `;

    }
    output.innerHTML = mySlides;
}





/*carousel*/
var sliderPost = 1;
showPost(sliderPost);

function slides(n) {
  showPost(sliderPost += n);
}

function showPost(n) {
  var i;
  var slider = document.querySelectorAll(".carousel-slider");
  if (n > slider.length) {sliderPost = 1}
  if (n < 1) {sliderPost = slider.length}
  for (i = 0; i < slider.length; i++){
    slider[i].style.display = "none";
  }
  
  slider[sliderPost-1].style.display = "block";
}


