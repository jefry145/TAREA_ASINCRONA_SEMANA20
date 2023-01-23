import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad20';
  datos!:any[];
  page_size=10;
  page_number=1;
  page_size_list=[10,25,50,100]

  paginar(e:string){
    let page=Math.ceil(this.datos.length/this.page_size);
    if(e=='+'){
      if (page>this.page_number) this.page_number+=1
    }
    else if(e=='-'){
      if (this.page_number>0) this.page_number-=1
    }
    else if(this.page_size_list.includes(Number(e))){
      this.page_size=Number(e)
      this.page_number=1
    }
  }

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.getData().subscribe(x=>this.datos=x)
    console.log(this.datos)
  }
}
