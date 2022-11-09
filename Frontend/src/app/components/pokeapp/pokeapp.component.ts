import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../../services/load-scripts.service';

@Component({
  selector: 'app-pokeapp',
  templateUrl: './pokeapp.component.html',
  styleUrls: ['./pokeapp.component.css'],
})
export class PokeappComponent implements OnInit {
  constructor(private ldScript: LoadScriptsService) {
    ldScript.loadScript();
  }

  ngOnInit(): void {}
}
