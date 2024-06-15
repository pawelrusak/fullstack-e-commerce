import { Metadata } from 'next';
import { Navbar } from '@e-shop/ui';
import { GlobalStyle, AppThemeProvider } from '@e-shop/theme';
import { StyledComponentsRegistry } from './registry';
import { StoreProvider } from '@e-shop/store';
import Footer from './components/footer.component';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// TODO change this metadata
export const metadata: Metadata = {
  title: 'Welcome to e-shop.',
  description: 'e-shop is an online store.',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <StyledComponentsRegistry>
            <AppThemeProvider>
              <GlobalStyle />
              <Navbar />
              {children}
              <Footer />
            </AppThemeProvider>
          </StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
