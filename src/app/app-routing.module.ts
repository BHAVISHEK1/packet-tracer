
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacketDemoComponent } from './packet-demo/packet-demo.component';



const routes: Routes = [
  { path: '', redirectTo: 'packet-demo', pathMatch: 'full' },
  { path: 'packet-demo', component: PacketDemoComponent },
  { path: '**', redirectTo: 'packet-demo' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


