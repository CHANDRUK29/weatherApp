import { useState } from "react";

const API_KEY = process.env.API_KEY;


function App() {
  const [noData, setNoData] = useState('No Data Yet');
  const [searchTerm, setSearchTerm] = useState('')
  const [weatherData, setWeatherData] = useState([])
  const [city, setCity] = useState('Unknown Location');
  const [weatherIcon, setWeatherIcon] = useState(`${process.env.ICON_URL}10n@2x.png`)

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  return (
    <div className="bg-gray-800 flex items-center justify-center w-screen h-screen py-10">
      <div className="flex w-3/4 min-h-full rounded-3xl shadow-lg m-auto bg-gray-100">
        {/* card section */}
        <div className="form-container">
          <div className="flex items-center justify-center">
            <h3 className="my-auto mr-auto text-xl text-pink-800 font-bold shadow-md py-1 px-3 rounded-md bg-white bg-opacity-30">
              ForeCast
            </h3>
            <div className="flex p-2 text-gray-100 bg-gray-600 bg-opacity-30 rounded-lg">
              <i className="fa fa-map my-auto" aria-hidden="true"></i>
              <div className="text-right">
                <p className="font-semibold text-sm ml-2">{city}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-white text-2xl">The Only Weather Forecast App You Need</h1>
            <hr className="h-1 bg-white w-1/4 rounded-full my-5"></hr>
            <form noValidate onSubmit={handleSubmit} className="flex justify-center w-full">
              <input
                type="text"
                className="relative rounded-xl py-2 px-3 w-2/3 bg-gray-300 bg-opacity-60 text-white placeholder-gray-0"
                onChange={handleChange}
                required
              />
              <button type="submit" className="z-10">
                <i className="fa fa-search text-white ml-10 border-l my-auto z-10 cursor-pointer p-3" aria-hidden="true" onClick={() => {
                  navigator.geolocation.getCurrentPosition(myIP)
                }}>
                </i>
              </button>
            </form>
          </div>
        </div>
        {/* info card section */}
        <div className="w-2/4 p-5">
          <Header />
          <div className="flex flex-col my-10">
            {weatherData.length === 0}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
