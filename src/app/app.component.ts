import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { home } from './model/home.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  Documents: any=['Aadhar Card','Birth Certificate','Conduct Certificate','Marksheet','Transfer Certificate'];
  Type: any= ['.pdf','.jpg/.jpeg','.zip','.rar'];
  
    home=new home()
    dataArray=[] as any;
    
    
    form = new FormGroup({
    type: new FormControl('',Validators.required),
    document: new FormControl('', Validators.required)
  });

  ngOnInit(){
    this.dataArray.push(this.home);

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.dataArray);
  }

  
  addRow(){
    
    this.home=new home();
    this.dataArray.push(this.home);
  }

  remove(index:any){
    this.dataArray.splice(index,1);

  }
}
