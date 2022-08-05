import { CurrencyProvider } from "../contexts/CurrencyContext";
import { CurrentSaleProvider } from "../contexts/CurrentSaleContext";
import { ProductsProvider } from "../contexts/ProductsContext";
import { ShowCartProvider } from "../contexts/ShowCartContext";

import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ShowCartProvider>
                <CurrencyProvider>
                    <ProductsProvider>
                        <CurrentSaleProvider>
                                <GlobalStyles/>
                                <Component {...pageProps} />
                        </CurrentSaleProvider>
                    </ProductsProvider>
                </CurrencyProvider>
            </ShowCartProvider>
        </>
    );
}

export default MyApp;