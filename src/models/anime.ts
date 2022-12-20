interface Anime {
  mal_id: number
  url: string
  images: {
    jpg: {
      image_url: string
      small_image_url: string
      large_image_url: string
    }
    webp: {
      image_url: string
      small_image_url: string
      large_image_url: string
    }
  }
  trailer: {
    youtube_id: string
    url: string
    embed_url: string
  }
  approved: boolean
  titles: Array<{
    type: string
    title: string
  }>
  title: string
  title_english: string
  title_japanese: string
  title_synonyms: Array<string>
  type: string
  source: string
  episodes: number
  status: string
  airing: boolean
  aired: {
    from: string
    to: string
    prop: {
      from: {
        day: number
        month: number
        year: number
      }
      to: {
        day: number
        month: number
        year: number
      }
      string: string
    }
  }
  duration: string
  rating: string
  score: number
  scored_by: number
  rank: number
  popularity: number
  members: number
  favorites: number
  synopsis: string
  background: string
  season: string
  year: number
  broadcast: {
    day: string
    time: string
    timezone: string
    string: string
  }
  producers: Array<
    {
      mal_id: number
      type: string
      name: string
      url: string
    }>
  licensors: Array<
    {
      mal_id: number
      type: string
      name: string
      url: string
    }>
  studios: Array<
    {
      mal_id: number
      type: string
      name: string
      url: string
    }>
  genres: Array<
    {
      mal_id: number
      type: string
      name: string
      url: string
    }>
  explicit_genres: Array<
    {
      mal_id: number
      type: string
      name: string
      url: string
    }>
  themes: Array<{
    mal_id: number
    type: string
    name: string
    url: string
  }>
  demographics: Array<
    {
      mal_id: number
      type: string
      name: string
      url: string
    }>

}

export default Anime;
