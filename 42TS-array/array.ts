let list: number[] =[];
list.push(1);

let list2: Array<number> = [1,2,3];
let tuple: [string, number] = ['hello', 10];
let tuple2: [string, number, ...string[]] = ['hello', 10, 'world', 'foo', 'bar'];

type User = {
    name: string;
    isActive: boolean;
}

const allUsers: User[] = [];

const MLModels: number[][] = [
    [255,255,255],
    []
]


allUsers.push({name: 'foo', isActive: true});

