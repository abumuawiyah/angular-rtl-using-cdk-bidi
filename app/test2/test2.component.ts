import { Component, OnInit } from "@angular/core";
import { Directionality } from "@angular/cdk/bidi";

@Component({
  selector: "app-test2",
  templateUrl: "./test2.component.html",
  styleUrls: ["./test2.component.css"]
})
export class Test2Component implements OnInit {
  constructor(dir: Directionality) {
    console.log(dir.value);

    dir.change.subscribe(changes => {
      console.log("Test2", changes);
    });
  }

  ngOnInit() {}
}
