import { VisuallyHidden } from '@reach/visually-hidden';
import { EN } from '@e-shop/i18n';
import * as Styled from './product-card.styled';
import { CardIcon, HeartIcon, ShareIcon } from '@e-shop/icons';

type ProductCardProps = React.ComponentPropsWithRef<'button'>;

export function ProductCard(props: ProductCardProps) {
  return <Styled.CardArticle {...props} />;
}

type CardActionButton = Omit<
  React.ComponentPropsWithRef<'button'>,
  'children'
> & {
  screenReaderText?: string;
  primary?: boolean;
};

function ShareButton(props: CardActionButton) {
  return (
    <Styled.Button {...props}>
      <VisuallyHidden>
        {props.screenReaderText || EN.PRODUCT_CARD.SHARE}
      </VisuallyHidden>
      <ShareIcon aria-hidden />
    </Styled.Button>
  );
}

function AddToCartButton({ primary = true, ...props }: CardActionButton = {}) {
  return (
    <Styled.Button {...props} primary={primary}>
      <VisuallyHidden>
        {props.screenReaderText || EN.PRODUCT_CARD.ADD_TO_CART}
      </VisuallyHidden>
      <CardIcon aria-hidden />
    </Styled.Button>
  );
}

function AddToWishlistButton(props: CardActionButton) {
  return (
    <Styled.Button {...props}>
      <VisuallyHidden>
        {props.screenReaderText || EN.PRODUCT_CARD.WISHLIST}
      </VisuallyHidden>
      <HeartIcon aria-hidden />
    </Styled.Button>
  );
}

ProductCard.Title = Styled.Title;
ProductCard.Button = Styled.Button;
ProductCard.Header = Styled.Header;
ProductCard.ShareButton = ShareButton;
ProductCard.Category = Styled.Category;
ProductCard.PastPrice = Styled.PastPrice;
ProductCard.Thumbnail = Styled.Thumbnail;
ProductCard.PriceOffBox = Styled.PriceOffBox;
ProductCard.AddToCartButton = AddToCartButton;
ProductCard.CurrentPrice = Styled.CurrentPrice;
ProductCard.ButtonsSection = Styled.ButtonsSection;
ProductCard.PriceContainer = Styled.PriceContainer;
ProductCard.AddToWishlistButton = AddToWishlistButton;
ProductCard.ThumbnailContainer = Styled.ThumbnailContainer;

export default ProductCard;
