import Anime from "./anime";

interface ApiResponse {
  data: Array<Anime>
  pagination: {
    last_visible_page: number,
    has_next_page: boolean,
    items: {
      count: number,
      total: number,
      per_page: number
    }
  }
}

export default ApiResponse;
