import React, { useState,useContext } from 'react'
import context from './context';
import { useNavigate } from 'react-router-dom'

function Playlist(props) {
  const navigate = useNavigate()

  const {title,description,url,date,id}=props;
  const contexts=useContext(context);
  const {mostlikedvideo,setvideo}=contexts;
  const mf=()=>{
    setvideo({id:id});
  }
  const handle=async()=>{
   mf();
    console.log(mostlikedvideo.id +"hello")
    console.log(id +"helo");
    
    navigate('/mostlikedvideo');
  }

  return (
    <>
    <div className="card" style={{width:"18rem",color:"#282890"}}>
  <img src={url} className="card-img-top" alt="..." style={{borderRadius:"2px"}}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"> PublishedAt:{new Date(props.date).toDateString()} {new Date(props.date).toTimeString()}</p>
    {/* <button type="button" className="btn btn-warning my-2" onClick={handle}>Most liked video</button> */}
    <a href={`https://youtube.com/playlist?list=${id}`} className="btn btn-primary">Go to Playlist</a>
  </div>
</div>
    
  </>
  )
}

export default Playlist
