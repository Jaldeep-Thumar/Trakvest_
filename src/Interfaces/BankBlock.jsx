

export default function BankBlock() {
  return (
    <>
    <div className="flex justify-between ">
     <div className="h-25 w-10/40 shadow-md ml-17 mt-7 mr-17 flex">
             <div> 
               <img src='src/assets/Rupee.png' alt="rupee symbol"className="mt-7 ml-5 p-2 bg-green-200/50 rounded-xl"/>
            </div>
            <div >
                <p className="mt-3 ml-3 font-semibold text-xl">
                    Bank Balance
                </p>
                
                <p className="mt-1 ml-3 font-semibold ">
                   &#8377; &nbsp; 0
                </p>
            </div>
     </div>
      <div className="h-25 w-10/40 shadow-md ml-17 mt-7 mr-17 flex">
             <div> 
               <img src='src/assets/stock.png' alt="rupee symbol"className="mt-7 ml-5 p-2 bg-green-200/50 rounded-xl"/>
            </div>
            <div >
                <p className="mt-3 ml-3 font-semibold text-xl">
                    Stock Portfolio
                </p>
                
                <p className="mt-1 ml-3 font-semibold ">
                   &#8377; &nbsp; 0
                </p>
            </div>
     </div>
     <div className="h-25 w-10/40 shadow-md ml-17 mt-7 mr-17 flex">
             <div> 
               <img src='src/assets/Total.png' alt="rupee symbol"className="mt-7 ml-5 p-2 bg-green-200/50 rounded-xl"/>
            </div>
            <div >
                <p className="mt-3 ml-3 font-semibold text-xl">
                    Total Portfolio
                </p>
                
                <p className="mt-1 ml-3 font-semibold ">
                   &#8377; &nbsp; 0
                </p>
            </div>
     </div>
    </div>
   </> 
  )
}
