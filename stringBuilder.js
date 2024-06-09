class StringBuilder {
    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }
    get value() {
        return this.#value;
    }
    // padEnd(str);
    // padStart(str);
    // padBoth(str);
};

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
