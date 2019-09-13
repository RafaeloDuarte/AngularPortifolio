import { NgModule } from "@angular/core";
import { UsersComponent } from './users.component'
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetalheComponent } from './user-detalhe/user-detalhe.component';
import { FormsModule }   from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UsersRoutingModule
    ],
    exports: [],
    declarations: [
        UsersComponent, 
        UserFormComponent, 
        UserDetalheComponent
    ],
    providers:[
        UsersService
    ]
})

export class UsersModule { }