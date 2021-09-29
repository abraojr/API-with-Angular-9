import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  anyProperty = "any";

  constructor() {}

  ngOnInit(): void {}

  doSomething(): void {
    console.log("Doing something!");
  }
}
