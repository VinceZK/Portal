import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { Node, ForceDirectedGraph } from '../models';
import { D3Service } from '../d3.service';

@Directive({
  selector: '[appDraggableNode]'
})
export class DraggableDirective implements OnInit {
  @Input() appDraggableNode: Node;
  @Input() appDraggableInGraph: ForceDirectedGraph;

  constructor(private d3Service: D3Service, private _element: ElementRef) { }

  ngOnInit() {
    this.d3Service.applyDraggableBehaviour(this._element.nativeElement, this.appDraggableNode, this.appDraggableInGraph);
  }
}
