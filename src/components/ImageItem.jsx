function ImageItem({image}) {
    return ( 
            <img className="block" src={image.urls.small} alt={image.alt_description} />
     );
}

export default ImageItem ;