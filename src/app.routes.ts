
import type { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), 
    title: 'ChuriTech - Home' 
  },
  { 
    path: 'about', 
    loadComponent: () => import('./pages/about-page/about-page.component').then(m => m.AboutPageComponent), 
    title: 'ChuriTech - About Us' 
  },
  { 
    path: 'services', 
    loadComponent: () => import('./pages/services-page/services-page.component').then(m => m.ServicesPageComponent), 
    title: 'ChuriTech - Services' 
  },
  { 
    path: 'portfolio', 
    loadComponent: () => import('./pages/portfolio-page/portfolio-page.component').then(m => m.PortfolioPageComponent), 
    title: 'ChuriTech - Our Work' 
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./pages/contact-page/contact-page.component').then(m => m.ContactPageComponent), 
    title: 'ChuriTech - Contact Us' 
  },
  { 
    path: '**', 
    redirectTo: '', 
    pathMatch: 'full' 
  }
];
