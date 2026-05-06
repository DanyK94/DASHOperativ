import { Component, inject } from '@angular/core';
import { BreadcrumbService } from '@core/services/breadcrumb.service';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-top-bar',
  imports: [RouterLink],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss',
})
export class TopBar {
  protected breadcrumbService = inject(BreadcrumbService);

}
