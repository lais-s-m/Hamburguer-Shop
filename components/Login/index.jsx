import React from "react";

import { createMedia } from '@artsy/fresnel';

import MobileLogin from "./MobileLogin";
import DesktopLogin from "./DesktopLogin";

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        sm: 215,
        md: 768
    }
})

export default function Login (){
        return(
            <MediaContextProvider>
                <Media at="sm">
                    <MobileLogin />
                </Media>
                <Media at="md">
                    <DesktopLogin />
                </Media>
            </MediaContextProvider>
        )
}