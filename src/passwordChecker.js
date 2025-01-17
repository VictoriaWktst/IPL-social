export class Main{

    passwordChecker(password){
        if(password.length < 8){
            return false;
        }

        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        if (!specialCharRegex.test(password)) {
            return false;
        }
    }
}