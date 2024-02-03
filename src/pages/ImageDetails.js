// src/pages/ImageDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { LocationsAPI } from "../apis/LocationsAPI";
import Map from "../components/Map";
import "./ImageDetails.css";
import Header from "../components/Header";

const styles = {
  mapContainerS: {
    marginTop: "16px",
    borderTop: "1px solid #ccc",
    paddingTop: "16px",
  },

  mapContainerL: {
    flex: 1,
    borderLeft: "1px solid #ccc",
    paddingLeft: "16px",
  },

  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderTop: "1px solid #ccc",
    paddingTop: "16px",
  },

  productContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "16px",
  },

  locationContainer: {
    width: "100%",
    marginBottom: "16px",
  },

  locationImage: {
    width: "100%",
    maxHeight: "400px",
    objectFit: "cover",
  },
};

const ImageDetails = () => {
  const { id } = useParams();

  const [imageData, setImageData] = React.useState({});
  React.useEffect(() => {
    const getLocationsDataById = async () => {
      try {
        const responseData = await LocationsAPI.getLocationById(id);
        setImageData(responseData);
      } catch (error) {
        console.error(error);
      }
    };
    getLocationsDataById();
  }, [id]);

  return (
    <>
      <Header />
      <div style={styles.productContainer}>
        <div style={styles.locationContainer}>
          <img
            src={imageData?.image}
            alt={imageData?.title}
            style={styles.locationImage}
          />
        </div>
        <div style={styles.detailsContainer}>
          <div style={{ flex: 1, marginRight: "16px" }}>
            <h2>{imageData?.title}</h2>
            <p>{imageData?.description}</p>
            <p>Price: {imageData?.price}</p>
            <p>Address: {imageData?.address}</p>
            <p>City: {imageData?.city}</p>
            <p>Country: {imageData?.country}</p>
            <h3>Facilities</h3>
            <p>Bathrooms: {imageData?.facilities?.bathrooms}</p>
            <p>Parking: {imageData?.facilities?.parking}</p>
            <p>Bedrooms: {imageData?.facilities?.bedrooms}</p>
            <p>User Email: {`example@gmail.com`}</p>
            <p>Created At: {imageData?.createdAt}</p>
            <p>Updated At: {imageData?.updatedAt}</p>
          </div>
          <div style={styles.mapContainerL} className="map-larger-view">
            <p>Find your location here</p>
            <Map
              address={imageData?.address}
              city={imageData?.city}
              country={imageData?.country}
            />
          </div>
        </div>
        {/* Map for mobile screens */}
        <div style={styles.mapContainerS} className="map-mobile-view">
          <p>Find your location here</p>
          <Map
            address={imageData?.address}
            city={imageData?.city}
            country={imageData?.country}
          />
        </div>
      </div>
    </>
  );
};

export default ImageDetails;
