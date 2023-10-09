import {
    Button,
    FormControl,
    FormLabel,
    Input,
    TextField,
} from "@mui/material";
import styles from "./SignInForm.module.scss";

interface FormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement;
    password: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
    readonly elements: FormElements;
}

function SignInForm() {
    return (
        <form
            className={styles.form}
            onSubmit={(event: React.FormEvent<SignInFormElement>) => {
                event.preventDefault();
                const formElements = event.currentTarget.elements;
                const data = {
                    email: formElements.email.value,
                    password: formElements.password.value,
                };
                alert(JSON.stringify(data, null, 2));
            }}
        >
            <FormControl className={styles?.formControl} required>
                <TextField type="email" name="email" label="Email" className={styles?.input}/>
            </FormControl>
            <FormControl className={styles?.formControl} required>
                <TextField type="password" name="password" label="Password" className={styles?.input}/>
            </FormControl>
            <Button type="submit" className={styles?.submit} fullWidth variant="contained" size="large">
                Sign in
            </Button>
        </form>
    );
}

export default SignInForm;
