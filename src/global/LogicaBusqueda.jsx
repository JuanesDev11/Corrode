import {createContext, useState, useContext} from 'react';

const busquedaGlobal=createContext();

export default function LogicaBusqueda({children}) {
    const[escritoUser,setEscritoUser]=useState("");
    return(
        <busquedaGlobal.Provider value={{escritoUser,setEscritoUser}}>
            {children}
        </busquedaGlobal.Provider>
    );
}

export const Buscar=()=>useContext(busquedaGlobal);