const BASE_URL = "https://api.github.com/users/qubitro";

export const FetchRepos = async () => {
    const response = await fetch(`${BASE_URL}/repos`);
    return response.json();
};


export const FetchUser = async () => {
    const response = await fetch(BASE_URL);
    return response.json();
};
