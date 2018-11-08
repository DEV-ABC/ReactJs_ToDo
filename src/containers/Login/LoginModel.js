import Strings from 'strings/Strings';
import BaseURL from 'utils/BaseURL';

class LoginModel {


    makeLogin = (email, password, callback) => {

        fetch(new BaseURL().getMainURL() + 'Usuarios/login',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ email: email, password: password })
            })
            .then(results => { /* console.log(results);*/
                if (results.status !== 200) {
                    return null;
                } else {
                    return results.json();
                }
            })
            .then(data => {

                if (data !== null) {
                    callback(1, "");
                } else {
                    callback(-1, Strings.login.userNotFound);
                }
            })
            .catch(err => {
                console.log("Error", err);
            });
    }

}


export default LoginModel;