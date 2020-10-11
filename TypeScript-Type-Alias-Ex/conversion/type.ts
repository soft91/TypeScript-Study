type myId = string;
type myAlias = string | undefined;
type User = {
    id: myId,
    alias?: myAlias,
    city: string
};

let id1: User = { id: 'happy', city: 'seoul'}
let id2: User = { id: 'happy2', alias: undefined, city: 'deagu' }
let id3: User = { id: 'happy3', alias: 'happy3!', city: 'busan' }

console.log(id1);
console.log(id2);
console.log(id3);