//! Description ============>


//?  instruction ===============>
//? Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range. আমরা চাইলে একটি Object কে কোন function এর মধ্য রাখতে পারি। এবং তা রিটার্ন করে Object এর value পেতে পারি।

//* Solve problem
// Setup
function phoneticLookup(val) {
    let result = "";


    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    }

    //* After converting our case statements into object properties you can make use of the variable `result` to let the function return the correct value.

    result = lookup[val]

    return result;
}


phoneticLookup("alpha");
phoneticLookup("bravo");
phoneticLookup("charlie");
phoneticLookup("delta");
phoneticLookup("echo");
phoneticLookup("foxtrot");
phoneticLookup("");