import { AuthPanel } from "@modules/Auth/components/AuthPanel"
import { Grid } from "@mui/material";

import styles from "./AuthPage.module.scss"

function AuthPage(){
    return(
        <Grid container className={styles.AuthPage}>
            <Grid item sm={6} xs={12}>
                <AuthPanel/>
            </Grid>
            <Grid item sm={6} sx={{display: { xs: "none", sm: "block" }}}>
                <img src="https://picsum.photos/id/158/1920/1080" alt="background" className={styles.Image}/>
            </Grid>
        </Grid>
    )
}

export default AuthPage;