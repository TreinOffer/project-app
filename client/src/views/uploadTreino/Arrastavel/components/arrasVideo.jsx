const ArrasVideo = ({ video, arrastar }) => {
    return(
        <>
            <video ref={arrastar} controls src={video}></video>
        </>
    )
};

export default ArrasVideo