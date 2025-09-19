import Horizonalline from "./Horizonalline";


function Featuresinfo() {
  return (
   <>
      
      
     
      <div className="relative bg-gray-200 text-black pb-12   overflow-hidden">
       
        <div className="absolute inset-0 z-0 ">
          <img src="./src/assets/gifs2.gif" alt="background" className="w-full h-full object-cover rotate-180 " />
          <div className="absolute inset-0 bg-gray-250/50 opacity-90"></div>
        </div>
        
        <div className="relative z-10">
         
         <Horizonalline/>
          
         
          <div className="text-center mb-15 mt-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white">What you will get</h2>
          </div>
         
          <div className="flex overflow-x-auto space-x-6 pb-4">
          
            <div className="relative flex-shrink-0 w-80 md:w-96 bg-white p-6 rounded-xl shadow-lg border-2 border-gray-400 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img src="src/assets/gif.gif" alt="Feature 1" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-white"> Live Money Pulse</h3>
                <p className="text-white text-lg pt-9">
                Keep your finger on the pulse of your stock and SIP investments. Get real-time updates, view profit/loss summaries and track portfolio growth with intuitive visuals. Whether you're a beginner or a seasoned investor, you'll always know how your money is performing.
                </p>
              </div>
            </div>
           
            <div className="relative flex-shrink-0 w-80 md:w-96 bg-white p-6 rounded-xl shadow-lg border-2 border-gray-400 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img src="./src/assets/gif.gif" alt="Feature 2" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-white">Where Did My Money Go?</h3>
                <p className="text-white text-lg pt-9">
                  Visualize your spending habits, incomes and monthly flows with category breakdowns and smart alerts — so you're never surprised by a low balance again
                </p>
              </div>
            </div>
            
         
            <div className="relative flex-shrink-0 w-80 md:w-96 bg-white p-6 rounded-xl shadow-lg border-2 border-gray-400 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img src="./src/assets/gif.gif" alt="Feature 3" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-white">Stay Sharp, Stay Ahead</h3>
                <p className="text-white text-lg pt-9">
                 Get personalized financial news, market trends and stock updates tailored to your portfolio and interests. With a curated feed, you'll always be in the know about events that could affect your investments and money decisions — no noise just what matters.
                </p>
              </div>
            </div>
         
            <div className="relative flex-shrink-0 w-80 md:w-96 bg-white p-6 rounded-xl shadow-lg border-2 border-gray-400 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img src="./src/assets/gif.gif" alt="Feature 4" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-white">Your Wealth, Visualized</h3>
                <p className="text-white text-lg pt-9">
                  Transform raw numbers into clear, interactive charts and graphs that show how your income, expenses and investments evolve over time. Set financial goals and track your journey with visuals that make it easy to understand your progress and adjust when needed.
                </p>
              </div>
            </div>
            
            </div>
        </div>
      </div>
    </>
  );
}



export default Featuresinfo