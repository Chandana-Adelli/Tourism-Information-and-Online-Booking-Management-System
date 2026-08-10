import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadComponent: () => import('./home/home').then(m => m.HomeComponent) },

  { path: 'destinations', loadComponent: () => import('./destinations/destinations').then(m => m.DestinationsComponent) },

  { path: 'destinations/place-details/:id', loadComponent: () => import('./place-details/place-details').then(m => m.PlaceDetailsComponent)},

  { path: 'book-tour', loadComponent: () => import('./pages/book-tour/book-tour').then(m => m.BookTourComponent) },

  { path: 'book-hotel', loadComponent: () => import('./pages/book-hotel/book-hotel').then(m => m.BookHotelComponent) },

  { path: 'payment', loadComponent: () => import('./payment/payment').then(m => m.PaymentComponent) },

  { path: 'success', loadComponent: () => import('./success/success').then(m => m.Success) },

  { path: 'signup', loadComponent: () => import('./signup/signup').then(m => m.SignupComponent) },

  { path: 'signin', loadComponent: () => import('./signin/signin').then(m => m.SigninComponent) },

  { path: 'contact', loadComponent: () => import('./contact/contact').then(m => m.ContactComponent) },

  { path: 'feedback', loadComponent: () => import('./feedback/feedback').then(m => m.FeedbackComponent) },

  { path: '**', redirectTo: 'home' }

];