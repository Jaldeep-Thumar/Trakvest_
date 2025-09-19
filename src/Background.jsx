import Buttons from "./Buttons"
import Texts from "./Texts"

function Background() {
  return (
    <>
      <div className="bg-gray-950/10 top-0 h-16 w-full"></div>
      <div className="relative w-full h-screen">
        <img
          src="assets/gifs2.gif"
          alt="gif"
          className="w-full h-full object-cover opacity-90"
        />
        <Texts />
        <Buttons />
      </div>
    </>
  );
}

export default Background