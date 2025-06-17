import {Component, OnInit, SimpleChanges} from '@angular/core';
import {RouterLink} from '@angular/router';
import {UserService} from '../../services/UserService';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header-component',
  imports: [
    RouterLink,
  ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent implements OnInit {
isLoggedIn: boolean = false;
  private userSubscription!: Subscription;

constructor(private service: UserService) {
}

ngOnInit() {
  this.userSubscription = this.service.currentUser$.subscribe(user => {
    this.isLoggedIn = !!user;
  });
}

  logout() {
  this.service.logout();
    this.isLoggedIn = false;
  }

  ngOnDestroy() {
  this.userSubscription.unsubscribe();
  }
}
