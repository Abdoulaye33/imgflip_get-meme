import { useEffect, useState } from "react";
import "../scss/style.css";
import api from "./API_URL";

function ImgFlipGetMeme() {
  const [imgFlipData, setImgFlipData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api);
      const data = await response.json();
      console.log(data);
      setImgFlipData(data.data.memes);
    }
    fetchData();
  }, []);

// on pouvais mettre aussi json à la place de data mais data semblent plus logique ducoup on laisse data
//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(api);
//       const json = await response.json();
//       console.log(json);
//       setImgFlipData(json.data.memes);
//     }
//     fetchData();
//   }, []);

  if (imgFlipData.length === 0) {
    return <span className="loader"></span>;
  }

  return (
    <div className="displayflex">
    <article>
      {imgFlipData.map((meme, index) => (
        <div key={index}>
          <img src={meme.url} />

        </div>
      ))}
      </article>
    </div>
  );
}

export default ImgFlipGetMeme;
