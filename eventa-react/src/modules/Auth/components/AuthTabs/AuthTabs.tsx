import { Tab, Tabs, useTheme } from "@mui/material"
import React from "react"
import SignInForm from "../SignInForm/SignInForm"
import styles from "./AuthTabs.module.scss"
import SwipeableViews from 'react-swipeable-views';

function AuthTabs(){
    const theme = useTheme();
    const [activeTab, setActiveTab] = React.useState(0);
    
    return(
        <div className={styles.container}>
            <Tabs value={activeTab} onChange={(event,value)=>{setActiveTab(value)}}>
                <Tab label="Sign In"/>
                <Tab label="Sign Up"/>
            </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeTab}
                // onChangeIndex={handleChangeIndex}
            >
                <SignInForm></SignInForm>
                <SignInForm></SignInForm>
            </SwipeableViews>
        </div>
    )
}

export default AuthTabs