const getTopAnime = async () => {
  try {
    const response = await fetch('https://api.jikan.moe/v4/top/anime?limit=20');
    return await response.json()
  } catch (e) {
    console.log(e);
  }
};

export default getTopAnime;
