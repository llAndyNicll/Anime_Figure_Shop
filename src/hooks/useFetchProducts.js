import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductos } from "../helpers/getProductos";

export const useFetchProducts = () => {

    const [ state, setState ] = useState({

        data: [],
        loading: true

    });

    const dispatch = useDispatch();

    useEffect( () => {

        getProductos()
            .then( productos => {

                setTimeout( () => {

                    setState({ data: productos, loading: false });

                    dispatch({ type: 'CARGAR_PRODUCTOS', payload: productos });


                }, 1000 );

            });        

    }, [] );

    return state

};