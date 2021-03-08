import { TestBed } from '@angular/core/testing';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { AppComponent } from './app.component';
import { Mod2Module } from './mod2/mod2.module';

// const q = !!(1 === 1);
// const q = !!(false);
const q = !!'';

describe('JS strict', () => {
  it('should false toBeFalsy is true', () => {
    expect(false).toBeFalsy();
  });

  it('should 0 toBeFalsy is true', () => {
    expect(0).toBeFalsy();
  });

  it('should space toBeFalsy is true', () => {
    expect('').toBeFalsy();
  });
  // it('should space toBeFalsy is true', () => {
  //   expect(q).toBeFalsy();
  // });
});

describe('Folder app', () => {
  describe('AppComponent', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [Mod2Module, BrowserTestingModule],
      }).compileComponents();
    });

    afterEach(async () => {});

    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should have as title 'lesson0603'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('lesson0603');
    });

    it('should render title', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const spanContent = compiled.querySelector('div.content span')
        ?.textContent;
      expect(spanContent).toContain('lesson0603 app is running!');
    });
  });
});
