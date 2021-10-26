import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  cliked() {
    alert('Button clicked')
  }
  
  
  focused() {

  }

  value = 0;
  showProgress() {
    setInterval(
      function(){
        this.value += 10
      },
      1000
    )
  }
}
