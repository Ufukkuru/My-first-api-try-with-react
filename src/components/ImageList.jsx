import ImageItem from "./ImageItem";


function ImageList({imagesPlaceHolder}) {
    return ( 
        <div className="container grid grid-cols-4 gap-4 mt-10 items-center justify-center relative mx-auto">
        {imagesPlaceHolder.map((image, index) =>{
          return  <ImageItem key={index} image={image}/>
        })}
        </div>
     );
}

export default ImageList;