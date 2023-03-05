import React, { useContext } from 'react'
import context from './context';
import { useNavigate } from 'react-router-dom'


function Youtuberitem(props) {
  const navigate = useNavigate();
  const { url, width, height, id, subscriberscount, publisherdAt, title, description, videoCount, viewCount } = props;
const {playlistarray,setplaylistarray}=useContext(context);
const getplaylist= async()=>{
    let urls=`https:youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${id}&maxResults=25&key=AIzaSyCDX_dPZ9-KEWPUtjmsxiX8H5qGUhmnYu8`;
    let data=await fetch(urls);
    let parsedata=await data.json();
    setplaylistarray({playlist:parsedata.items,image:url,title:title,description:description});
    navigate('/playlistpage');
  }


  return (

    <div className="card" style={{ width: "30rem", height: "28rem", margin: "2rem", color: "rgb(177 81 98)", border: "1px solid black", borderRadius: "10px",backgroundColor:"rgb(46 46 96)" }}>
      <div style={{ height: "126px" }}>
        <img src={url} style={{ height: "118px", width: "122px", borderRadius: "76px", margin: "13px 218px" }} alt="..." />
      </div>
      <div className="card-body">
        <h4 style={{ textAlign: "center" }}>Channel ID</h4>
        <h4 style={{ textAlign: "center" }}>{id}</h4>
        <h4 style={{ textAlign: "center" }}>Channel Name</h4>
        <h4 style={{ textAlign: "center" }}>{title}</h4>
        <h4 style={{ textAlign: "center" }}>SubscriberCount-{subscriberscount}</h4>
        <h4 style={{ textAlign: "center" }}>videoCount-{videoCount}</h4>
        <h4 style={{ textAlign: "center" }}>viewCount-{viewCount}</h4>

        <button type="button" id="bt" onClick={getplaylist} className="btn btn-info">See Playlists</button>
      </div>
    </div>

  )
}

export default Youtuberitem
