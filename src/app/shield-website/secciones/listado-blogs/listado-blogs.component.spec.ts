import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoBlogsComponent } from './listado-blogs.component';

describe('ListadoBlogsComponent', () => {
  let component: ListadoBlogsComponent;
  let fixture: ComponentFixture<ListadoBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
