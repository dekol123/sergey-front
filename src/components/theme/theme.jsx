import { defaultTheme } from 'react-admin';
import merge from 'lodash/merge';
import red from '@material-ui/core/colors/red';

export const CustomTheme = () => {return merge({}, defaultTheme, {
    palette: {
        primary: { main : '#3df500', },
        secondary:  { main : '#3df500', },
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        // fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
        fontFamily:['Times', '"Times New Roman"', 'Georgia', 'serif'].join(','),
    },
    overrides: {
        MuiButton: { // override the styles of all instances of this component
            root: { // Name of the rule
                color: 'white', // Some CSS
            },
        MuiAppBar: {
            root:{
                color: '#3df500',
                }
            },
        },
    },
})};