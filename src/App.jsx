import { useEffect, useState } from "react";
import { request } from "./service/axios";

import SearchInput from "./components/SearchInput";
import ImageList from "./components/ImageList/index";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const searchHandler = (term) => {
    const getSearchedImages = async () => {
      try {
        setIsLoading(true);
        const response = await request({
          url: "/search/photos",
          method: "GET",
          params: { query: term, per_page: 20 },
        });
        if (!response.results.length) {
          setImages(response.results);
          setIsError(true);
          setIsLoading(false);
        } else {
          setImages(response.results);
          setIsError(false);
          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    getSearchedImages();
  };

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await request({
          url: "/photos",
          method: "GET",
          params: { per_page: 20 },
        });
        setImages(response);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
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
        {isLoading && (
          <div className="text-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
        {images.length && !isError ? <ImageList images={images} /> : <div className="flex justify-center items-center">
            <img className="w-1/2"
              src="https://cdn.dribbble.com/users/256646/screenshots/17751098/media/768417cc4f382d6171053ad620bc3c3b.png?resize=1000x750&vertical=center"
              alt="No Data"
            />
          </div>}
  
      </section>
    </>
  );
}

export default App;
