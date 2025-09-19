
import Background from './Background.jsx';
import Featuresinfo from './Featuresinfo.jsx';
import { useRef } from 'react';
import Nav from './Nav.jsx'
import SipCalculater from './SipCalculater.jsx';


function Product()
{
   const sipRef = useRef(null);
   
    return(
        <>
        
      <Nav scrollToSip={sipRef}/>

      <Background/>

      <Featuresinfo/> 

      <SipCalculater scrollRef={sipRef}/>
          
        </>
    );
}

export default Product