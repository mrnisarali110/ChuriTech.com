
import { Directive, ElementRef, OnInit, inject, Input } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true,
})
export class AnimateOnScrollDirective implements OnInit {
  private el = inject(ElementRef);
  @Input('appAnimateOnScroll') animationType: string | undefined;

  ngOnInit() {
    const element = this.el.nativeElement;
    
    // Add the base class for all scroll animations.
    element.classList.add('scroll-animate');

    // Defensively check for the provided animationType. If it's empty, null, or undefined,
    // fall back to the default 'fade-in-up' animation. This prevents the error
    // "Failed to execute 'add' on 'DOMTokenList': The token provided must not be empty."
    if (this.animationType && this.animationType.trim() !== '') {
      element.classList.add(this.animationType);
    } else {
      element.classList.add('fade-in-up');
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          observer.unobserve(element);
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    observer.observe(element);
  }
}
