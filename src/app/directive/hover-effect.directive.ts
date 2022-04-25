import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {
  textBoldFlag: any;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.mouseHoverEffect("")    
    this.textBoldFlag ?  this.mouseHoverEffect('bold') : this.mouseHoverEffect('underline');      
    
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.mouseHoverEffect('');        
  }

  private mouseHoverEffect(changeEffect: string) {   
    let element = this.el.nativeElement;

    element.classList.contains("tagItem") ? (this.textBoldFlag = true, element.style.fontWeight = changeEffect) : (this.textBoldFlag = false, element.style.textDecoration = changeEffect)      
    
      
    
  }
}
