import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { MainComponent } from './pages/main/main.component';
import { InventoryManagementComponent } from './pages/inventory-management/inventory-management.component';
import { LabelPrintingPastingComponent } from './pages/label-printing-pasting/label-printing-pasting.component';
import { OrderFulfillmentComponent } from './pages/order-fulfillment/order-fulfillment.component';
import { PackageDesigningComponent } from './pages/package-designing/package-designing.component';
import { PromotionalPackagingComponent } from './pages/promotional-packaging/promotional-packaging.component';
import { SalesReturnsManagementComponent } from './pages/sales-returns-management/sales-returns-management.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { TheRoleOfWarehousingAndLogisticsInECommerceComponent } from './pages/the-role-of-warehousing-and-logistics-in-e-commerce/the-role-of-warehousing-and-logistics-in-e-commerce.component';
import { TheInventoryManagementSpecialistAndTheSystemComponent } from './pages/the-inventory-management-specialist-and-the-system/the-inventory-management-specialist-and-the-system.component';
import { ImportanceOfPromotionalProductPackagesInEcommerceComponent } from './pages/importance-of-promotional-product-packages-in-ecommerce/importance-of-promotional-product-packages-in-ecommerce.component';
import { HiringProfessionalPackagingDesignServicesComponent } from './pages/hiring-professional-packaging-design-services/hiring-professional-packaging-design-services.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: "full" },
  { path: 'contact', component: ContactComponent },
  { path: 'quote', component: ContactComponent },
  { path: 'inventory-management', component: InventoryManagementComponent },
  { path: 'label-printing-pasting', component: LabelPrintingPastingComponent },
  { path: 'order-fulfillment', component: OrderFulfillmentComponent },
  { path: 'package-designing', component: PackageDesigningComponent },
  { path: 'promotional-packaging', component: PromotionalPackagingComponent },
  { path: 'sales-returns-management', component: SalesReturnsManagementComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: 'sitemap.xml', component: SitemapComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'the-role-of-warehousing-and-logistics-in-e-commerce', component: TheRoleOfWarehousingAndLogisticsInECommerceComponent },
  { path: 'the-inventory-management-specialist-and-the-system', component: TheInventoryManagementSpecialistAndTheSystemComponent },
  { path: 'importance-of-promotional-product-packages-in-ecommerce', component: ImportanceOfPromotionalProductPackagesInEcommerceComponent },
  { path: 'hiring-professional-packaging-design-services', component: HiringProfessionalPackagingDesignServicesComponent },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
