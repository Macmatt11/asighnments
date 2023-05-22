// const readline = require('readline-sync');
// const input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
// const shift = parseInt(readline.question('How many letters would you like to shift? '));
// // [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
// function cipher(input,shift){
// let answer = ""
// for(let i = 0; i < input.length; i++){
//     const encryptNum = input[i].charCodeAt()
//     if(encryptNum >= 97 && encryptNum <= 109){
//     answer += String.fromCharCode(encryptNum + shift)
//     } else if(encryptNum >= 110 && encryptNum <= 122){
//     answer += String.fromCharCode(encryptNum - shift)
//     }else{
//         answer += input[i]
//     }
// }
// return answer
// }

// console.log(cipher(input,shift))

function cipher(str){
    let answer = ""
    for(let i = 0; i < str.length; i++){
        const encryptNum = str[i].charCodeAt()
        if(encryptNum >= 97 && encryptNum <= 109){
        answer += String.fromCharCode(encryptNum + 11)
        } else if(encryptNum >= 110 && encryptNum <= 122){
        answer += String.fromCharCode(encryptNum - 11)
        }else{
            answer += str[i]
        }
    }
    return answer
    }
    
    console.log(cipher("spwwd"))