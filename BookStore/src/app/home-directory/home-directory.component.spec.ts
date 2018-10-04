
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDirectoryComponent } from './home-directory.component';

describe('HomeDirectoryComponent', () => {
  let component: HomeDirectoryComponent;
  let fixture: ComponentFixture<HomeDirectoryComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
