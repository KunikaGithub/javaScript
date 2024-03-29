new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is completed')
    },1000)
    resolve()
})
.then(function(){
    console.log("promises consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"manku", id :"123"})
    },1000)
}).then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"javascript", password:"1234"})
        }else{
            reject('Error : JS went worng')
        }
    },1000)
})


const promiseSix = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"kunika",id:"2001"})
        }else{
            reject('ERROR : JS Went Wrong')
        }
        
    },1000)
})


promiseSix.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);

}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("the promise is either resolved or reject"))


async function getAllusers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:",error);   
    }
}
getAllusers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()

})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))