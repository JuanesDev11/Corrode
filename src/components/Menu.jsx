import { 
    GalleryHorizontalEnd, BellRing, ChevronDown, CircleUser,
    TextAlignJustifyEnd, House,Star, SportShoe, RotateCwFadingClock,
    LogIn
} from 'lucide-react';
import logo from '../assets/logo-corrode.png';

function Menu({cerrado,setCerrado }){
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
                <div className="flex items-center hover:text-[#00132B] transition-all duration-300">
                    <House className="mr-2 top-1 cursor-pointer" size={16}/>
                    {!cerrado&&(<span>Inicio</span>)}
                </div>

                <div className="flex items-center justify-between hover:text-[#00132B] transition-all duration-300">
                    <div className="flex items-center">
                        <Star className="mr-2 top-1 cursor-pointer" size={16}/>
                        {!cerrado&&(<span>Favoritos</span>)}
                    </div>
                    {!cerrado&&(<ChevronDown className="cursor-pointer" size={16}/>)}
                </div>

                <div className="flex items-center justify-between hover:text-[#00132B] transition-all duration-300">
                    <div className="flex items-center">
                        <SportShoe className="mr-2 top-1 cursor-pointer" size={16}/>
                        {!cerrado&&(<span>Deportes</span>)}
                    </div>
                    {!cerrado&&(<ChevronDown className="cursor-pointer" size={16}/>)}
                </div>

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
                <div className={`flex items-center ${cerrado?'justify-start':'justify-between'}`}>
                    {!cerrado&&(<div className="flex items-center">
                        <CircleUser className="mr-2 top-1 cursor-pointer" size={16} />
                        <span>name</span>
                    </div>)}
                    <LogIn className="cursor-pointer hover:text-[#00132B] transition-all duration-300" size={16}/>
                </div>
            </div>
        </div>
    );
}

export default Menu;