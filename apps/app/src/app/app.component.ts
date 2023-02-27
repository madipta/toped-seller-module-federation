import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  DashboardComponent,
  ISideNavMenu,
  SideNavMenuListComponent
} from '@/ui/core/dashboard';
import { InfoBarComponent } from './components/info-bar/info-bar.component';
import { PrimaryBarComponent } from './components/primary-bar/primary-bar.component';

@Component({
  imports: [
    DashboardComponent,
    InfoBarComponent,
    PrimaryBarComponent,
    RouterOutlet,
    SideNavMenuListComponent
  ],
  selector: 'app-root',
  standalone: true,
  template: `
    <ui-dashboard>
      <section header>
        <app-info-bar></app-info-bar>
        <app-primary-bar></app-primary-bar>
      </section>
      <section sidenav>
        <ui-sidenav-menu-list [config]="config" />
      </section>
      <router-outlet></router-outlet>
    </ui-dashboard>
  `,
})
export class AppComponent {
  config: ISideNavMenu[] = [
    { type: 'Item', caption: 'Home', icon: 'home', link: '' },
    { type: 'Item', caption: 'Chat', icon: 'message', link: 'chat' },
    { type: 'Item', caption: 'Diskusi', icon: 'comments', link: 'discussion' },
    {
      type: 'Folder',
      caption: 'Produk',
      icon: 'box-archive',
      children: [
        { type: 'Item', caption: 'Tambah Produk', link: 'product/create' },
        { type: 'Item', caption: 'Daftar Produk', link: 'product/list' },
      ],
    },
    {
      type: 'Item',
      caption: 'Pesanan',
      icon: 'file-lines',
      link: 'order-list',
    },
    { type: 'Divider' },
    {
      type: 'Folder',
      caption: 'Statistik',
      icon: 'chart-line',
      children: [
        { type: 'Item', caption: 'Wawasan Toko', link: 'statistik/toko' },
        { type: 'Item', caption: 'Wawasan Produk', link: 'statistik/produk' },
        { type: 'Item', caption: 'Wawasan Kunjungan', link: 'statistik/kunjungan' },
        { type: 'Item', caption: 'Wawasan Operasional', link: 'statistik/operasional' },
        { type: 'Item', caption: 'Wawasan Pembeli', link: 'statistik/pembeli' },
      ],
    },
    {
      type: 'Item',
      caption: 'Performa Toko',
      icon: 'gauge-high',
      link: 'performance',
    },
    {
      type: 'Folder',
      caption: 'Iklan & Promosi',
      icon: 'bullhorn',
      children: [
        { type: 'Item', caption: 'Promosi', link: 'advertisement/promosi' },
        { type: 'Item', caption: 'Iklan TopAds', link: 'advertisement/iklan' },
      ],
    },
    {
      type: 'Item',
      caption: 'Dekorasi Toko',
      icon: 'palette',
      link: 'decoration',
    },
    {
      type: 'Folder',
      caption: 'Kata Pembeli',
      icon: 'phone-volume',
      children: [
        { type: 'Item', caption: 'Ulasan', link: 'reviews/ulasan' },
        { type: 'Item', caption: 'Pesanan Dikomplain', link: 'reviews/komplain' },
      ],
    },
    {
      type: 'Folder',
      caption: 'Layanan Tambahan',
      icon: 'circle-plus',
      children: [
        { type: 'Item', caption: 'Kemasan Produk', link: 'other-service/kemasan' },
        { type: 'Item', caption: 'Bayar Tagihan', link: 'other-service/tagihan' },
      ],
    },
    { type: 'Divider' },
    {
      type: 'Item',
      caption: 'Pusat Edukasi Seller',
      icon: 'graduation-cap',
      link: 'educations',
    },
    {
      type: 'Item',
      caption: 'Bantuan Tokopedia Care',
      icon: 'wheelchair',
      link: 'help',
    },
    { type: 'Divider' },
    {
      type: 'Folder',
      caption: 'Pengaturan',
      icon: 'gear',
      children: [
        { type: 'Item', caption: 'Pengaturan Toko', link: 'settings/toko' },
        { type: 'Item', caption: 'Pengaturan Admin', link: 'settings/admin' },
      ],
    },
  ];
}
