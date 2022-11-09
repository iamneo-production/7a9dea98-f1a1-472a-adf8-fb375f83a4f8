import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oneclick',
  templateUrl: './oneclick.component.html',
  styleUrls: ['./oneclick.component.css']
})
export class NormalComponent implements OnInit {

  constructor(private router: Router){ }

  ngOnInit(): void {
  }
  redirectToNormal(){
    this.router.navigate(['normal']).then(()=>{
    window.location.reload();
    });

  }
}