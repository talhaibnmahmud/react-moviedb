import {
  API_KEY,
  API_URL,
  SEARCH_BASE_URL,
  POPULAR_BAES_URL,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
} from "./config";

const defaultConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BAES_URL}&page=${page}`;

    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieID) => {
    const endpoint = `${API_URL}movie/${movieID}?api_key=${API_KEY}`;

    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieID) => {
    const endpoint = `${API_URL}movie/${movieID}/credits?api_key=${API_KEY}`;

    return await (await fetch(endpoint)).json();
  },
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();

    return reqToken.request_token;
  },
  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken,
    };

    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData),
      })
    ).json();

    if (data.success) {
      const sessionID = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken }),
        })
      ).json();

      return sessionID;
    }
  },
  rateMovie: async (sessionID, movieID, value) => {
    const endpoint = `${API_URL}movie/${movieID}/rating?api_key=${API_KEY}&session_id=${sessionID}`;

    const rating = await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify({ value }),
      })
    ).json();

    return rating;
  },
};

export default apiSettings;
