class User {
    static count: number = 0;
    private _name: string;
    private _login: string;
    private _password: string;
    private _grade: number;

    constructor(name: string, login: string, password: string, grade: number) {
        this._name = name;
        this._login = login;
        this._password = password;
        this._grade = grade;
        User.count++;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get login(): string {
        return this._login;
    }

    get password(): string {
        return this._password.replace(/./g, '*');
    }

    showInfo(): void {
        console.log(`Name: ${this._name}, Login: ${this._login}`);
    }

    eq(other: User): boolean {
        return this._grade === other._grade;
    }

    lt(other: User): boolean {
        return this._grade < other._grade;
    }

    gt(other: User): boolean {
        return this._grade > other._grade;
    }
}

class SuperUser extends User {
    static count: number = 0;
    private _role: string;

    constructor(name: string, login: string, password: string, role: string, grade: number) {
        super(name, login, password, grade);
        this._role = role;
        SuperUser.count++;
    }

    get role(): string {
        return this._role;
    }

    set role(value: string) {
        this._role = value;
    }

    showInfo(): void {
        console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this.role}`);
    }
}

const user1 = new User('Tim Tim', 'Tim.tim', 'password123', 3);
const user2 = new User('Jane Smith', 'jane.smith', 'password456', 2);
const user3 = new User('Alice Johnson', 'alice.johnson', 'password789', 3);
const admin = new SuperUser('Admin Adminson', 'admin', 'adminpassword', 'admin', 5);

user1.showInfo();
admin.showInfo();

let users = User.count;
let admins = SuperUser.count;

console.log(`Total regular users: ${users}`);
console.log(`Total super users: ${admins}`);

console.log(user1.lt(user2));
console.log(admin.gt(user3));
console.log(user1.eq(user3));

user3.name = 'Alice Smith';
console.log(user3.name);
console.log(user2.password);
console.log(user2.login);

try {
    user2.login = 'jyuythf';
} catch (error) {
    console.log(error.message);
}

console.log((user3 as any).grade);
try {
    (admin as any).grade = 10;
} catch (error) {
    console.log(error.message);
}
