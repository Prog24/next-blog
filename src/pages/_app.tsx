import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { ThemeModeProvider } from 'src/providers/ThemeModeProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeModeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeModeProvider>
  )
}
