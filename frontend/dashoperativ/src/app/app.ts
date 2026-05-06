import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from "./ui/side-bar/side-bar/side-bar";
import { TopBar } from './ui/top-bar/top-bar/top-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBar, TopBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dashoperativ');
}
