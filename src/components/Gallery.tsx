import React from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="gallery grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Gallery image ${index}`} className="gallery-image" />
      ))}
    </div>
  );
};

export default Gallery;