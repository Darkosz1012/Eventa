import {
    experimental_extendTheme as extendTheme,
    Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material/styles';

const theme = extendTheme({
    cssVarPrefix: 'mui',
});

interface MuiStyleProviderProps{
    children: React.ReactNode
}



function MuiStyleProvider({ children }: MuiStyleProviderProps){
    return(
        <CssVarsProvider theme={theme}>
            {children}
        </CssVarsProvider>
    )
}

export default MuiStyleProvider;