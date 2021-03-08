import { TestBed } from '@angular/core/testing';
import { Mod2Service } from './mod2.service';

describe('Mod2Service', () => {
  let service: Mod2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mod2Service);
    // service = new Mod2Service();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#a should be equal 10', () => {
    expect(service.a).toEqual(10);
  });

  it('#b should be equal 10', () => {
    expect(service.b).toEqual(10);
  });

  it('#square should return 100 if a = 10 & b = 10', () => {
    expect(service.square()).toEqual(100);
  });

  it('#square should return 1000 if a = 100 & b = 10', () => {
    service.a = 100;
    expect(service.square()).toEqual(1000);
  });

  afterEach(() => {});
});
