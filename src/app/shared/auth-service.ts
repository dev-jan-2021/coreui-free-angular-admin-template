import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import {
    AngularFireDatabase,
    AngularFireList,
    AngularFireObject,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    usersRef: AngularFireList<any>;
    userRef: AngularFireObject<any>;
    users: User[];
    constructor(private db: AngularFireDatabase) { }
    register(user: User): any {
        console.log(user);
        this.usersRef = this.db.list('users');
        // if (this.isEmptyObject(user)) {
        this.usersRef.push(user);
        /* this.usersRef.push({
             name: user.name,
             email: user.email,
             password: user.password,
             createdOn: user.createdOn,
             isAdmin: user.isAdmin,
             isActive: user.isActive
         });
         */
        //  }
    }
    getUsers() {
        /* this.usersRef = this.db.list('users');
         console.log(this.usersRef);
         return this.usersRef;
         */
        this.db.list('/users')
            .valueChanges()
            .subscribe(res => {
                console.log(res);
                res = res.map(x => x + " Hello World");
                return res;
            })
    }
    isEmptyObject(obj) {
        return (obj && (Object.keys(obj).length === 0));
    }
}
