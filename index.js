const cats = ["Milo", "Otis", "Garfield"];// Write your solution here!

function destructivelyAppendCat(name)
{
    cats.push(name);

}
function destructivelyPrependCat(name)
{
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name)
{
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name)
{
    cats.shift(name);
}
function appendCat(name)
{
    const newcats = cats.slice();
    newcats.push(name);
    return newcats;
}
function prependCat(name)
{
    const newcats = cats.slice();
    newcats.unshift(name);
    return newcats;

}
function removeLastCat(name)
{
    const newcats = cats.slice();
    newcats.pop(name);
    return newcats;

}
function removeFirstCat(name)
{
    const newcats = cats.slice();
    newcats.shift(name)
    return newcats;

}