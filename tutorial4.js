// Array's :- An array is mutable.
console.log('simple array');
let techpioneers=['brendan Eich','linus torvalds','tim berners-Lee','bill gates','stev jobs'];
console.log(techpioneers);

/* array's indices */

/* If you want to replace the value of an index in an array, write it like this. 
console.log(techpioneers[4]='Tim Berners-Lee');*/


/*To get the value of an index in an array, write it like this ."
console.log(techpioneers[4]);*/


//looping over an array
console.log('_____________ looping over an array');
let cities=['karachi','lahore','islamabad','hyderabad'];
for(let i=0; i < cities.length; i++){
    console.log(cities[i]);
}

//for-of loop over an array
console.log('______________for-of loop over an array');
let heroes=['hulk','badMan','spiderMan','ironMan'];
for(let hero of heroes){
    console.log(hero);
}

//to Upper Case over an array
console.log('______________to Upper Case over an array');
let _heroes=['hulk','badMan','spiderMan','ironMan'];
for(let hero of _heroes){
    console.log(hero.toUpperCase());
}

////to Lower Case over an array
console.log('______________to Lower Case over an array');
let $heroes=['hulk','badMan','spiderMan','ironMan'];
for(let hero of $heroes){
    console.log(hero.toLowerCase());
}

//for-in loop over an array
console.log('______________for-in loop over an array');
let novels=['ramz e ishq','jan e tamanna','ishq e sitam','khan e khanam','junoon tere ishq ka '];
for(let novel in novels){
    console.log(novel);
}
// Array methods
console.log('______________________________ .push method');
// puch() :- Add to end 
let heroes1=['arham khanzada',' zaran khnzada', 'asfandyar khanzada'];
heroes1.push('shehram khanzada');
console.log(heroes1);

console.log('______________________________ .pop method');
//.pop():- delete from end & return
let heroes2=['arham khanzada',' zaran khnzada', 'asfandyar khanzada','shehram khanzada','darakhzai khanzada'];
let deleteHero=heroes2.pop()
console.log(heroes2);
console.log(`deleted  ${deleteHero}`);

// to string:- convert array to string 
console.log('______________________________ .tostring method');
let alpha=['a','b','c','d','e'];
console.log(alpha.toString());

//concat:- joins multiple arrays and returns result
console.log('___________________ concat method');
let heroes4=['asfandyar khanzada','shehram khanzada'];
let heroes3=['arham khanzada',' zaran khnzada'];
let concat= heroes3.concat(heroes4);
console.log(concat);

//.unshift :- add to start
console.log('__________________ unshift method');
let heroes5=[ 'asfandyar khanzada','shehram khanzada'];
heroes5.unshift('arham khanzada','zaran khanzada');
console.log(heroes5);

//.shift :- delete from start & return
console.log('__________________ shift method');
let heroes6=[ 'arham khanzada','zaran khanzada','asfandyar khanzada','shehram khanzada'];
let deleted=heroes6.shift();
console.log(heroes6);
console.log(`deleted ${deleted}`);

//.slice:- returns the piece of the array 
console.log('__________________ .slice method');
let heroes7=['arham khanzada','zaran khanzada','asfandyar khanzada','shehram khanzada','haider khanzada','darakhzai khanzada'];
console.log(heroes7);
console.log(heroes7.slice(2,5));

// _________________  splice :- changed original array (add , remove , replace)
console.log('___________________ .splice method');
let num = [1, 2, 3, 4, 5, 6, 7];
console.log(num); 
console.log('type 1 :',num.splice(2, 2, 101, 102)); 

//If you don't want to delete anything, you can write it like this.
let num1 = [1, 2, 3, 4, 5, 6, 7];
console.log(num1); 
console.log('type 2 :',num1.splice(2,0,101,102));

//If you  want to delete anything, you can write it like this.
let num2 = [1, 2, 3, 4, 5, 6, 7];
console.log(num2); 
console.log('type 3 :',num2.splice(3,1));

// if you want to replace anything , you can write it like this .
let num3 = [1, 2, 3, 4, 5, 6, 7];
console.log(num3); 
console.log('type 4 :',num3.splice(3,1,101));

// ____________________ Chapter 4 complete________________



/*_______________________________________solve this question______________________________________________________________

Q1:- for a given array with marks of students -> [85,97,44,37,76,60] find the average marks of the entire class.

Q2:- for a given array with price of 5 items ->[250 , 45 , 300, 900 , 50] all items have an offer of 10% off on them.
change the array to store final price after applying offer.

Q3:- create an array to store companies -> 'Bloomberg , microsoft , uber , google , ibm , netflix'
A : REmove the first company of the array
B : REmove uber & add ula in its place 
C : Add amazone at the end 
*/