import {createContext, useState, useContext} from 'react';

const busquedaGlobal=createContext();

export default function LogicaBusqueda({children}) {
    const[escritoUser,setEscritoUser]=useState("");
    const[equipoOn,setEquipoOn]=useState("");
    return(
        <busquedaGlobal.Provider value={{escritoUser,setEscritoUser, equipoOn, setEquipoOn}}>
            {children}
        </busquedaGlobal.Provider>
    );
}

export const Buscar=()=>useContext(busquedaGlobal);