import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-promotional-packaging',
  templateUrl: './promotional-packaging.component.html',
  styleUrls: ['./promotional-packaging.component.css']
})
export class PromotionalPackagingComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title,
    private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { 
      // For Canonical
      this.setCanonicalURL('https://aimwarehousing.com/promotional-packaging');
      // Set the title for this component (page)
      this.titleService.setTitle('Great Promotional Product Packages - Aim Warehousing');

      // For Meta Tag
      this.metaService.addTags([
        { name: 'keywords', content: 'promotional product packages, promotional packaging' },
        { name: 'title', content: 'Great Promotional Product Packages - Aim Warehousing' },
        { name: 'description', content: 'Uplift your marketing strategy with our high-end promotional packaging solutions. Contact us to boost brand visibility and engage customers.' }
      ]); 
    }
    setCanonicalURL(url: string) {
      const link: HTMLLinkElement = this.renderer.createElement('link');
      this.renderer.setAttribute(link, 'rel', 'canonical');
      this.renderer.setAttribute(link, 'href', url);
      this.renderer.appendChild(this.document.head, link);
    }

  ngOnInit(): void {
  }

}
