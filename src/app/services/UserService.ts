import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {mockUsers} from '../mockUsers';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = mockUsers;
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser$: Observable<User | null>;

  constructor() {
    const savedUser = localStorage.getItem('user');
    this.currentUserSubject = new BehaviorSubject<User | null>(
      savedUser ? JSON.parse(savedUser) : null
    );
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUserSubject.next(user)
      localStorage.setItem('user', JSON.stringify(user))
      return true;
    }
    return false;
  }

  register(newUser: Omit<User, 'id'>): boolean {
    const exists = this.users.some(u => u.email === newUser.email);

    if (exists) return false;

    const id = Math.max(...this.users.map(u => u.id), 0) + 1;
    this.users.push({ id, ...newUser });

    return true;

  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  logout() {
    this.currentUserSubject.next(null);
    localStorage.removeItem('user');
  }
}
