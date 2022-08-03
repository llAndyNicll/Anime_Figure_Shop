
export const productosReducer = ( state = [], action ) => {

    switch ( action.type ) {

        case 'CARGAR_PRODUCTOS':
            
            return [ ...action.payload ];
    
        default:

            return state;
    };

};