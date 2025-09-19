import { useNavigate } from "react-router-dom";
function Buttons() {
   const navigate = useNavigate();
  return (
    <>
   

      <button onClick={()=>navigate('/signup')} className='text-white absolute top-[66.66%] left-[5.26%] md:left-[10%] lg:left-[10%] hidden md:block text-xl bg-slate-800/20 rounded-full px-5 py-2 hover:bg-sky-200/20 border-2 border-sky-200'>
        Start journey
      </button>
    </>
  );
}

export default Buttons