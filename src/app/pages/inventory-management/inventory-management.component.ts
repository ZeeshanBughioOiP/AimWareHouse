import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.css']
})
export class InventoryManagementComponent implements OnInit {

 
  constructor(private metaService: Meta, private titleService: Title,
    private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { 
      // For Canonical
      this.setCanonicalURL('https://aimwarehousing.com/inventory-management');
      // Set the title for this component (page)
      this.titleService.setTitle('Qualified Inventory Management Specialist - Aim Warehousing');

      // For Meta Tag
      this.metaService.addTags([
        { name: 'keywords', content: 'inventory management specialist' },
        { name: 'title', content: 'Qualified Inventory Management Specialist - Aim Warehousing'},
        { name: 'description', content: 'Get ready to improve your inventory management and logistics with the help of our inventory management specialist. contact us for efficient solutions.' }
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
