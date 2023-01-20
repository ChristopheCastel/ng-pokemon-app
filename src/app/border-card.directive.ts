import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {

  //Couleur initial de la carte 
  private initialColor: string = '#f5f5f5';
  //couleur par défaut lorsque je passe ma souris sur une carte
  private defaultColor: string = '#007AFF';
  //Taille par défaut de la carte
  private defaultHeight: number = 180; 

  constructor(private el: ElementRef) { 
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  @Input('pokemonborderCard') borderColor!: string; // avec alias
  // @Input() pokemonBorderCard!: string; // sans alias

  //  Changement de la couleur de bordure de carte quand la souris est sur une carte pokemon
  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  //  Retour à la couleur initial quand la souris quitte la carte pokémon
  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `4px solid ${color}`;
  }

}
