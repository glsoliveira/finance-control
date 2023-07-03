// eslint-disable-next-line @typescript-eslint/no-empty-interface
import 'styled-components'
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType {
        _placeholder?: never;
    }
}

