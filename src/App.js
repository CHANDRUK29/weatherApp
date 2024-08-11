import { useState } from "react";

const API_KEY = process.env.API_KEY;


function App() {
  const [noData, setNoData] = useState('No Data Yet');

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}

export default App;
