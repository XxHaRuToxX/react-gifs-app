import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const { data:images, loading }=useFetchGifs(category);

    // useEffect(() => {
    //     getGifs(category)
    //     /* uno puede ser asi */
    //     /* .then(imgs=>{
    //         setImages(imgs)
    //     }) */
    //     /* y otro asi: */
    //     .then(setImages)
    // }, [category])

    return (
        <>
            <h3 className="animate__animated animate__fadeIn" >{category}</h3>
            {loading && <p className="animate__animated animate__flash" >Loading...</p> }
            <div className="card-grid">
                    {
                        images.map((img)=>(
                            <GifGridItem 
                                key={img.id}
                                /* img={img}  */
                                /* mejor es desestructurar los componentes del img */
                                {...img}
                            />
                        ))
                    }
            </div>
        </>
    )
}
