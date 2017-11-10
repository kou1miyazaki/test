/**
 * Class for check login input value's validation
 */
export class LoginInputValidator {

    /**
     * Return true if both email and password are valid. Return false if otherwise
     * @param email email input value
     * @param password password input value
     */
    isInputsValid(email: string, password: string) {
        return this.isEmailValid(email) && this.isPasswordValid(password);
    }

    /**
     * Return true if email is valid. Return false if otherwise
     * @param email email input value
     */
    isEmailValid(email: string): boolean {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email && email.length != 0 && email.length <= 30 && emailRegex.test(email);
    }

    /**
     * Return true if password is valid. Return false if otherwise
     * @param email password input value
     */
    isPasswordValid(password: string): boolean {
        return password && password.length >= 6 && password.length <= 30;
    }

}