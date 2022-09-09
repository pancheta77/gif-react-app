import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
        // console.log(newCategory);

        if ( categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories ]);
        // setCategories( cat => [ ...cat, 'algo']);
    } 

    return(
        <>
            {/* Titulo */}
            <h1>GifApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategory={ setCategories }
                onNewCategory = { (value) => onAddCategory(value) }
            />

            {/* Listado gif */}
            { categories.map( (category) => 
                (
                    <GifGrid 
                    key={ category }
                    category={category} />
                )
            )}
            

      
        </>
    )
}