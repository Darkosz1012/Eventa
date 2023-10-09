import { Tab, Tabs, useTheme } from "@mui/material"
import React from "react"
import SignInForm from "../SignInForm/SignInForm"
import styles from "./AuthTabs.module.scss"
function AuthTabs(){
    // const theme = useTheme();
    const [activeTab, setActiveTab] = React.useState(0);
    
    return(
        <div className={styles.container}>
            <Tabs value={activeTab} onChange={(_event,value)=>{setActiveTab(value)}}>
                <Tab label="Sign In"/>
                <Tab label="Sign Up"/>
            </Tabs>
            <div hidden={activeTab != 0}>
                <SignInForm></SignInForm>
            </div>
            <div hidden={activeTab != 1}>
                <SignInForm></SignInForm>
            </div>
        </div>
    )
}

export default AuthTabs