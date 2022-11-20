import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
const dark = '#232323';
const light = '#f8f9fa';

const theme = extendTheme({
    fonts: {
        heading: '\'Readex Pro\', sans-serif',
        body: '\'Readex Pro\', sans-serif',
    },
    styles: {
        global: (props: any) => ({
            body: {
                bg: mode(light, dark)(props),
            }
        })
    }
});

export default theme;
