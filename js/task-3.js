class StringBuilder {
  #value
  constructor(str){
    this.#value = str;
  }

  getValue(){
    return this.#value;
  }
  //this.#value = startStr + this.#value;
  padStart(startStr){
      this.#value = startStr + this.#value;
    }

  padEnd(endStr){
    this.#value = this.#value + endStr;
  }

  padBoth(bothStr){
    this.#value = bothStr + this.#value + bothStr;
  }

}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="