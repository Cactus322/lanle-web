import Head from 'next/head'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'

import theme from '@/styles/theme/theme'
// import store from '@/app/store'
import Notice from '@/components/Notice/Notice'
import Navigation from '@/components/Navigation/Navigation'

import '../app/globals.css'
import { Providers } from '@/app/provider'
import { wrapper } from '@/app/store'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
				/>
				<meta name="description" content="Description" />
				<meta name="keywords" content="Keywords" />
				<title>Lanle PWA</title>

				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#317EFB" />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{/* <Provider store={store}> */}
					<Navigation />
					<Notice />
					<Component {...pageProps} />
					
				{/* </Provider> */}
			</ThemeProvider>
		</>
	)
}

export default wrapper.withRedux(MyApp)