import { createContext, Dispatch, SetStateAction } from 'react'

type IThemeModeContext = {
  mode: 'light' | 'dark',
  setMode: Dispatch<SetStateAction<'light' | 'dark'>>
}

const ThemeModeContext = createContext({} as IThemeModeContext)
ThemeModeContext.displayName = 'ThemeModeContext'

export default ThemeModeContext
