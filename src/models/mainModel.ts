import { json } from "stream/consumers";

type UrlsApi = {
    apple: string,
    tesla: string,
    business: string,
    tws: string,
    tc: string
}

type NewsType = '' | 'business' | 'tws' | 'tc' | 'tesla' | 'apple';

const urlsApi = [{
    apple: 'https://newsapi.org/v2/everything?q=apple&from=2023-01-19&to=2023-01-19&sortBy=popularity&apiKey=84a91b7abcb84cefad007175f5c72759'
},
{
    tesla: "https://newsapi.org/v2/everything?q=tesla&from=2022-12-20&sortBy=publishedAt&apiKey=84a91b7abcb84cefad007175f5c72759"
},
{
    business: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=84a91b7abcb84cefad007175f5c72759'
},
{
    tc: "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=84a91b7abcb84cefad007175f5c72759"
},
{
    tws: 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=84a91b7abcb84cefad007175f5c72759'
}

]

export const newsModel = {
    getNews: async function () {
        let url =  urlsApi[0].apple;
        let response = await fetch(url as string);
        const data = response.json();
        return data;
    }
}