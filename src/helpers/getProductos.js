
export const getProductos = async() => {

    const url = 'https://api.mercadolibre.com/sites/MLC/search?category=MLC1648';
    
    const resp = await fetch( url );

    const { results } = await resp.json();

    const productos = results.map( producto => {
        return { ...producto };
    });

    return productos;

};
