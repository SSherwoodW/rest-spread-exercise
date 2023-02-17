//refactor to use rest operator and arrow function:

  function filterOutOdds(...nums){
    return nums.filter((num) => num % 2 === 0)
  }

//write findMin function using rest/spread operator

  function findMin(...nums){
    return nums.reduce((num, value) => value < num ? value : num)
  }

  const findMin2 = (...nums) => Math.min(...nums);


//write function mergeObjects -- accepts two objects, returns new object with keys and values from both first/second objects

  function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
  }


//write doubleAndReturnArgs -- accepts array + variable # of arguments. Fxn should return new array with original array values and all additional arguments double

  const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)]



//Slice and Dice!

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx +1)];
}

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => {
   let newObj = {...obj}
   newObj[key] = val;
   return newObj;
}

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

const update = (obj, key, value) => {
    let newObj = {...obj}
    newObj[key] = value;
    return newObj;
}

