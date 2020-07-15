import { Component, OnInit, Input } from '@angular/core';
import { ArenaUXService } from '../arena-ux.service';

@Component({
  selector: 'aux-layout',
  templateUrl: './aux-layout.component.html',
  styleUrls: ['./aux-layout.component.scss']
})
export class AuxLayoutComponent implements OnInit {
  @Input() theme = 'dawn';

  constructor(
    private arenaUxService: ArenaUXService,
  ) { }

  ngOnInit() {
    if (this.theme === 'dawn') {
      this.arenaUxService.setDawnTheme();
    } else {
      this.arenaUxService.setDuskTheme();
    }
  }

}
