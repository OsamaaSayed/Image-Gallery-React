import { useEffect, useState } from "react";
import client from "./service/axios";

import SearchInput from "./components/SearchInput";
import ImageList from "./components/ImageList/index";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const { data } = await client.get("/photos", {
        params: { per_page: 20 },
      });
      console.log(data);
      setImages(data);
    };

    getImages();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <SearchInput />
        <ImageList images={images} />
      </div>
    </>
  );
}

export default App;
