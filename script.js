const form = document.querySelector('#searchform');
form.addEventListener('submit',async function(e){
    e.preventDefault();
    console.dir(form);
    var a = document.querySelector('#val').value;
    console.log(a);
    const config = {params: {q:a, embed: "episodes"}};
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    console.log(res.data[0].show.image.medium);
    makeimg(res.data);
})

const makeimg = (shows) => {
    for(let result of shows) {
    if(result.show.image){ 
    const img = document.createElement('IMG');
    img.src = result.show.image.medium;
    document.body.appendChild(img);
    }
    }
}