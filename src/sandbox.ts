// sandbox file to test TypeScript
// execute: npm install && npm run sandbox

// Implementa esta función
// Debe recibir dos números y regresar un string con el resultado
// Ejemplo: "Result: 5"

function countVowels(text: string): number {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if(text[i].match(/[aeiouAEIOU]/)) {
            count++;
        }
    }
    return count;
}

function filterEven(numbers: number[]): number[] {
  return numbers.filter(n => n % 2 === 0);
}

function reverseWords(words: string[]): string[] {
  return words.map(reverseWords => reverseWords.split('').reverse().join(''));
}

function hasValue(values: number[], target: number): boolean {
  return values.includes(target);
}

function main() {
}

main();