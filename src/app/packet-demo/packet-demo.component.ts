

// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { interval, Subscription } from 'rxjs';

// @Component({
//   selector: 'app-packet-demo',
//   templateUrl: './packet-demo.component.html',
//   styleUrls: ['./packet-demo.component.css']
// })
// export class PacketDemoComponent implements OnInit, OnDestroy {
//   counters: { [key: string]: number } = {
//     p1: 0,
//     p2: 0,
//     p3: 0,
//     p4: 0
//   };
//   refreshes = 0;
//   private intervalSubscription: Subscription | undefined;
//   private refreshSubscription: Subscription | undefined;

//   ngOnInit() {
   
//     this.intervalSubscription = interval(1000).subscribe(() => {
//       this.incrementCounters();
//     });


//     this.refreshSubscription = interval(10000).subscribe(() => {
//       this.resetCounters();
//       this.incrementRefreshes();
//     });
//   }

//   ngOnDestroy() {
//     if (this.intervalSubscription) {
//       this.intervalSubscription.unsubscribe();
//     }
//     if (this.refreshSubscription) {
//       this.refreshSubscription.unsubscribe();
//     }
//   }

//   private incrementCounters() {
//     Object.keys(this.counters).forEach((key: string) => {
//       this.counters[key]++;
//     });
//   }

//   private resetCounters() {
//     Object.keys(this.counters).forEach((key: string) => {
//       this.counters[key] = 0;
//     });
//   }

//   private incrementRefreshes() {
//     this.refreshes++;
//   }
// }




import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-packet-demo',
  templateUrl: './packet-demo.component.html',
  styleUrls: ['./packet-demo.component.css']
})
export class PacketDemoComponent implements OnInit, OnDestroy {
  counters: { [key: string]: number } = {
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0
  };
  bigBoxCounter = 0;
  refreshes = 0;
  private intervalSubscription: Subscription | undefined;
  private refreshSubscription: Subscription | undefined;

  ngOnInit() {
    this.intervalSubscription = interval(1000).subscribe(() => {
      this.incrementCounters();
    });

    this.refreshSubscription = interval(10000).subscribe(() => {
      this.resetCounters();
      this.incrementRefreshes();
    });
  }

  ngOnDestroy() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  private incrementCounters() {
    Object.keys(this.counters).forEach((key: string) => {
      this.counters[key]++;
    });
    this.bigBoxCounter++;  
  }

  private resetCounters() {
    Object.keys(this.counters).forEach((key: string) => {
      this.counters[key] = 0;
    });
    this.bigBoxCounter = 0;  
  }

  private incrementRefreshes() {
    this.refreshes++;
  }
}
