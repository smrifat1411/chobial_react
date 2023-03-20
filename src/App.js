import { useState } from "react";
import SearchMenu from "./components/SearchMenu";
import SearcItem from "./components/SearcItem";

function App() {
  const [result, setResult] = useState([]);
  const [hasResult, setHasResult] = useState(false)

  // const dataFetch = async (debounceSearch) => {
  //   const { data } = await axios.get("https://www.omdbapi.com/", {
  //     params: {
  //       apikey: "f82024a5",
  //       s: debounceSearch,
  //       // i:"tt0375093"
  //     },
  //   });

  //   console.log(data);
  // };

  const renderData = result.Response === "False" ? [] : result.Search;

  return (
    <div className="max-w-[1080px] mx-5 mt-10 flex flex-col gap-4">
      {console.log("I am rendered from app")}
      <SearchMenu result={result} setHasResult={setHasResult} hasResult={hasResult} setResult={setResult} />
      {renderData ? (
        <div className="flex items-center">
          <ul className="flex flex-col gap-2">
            {renderData.map((rs, index) => (
              <SearcItem  key={index} movie={rs} />
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default App;
