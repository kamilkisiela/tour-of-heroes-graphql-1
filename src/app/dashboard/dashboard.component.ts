import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const getHeroesQuery = gql`
  query {
    heroes {
      id
      name
    }
  }
`;

type Response = {
  heroes: Hero[];
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes$ = this.apollo
      .watchQuery<Response>({
        query: getHeroesQuery,
      })
      .valueChanges.pipe(map(({ data }) => data.heroes.slice(1, 5)));
  }
}