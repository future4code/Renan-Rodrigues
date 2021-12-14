
import { createMuiTheme } from '@material-ui/core/styles';

import {primaryColor, secondaryColor} from "./colors"

const theme = createMuiTheme ({
    pallete: {
        primary: {
            main: primaryColor,
            contrastText: "black"
        },
        secondary: {
            main: secondaryColor,
            contrastText: "neutralColor"
        },
        text: {
            primary: secondaryColor
        }

    }

})

export default theme