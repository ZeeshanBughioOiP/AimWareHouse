import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-package-designing',
  templateUrl: './package-designing.component.html',
  styleUrls: ['./package-designing.component.css']
})
export class PackageDesigningComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title,
    private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { 
      // For Canonical
      this.setCanonicalURL('https://aimwarehousing.com/package-designing');
      // Set the title for this component (page)
      this.titleService.setTitle('Creative Packaging Design Services - Aim Warehousing');

      // For Meta Tag
      this.metaService.addTags([
        { name: 'keywords', content: 'packaging design services' },
        { name: 'title', content: 'Creative Packaging Design Services - Aim Warehousing' },
        { name: 'description', content: 'Increase the appealing qualities of your products by using our skilled packaging design services. We design striking packaging that strengthens your brand.' }
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
