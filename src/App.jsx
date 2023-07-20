import { useEffect, useState } from "react";
import client from "./service/axios";

import SearchInput from "./components/SearchInput";
import ImageList from "./components/ImageList/index";

function App() {
  const [images, setImages] = useState([]);

  const searchHandler = (term) => {
    const getSearchedImages = async () => {
      const { data } = await client.get("/search/photos", {
        params: { query: term, per_page: 20 },
      });
      console.log(data);
      setImages(data.results);
    };

    getSearchedImages();
  };

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
      <section className="container mx-auto py-20">
        <h1 className="text-center text-5xl font-bold text-gray-600">
          Hello There!
        </h1>
        <SearchInput searchHandler={searchHandler} />
        <ImageList images={images} />
      </section>
    </>
  );
}

export default App;
