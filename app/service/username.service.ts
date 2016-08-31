import { Injectable } from "@angular/core";

@Injectable()
export class UsernameService {
    getUsername (username: string) {
        //using Promises, room for improvement
        return new Promise((resolve, reject) => setTimeout(() => {
            if(username === 'duplicate'){
                resolve();
            }
            else {
                reject();
            }
        }, 500));
    }
}