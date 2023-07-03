import './App.css';
import SearchHeader from './components/SearchHeader';
import searchImages from './common/api'
import { useState } from 'react';
import ImageList from './components/ImageList';


function App() {

  const [images, setImages] = useState([])

  const handleSubmit = async (term) =>{
   const result = await searchImages(term)
   setImages(result)
  }
  return (
   <>
      <SearchHeader search={handleSubmit}/>
      <ImageList imagesPlaceHolder={images}/>
   </>
  );
}

export default App;
