
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
// import { LoremIpsum } from "./components/LoremIpsum";
import { motion, useScroll } from "framer-motion";
import { useContext } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';


function App() {

  const { loading } = useContext(AuthContext);
  if (loading) {
    return <div className='h-[100vh] flex items-center justify-center'>
      <img className="spaner_loading w-20 mx-auto " src="https://i.ibb.co/FxrdSdr/loader-Tires-removebg-preview.png" alt="" />
    </div>

  }



  const windowTop = () => {
    window.scrollTo(0, 0);
  }
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <img onClick={windowTop} className="fixed bottom-2 right-0 w-20 cursor-pointer" src="https://png.pngtree.com/png-vector/20230120/ourmid/pngtree-red-sports-car-top-view-png-image_6564079.png" alt="" />
    </div>
  )
}

export default App
