import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // Use this to provide the HttpClient
  ],
})
export class AppModule { }
