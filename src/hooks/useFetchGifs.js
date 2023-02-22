import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = (category)=>{
/* 
  * necesito que cuando se carque el componente me traiga los gif de la categoria
    => Par eso debo crear una funcion que obtenga los gifs de la categoria y los 
      almacene en un estado local
  */
  /* 
      key = id 
      titulo = title
      gif = image
      00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      */

      const [images, setImages] = useState([]);
      const [isLoading, setIsLoading] = useState(true)

      const getImages = async () => {
        const newImages = await getGif(category);
        setImages(newImages);
        images?setIsLoading(false):getImages();
      };
    
      useEffect(() => {
        getImages();
      }, []);
    return {
    images,
    isLoading
}
}