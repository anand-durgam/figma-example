// src/components/ImageGallery.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LocationsAPI } from "../apis/LocationsAPI";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const ImageCard = styled.div`
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageGallery = () => {
  const [images, setImages] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    const getLocationsData = async () => {
      setIsLoading(true);
      try {
        const responseData = await LocationsAPI.getLocations();
        setImages(responseData?.slice(-15));
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    getLocationsData();
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading ...
      </div>
    );
  }

  return (
    <Container>
      {images.map((image) => (
        <Link key={image.id} to={`/${image.id}`}>
          <ImageCard>
            <Image src={image.image} alt={`Image ${image.id}`} />
          </ImageCard>
        </Link>
      ))}
    </Container>
  );
};

export default ImageGallery;
