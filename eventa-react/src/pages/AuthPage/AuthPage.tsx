import { AuthPanel } from "@modules/Auth/components/AuthPanel"
import { Grid } from "@mui/material";

import styles from "./AuthPage.module.scss"

function AuthPage(){
    return(
        <Grid container className={styles.AuthPage}>
            <Grid item xs={6}>
                <AuthPanel/>
            </Grid>
            <Grid item xs={6}>
                <img src="https://picsum.photos/id/158/1920/1080" alt="background" className={styles.Image}/>
            </Grid>
        </Grid>
    )
}

export default AuthPage;