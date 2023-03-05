import React, { useContext } from 'react'
import Playlist from './playlist'
import context from './context'

function Playlistpage() {
    const { playlistarray } = useContext(context);
    return (
        <>

            <div className='container'>
                <div className='container' >
                    <div>
                        <img src={playlistarray.image} alt="" style={{ height: "118px", width: "122px", borderRadius: "76px", margin: "13px 496px" }} />
                    </div>
                    <h5 style={{textAlign:"center"}}>Title:{playlistarray.title}</h5>
                    <p style={{marginTop:"23px"}}> <strong>Description:</strong>{playlistarray.description}</p>
                </div>
            </div>
                <h2 style={{textAlign:"center"}}>Popular Playlists</h2>

            <div className='container' style={{ display: "grid", gridTemplateColumns: "auto auto auto", justifyContent: "space-evenly" }}>
{playlistarray.playlist.map(e =>{
return <Playlist title={e.snippet.title} description={e.snippet.description} date={e.snippet.publishedAt} url={e.snippet.thumbnails.default.url} id={e.id} key={e.id} />

})
}

</div>
        </>
    )
}

export default Playlistpage
