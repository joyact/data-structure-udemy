class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let PRIME_NUM = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME_NUM + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    /*
      Accepts a key and a value
      Hashes the key
      Stores the key-value pair in the hash table array via separate chaining
    */
    let item = {};
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    item[key] = value;
    this.keyMap[index].push(item);
    return this.keyMap;
  }

  get(key) {
    /*
      Accepts a key
      Hashes the key
      Retrieves the key-value pair in the hash table
      If the key isn't found, returns undefined
    */
    let index = this._hash(key);
    let position = this.keyMap[index];
    if (!position) return undefined;
    for (let i = 0; i < position.length; i++) {
      if (position[i][key]) return position[i][key];
    }
  }

  keys() {
    /*
     Loops through the hash table array 
     Returns an array of keys in the table
    */
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          let key = Object.keys(this.keyMap[i][j]);
          if (!keysArr.includes(key[0])) keysArr.push(key[0]);
        }
      }
    }
    return keysArr;
  }

  values() {
    /*
     Loops through the hash table array
     Returns an array of values in the table
    */
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          let value = Object.values(this.keyMap[i][j]);
          if (!valuesArr.includes(value[0])) valuesArr.push(value[0]);
        }
      }
    }
    return valuesArr;
  }
}

const hash = new HashTable(17);
hash.set('maroon', '#800000');
hash.set('yellow', '#FFFF00');
hash.set('olive', '#808000');
hash.set('salmon', '#FA8072');
hash.set('lightcoral', '#F08080');
hash.set('mediumvioletred', '#C71585');
hash.set('plum', '#DDA0DD');
