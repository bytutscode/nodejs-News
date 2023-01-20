// menu mobile animation 
const menuMobile = ()=>{
    document.querySelector('header ul').classList.toggle('activeMobile');
}
async function getMyJson(){
    let url = 'https://newsapi.org/v2/everything?q=apple&from=2023-01-17&to=2023-01-17&sortBy=popularity&apiKey=84a91b7abcb84cefad007175f5c72759';

    const data = await fetch(url);
    response = await data.json()
     console.log(response)
}
getMyJson();