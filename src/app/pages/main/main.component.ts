import { ViewportScroller } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import * as AOS from 'aos';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

declare var $: any;

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
} from "swiper/core";

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    public vps: ViewportScroller, public apiService: ApiService, public notificationsService: NotificationsService,
    private metaService: Meta, private titleService: Title,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
    ) { 

      this.setCanonicalURL('https://aimwarehousing.com/');

        // Set the title for this component (page)
        this.titleService.setTitle('Warehousing and Logistics Services - Aim Warehousing');

        this.metaService.addTags([
          { name: 'keywords', content: 'warehousing and logistics, affordable warehousing services, warehouse storage facilities, warehousing service, inventory management specialist, Aim Warehousing, fnsku labels, , repacking services, Shrink wrap services' },
          { name: 'title', content: 'Warehousing and Logistics Services - Aim Warehousing' },
          { name: 'keywords', content: 'With the best and most affordable warehousing services from Aim Warehousing, elevate your warehouse operational efficiency. Get in touch now' },
        ]);
    }
    setCanonicalURL(url: string) {
      const link: HTMLLinkElement = this.renderer.createElement('link');
      this.renderer.setAttribute(link, 'rel', 'canonical');
      this.renderer.setAttribute(link, 'href', url);
      this.renderer.appendChild(this.document.head, link);
    }
  userDetails: any = {};
  file: File[] = [];
  storageData: any = [];
  slideData: any = [];
  ServiceData: any = [];
  PalletData: any = [];
  loading: boolean = true;
  baseUrl = environment.baseUrlForImg;
  ngOnInit(): void {
    AOS.init();
    this.getPriceAndServices();
    this.getSlidesData();
    this.getStorageData();
    setTimeout(() => {
      this.loading = false;
    }, 1200);
  }

  scrollFun(val: any) {
    this.vps.scrollToAnchor(val);
  }

  fileChange(event: any) {
    this.file = event.target.files;
  }

  onUpload() {
    console.log(this.userDetails);
    console.log(this.file);
    if (!this.apiService.isEmpty(this.userDetails.full_name) && !this.apiService.isEmpty(this.userDetails.ph_number) && !this.apiService.isEmpty(this.userDetails.email) && !this.apiService.isEmpty(this.userDetails.id_number) && !this.apiService.isEmpty(this.userDetails.experience)) {
      if (this.apiService.validateEmail(this.userDetails.email)) {
        if (this.file.length) {
          const formData = new FormData();
          formData.append('full_name', this.userDetails.full_name);
          formData.append('ph_number', this.userDetails.ph_number);
          formData.append('email', this.userDetails.email);
          formData.append('id_number', this.userDetails.id_number);
          formData.append('experience', this.userDetails.experience);
          formData.append('question', this.userDetails.question);
          formData.append("file_doc", this.file[0]);
          this.apiService.sendEmail(formData).subscribe((res: any) => {
            if(res.status){
              this.notificationsService.success("Success!", "Data has been send successfully.");
              this.userDetails = {};
              this.file = [];
            } else this.notificationsService.error('Error!', 'There is somthing going on wrong, please try again later.');
          })
        } else this.notificationsService.error('Error!', 'Please attach your file.');
      } else this.notificationsService.error('Error!', 'Invalid email.');
    } else this.notificationsService.error('Error!', 'Name, email, phone, id, experience and file are required.');
  }

  getPriceAndServices() {
    this.apiService.getPriceAndServices().subscribe((res: any) => {
      this.ServiceData = res.data;
    })
  }

  getSlidesData() {
    this.apiService.getSlidesData().subscribe((res: any) => {
      console.log(res);
      this.slideData = res.data;
    })
  }

  getStorageData() {
    this.apiService.getStorageData().subscribe((res: any) => {
      this.storageData = res.data;
    })
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}