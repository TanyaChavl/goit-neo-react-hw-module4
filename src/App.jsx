import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal"
import "./App.css";

const API_KEY = "lz3kAmWKx0MAP7z-CUvFKRCJDxCmwfG-UKW335zGviI";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${API_KEY}&per_page=12`
        );
        const data = await response.json();

        if (response.ok) {
          setImages((prevImages) => [...prevImages, ...data.results]);
        } else {
          throw new Error(data.errors || "Failed to fetch images");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = (newQuery) => {
    if (newQuery.trim() === "") {
      toast.error("Please enter a search query!");
      return;
    }

    if (newQuery === query) return;

    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;