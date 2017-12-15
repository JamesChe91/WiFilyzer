import { LineChartComponent } from './components/line-chart/line-chart.component';
import { HomeComponent } from './components/home/home.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
    },
    {
        path: 'Home',
        component: HomeComponent
    }
    ,
    {
        path: 'Channels',
        loadChildren: 'app/components/line-chart/line-chart.module#LineChartModule'
    }
    ,
    {
        path: 'ListAP',
        loadChildren: 'app/components/current-connection/current-connection.module#CurrentConnectionModule'
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
