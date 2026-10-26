import { 
    GalleryHorizontalEnd, BellRing, ChevronDown, CircleUser,
    TextAlignJustifyEnd, House,Star, SportShoe, RotateCwFadingClock,
    LogIn, ChevronUp
} from 'lucide-react';
import logo from '../assets/logo-corrode.png';
import {useState} from 'react';
import { NavLink } from 'react-router-dom';

function Menu({cerrado,setCerrado }){
    const[deportes,setDeportes]=useState(false);
    const enlaces = [
    { to: '/', label: 'Inicio', end: true },
    { to: '/futbol', label: 'Fútbol' },
    { to: '/caballos', label: 'Caballos' },
    ];

    return (
        <div className={`fixed top-2 left-2 h-[calc(100vh-1rem)] flex flex-col bg-[#0b3a6e] p-4 text-[#BBD7FD] shadow-xl z-50 rounded-2xl ${cerrado?'w-14':'w-60'} transition-all duration-300`}>
            
            {/*Logo*/}
            <div className={`flex items-center ${cerrado?'justify-start mb-8':'justify-between  px-2 mb-6'}`}>
                {!cerrado && (<img
                    src={logo}
                    alt="Corrode logo"
                    className="h-10 w-10 rounded-xl shadow-xl object-contain"
                />)}
                <TextAlignJustifyEnd
                onClick={()=>setCerrado(!cerrado)}
                className="cursor-pointer hover:text-[#00132B] transition-all duration-300"/>
            </div>

            {/*Historial-Notificaciones*/}
            <div className={`text-sm mb-6 ${cerrado?'ml-1 space-y-6':'ml-6 space-y-4'}`}>
                <div className="flex items-center justify-between hover:text-[#00132B] transition-all duration-300">
                    <div className="flex items-center">
                        <GalleryHorizontalEnd  className="mr-2 top-1 cursor-pointer" size={16} />
                        {!cerrado&&(<span>Historial</span>)}
                    </div>
                    {!cerrado&&(<ChevronDown className="cursor-pointer" size={16} />)}
                </div>

                <div className="flex items-center justify-between hover:text-[#00132B] transition-all duration-300">
                    <div className="flex items-center">
                        <BellRing className="mr-2 top-1 cursor-pointer hover:text-[#00132B]" size={16} />
                        {!cerrado&&(<span>Notificaciones</span>)}
                    </div>
                    {!cerrado&&(<ChevronDown className="cursor-pointer" size={16} />)}
                </div>
            </div>

            <hr className={`border-[#000000]/20 ${cerrado?'':'ml-6'}`} />

            {/*Inicio*/}
            <div className={`flex-1 text-sm mt-6 ${cerrado?'ml-1 space-y-6':'ml-6 space-y-4'}`}>
                
                <NavLink to="/" end={true}>
                <div className="flex items-center hover:text-[#00132B] transition-all duration-300">
                    <House
                    onClick={()=>setDeportes(!false)}
                    className="mr-2 top-1 cursor-pointer" size={16}/>
                    {!cerrado&&(<span>Inicio</span>)}
                </div>
                </NavLink>

                <div className="flex items-center justify-between hover:text-[#00132B] transition-all duration-300">
                    <div className="flex items-center">
                        <Star className="mr-2 top-1 cursor-pointer" size={16}/>
                        {!cerrado&&(<span>Favoritos</span>)}
                    </div>
                    {!cerrado&&(<ChevronDown className="cursor-pointer" size={16}/>)}
                </div>
                
                <div className={`flex items-center justify-between hover:text-[#00132B] transition-all duration-300 ${!cerrado &&!deportes?'text-[#00132B]':''}`}>
                    <div className="flex items-center">
                        <SportShoe 
                        onClick={()=>{
                            if(cerrado){
                                setCerrado(!cerrado);
                            }
                        }
                        }
                        className="mr-2 top-1 cursor-pointer" size={16}/>
                        {!cerrado&&(<span>Deportes</span>)}
                    </div>
                    {!cerrado&&(
                        deportes?(
                            <ChevronDown 
                            onClick={()=>setDeportes(!deportes)}
                            className="cursor-pointer" size={16}/>
                        ):(
                            <ChevronUp 
                            onClick={()=>setDeportes(!deportes)}
                            className="cursor-pointer" size={16}/>
                        ))}
                </div>
                {!cerrado && !deportes && (
                    <ul className="flex flex-col ml-6 space-y-4 border-l-2 border-[#BBD7FD]/20 pl-4 transition-all duration-300">
                        {enlaces
                            .filter(enlace => enlace.label === 'Fútbol' || enlace.label === 'Caballos')
                            .map(({ to, label, end }) => (
                            <li key={to}>
                                <NavLink to={to} end={end}
                                className={({ isActive }) =>
                                `block hover:text-[#00132B] ${
                                isActive ? 'text-[#00132B] bg-[#FFFFFF]/80 font-semibold p-2 shadow-xl rounded-md' : 'text-[#BBD7FD]'
                                }`}>
                                    {label}
                                </NavLink>
                            </li>
                            ))
                        }
                    </ul>
                )}

                <div className="flex items-center justify-between hover:text-[#00132B] transition-all duration-300">
                    <div className="flex items-center">
                        <RotateCwFadingClock className="mr-2 top-1 cursor-pointer" size={16}/>
                        {!cerrado&&(<span>Hoy</span>)}
                    </div>
                    {!cerrado&&(<ChevronDown className="cursor-pointer" size={16}/>)}
                </div>
            </div>

            {/*Login*/}
            <div className={`pb-2 text-sm ${cerrado?'ml-1':'ml-6'}`}>
                <div className={`flex items-center ${cerrado?'justify-start':'justify-end'}`}>
                    <LogIn className="cursor-pointer hover:text-[#00132B] transition-all duration-300" size={16}/>
                </div>
            </div>
        </div>
    );
}

export default Menu;