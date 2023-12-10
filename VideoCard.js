function VideoCard(props){
    return(
        <div className='video-card'>
            <div>
            <img src={props.videoThumbnail} className='thumbnail'/>
            </div>
            <div className="inner-details">
                <p className="title">{props.title}</p>
                <div className="channel-details">
                    <img src={props.channelLogoUrl} className="channel-logo"/>
                    <p>{props.channelName}</p>
                </div>
                <div className="details">
                    <p>{props.views}M Views </p>
                    <p>{props.likes}M Likes</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;