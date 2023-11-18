import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title,
    private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { 
      // For Canonical
      this.setCanonicalURL('https://aimwarehousing.com/blogs');
      // Set the title for this component (page)
      this.titleService.setTitle('Blogs - Aim Warehousing');

      // For Meta Tag
      this.metaService.addTags([
        { name: 'keywords', content: 'blogs' },
        { name: 'title', content: 'Blogs - Aim Warehousing' },
        { name: 'description', content: '' }
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
