export class User {
    username: String;
    password: String;
    bio: string;

    constructor (username?: string, password?: string, bio?: string) {
        this.username = username;
        this.password = password;
        this.bio = bio;
    }
}