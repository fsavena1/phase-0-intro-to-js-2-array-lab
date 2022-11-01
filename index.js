// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (cat){
    cats.push(cat);
}

function destructivelyPrependCat (cat){
    cats.unshift(cat);
}

function destructivelyRemoveLastCat (cat){
    cats.pop(cat);
}

function destructivelyRemoveFirstCat(cat){
    cats.shift(cat);
}

function appendCat(cat){
    const copyOfCats = [...cats];
    copyOfCats.push(cat);
    return copyOfCats;
}

function prependCat(cat){
    const copyOfCats1 = [...cats];
    copyOfCats1.unshift(cat);
    return copyOfCats1;
}

function removeLastCat(cat){
    const copyOfCats2 = [... cats];
    copyOfCats2.pop(cat);
    return copyOfCats2;
}

function removeFirstCat(cat){
    const copyOfCats4 = [... cats]
    copyOfCats4.shift(cat)
    return copyOfCats4;
}