
export const getGifs = async(category) => {
    const apiKey = 'ZpMjUCMSuoEP9XwWKaqcGmy8ibiKztoS';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.fixed_height_small.url,
    }));

    return gifs;
}
