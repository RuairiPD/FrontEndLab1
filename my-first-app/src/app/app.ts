import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppTwoComponents } from "./app-two-components/app-two-components";
import { Appb } from "./appb/appb";

@Component({
  selector: 'root-directive',
  imports: [RouterOutlet, AppTwoComponents, Appb],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name:string = "Ruairi";
  age:number = 21;
}
