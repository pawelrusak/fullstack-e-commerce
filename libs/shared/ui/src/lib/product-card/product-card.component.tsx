import { VisuallyHidden } from '@reach/visually-hidden';
import { EN } from '@e-shop/i18n';
import * as Styled from './product-card.styled';
import { IconButton } from '../icon-button';
import { CardIcon, HeartIcon, ShareIcon } from '@e-shop/icons';

type ProductCardProps = React.ComponentPropsWithRef<'button'>;

export function ProductCard(props: ProductCardProps) {
  return <Styled.RootArticle {...props} />;
}

type CardActionButton = Omit<
  React.ComponentPropsWithoutRef<'button'>,
  'children'
> & {
  screenReaderText?: string;
  primary?: boolean;
};

function ShareButton({ primary, ...props }: CardActionButton) {
  return (
    <IconButton variant={primary ? 'primary' : 'outline-primary'} {...props}>
      <VisuallyHidden>
        {props.screenReaderText || EN.PRODUCT_CARD.SHARE}
      </VisuallyHidden>
      <ShareIcon aria-hidden />
    </IconButton>
  );
}

function AddToCartButton({ primary = true, ...props }: CardActionButton = {}) {
  return (
    <IconButton variant={primary ? 'primary' : 'outline-primary'}>
      <VisuallyHidden>
        {props.screenReaderText || EN.PRODUCT_CARD.ADD_TO_CART}
      </VisuallyHidden>
      <CardIcon aria-hidden />
    </IconButton>
  );
}

function AddToWishlistButton({ primary, ...props }: CardActionButton) {
  return (
    <IconButton variant={primary ? 'primary' : 'outline-primary'}>
      <VisuallyHidden>
        {props.screenReaderText || EN.PRODUCT_CARD.WISHLIST}
      </VisuallyHidden>
      <HeartIcon aria-hidden />
    </IconButton>
  );
}

ProductCard.Title = Styled.Title;
ProductCard.Button = IconButton;
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
