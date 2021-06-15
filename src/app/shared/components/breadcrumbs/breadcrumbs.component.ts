import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, NavigationEnd, Router, RouterEvent} from '@angular/router';
import {IBreadCrumb} from '../../interfaces/interfaces';
import {filter, pluck, tap} from 'rxjs/operators';

const PATHS_TO_HIDE_BREADCRUMBS = ['/home'];

const isNavigationEnd = (event: RouterEvent) => event instanceof NavigationEnd;
const isComponentHidden = (path: string) =>
  PATHS_TO_HIDE_BREADCRUMBS.includes(path);

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  @HostBinding('hidden')
  private isHidden = false;
  private navigationEndUrl$: Observable<unknown>;
  private subs = new Subscription();
  public breadcrumbs: IBreadCrumb[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
  }

  showOrHideComponent(path: string): void {
    this.isHidden = isComponentHidden(path);
  }

  buildBreadCrumb(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: IBreadCrumb[] = []
  ): IBreadCrumb[] {
    let label =
      route.routeConfig && route.routeConfig.data
        ? route.routeConfig.data.breadcrumb
        : '';
    let path: string =
      route.routeConfig && route.routeConfig.hasOwnProperty('path')
        ? route.routeConfig.path
        : '';
    let aditionalLabel = '';

    const lastRoutePart = path.split('/').pop();
    const isDynamicRoute = lastRoutePart.startsWith(':');
    if (isDynamicRoute && !!route.snapshot) {
      if (path.includes(':msgNumber')) {
        aditionalLabel = 'Сообщение №';
      }

      const paramName = lastRoutePart.split(':')[1];
      path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      label = label ? aditionalLabel + route.snapshot.params[paramName] : label;
    }
    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: IBreadCrumb = {
      label,
      url: nextUrl,
    };

    const newBreadcrumbs: IBreadCrumb[] = breadcrumb.label
      ? [...breadcrumbs, breadcrumb]
      : [...breadcrumbs];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs.filter((b) => !!b.label);
  }

  navigateToPath(path: string): void {
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    this.navigationEndUrl$ = this.router.events.pipe(
      filter(isNavigationEnd),
      pluck('urlAfterRedirects'),
      tap(this.showOrHideComponent.bind(this))
    );
    this.subs.add(
      this.navigationEndUrl$.subscribe(
        () =>
          (this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root))
      )
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
