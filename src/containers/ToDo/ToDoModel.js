
import Strings from 'strings/Strings';
import BaseURL from 'utils/BaseURL';

class ToDoModel {

    getToDo = (token, userID, callback) => {
        if (userID === 0) {
            return;
        }
        fetch(new BaseURL().getMainURL() + 'Usuarios/' + userID + '/tarefas',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                method: 'GET'
            })
            .then(results => { /* console.log(results);*/ return results.json(); })
            .then(data => {

                callback(data);
            })
            .catch(err => {
                console.log("Error", err);
            });
        
    }

}


export default ToDoModel;