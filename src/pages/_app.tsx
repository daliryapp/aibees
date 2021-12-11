import type { AppProps } from "next/app";
import ProviderTheme from "theme";
import { Provider } from 'react-redux';
import { store } from "redux/store";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ProviderTheme>
        <Component {...pageProps} />
      </ProviderTheme>
    </Provider>
  );
}

export default MyApp;
