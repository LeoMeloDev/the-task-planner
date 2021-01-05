
import firebase from './components/firebase'



const taskModule = (function() {
    const db = firebase.database();
    let newUserRef = db.ref('Task')
    
    return {       
        saveNewTask: function(task) {
            newUserRef.push({
                task: task,
             
            })
        },

        getTask: function(handleData) {
            db.ref('Task/').once('value').then((snapshot) => handleData(snapshot.val()));
            
        },
        
    }
    
})();


        



export default taskModule;