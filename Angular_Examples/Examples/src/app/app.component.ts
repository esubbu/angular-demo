import { Component } from '@angular/core';

@Component({
  selector : 'app-comp',
  template: `
<div class="panel panel-default">
    <div class="panel-heading">
      <h1>Welcome to Angular!!</h1>
    </div>
    <div class="panel-body">
      <movies-comp></movies-comp>
    </div>
</div>
 `

})


export class AppComponent {}
