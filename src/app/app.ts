import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { FriendsList } from './components/friends-list/friends-list';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { Notifications } from './components/notifications/notifications';
import { Profile } from './components/profile/profile';
import { ConferenceList } from './components/conference-list/conference-list'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Footer,FriendsList,Header,Navbar,Notifications,Profile,ConferenceList
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('conferencia');
}
