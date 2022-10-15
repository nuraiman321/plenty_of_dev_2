let users = ['dt',
    'aden',
    'allison',
    'bern',
    'callum',
    'cath',
    'felipe',
    'jian',
    'jimmy',
    'linda',
    'matt',
    'naveen',
    'ned',
    'peter',
    'sam',
    'sannan',
    'sara',
    'stephen',
    'stuart',
    'tom']


users[0] = 'mistyrose'

const addNewUser = (newUser) =>{
    return users.push(newUser)
}

function removeFirstElement(){
    return users.shift()
}

addNewUser('ryan')
addNewUser('maya')
removeFirstElement()

users.filter(user => {
    if (user.length == 5){
        console.log(user)
    }if(user.length == 3){
        console.log(user)
    }
})