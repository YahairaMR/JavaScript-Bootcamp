/*

onlyVowels
Write a function called onlyVowels that returns only the vowels from a word like so:

Name -> ae
Go to work -> ooo
Hello World! -> eoo
Aha! -> Aa

*/

const onlyVowels = (str) => {
    
    let vowels = 'aeiou';
    let result = '';

    for(let i = 0; i < str.length; i++){
        if (vowels.includes(str[i].toLowerCase())) {
           result += str[i];  
        }  
    }

    return result;
}

console.log(onlyVowels('Hellow ChEtt!'))