import { NgModule } from "@angular/core";
import { UsersComponent } from './users.component'
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetalheComponent } from './user-detalhe/user-detalhe.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [],
    declarations: [UsersComponent, UserFormComponent, UserDetalheComponent],
    providers:[]
})

export class UsersModule { }