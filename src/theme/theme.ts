import { createTheme } from '@mui/material/styles';
import palette from './palette'
import shadows from './shadows'
import typography from './typography'
import overrides from './overrides'
import { TypographyOptions } from '@mui/material/styles/createTypography';

export type TypographyOptionsType = TypographyOptions & {fontWeightSemiBold?: any}

 const theme: Omit<ThemeOptions, 'typography'> & {typography: TypographyOptionsType} = createTheme({
    palette,
    shadows,
    typography,
    spacing: 4,
    components: overrides,
    shape: { borderRadius: 4 },
});

export default theme