import Navbar from "@/components/Navbar";
import { CartProvider } from "@/contexts/CardContext";
import { PaginationProvider } from "@/contexts/PaginationContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <PaginationProvider>
      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
      </CartProvider>
    </PaginationProvider>
  );
}
