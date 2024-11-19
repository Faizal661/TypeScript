// Way to create a mixied array
const user: (string | number)[] = [1, "hello"]


// In tuple we can create mixed array types with specifying each indexes,and have a predefined length.
let tUser: [string, number, boolean]

tUser = ["hello", 131, true]

let rgb: [number, number, number] = [255, 123, 112]  // for structured data like color codes,date&times,coordinates.

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "hello.com"
newUser.push(111)
console.log(newUser)

export {}