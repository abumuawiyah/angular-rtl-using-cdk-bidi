import { Component, OnInit } from "@angular/core";
import { Directionality } from "@angular/cdk/bidi";

@Component({
  selector: "app-test1",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class Test1Component implements OnInit {
  constructor(dir: Directionality) {
    console.log(dir.value);

    dir.change.subscribe(changes => {
      console.log("Test1", changes);
    });
  }

  ngOnInit() {}
}
