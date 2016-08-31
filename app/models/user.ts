export class User {
    username: string;
    password: string;
    bio: string;

    constructor (username?: string, password?: string, bio?: string) {
        this.username = username;
        this.password = password;
        this.bio = bio;
    }
}