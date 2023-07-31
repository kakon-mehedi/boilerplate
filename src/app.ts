/* Basic Types */

let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

/* Tuple */
let person: [number, string, boolean] = [1, 'Brad', true];

/* Tuple Array */
let employees: [number, string][];

employees = [
	[1, 'Brad'],
	[2, 'John'],
	[3, 'Jill'],
];

/* Union */
let pid: string | number;
pid = '22';

/* Enum */
enum Direction1 {
	Up = 1,
	Down,
	Left,
	Right,
}

enum Direction2 {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right',
}

/* Objects */

type User = {
	id: number;
	name: string;
};

const user3: User = {
	id: 1,
	name: 'John',
};

/* Type Assertion : 
Tye assertion should be right side after the = symbol */

let cid: any = 1;
let customerId1 = <number>cid;
let customerId2 = cid as number;

// Functions
function addNum(x: number, y: number): number {
	return x + y;
}

const arrowFunction = (a: number, b: number): number => {
	return a + b;
};

// Void
function log(message: string | number): void {
	console.log(message);
}

function voidReturnType(arr1: Array<number>, arr2: Array<number>): void {
	// Do your operation but you can not return anything as it's return type is void
}

// Interfaces
interface UserInterface {
	readonly id: number;
	name: string;
	age?: number;
}

const user1: UserInterface = {
	id: 1,
	name: 'John',
};

interface MathFunc {
	(x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
	id: number;
	name: string;
	register(): string;
}

// Classes
class Person implements PersonInterface {
	id: number;
	name: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}

	register() {
		return `${this.name} is now registered`;
	}
}

const brad = new Person(1, 'Brad Traversy');
const mike = new Person(2, 'Mike Jordan');

// Subclasses
class Employee extends Person {
	position: string;

	constructor(id: number, name: string, position: string) {
		super(id, name);
		this.position = position;
	}
}

const emp = new Employee(3, 'Shawn', 'Developer');

/* Genertics */

/* Example 1 */

function getArray<T>(items: T[]): T[] {
	return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['brad', 'John', 'Jill']);

// strArray.push(1); // Throws error

/* Example 2 */

function addId<T>(obj: T): T {
	let id = Math.floor(Math.random() * 100);

	return { ...obj, id };
}

let user = addId({
	name: 'Kakon',
	age: 40,
	country: 'Bangladesh',
});

const country = user.country;

/* Type extends interface */

interface myObjectType {
	name: string;
	age: number;
	country: string;
}

const addId2 = <T extends myObjectType>(obj: T): T => {
	let id = Math.floor(Math.random() * 100);

	return { ...obj, id };
};

let user2 = addId2({
	name: 'Kakon',
	age: 40,
	country: 'Bd',
});

/* Getting dynamic type inside interface */

interface APIResponse {
	status: number;
	type: string;
	res: object;
}

/* In this is interface example I hardcoded the res type as an object. 
But I can get API res type in any format may be string, may be array or any type. 
So, To get data type dynamicly we can use generic here. */

const response: APIResponse = {
	status: 200,
	type: 'get',
	res: {
		name: 'Test',
		res: 'dataRes',
	},
};

/* Making interface res type dynamic */

interface APIResponseDynamicType<T> {
	status: number;
	type: string;
	res: T;
}

const dynamicResponse: APIResponseDynamicType<object> = {
	status: 200,
	type: 'get',
	res: {
		name: 'Test',
		res: 'dataRes',
	},
};

/* If I now use APIResponseDynamicType <string> it will give error because I am sending object as response
but I am setting response type as string */

// these are the ts basic concepts
