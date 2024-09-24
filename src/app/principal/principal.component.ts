import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../model/Customer';
import { CustomerService } from '../service/customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})

export class PrincipalComponent {

  customer = new Customer();

  btnAdd:boolean = true;
  table:boolean = true;

  customers:Customer[] = [];

  constructor(private service:CustomerService){}

  select():void{
    this.service.select().subscribe(result => this.customers = result);
  }

  add():void{
    this.service.add(this.customer)
    .subscribe(result => {
      //add customer in the vector
      this.customers.push(result);

      //clear form
      this.customer = new Customer();

      //alert
      alert('Customer added with successful')
    });
  }

  selectCustomer(index:number):void{

    this.customer = this.customers[index];


    this.btnAdd = false;
    this.table = false;
  }

  edit():void{
    this.service.edit(this.customer)
    .subscribe(result => {

      //get customer's position in vector
      let position = this.customers.findIndex(obj => {
        return obj.id == result.id
      });

      //update
      this.customers[position] = result;

      //clear form
      this.customer = new Customer();
      this.btnAdd = true;
      this.table = true;


      //alert
      alert('Customer updated with successful')
    });
  }

  remove():void{
    this.service.remove(this.customer.id)
    .subscribe(result => {

      alert('test')
      //get customer's position in vector from front-end
      let position = this.customers.findIndex(obj => {
        return obj.id == this.customer.id;
      });

      //remove customer
      this.customers.splice(position, 1)

      this.customer = new Customer();
      this.btnAdd = true;
      this.table = true;

      //alert
      alert('Customer removed with successful')
    });
  }

  cancel():void{
    this.customer = new Customer();
    this.btnAdd = true;
    this.table = true;
  }


  ngOnInit(){
    this.select();
  }

}
