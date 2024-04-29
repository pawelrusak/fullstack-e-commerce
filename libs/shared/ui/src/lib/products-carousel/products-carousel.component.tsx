import Slider, { Settings } from 'react-slick';
import { VisuallyHidden } from '@reach/visually-hidden';
import { EN } from '@e-shop/i18n';
import * as Styled from './products-carousel.styled';
import styles from './products-carousel.module.css';
import { ArrowShortLeft, ArrowShortRight } from '../icons';

type ArrowButtonProps = Omit<React.ComponentPropsWithRef<'button'>, 'children'>;

function PrevArrowButton({ className, style, ...props }: ArrowButtonProps) {
  return (
    <Styled.ArrowButton {...props}>
      <VisuallyHidden>{EN.CAROUSEL.PREV}</VisuallyHidden>
      <ArrowShortLeft />
    </Styled.ArrowButton>
  );
}

function NextArrowButton({ className, style, ...props }: ArrowButtonProps) {
  return (
    <Styled.ArrowButton {...props}>
      <VisuallyHidden>{EN.CAROUSEL.NEXT}</VisuallyHidden>
      <ArrowShortRight />
    </Styled.ArrowButton>
  );
}

export type ProductsCarouselProps = Settings;

/**
 * @description Remember to include following styles: {@link https://react-slick.neostack.com/docs/get-started#include-css}
 */
export function ProductsCarousel({
  children,
  className,
  ...props
}: ProductsCarouselProps) {
  const settings: Settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrowButton />,
    prevArrow: <PrevArrowButton />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider
      {...settings}
      {...props}
      className={`${styles['slider-container']} ${className}`}
    >
      {children}
    </Slider>
  );
}

ProductsCarousel.PrevArrowButton = PrevArrowButton;
ProductsCarousel.NextArrowButton = NextArrowButton;

export default ProductsCarousel;
