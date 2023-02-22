export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=cx6WJqCxNTvxpkKyZOdAiCun0G7fBmfH&q=${category}&limit=5`;
    const getApi = await fetch(url);
    const { data } = await getApi.json();
  
    const gifs = data.map((e) => ({
      id: e.id,
      title: e.title,
      image: e.images.original.url,
    }));

    return gifs;
  };