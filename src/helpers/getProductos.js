
export const getProductos = async() => {

    const url = 'https://api.mercadolibre.com/sites/MLC/search?category=MLC455528';
    
    const resp = await fetch( url );

    const { results } = await resp.json();

    const productos = results.map( producto => {
        return { ...producto };
    });

    return productos;

};
