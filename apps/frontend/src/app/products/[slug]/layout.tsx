import { LayoutWrapper, Divider } from '@e-shop/ui';

type ProductDetailsLayoutProps = {
  children: React.ReactNode;
};

export default function ProductDetailsLayout({
  children,
}: ProductDetailsLayoutProps) {
  return (
    <main>
      {children}

      <LayoutWrapper>
        <Divider style={{ margin: '8rem 0 6.4rem' }} />

        <aside>
          <h3>Related products</h3>
        </aside>
      </LayoutWrapper>
    </main>
  );
}
