import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NgxLoadingModule } from 'ngx-loading';
import { ContactComponent } from './pages/contact/contact.component';
import { SwiperModule } from 'swiper/angular';
import { PromotionalPackagingComponent } from './pages/promotional-packaging/promotional-packaging.component';
import { LabelPrintingPastingComponent } from './pages/label-printing-pasting/label-printing-pasting.component';
import { SalesReturnsManagementComponent } from './pages/sales-returns-management/sales-returns-management.component';
import { PackageDesigningComponent } from './pages/package-designing/package-designing.component';
import { OrderFulfillmentComponent } from './pages/order-fulfillment/order-fulfillment.component';
import { InventoryManagementComponent } from './pages/inventory-management/inventory-management.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { TheRoleOfWarehousingAndLogisticsInECommerceComponent } from './pages/the-role-of-warehousing-and-logistics-in-e-commerce/the-role-of-warehousing-and-logistics-in-e-commerce.component';
import { TheInventoryManagementSpecialistAndTheSystemComponent } from './pages/the-inventory-management-specialist-and-the-system/the-inventory-management-specialist-and-the-system.component';
import { ImportanceOfPromotionalProductPackagesInEcommerceComponent } from './pages/importance-of-promotional-product-packages-in-ecommerce/importance-of-promotional-product-packages-in-ecommerce.component';
import { HiringProfessionalPackagingDesignServicesComponent } from './pages/hiring-professional-packaging-design-services/hiring-professional-packaging-design-services.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ContactComponent,
    PromotionalPackagingComponent,
    LabelPrintingPastingComponent,
    SalesReturnsManagementComponent,
    PackageDesigningComponent,
    OrderFulfillmentComponent,
    InventoryManagementComponent,
    SitemapComponent,
    BlogsComponent,
    TheRoleOfWarehousingAndLogisticsInECommerceComponent,
    TheInventoryManagementSpecialistAndTheSystemComponent,
    ImportanceOfPromotionalProductPackagesInEcommerceComponent,
    HiringProfessionalPackagingDesignServicesComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SwiperModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    NgxLoadingModule.forRoot({}),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
