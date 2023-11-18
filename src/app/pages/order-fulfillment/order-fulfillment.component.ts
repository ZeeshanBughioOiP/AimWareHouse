import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-order-fulfillment',
  templateUrl: './order-fulfillment.component.html',
  styleUrls: ['./order-fulfillment.component.css']
})
export class OrderFulfillmentComponent implements OnInit {


  constructor(private metaService: Meta, private titleService: Title,
    private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { 
      // For Canonical
      this.setCanonicalURL('https://aimwarehousing.com/order-fulfillment');
      // Set the title for this component (page)
      this.titleService.setTitle('Efficient Order Fulfillment Services - Aim Warehousing');

      // For Meta Tag
      this.metaService.addTags([
        { name: 'keywords', content: 'order fulfillment services' },
        { name: 'title', content: 'Efficient Order Fulfillment Services - Aim Warehousing' },
        { name: 'description', content: 'Looking to streamline your business? Our top-tier order fulfillment services have your back. We provide timely, accurate, cost-effective solutions.' }
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
