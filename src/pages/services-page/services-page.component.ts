
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

interface Service {
  icon: string;
  title: string;
  description: string;
  details: string[];
}

@Component({
  selector: 'app-services-page',
  imports: [AnimateOnScrollDirective],
  templateUrl: './services-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesPageComponent {
  services = signal<Service[]>([
    { 
      icon: 'code', 
      title: 'Web Development', 
      description: 'Crafting high-performance websites with cutting-edge technology.',
      details: [
        'Custom E-commerce Platforms',
        'Corporate & Business Websites',
        'SaaS & Web Applications',
        'API Development & Integration',
        'CMS Implementation & Customization'
      ] 
    },
    { 
      icon: 'mobile', 
      title: 'Mobile App Development', 
      description: 'Building intuitive and engaging mobile applications for iOS & Android.',
      details: [
        'Native iOS & Android Apps',
        'Cross-Platform Development (React Native, Flutter)',
        'App Prototyping & UX/UI Design',
        'Backend Development for Mobile Apps',
        'App Store Deployment & Maintenance'
      ]
    },
    { 
      icon: 'share', 
      title: 'Social Media Marketing', 
      description: 'Amplifying your brand voice across digital social platforms.',
      details: [
        'Strategy & Campaign Planning',
        'Content Creation & Curation',
        'Community Management',
        'Paid Social Advertising (Meta, LinkedIn, etc.)',
        'Analytics & Performance Reporting'
      ]
    },
    { 
      icon: 'chart', 
      title: 'SEO Optimization', 
      description: 'Driving organic traffic and improving your search engine ranking.',
      details: [
        'Technical SEO Audits',
        'On-Page & Off-Page SEO',
        'Keyword Research & Strategy',
        'Local SEO & Google Business Profile',
        'Content Marketing for SEO'
      ]
    },
    { 
      icon: 'lightbulb', 
      title: 'Branding & Strategy', 
      description: 'Creating powerful brand identities that resonate with your audience.',
      details: [
        'Brand Discovery & Positioning',
        'Logo Design & Visual Identity',
        'Brand Guidelines & Messaging',
        'Marketing Strategy Development',
        'Competitive Analysis'
      ]
    },
    { 
      icon: 'cog', 
      title: 'Automation Solutions', 
      description: 'Streamlining your business processes with custom automations.',
      details: [
        'Business Process Analysis',
        'Custom Workflow Automation',
        'CRM & Marketing Automation',
        'Integration of Third-Party Services',
        'Chatbot & AI-powered Solutions'
      ]
    },
  ]);
}
