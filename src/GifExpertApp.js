import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const initialData=['One Piece']
    const [categories, setCategories] = useState(initialData);

    /* const handleAdd=()=>{
        // setCategories([...categories, 'One Punch']);
        setCategories(cats=>[...cats, 'One Punch']);
    } */

    return (
        <div>
            <h2>GifExpertApp</h2>
            {/* {<AddCategory setCategories={setCategories} categories={categories} />} */}
            {<AddCategory setCategories={setCategories} />}
            <hr />
            <ol>
                {
                    categories.map(category=>(
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp
