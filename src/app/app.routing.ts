import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent} from './app.component';
import { VideoListComponent} from './video-list/video-list.component';
import { VideoDetailComponent} from './video-detail/video-detail.component';
import { HomeComponent } from './home/home.component';
import {MenuComponent} from './menu/menu.component'
import { LocationComponent } from './location/location.component'


const appRoutes: Routes = [
        {
        path: "",
        component:HomeComponent,

    },
            {
        path: "home",
        component:HomeComponent,

    },
    {
        path: "menu",
        component: MenuComponent,

    },
    {
        path: "location",
        component: LocationComponent,
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}   