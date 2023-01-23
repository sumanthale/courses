import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const Banners = () => {
  const [images, setImages] = useState([]);

  React.useEffect(() => {
    const fetchedData = [];

    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "images"));
      querySnapshot.forEach((doc) => {
        fetchedData.push(doc.data());
      });
      setImages(fetchedData);
    }
    fetchData();
  }, []);

  const updateImages = async (image) => {
    console.log(image);
    const imagesCopy = [...images];
    const filteredData = imagesCopy.map((img) => {
      if (img.id === image.id) {
        return {
          ...img,
          selected: !image.selected,
        };
      } else return img;
    });
    setImages(filteredData);
    try {
      const imageRef = doc(db, "images", image.id);

      await setDoc(imageRef, { selected: !image.selected }, { merge: true });
    } catch (error) {
      console.log(error);
      setImages(imagesCopy);
    }
  };
  return (
    <div className="banner">
      <ImageList images={images} updateImages={updateImages} />
    </div>
  );
};

export default Banners;

const Image = ({ image, updateImages }) => {
  return (
    <div
      className="file-item"
      onClick={() => {
        updateImages(image);
      }}
    >
      {image.selected && (
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#0000005a",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
            }}
            color="white"
          >
            Selected
          </Typography>
        </Box>
      )}
      <img alt={`img -${image.id} `} src={image.url} className="file-img" />
    </div>
  );
};

const ImageList = ({ images, updateImages }) => {
  const renderImage = (image, index) => {
    return (
      <Image
        image={image}
        key={`${image.id}-image`}
        updateImages={updateImages}
      />
    );
  };

  return <section className="file-list">{images.map(renderImage)}</section>;
};
