import * as Styled from './gallery.styled';

/* eslint-disable-next-line */
export interface GalleryProps {
  images: string[];
}

export function Gallery({ images }: GalleryProps) {
  return (
    <Styled.ContainerSection>
      <Styled.SelectedImage src={images[0]} alt="" />
      <Styled.List role="list">
        {images.map((image) => (
          <Styled.ListItem key={image}>
            <Styled.ListButton>
              <Styled.ListImage src={image} alt="" />
            </Styled.ListButton>
          </Styled.ListItem>
        ))}
      </Styled.List>
    </Styled.ContainerSection>
  );
}

export default Gallery;
