import { useEffect, useState } from "react";
import { request } from "../../service/axios";

import SearchInput from "../../components/SearchInput";
import ImageList from "../../components/ImageList";
import LoaderSpinner from "../../components/LoaderSpinner";
import NoDataImage from "../../components/NoDataImage";

const Home = () => {
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
        {isLoading && <LoaderSpinner />}
        {images.length > 0 && !isError && <ImageList images={images} />}
        {images.length === 0 && isError && <NoDataImage />}
      </section>
    </>
  );
};

export default Home;
