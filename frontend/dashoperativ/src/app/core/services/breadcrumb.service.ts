import { inject, Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  readonly breadcrumbs: Signal<Breadcrumb[]> = toSignal(
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => this.buildBreadcrumbs(this.activatedRoute.root))
    ),
    { initialValue: [] }
  );

  private buildBreadcrumbs(
    route: ActivatedRoute,
    url = '',
    crumbs: Breadcrumb[] = []
  ): Breadcrumb[] {
    for (const child of route.children) {
      const segment = child.snapshot.url.map(s => s.path).join('/');
      const fullUrl = segment ? `${url}/${segment}` : url;
      const label = child.snapshot.data['breadcrumb'];

      if (label) {
        crumbs.push({ label, url: fullUrl });
      }

      this.buildBreadcrumbs(child, fullUrl, crumbs);
    }
    return crumbs;
  }
}