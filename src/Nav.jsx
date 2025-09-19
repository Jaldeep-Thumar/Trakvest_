import { useNavigate } from "react-router-dom";


function Nav( {scrollToSip}) {
  const handleScrollToSip = () => {
    scrollToSip.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigate = useNavigate();
 
  return (
    <>
      <nav className="flex justify-between items-center h-16 bg-gray-800/20 text-black fixed top-0 w-full z-50 px-4 md:px-8">
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="logo" className="opacity-100 h-10 w-10 mr-2" />
          <h1 className="font-semibold text-lg">Trakvest</h1>
        </div>
        <div className="hidden md:flex justify-evenly w-1/2">
          <button className="py-2 px-4 rounded-full">Features</button>
          <button className="py-2 px-4 rounded-full">Supports</button>
          <button onClick={handleScrollToSip} className="hidden lg:block  text-black py-2 px-4 rounded-full hover:bg-gray-600/20 active:bg-gray-600/60">
            Calculate-Sip
          </button>
           <button onClick={()=>navigate('/interface')} className="hidden lg:block  text-black py-2 px-4 rounded-full hover:bg-gray-600/20 active:bg-gray-600/60">
            InterFace
          </button>
        </div>
        <div className="flex justify-evenly w-auto gap-4">
          <button className="bg-transparent font-bold py-2 px-4 rounded-full hover:bg-gray-600/20">
            Login
          </button>
          <button className=" hover:bg-gray-600/20  font-bold py-2 px-4 rounded-full">
            Signup
          </button>
        </div>
      </nav>
    </>
  );
}

export default Nav