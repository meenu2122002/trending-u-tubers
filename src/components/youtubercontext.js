import React from 'react';
import context from './context';
import { useState } from 'react';

const   Youtubercontext=(props)=> {
    const [youtuberslist,setlist]=useState([]);
    const [playlistarray,setplaylistarray]=useState({
      playlist:[],
      image:"",
      title:"",
      description:""
    });
        const [mostlikedvideo,setvideo]=useState({
          viewCount:0,
          likeCount:0,
          commentCount:0,
          url:"",
          id:""
        });
    const [i,seti]=useState(0);
  return (
    <context.Provider value={{youtuberslist,i,setlist,seti,playlistarray,setplaylistarray,mostlikedvideo,setvideo}}>
{props.children}
    </context.Provider>
  );
}
export default  Youtubercontext;

