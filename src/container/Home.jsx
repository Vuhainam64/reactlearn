import { Haaland, Kane, Kante, Messi, Neymar, Ronado } from "../assets";
import { Footer, Header } from "../components";

function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap items-center justify-center bg-white">
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center my-5">
          <img className="w-full" src={Ronado} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Cristiano</div>
            <p className="text-gray-700 text-base">Manchester Unated</p>
          </div>
          <div className="w-full bg-gray-800 text-white p-2">Details</div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center m-5">
          <img className="w-full" src={Kante} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Kante</div>
            <p className="text-gray-700 text-base">Chelsea</p>
          </div>
          <div className="w-full bg-gray-800 text-white p-2">Details</div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center m-5">
          <img className="w-full" src={Messi} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">PSG</div>
            <p className="text-gray-700 text-base">Manchester Unated</p>
          </div>
          <div className="w-full bg-gray-800 text-white p-2">Details</div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center m-5">
          <img className="w-full" src={Neymar} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Neymar</div>
            <p className="text-gray-700 text-base">PSG</p>
          </div>
          <div className="w-full bg-gray-800 text-white p-2">Details</div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center m-5">
          <img className="w-full" src={Kane} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Kane</div>
            <p className="text-gray-700 text-base">Tottemham</p>
          </div>
          <div className="w-full bg-gray-800 text-white p-2">Details</div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center m-5">
          <img className="w-full" src={Haaland} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Haaland</div>
            <p className="text-gray-700 text-base">Manchester City</p>
          </div>
          <div className="w-full bg-gray-800 text-white p-2">Details</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
