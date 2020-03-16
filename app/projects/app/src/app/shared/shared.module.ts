import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
    declarations: [],
    imports: [
        // angular
        CommonModule,

        // material
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatMomentDateModule
    ],
    exports: [
        // angular
        CommonModule,

        // material
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatMomentDateModule,
        MatInputModule
    ]
})
export class SharedModule {}
