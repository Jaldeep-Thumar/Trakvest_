

function AddStock() {
  return (
    
        <div className="ml-17 mr-17 shadow-md h-35 mt-6">
        <div className="pt-2 pl-6 font-semibold shadow">
            <p>Quick Actions</p>
        </div>
        <div className="flex justify-between">
                <button className="mt-15 ml-3 shadow-lg w-80 h-10 border-b-2 border-r-2 ">+ Add Transaction</button>
                <button className="mt-15 ml-3 shadow-lg w-80 h-10 border-b-2 border-r-2">&#9813;Buy Stocks</button>
                <button className="mt-15 ml-3 shadow-lg w-80 h-10 border-b-2 border-r-2">&#9814; Set New Goal</button>
        </div>
    </div>
    
  )
}

export default AddStock