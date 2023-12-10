
//import './App.css';
//import {Home1} from './Home';
//import Lesson2 from './Lesson2'
//import StateFulComponent from "./Lesson3"




// function App() {
//   return (
//     <div className="App">
//       <Home1 name={"swapni"} job_role={"developer"}/>
//     <Lesson2 name={"swapni1"} job_role={"developer1"}/>
//           </div>
//   );
// }

// function App1() {
//   return (
//     <div className="App">
//       <Home1 name={"swapni"} job_role={"developer"}/>
//     <Lesson2 name={"swapni1"} job_role={"developer1"}/>
//     <StateFulComponent/>
//           </div>
//   );
// }

// export {App, App1};

import logo from './logo.svg';
import './App.css';
import Channel from './data'
import VideoCard from './VideoCard';

function App() {

  const videos = [

    {
      id: 1,
      title: "Silver Official Trailer | Prime Video ",
      thumbnailUrl: "https://img.youtube.com/vi/l82zIibKF-E/mqdefault.jpg",
      likes: 3000 / 1000,
      views: 7000 / 1000,
      channelName: "Amazon Prime",
      channelLogoUrl: "https://yt3.ggpht.com/ady-sFHVvjfJS0i8v2pF-LOwNmqv3e4hDSiIcOyI1jDCwl84isyNlQ8rl-yxm7_l1jSxPS_Epk0=s88-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 2,
      title: "Roast_Mortem",
      thumbnailUrl: "https://assets.fireside.fm/file/fireside-images/podcasts/images/f/f05343ff-2d21-4305-89eb-102815b99aa5/cover_medium.jpg",
      likes: 2000 / 1000,
      views: 4000 / 1000,
      channelName: "Roast Mortem",
      channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKa29Ko4wRcwit-ZmQ_Hb1l9GVm5JmteyGv7aLnF=s68-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 3,
      title: "Animal Movie Tailer | Ranvir Kapoor ",
      thumbnailUrl: "https://img.youtube.com/vi/Dydmpfo68DA/mqdefault.jpg",
      likes: 1000 / 1000,
      views: 4000 / 1000,
      channelName: "T series",
      channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKYkn9Q9VM_xwhxA6ik3lGkWyRZ5N62fLHtuuUuy2w=s68-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 4,
      title: "Motu Patlu with Elephant",
      thumbnailUrl: "https://i3.ytimg.com/vi/qSd9Aw1AGE4/hqdefault.jpg",
      likes: 29000 / 1000,
      views: 340000 / 1000,
      channelName: "Voot Kids",
      channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKbYvzZErIdluedUkOYBhQCjcr44bIo7UIhW69riNw=s240-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 5,
      title: "Vincenzo | Hindi Trailer  ",
      thumbnailUrl: "https://img.youtube.com/vi/kk2i14f6MlY/mqdefault.jpg",
      likes: 7000 / 1000,
      views: 21000 / 1000,
      channelName: "Netflix ",
      channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKYV4KHgrKl8ayyBOnJlJw0C3VXeraba0mSqtltECA=s88-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 6,
      title: "THE AVENGERS",
      thumbnailUrl: "https://i.pinimg.com/564x/59/89/4c/59894c003f9760fcafa25401e84e5750.jpg",
      likes: 46700 / 1000,
      views: 340000 / 1000,
      channelName: "Top Movie Clips",
      channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKZaKYOM_vd4ikhTJKcUEXaLAC3gtaiMPgF5EvX_MA=s68-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 7,
      title: "Until I Found You",
      thumbnailUrl: "https://i0.wp.com/plnkwifi.com/wp-content/uploads/2021/09/06545.jpg?fit=1200%2C628&ssl=1",
      likes: 68390 / 1000,
      views: 603048 / 1000,
      channelName: "Sarcasam",
      channelLogoUrl: "https://yt3.ggpht.com/MzIodMscOCa3D5F1nIfjfP5Y3WStcPT2qeaMFsqlI6YBbay6j_LMyW5KOjXINsXu5_UWU_AxuA=s68-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 8,
      title: "Crowd work and airbags",
      thumbnailUrl: "https://i.ytimg.com/vi/NFiNbe7dRYI/maxresdefault.jpg",
      likes: 40370 / 1000,
      views: 204790 / 1000,
      channelName: "Rajashekhar",
      channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKbl2dRmJCLprF7GFuWwVjTGwlKrvCSEf5QYCV3D=s68-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 9,
      title: "Any Body Can Dance",
      thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BMTM2OTY3MDU4MF5BMl5BanBnXkFtZTcwMzg2MzU1Nw@@._V1_.jpg",
      likes: 84005 / 1000,
      views: 221525 / 1000,
      channelName: "Marcos",
      channelLogoUrl: "https://yt3.ggpht.com/MiMn8u2TU1KlTIAn_qvCMLxHcIcElaC1WBmWXntM6Zb3cQXJ03KaAOyK6IuKX85IOODmItsNXQ=s68-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 10,
      title: "Beerus vs Champus",
      thumbnailUrl: "https://qph.cf2.quoracdn.net/main-qimg-9a434df093218f47f572301af858dd37-lq",
      likes: 20000 / 1000,
      views: 24000 / 1000,
      channelName: "Dragon Saayian",
      channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKaJB5sSM0Hk1YoftzLadB_FbvV5h5t1juGVwz4=s68-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 11,
      title: "Sanju Trailer",
      thumbnailUrl: "https://images.firstpost.com/wp-content/uploads/2018/05/Sanju-poster-1200.jpg",
      likes: 17000 / 1000,
      views: 10000 / 1000,
      channelName: "Star Studios",
      channelLogoUrl: "https://yt3.ggpht.com/Kg9Sq9KGMIfJAfEA4nnoSInt7oZMV9XtWj-7unYYAZw8k6IukqZIsPOIKDWFSNRGUAK4yLHoGw=s68-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 12,
      title: "The 2nd Hokage",
      thumbnailUrl: "https://media-assets-ggwp.s3.ap-southeast-1.amazonaws.com/2022/05/Tobirama-Senju-640x360.jpg",
      likes: 130000 / 1000,
      views: 224000 / 1000,
      channelName: "TNaruto Vibes",
      channelLogoUrl: "https://yt3.googleusercontent.com/EWVMx6FhGMWW8AsqbqAd3EIii_iXIMmjzT4QeRx9H4Jsek-UksbGkQuf_K_tbvpCNOnmT6Y9-g=s176-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 13,
      title: "Animal Trailer",
      thumbnailUrl: "https://i.ytimg.com/vi/Dydmpfo68DA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC7fM_SdLSqlePDwwKGGArdhZmURQ",
      likes: 56278 / 1000,
      views: 521511 / 1000,
      channelName: "T-Series",
      channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKYkn9Q9VM_xwhxA6ik3lGkWyRZ5N62fLHtuuUuy2w=s68-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 14,
      title: "Telugu Food Vlogs",
      thumbnailUrl: "https://i.ytimg.com/vi/wGiXlVy0rRA/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCA4c-h551QCMk4lP7n46bwaSI6DQ",
      likes: 13000 / 1000,
      views: 23000 / 1000,
      channelName: "Vlogs",
      channelLogoUrl: "https://yt3.ggpht.com/sdqhp08WFmhLPtYbcNMv7sA8gk5cPDt9X2KfHLXmK0FGUK4h87USGozuHNrKDXOIf3k2XhiBiCI=s68-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 15,
      title: "Madara vs Shinobi",
      thumbnailUrl: "https://kanto.legiaodosherois.com.br/w728-h381-gnw-cfill-gcc/wp-content/uploads/2021/05/legiao__izBuS1LOKq7.png.webp",
      likes: 27728 / 10008,
      views: 515260 / 1000,
      channelName: "Crunchy roll Collections",
      channelLogoUrl: "https://yt3.ggpht.com/ytc/APkrFKaVnvc8KleIdBDnGmKV6ARBeuArPZaHuE2wyYWlRw=s68-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 16,
      title: "Scam 1992",
      thumbnailUrl: "https://origin-staticv2.sonyliv.com/videoasset_images/scam1992_cr4_landscape_thumb.jpg",
      likes: 5000 / 1000,
      views: 80000 / 1000,
      channelName: "Thyview",
      channelLogoUrl: "https://yt3.googleusercontent.com/7Tfn3aiKefLWzuQFh6ojiPAiUKMvHrRDj6ICAtuS0_GArnCmg4fLqYedUz-FWqnV1iYKCYa29Lk=s176-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 17,
      title: "Top 5 Smartest kills  Death Note",
      thumbnailUrl: "https://i.ytimg.com/vi/hllsOtU1CEA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCcLUOrnis-WejCviUu6sh4I8taHA",
      likes: 245000 / 1000,
      views: 323000 / 1000,
      channelName: "Clue Analysis ",
      channelLogoUrl: "https://yt3.ggpht.com/xvhUvCYBUcUyVtMmbBxgfUxF8IcBbfcCcdX5ugqdlyfl-8IpvWBEgk1DG7718zo8zLgwq5hyfQ=s68-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 18,
      title: "Breathless| Shankar Mahadevan",
      thumbnailUrl: "https://i.ytimg.com/vi/nWeax5joZFw/mqdefault.jpg",
      likes: 54551 / 1000,
      views: 115250 / 1000,
      channelName: "Sarigamapa songs",
      channelLogoUrl: "https://yt3.ggpht.com/qsis-wNMOpmmnP9PDes4wOpskS-fxzMpNhaWwoSQ0kJjXnb5V8kNg1xc9tUVPURsN9nYte9W=s68-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 19,
      title: "BB ki Wines",
      thumbnailUrl: "https://wp-socialnation-assets.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/07/30204151/best-of-bb-ki-vines-1152x759.png",
      likes: 23000 / 1000,
      views: 55000 / 1000,
      channelName: "BB ki Vines",
      channelLogoUrl: "https://yt3.ggpht.com/l_ZIXrVEQcHTBTsmpt2CFiWJF9_0hwB3rngr1_lxozZ3Lz58Ij5TcDFOp2TYlioU2gI9RlyExw=s68-c-k-c0x00ffffff-no-rj"
    },
    {
      id: 20,
      title: "A Tribute To MSD",
      thumbnailUrl: "https://i.pinimg.com/originals/3e/b1/c2/3eb1c2ed04cc648248e013c7728d81ce.jpg",
      likes: 79000 / 1000,
      views: 90000 / 1000,
      channelName: "ICC",
      channelLogoUrl: "https://yt3.ggpht.com/3K6h6gpMPf4mK9qh6SXTl0W3PLxnOMzUnFHc2lbS9t-ucS-b4JGcR8nW7ja9XDYkHM-kAnijk2c=s68-c-k-c0x00ffffff-no-rj"
    },
  ];


  return (
    <div>
      <Channel />
      <div className='cards'>
        {videos.map((video) => {
          return (
            <VideoCard videoThumbnail={video.thumbnailUrl} likes={video.likes} views={video.views} title={video.title} channelName={video.channelName} channelLogoUrl={video.channelLogoUrl} />
          )
        })}
      </div>
    </div>
  );
}

export default App;

<iframe width="930" height="523" src="https://www.youtube.com/embed/596YLCHWRa4" title="Trending Songs You Must Listen Right Now | Hukum, Varma&#39;s Playlist, Sammohanunda, Heeriye | Thyview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>