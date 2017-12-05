'use strict'
var objA = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: {
    subProp1: 'sub value1',
    subProp2: {
      subSubProp1: 'sub sub value1',
      subSubProp2: [1, 2, {
        prop2: 1,
        prop: 2
      }, 4, 5]
    }
  },
  prop5: 1000,
  prop6: new Date(2016, 2, 10)
};

var objB = {
  prop5: 1000,
  prop3: 'value3',
  prop1: 'value1',
  prop2: 'value2',
  prop6: new Date('2016/03/10'),
  prop4: {
    subProp2: {
      subSubProp1: 'sub sub value1',
      subSubProp2: [1, 2, {
        prop2: 1,
        prop: 2
      }, 4, 5]
    },
    subProp1: 'sub value1'
  }
};

function deepEqual(obj1, obj2) {
  circle:
  for (key in obj1) {
    let res1 = obj1[key];

    for (key in obj2) {
      let res2 = obj1[key];

      if (res1 === res2) {
        if (typeof res1 === 'object') {

        }
      } else {
        console.log(false);
        break circle;
      }
    }

  }
}

console.log(deepEqual(objA, objB));
