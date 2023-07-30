import { useEffect } from "react"
import "../scss/style.css"
import api from "./API_URL";

function ImgFlipGetMeme() {
    const [ImgFlipData, setImgFlipData] = useState(null);

    useEffect(() => {
        async function fectData() {
            const response = await fetch(api);
            const json = await response.json[0];
            console.log(json)
            setImgFlipData(json.results[0])
            
        }
        fectData();
    }, []);

    if (!ImgFlipData) {
        return <span className="loader"></span>
    };

};


export default ImgFlipGetMeme;
