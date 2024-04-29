import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/gallery.css'

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };


  return (
    <div className="gallery">
        <h1>Наша жизнь</h1>
        <div className="gallerycont">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery image ${index}`}
          onClick={() => handleImageClick(image)}
        />
      ))}
      {selectedImage && (
        <Modal isOpen={true} onRequestClose={() => setSelectedImage(null)} className='Modal' overlayClassName='Overlay'>
          <span class="material-symbols-outlined" onClick={() => setSelectedImage(null)}>close</span>
          <img src={selectedImage} alt="Selected image" />
        </Modal>
      )}
    </div>
    </div>
  );
};

export default Gallery;