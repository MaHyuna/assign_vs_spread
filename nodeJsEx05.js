'use strict'

// assign vs spread


// assign 연산자
const obj = { 
    title: "111 assign 연산자 title"
}

const newObj = {
    name: "222 assign 연산자 name"
}

const assign = Object.assign({}, obj, newObj)      // (객체배열로 {}, 합칠 오브젝트1, 오브젝트 2)

console.log( assign )



// spread 연산자
const obj2 = { 
    title: "111 spread 연산자 title"
}

const newObj2 = {
    name: "222 spread 연산자 name"
}

const spread = {
    ...obj2,
    ...newObj2,
}

// 배열도 병합 가능
const arr2 = [1, 2, 3]
const newArr2 = [7, 8, 9]

const spreadArr = [
    ...arr2,
    ...newArr2
]


console.log( spread )
console.log( spreadArr )

