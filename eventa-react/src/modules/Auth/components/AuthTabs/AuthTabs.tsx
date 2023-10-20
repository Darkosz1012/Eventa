import { Tab, Tabs } from "@mui/material"
import { useRef, useState } from "react"

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

import { SignInForm } from "../SignInForm/"
import styles from "./AuthTabs.module.scss"
import { SignUpForm } from "../SignUpForm";

function AuthTabs(){
    const [activeTab, setActiveTab] = useState(0)
    const splide = useRef<Splide>(null)

    if(splide?.current){
        splide.current.go(activeTab)
    }

    return(
        <div className={styles.container}>
            <Tabs value={activeTab} onChange={(_event,value)=>{setActiveTab(value)}}>
                <Tab label="Sign In" data-testid="tab-sign-in"/>
                <Tab label="Sign Up" data-testid="tab-sign-up"/>
            </Tabs>
            <Splide ref={splide} options={{arrows: false, pagination:false, drag:false}}>
                <SplideSlide>
                    <SignInForm></SignInForm>
                </SplideSlide>
                <SplideSlide>
                    <SignUpForm></SignUpForm>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default AuthTabs