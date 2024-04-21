import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="contianer" data-reverse="true">
    <ul class="ul-list scroll_item">
      <li><img src="https://picsum.photos/id/37/367/267" alt="" srcset="" /></li>
      <li><img src="https://picsum.photos/id/55/367/267" alt="" srcset="" /></li>
      <li><img src="https://picsum.photos/id/57/367/267" alt="" srcset="" /></li>
      <li><img src="https://picsum.photos/id/58/367/267" alt="" srcset="" /></li>
      <li><img src="https://picsum.photos/id/55/367/267" alt="" srcset="" /></li>
      <li><img src="https://picsum.photos/id/60/367/267" alt="" srcset="" /></li>
    </ul>
  </div>`,
  styleUrls: ['./scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollComponent {
  ngOnInit() {
    this.excutionAnimate();
  }
  excutionAnimate() {
    const scroller = document.querySelector('.contianer');
    if (scroller) {
      scroller.setAttribute('data-animated', 'true');
      const scrollerInner = scroller.querySelector('.scroll_item');
      const children = Array.from(scrollerInner.children);
      children.forEach((item) => {
        const node: any = item.cloneNode(true);
        node.setAttribute('aria-hidden', 'true');
        scrollerInner.appendChild(node);
      });
    }
  }
}
