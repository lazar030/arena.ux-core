import { Injectable } from '@angular/core';
import { Theme, dusk, dawn } from './theme';

@Injectable({
  providedIn: 'root'
})
export class ArenaUXService {
  private active: Theme = dusk;
  private availableThemes: Theme[] = [dawn, dusk];

  constructor() { }

  getAvailableTheme(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  isDuskTheme(): boolean {
    return this.active.name === dusk.name;
  }

  setDawnTheme(): void {
    this.setActiveTheme(dawn);
  }

  setDuskTheme(): void {
    this.setActiveTheme(dusk);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
