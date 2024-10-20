'use client';

import React from 'react';
import * as Styled from './gallery.styled';

type GalleryImage = string;

export type GalleryProps = {
  images: GalleryImage[];
};

export function Gallery({ images }: GalleryProps) {
  const galleryId = React.useId();

  const [selectedImage, setSelectedImage] = React.useState<GalleryImage>(
    images[0],
  );

  const handleClickListButton = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  return (
    <Styled.RootSection>
      <Styled.SelectedImage src={selectedImage} alt="" id={galleryId} />
      <Styled.List role="list">
        {images.length > 1 &&
          images.map((image) => (
            <Styled.ListItem key={image}>
              <Styled.ListButton
                onClick={() => handleClickListButton(image)}
                selected={image === selectedImage}
                aria-selected={image === selectedImage}
                aria-controls={galleryId}
              >
                <Styled.ListImage src={image} alt="" />
              </Styled.ListButton>
            </Styled.ListItem>
          ))}
      </Styled.List>
    </Styled.RootSection>
  );
}

export default Gallery;
