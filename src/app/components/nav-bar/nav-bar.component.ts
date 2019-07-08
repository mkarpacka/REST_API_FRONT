import { Component, OnInit } from "@angular/core";
import { MatMenuModule, MatIconModule } from "@angular/material";
import {
  trigger,
  transition,
  state,
  style,
  animate
} from "@angular/animations";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
  animations: [
    trigger("fadeIn", [
      state(
        "void",
        style({
          opacity: 0
        })
      ),
      transition("void <=> *", animate(1300))
    ])
  ]
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
