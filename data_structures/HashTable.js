class HashTable {
  constructor(size) {
    // Create the object where you are going to store the values.
    this.values = {};
    this.numberOfValues = 0;
    this.size = size;
  }

  add(key, value) {
    const hash = this.calculateHash(key);
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }

    if (!this.values[hash].hasOwnProperty(key)) {
      this.numberOfValues++;
    }

    this.values[hash][key] = value;
  }

  calculateHash(key) {
    console.log(`Key got ${key}`);
    const ch = key.toString().length % this.size;
    console.log(`Hash ${ch} `);
    return ch;
  }

  print() {
    let string = "";
    for (const value in this.values) {
      for (const key in this.values[value]) {
        string += `${this.values[value][key]}`;
      }
    }
    console.log(string.trim());
    console.log(this.values);
  }
}

let myHashTable = new HashTable(5);
myHashTable.add("one", "First");
myHashTable.add("two", "Second");
myHashTable.add("three", "Third");
myHashTable.print();
