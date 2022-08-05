import React from "react";

import { createMedia } from '@artsy/fresnel';

import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        sm: 215,
        md: 768
    }
})

export default function Header (){
        return(
            <MediaContextProvider>
                <Media greaterThanOrEqual="sm">
                    <MobileHeader />
                </Media>
                <Media greaterThanOrEqual="md">
                    <DesktopHeader />
                </Media>
            </MediaContextProvider>
        )
}