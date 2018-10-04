import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home-directory',
  templateUrl: './home-directory.component.html',
  styleUrls: ['./home-directory.component.css']
})
export class HomeDirectoryComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return [
        { title: 'Recent Searches', cols: 1, rows: 1 },
        { title: 'Your Favorites', cols: 1, rows: 1 },
        { title: 'All Books', cols: 1, rows: 1 },
        { title: 'Featured', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
