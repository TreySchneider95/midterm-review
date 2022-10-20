function crossArray (arr1, arr2){
    let returnArr = []
    for(let i in arr1){
        returnArr.push(arr1[i])
        returnArr.push(arr2[i])
    }
    return returnArr
}
console.log(crossArray([5, 7, 14, 5], [6, 2, 22, 1]))

function foundCat(arr){
    return arr.includes("cat")
}
console.log(foundCat(["dog", "bear", "cheese", "cat", "fox"]))
console.log(foundCat(["hi", "bye", "why", "try"]))

function oddOnesOut(arr){
    return arr.filter((x)=>(x!==1))
}
console.log(oddOnesOut([1,2,1,1,3,5,1]))
console.log(oddOnesOut([0,-1,5,1,5,0]))
console.log(oddOnesOut([1,1,1,1,1,1]))

function stringSpace(str){
    let returnStr = ''
    for (let x of str){
        returnStr += x  + ' '
    }
    return returnStr
}
console.log(stringSpace('string'))
console.log(stringSpace('wow'))
console.log(stringSpace('hello world'))

function stringCompareCounter(str1, str2){
    let counter = 0
    for (let x in str1){
        str1[x] === str2[x] ? counter += 1 : {} 
    }
    return counter
}
console.log(stringCompareCounter('cat','cow'))
console.log(stringCompareCounter('count','touch'))
console.log(stringCompareCounter('well','sell'))

function duplicate(arr){
    let counter = {}
    for(let x of arr){
        counter[x] = counter[x] ? counter[x] + 1 : 1
    }
    let checker = Object.values(counter).map((x)=>(x===1))
    return checker.includes(false)
}
console.log(duplicate(['hi', 'wow', 'hey', 'hi']))
console.log(duplicate(['one', 'two', 'three']))
console.log(duplicate([1,7,32,1,10,2,11]))

function damageCalculator(char1, char2){
    let dmg = char1.atk - char2.def
    return dmg > 0 ? dmg : "NO DAMAGE!"
}
let character1 = {
    name: 'Cloud',
    atk: 100,
    def: 90
  }
  let character2 = {
    name: 'Sephiroth',
    atk: 150,
    def: 50
  }
console.log(damageCalculator(character1, character2))
console.log(damageCalculator(character2, character1))