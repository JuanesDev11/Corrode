import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import {useState} from "react";
import LogicaBusqueda from '../global/LogicaBusqueda';

export default function MainLayout() {
  const[cerrado,setCerrado]=useState(false);
  return (
    /*06223D
    07294A
    041321
    051A2E
    082E52*/
    <LogicaBusqueda>
    <div className="bg-[#082E52] min-h-screen">
      <Menu cerrado={cerrado} setCerrado={setCerrado}/>
        <div className={`flex flex-col bg-[#00315c] fixed top-2 right-2 h-[calc(100vh-1rem)] shadow-xl z-10 rounded-2xl ${!cerrado?'left-64':'left-20'} transition-all duration-300 overflow-y-auto`}
        style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#838e94 transparent" 
          }}>
          <Header />
            <main className="w-full flex-1 py-6 px-10 overflow-x-hidden">
              <Outlet />
          </main>
          <Footer />
      </div>
    </div>
    </LogicaBusqueda>
  );
}
