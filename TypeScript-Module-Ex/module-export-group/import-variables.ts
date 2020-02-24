import { ver, author, extensions, display } from './export-variables';

console.log(`api name: ${author}`);
console.log(`api version: ${ver}`);
extensions.forEach(s => {
    console.log(`extensions : ${s}`);
});
console.log(`display() : ${display()}`);