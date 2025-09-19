import Nav from "../Nav"
import AddStock from "./AddStock"
import BankBlock from "./BankBlock"
import Heading from "./Heading"
import Stockpick from "./Stockpick"
import YourNews from "./YourNews"


function AppInterface() {
  return (
    <>
    <Nav/>
    <Heading/>
    <BankBlock/>
    <Stockpick/>
    <AddStock/>
    <YourNews/>
    </>
  )
}

export default AppInterface