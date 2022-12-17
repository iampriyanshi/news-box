// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function fetchArticles({ searchText }) {
  if (searchText) {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?q=${searchText}&apiKey=2841471535f047cdba271c1dc7200dff`
    );
    const data = await response.json();
    return data;
  }
}
