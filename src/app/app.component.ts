import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Binding02PropertyComponent } from './binding02property/binding02property.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Binding02PropertyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Summary';
}
