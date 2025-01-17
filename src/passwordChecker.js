export class Main{

    passwordChecker(password){
        if(password.length < 8){
            return false;
        }

        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        if (!specialCharRegex.test(password)) {
            return false;
        }

        const digitRegex = /\d/;
        if (!digitRegex.test(password)) {
            return false;
        }

        return true;
    }
}