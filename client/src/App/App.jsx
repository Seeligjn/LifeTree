import React, { StrictMode, useEffect, useState } from "react";
import Landing from "../Pages/Landing";
// import Music from "../Pages/Music";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [data, setData] = useState([]); // State to store the data

  useEffect(() => {
    // Make an HTTP GET request to fetch data from the server
    fetch("/api/test")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(data);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing data={data} />} />
          {/* <Route path="/musicpage" element={<Music />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
