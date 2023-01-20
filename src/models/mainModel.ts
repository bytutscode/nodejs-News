

const dataApple = [
    {
      source: {
        id: null,
        name: "Lifehacker.com"
      },
      author: "Jake Peterson",
      title: "The Easiest Ways to Sync iMessages Across All Your Devices",
      description: "I recently picked up a new iPhone, and for the most part, I love it. What I didn’t love was not having my iMessages on my new iPhone synced up with my other Apple devices. Sure, my new phone had my most recent messages, but from there, things got weird. For e…",
      url: "https://lifehacker.com/the-easiest-ways-to-sync-imessages-across-all-your-devi-1850002677",
      urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/34be078e9c1af8f1a3cf54b3001ac49d.jpg",
      publishedAt: "2023-01-19T14:00:00Z",
      content: "I recently picked up a new iPhone, and for the most part, I love it. What I didnt love was not having my iMessages on my new iPhone synced up with my other Apple devices. Sure, my new phone had my mo… [+3582 chars]"
    },
    {
      source: {
        id: "engadget",
        name: "Engadget"
      },
      author: "Will Shanklin",
      title: "Apple's new 14-inch MacBook Pro gets its first discount on Amazon",
      description: "We’re already seeing the first discounts on the new 14-inch MacBook Pro, which Apple announced earlier this week. Amazon has the entry-level MacBook Pro with the M2 Pro chip for $50 off ($1,950). Meanwhile, Best Buy is tying pre-order discounts to its TotalTe…",
      url: "https://www.engadget.com/14-inch-macbook-pro-apple-deals-discount-amazon-best-buy-172511277.html",
      urlToImage: "https://s.yimg.com/os/creatr-uploaded-images/2023-01/53be1ae0-981b-11ed-bf86-2608dca1d7e6",
      publishedAt: "2023-01-19T17:25:11Z",
      content: "Were already seeing the first discounts on the new 14-inch MacBook Pro, which Apple announced earlier this week. Amazon has the entry-level MacBook Pro with the M2 Pro chip for $50 off ($1,950). Mean… [+1486 chars]"
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News"
      },
      author: "https://www.facebook.com/bbcnews",
      title: "Quiz of the week: What got cut from Apple boss's pay packet?",
      description: "How closely have you been paying attention to what's been going on over the past seven days?",
      url: "https://www.bbc.co.uk/news/world-64319567",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/B936/production/_128341474_cookpromoepas.jpg",
      publishedAt: "2023-01-19T16:14:35Z",
      content: "It's the weekly news quiz - how closely have you been paying attention to what's been going on in the world over the past seven days?\r\nIf you cannot see the quiz, follow this link. \r\nTry last week's … [+110 chars]"
    },
    {
      source: {
        id: "cnn",
        name: "CNN"
      },
      author: "Scottie Andrew",
      title: "M3GAN is already an icon. Could existing AI turn her into reality?",
      description: "There is no shortage of robot uprising fiction in the Western canon (see: the works of Ray Bradbury and Philip K. Dick; classics like \"The Terminator\"; family-friendly spins like \"The Mitchells vs. the Machines\"). It's a conceit that preys on one of mankind's…",
      url: "https://www.cnn.com/2023/01/19/entertainment/m3gan-robot-uprising-cec/index.html",
      urlToImage: "https://media.cnn.com/api/v1/images/stellar/prod/230119082858-02-m3gan-2022.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-01-19T19:30:05Z",
      content: "Editors Note: Reader beware, this article contains minor spoilers for M3GAN.\r\nThere is no shortage of robot uprising fiction in the Western canon (see: the works of Ray Bradbury and Philip K. Dick; c… [+6822 chars]"
    },
    {
      source: {
        id: "reuters",
        name: "Reuters"
      },
      author: null,
      title: "U.S. union membership rate falls to all-time low despite organizing ... - Reuters",
      description: "The United States' union membership rate, or percentage of wage and salary workers who belong to unions, edged down to an all-time low in 2022, data released by a government agency showed.",
      url: "https://www.reuters.com/world/us/us-union-membership-rate-falls-all-time-low-despite-organizing-efforts-data-2023-01-19/",
      urlToImage: "https://www.reuters.com/resizer/RYKB1g9m_miyxTo1w8Gz8JuqYW8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/N5HXTVDUM5JM3GGSXQGHDHQ5GM.jpg",
      publishedAt: "2023-01-19T21:40:00Z",
      content: "WASHINGTON, Jan 19 (Reuters) - The United States' union membership rate, or percentage of wage and salary workers who belong to unions, edged down to an all-time low in 2022, data released by a gover… [+1837 chars]"
    },
    {
      source: {
        id: "reuters",
        name: "Reuters"
      },
      author: null,
      title: "Here's what Twitter lost in advertising revenue in final months of 2022 - Reuters",
      description: "Top advertisers on Twitter slashed their spending after Elon Musk's takeover, according to estimates compiled for Reuters by research firm Pathmatics, in the latest shock to the company's dominant revenue source.",
      url: "https://www.reuters.com/technology/heres-what-twitter-lost-advertising-revenue-final-months-2022-2023-01-19/",
      urlToImage: "https://www.reuters.com/resizer/IjDymPGK_pW0iCpWbvT1GzA6GaQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LJ7KETWIIVMCTEYSH72ZN255RE.jpg",
      publishedAt: "2023-01-19T19:47:00Z",
      content: "NEW YORK/LONDON, Jan 19 (Reuters) - Top advertisers on Twitter slashed their spending after Elon Musk's takeover, according to estimates compiled for Reuters by research firm Pathmatics, in the lates… [+6165 chars]"
    },
    {
      source: {
        id: "reuters",
        name: "Reuters"
      },
      author: null,
      title: "No sign of British actor Julian Sands after 6 days missing in ... - Reuters",
      description: "The search for British-born film star Julian Sands, best known for his role in \"A Room with a View,\" pressed on for a sixth day in the snow-covered mountains of Southern California with no sign of the 65-year-old actor, authorities said on Thursday.",
      url: "https://www.reuters.com/world/us/no-sign-british-actor-julian-sands-after-6-days-missing-california-mountains-2023-01-19/",
      urlToImage: "https://www.reuters.com/resizer/GpVWq0Lh3p9r-k6sd4q655o-Kn4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/67RMD7IIRBPZRFXAI2MGIO6XEI.jpg",
      publishedAt: "2023-01-19T23:01:00Z",
      content: "LOS ANGELES, Jan 19 (Reuters) - The search for British-born film star Julian Sands, best known for his role in \"A Room with a View,\" pressed on for a sixth day in the snow-covered mountains of Southe… [+3163 chars]"
    },
    {
      source: {
        id: "reuters",
        name: "Reuters"
      },
      author: null,
      title: "Society Watch: Can a focus on education save the S in ESG? - Reuters",
      description: "Sandwiched between the reporting behemoths of environment and governance, the social pillar of an organisation’s ESG strategy has always proved something of an enigma. Important yes, but what does it actually stand for, and how can companies demonstrate they …",
      url: "https://www.reuters.com/business/sustainable-business/society-watch-can-focus-education-save-s-esg-2023-01-19/",
      urlToImage: "https://www.reuters.com/resizer/PYbk6sUGY2pAqN17HkneW7QblOE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ATQ3QYJZ3VLG5KUKJOJIZEYWPA.jpg",
      publishedAt: "2023-01-19T15:36:00Z",
      content: "January 10 - Sandwiched between the reporting behemoths of environment and governance, the social pillar of an organisations ESG strategy has always proved something of an enigma. Important yes, but … [+7317 chars]"
    },
    {
      source: {
        id: null,
        name: "Android Central"
      },
      author: "derrek.lee@futurenet.com (Derrek Lee)",
      title: "Samsung and Apple duked it out for the top spot in 2022 amid a shrinking market",
      description: "The latest report on smartphone shipments in 2022 show highlight tough economic times for OEMs.",
      url: "https://www.androidcentral.com/phones/smartphone-market-share-2022",
      urlToImage: "https://cdn.mos.cms.futurecdn.net/c3bTdgetMPKi6PMM2CdtLU-1200-80.jpg",
      publishedAt: "2023-01-19T01:19:50Z",
      content: "<ul><li>The latest report shows smartphone shipments fell by 17% in 2022.</li><li>Apple managed to gain the top spot in Q2 2022, no doubt thanks to the iPhone 14 series.</li><li>Samsung shipped the m… [+2170 chars]"
    },
    {
      source: {
        id: null,
        name: "Android Central"
      },
      author: "shruti.shekar@futurenet.com (Shruti Shekar)",
      title: "ChatGPT could help Google more than Microsoft, ironically",
      description: "Analysts examine what it would mean if Microsoft decides to integrate ChatGPT with Bing and if that will create true competition with Google.",
      url: "https://www.androidcentral.com/apps-software/chatgpt-could-help-google-more-than-microsoft",
      urlToImage: "https://cdn.mos.cms.futurecdn.net/GdaC5YNFNmidmnbFqmdC7F-1200-80.jpg",
      publishedAt: "2023-01-19T14:03:31Z",
      content: "ChatGPT has taken the tech world by storm, and it’s gotten Microsoft thinking about integrating the AI chatbot into its Bing search. However, some analysts say Google is way ahead of ChatGPT, and if … [+6383 chars]"
    }
]

type filterNewsFrom = ''| 'apple';

export const newsModel = {
    getNews: function () {    
        return dataApple
    }
}