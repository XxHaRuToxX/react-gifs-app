

export const getGifs=async(category)=>{
    /* el encondedUrl sirve para espapar de los espacios de la caetgory */
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=UsornkQGBLk0Mtx74V8SLqGngjL4ozIN`;
    const resp=await fetch(url);
    const {data}= await resp.json();

    /* console.log(data[0].images.original.url) */
    console.log(data)
    const gifs=data.map(img=>{
        return{
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url, /* el signo de interrogacion indica que si viene una imagen que lo traiga y sino viene que no lo traiga */
        }
    })

    return gifs;

    /* console.log(gifs);
    setImages(gifs); */
}

