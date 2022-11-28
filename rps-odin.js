let protag = "Kesh"

console.log(`${protag} is the protagonist of Aimless Whisper`);

// all of the arrays
const orgType = [];
const fundSrc = ["galactic megabank", "international mercenaries", "a shadowy government operative", "representatives of the old way", "a cruel dictator", "an orbital warlord"];
const orgs = [ "Legion", "Circle", "Commanders", "Raiders"];
const themes = [ "Wolves", "The Hawk", "The Claw", "The Chain", "Shackles"];
const adj = [ "Blue", "Black", "Red", "Crimson", "Velvet", "Iron", "Bloody"];
const noun = [ "Wolf", "Hound", "Saint", "Priest", "King", "Queen", "Prince", "Boss", "Hand", "Blade", "Flame"];
const charTrait = [ "fastidious", "vicious", "calculating", "beautiful", "terrifying", "psychotic", "charming", "unpredicably violent", "disarmingly meek", "brash", "confident", "vengeful", "aggressive", "seductive", "oddly disarming", "cheerful"];
const corpNameFirst = ["Con", "Securi", "Multi", "Globo", "Sene", "Cali", "Fina", ];
const corpNameSecond = ["corp", "con", "cor", "skelion", "della", ];
const genre = ['mystery', 'blockbuster action', 'thriller', 'horror', 'detective', 'samurai', 'ninja', 'western', 'drama', 'comedy', 'suspense', 'political', 'generational', 'family', 'business'];
const attackType = ['electro', 'laser', 'pulse', 'ionic', 'psionic', 'neuro', 'sonic'];
const weaponType = ['gun', 'knife', 'dagger', 'greatsword', 'blaster'];
const transformType = ['reducer', 'expander', 'dissassembler'];

// the workhorse combiner function
function combiner(arg1, arg2) {
    let combination = (arg1[Math.floor(Math.random() * arg1.length)] + //get an item from the array designated arg1, and add...
        arg2[Math.floor(Math.random() * arg2.length)]);  //...an item from the array designated arg2.
    return combination; // return a combined variable called "combination".
}

// combiner with a space between the words
function combinerSpace(arg1, arg2) {
    let combination = (arg1[Math.floor(Math.random() * arg1.length)] + " " + //get an item from the array designated arg1, and add...
        arg2[Math.floor(Math.random() * arg2.length)]);  //...an item from the array designated arg2.
    return combination; // return a combined variable called "combination".
}

// combiner with "the" between the words
function combinerThe(arg1, arg2) {
    let combination = (arg1[Math.floor(Math.random() * arg1.length)] + " the " + //get an item from the array designated arg1, and add...
        arg2[Math.floor(Math.random() * arg2.length)]);  //...an item from the array designated arg2.
    return combination; // return a combined variable called "combination".
}

let chapterGenre = (genre[Math.floor(Math.random() * genre.length)]) + "-" + 
(genre[Math.floor(Math.random() * genre.length)]);

let antagOrg = (orgs[Math.floor(Math.random() * orgs.length)]) + " of " + 
    (themes[Math.floor(Math.random() * themes.length)]);

// let antagOrg = ((combiner(combiner(adj, noun), combiner(charTrait, noun)));


let antagLeader = (adj[Math.floor(Math.random() * orgs.length)]) + " " + (noun[Math.floor(Math.random() * noun.length)]);

let story1 = (`In this chapter, ${protag} takes on the ${antagOrg}.`);

let story2 = (`The leader of ${antagOrg} is ${antagLeader},`);

// let corpName = combiner(corpNameFirst, corpNameSecond);

// let corpName = combiner(combiner(adj, noun), combiner(charTrait, noun));

// let corpName = (combiner(combiner(adj, noun)) + combiner(charTrait, noun));

// let story3 = (`The corporation involved is ${corpName}.`);

function getArrayElement(array) {  //gets an array element from a specified array.
    return (array[Math.floor(Math.random() * array.length)]);  
    }





// let vilCharTrait1 = (charTrait[Math.floor(Math.random() * charTrait.length)]);
// let vilCharTrait2 = (charTrait[Math.floor(Math.random() * charTrait.length)]);
// while (vilCharTrait1 == vilCharTrait2) {  // check if the vilCharTraits are the same, and re-do if necessary
//     vilCharTrait2 = (charTrait[Math.floor(Math.random() * charTrait.length)]);
// }

let story3 = `The ${getArrayElement(charTrait)} and ${getArrayElement(charTrait)} ${(getArrayElement(adj +' ' +noun ))}`;

// let story4 = `the corpname is (`${(combiner(adj, noun) + (combiner(charTrait, noun)))}`;
let story4 = `The genre of this chapter is ${chapterGenre}.`;


