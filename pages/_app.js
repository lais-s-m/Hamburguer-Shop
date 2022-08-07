import { CurrencyProvider } from "../contexts/CurrencyContext";
import { CurrentSaleProvider } from "../contexts/CurrentSaleContext";
import { LoginProvider } from "../contexts/LoginContext";
import { ProductsProvider } from "../contexts/ProductsContext";
import { RegisterProvider } from "../contexts/RegisterContext";
import { ShowCartProvider } from "../contexts/ShowCartContext";

import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <LoginProvider>
                <RegisterProvider>
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
                </RegisterProvider>
            </LoginProvider>
        </>
    );
}

export default MyApp;