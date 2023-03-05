import React, { useContext, useEffect, useState } from 'react'
import Spinner from './Spinner';
import Youtuberitem from "./youtuberitem";
import context from './context';

function Youtubers() {
 const {youtuberslist,setlist,seti,i}=useContext(context);
   const [todisplay,setdisplay]=useState(true);
 const channelid=["UCeVMnSShP_Iviwkknt83cww","UCF7BExjT2zH_mmyqOB139Dg","UCBqFKDipsnzvJdt6UT0lMIg","UCR-foyF-C6VuAlwy3KZMkgA","UCj22tfcQrWG7EMEKS0qLeEg","UC5c9VlYTSvBSCaoMu_GI6gQ",
"UC7eHZXheF8nVOfwB2PEslMw","UCX8pnu3DYUnx8qy8V_c6oHg","UCt4atlExw8aj3Bm79nv1fig","UCSiDGb0MnHFGjs4E2WKvShw","UCqwUrj10mAEsqezcItqvwEw","UC_vcKmg67vjMP7ciLnSxSHQ","UCOhHO2ICt0ti9KAh-QHvttQ","UCHmk8iNJHvf5mGN6_pkPc7g","UCGdPm5Aq081vVD7ih9jZf6Q","UCfLuT3JwLx8rvHjHfTymekw","UCgoxyzvouZM-tCgsYzrYtyg","UCfmqLyr1PI3_zbwppHNEzuQ"];

  const updatenow=async ()=>{
   
      let url=`https:youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelid[i]}&key=AIzaSyCDX_dPZ9-KEWPUtjmsxiX8H5qGUhmnYu8`;
      let data=await fetch(url);
      let parsedata= await data.json();
      console.log(parsedata);
      setlist(youtuberslist.concat(parsedata.items[0]));
      console.log(youtuberslist.length);
      if(i<(channelid.length-1))
      seti(i+1);
       else 
      setdisplay(false);
     return <Spinner/>


  }
 
  useEffect(() => {
    
    document.title = `Trending Youtubers`;
   updatenow();
 
  },[i]);

  return (
    <>

    <div className='container'>
      <h1>Trending Youtubers of India</h1>
    </div>
    {/* <Spinner/> */}
    <div className='container' style={{display:"grid",gridTemplateColumns:"auto auto" ,justifyContent:"space-evenly"}}>
       {youtuberslist.map(e =>{
        return <Youtuberitem url={e.snippet.thumbnails.default.url} width={e.snippet.thumbnails.default.width} height={e.snippet.thumbnails.default.height} id={e.id} title={e.snippet.title} description={e.snippet.description} subscriberscount={e.statistics.subscriberCount} publisherdAt={e.snippet.publishedAt} videoCount={e.statistics.videoCount} viewCount={e.statistics.viewCount} key={e.id}/>
       })

       }
    </div>
    </>
  )
}

export default Youtubers
