import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Hero} from "app/object/hero";
import {HeroService} from "app/services/hero.service";

@Component({
    selector: 'my-heroes',
    templateUrl: 'layouts/heroes.component.html',
    styleUrls: ['assets/heroes.component.css']
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private router: Router,
                private heroService: HeroService) {
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
