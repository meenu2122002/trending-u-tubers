import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import context from './context';
function Mostlikedvideo() {
    const { mostlikedvideo, setvideo } = useContext(context);
    const { viewCount, likeCount, commentCount, url, id } = mostlikedvideo;
    const [results, setresults] = useState(0);
    const [pageToken, setnextpagetoken] = useState(null);

    const myfun = async (vid) => {
        const url = ` https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${vid}&key=AIzaSyCDX_dPZ9-KEWPUtjmsxiX8H5qGUhmnYu8`;

        let data = await fetch(url);
        let parsedata = await data.json();
        if (mostlikedvideo.viewCount < parsedata.items[0].statistics.viewCount) {
            setvideo({
                viewCount: parsedata.items[0].statistics.viewCount,
                likeCount: parsedata.items[0].statistics.likeCount,
                commentCount: parsedata.items[0].statistics.commentCount,
                url: parsedata.items[0].snippet.thumbnails.default.url,

            })
        }

    }
    const update = async () => {
        if (results == 0) {
            let url = `https:youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Cid%2Csnippet&maxResults=50&playlistId=${id}&key=AIzaSyCDX_dPZ9-KEWPUtjmsxiX8H5qGUhmnYu8`;

            let data = await fetch(url);
            let parsedata = await data.json();
            if (results < parsedata.pageInfo.totalResults) {

                setresults(results + parsedata.pageInfo.resultsPerPage);
                setnextpagetoken(parsedata.nextPageToken);
                for (let i = 0; i < results; i++) {
                    myfun(parsedata.items[i].contentDetails.videoId);

                }
            }
            else {
                let urls = `https:youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Cid%2Csnippet&maxResults=50&pageToken=${pageToken}&playlistId=${id}&key=AIzaSyCDX_dPZ9-KEWPUtjmsxiX8H5qGUhmnYu8 `;
                let data = await fetch(urls);
                let parse = await data.json();
                if (results < parsedata.pageInfo.totalResults) {

                    setresults(results + parsedata.pageInfo.resultsPerPage);
                    setnextpagetoken(parsedata.nextPageToken);
                    for (let j = 0; j < results; j++) {
                        myfun(parsedata.items[j].contentDetails.videoId);

                    }
                }

            }

        }
    }

        useEffect(() => {
            update();
        }, [results]);
        return (
            <>
                <div className="container">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">viewCount:{viewCount}</h5>
                            <h5 className="card-title">likeCount:{likeCount}</h5>
                            <h5 className="card-title">commentCount:{commentCount}</h5>
                        </div>
                    </div>
                </div>
            </>
        )
    
}
export default Mostlikedvideo
