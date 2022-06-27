import "./App.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";
function App() {
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await Axios.get(
        "https://api.giphy.com/v1/gifs/trending?api_key=N3vBuHt1egCH127xypjo95y6KFD7ge1J&limit=110&rating=g" +
          search
      ).then((res) => {
        console.log(res);
        setGifs(res.data.data);
      });
    };
    fetchData();
  });

  const searchGifs = gifs.filter((name) => {
    return name.title.toLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <div className="App">
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search gifs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            border: "0",
            width: "300px",
            padding: "5px",
            backgroundColor: "black",
            color: "lightgray",
            outline: "0",
            height: "30px",
          }}
        />
      </div>

      <div className="list">
        <div
          className="inner"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px",
            margin: "15px",
          }}
        >
          {searchGifs.map((value) => {
            return (
              <div className="gif" key={value.id}>
                <img
                  src={value.images.fixed_height.url}
                  alt=""
                  style={{ margin: "8px" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
