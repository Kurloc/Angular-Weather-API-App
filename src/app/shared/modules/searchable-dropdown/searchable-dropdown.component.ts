import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-searchable-dropdown',
  templateUrl: './searchable-dropdown.component.html',
  styleUrls: ['./searchable-dropdown.component.css']
})
export class SearchableDropdownComponent implements OnInit {
  @Input() appearance: 'legacy' | 'standard' | 'fill' | 'outline' = 'outline';
  @Input() outerLabelText = 'Outer Label Text';
  @Input() innerLabelText = 'Inner Label Text';
  @Input() noOptionsInstruction: string = '';

  public displayList: any[] = [];
  @Input() items: any[] | null = [];
  @Input() itemSearchType: 'string' | 'object' = 'string';

  // Pattern Matching similar to C#'s String Interpolation
  @Input() searchPattern = 'Id: ${id} Name: ${name}';
  @Input() widthClass = '';
  @Input() debug = false;
  @Input() required = false;
  @Input() errorMessages: { [name: string]: string } = {};

  @Input() selectedItem: any = undefined;
  @Output() selectedItemEmitter: EventEmitter<any> = new EventEmitter<string>();

  public itemSearchString: BehaviorSubject<string> = new BehaviorSubject<string>('');
  @Input() clearSearchAfterItemUpdate: boolean = false;
  @Output() itemSearchStringEmitter = new EventEmitter<string>()

  constructor() {
    this.itemSearchString.subscribe(() => {
      this.applyFilter();
    });
  }

  ngOnChanges(_: SimpleChanges): void {
    if (this.clearSearchAfterItemUpdate) {
      this.itemSearchString.next('')
    }

    this.applyFilter();
  }

  ngOnInit(): void {
    this.displayList = this.items ?? [];

    this.itemSearchString.subscribe(() => {
      this.applyFilter();
    });
  }

  public stringDisplay(item: string): string {
    return item.toString()?.toLowerCase();
  }

  public emitSelectedItem() {
    this.selectedItemEmitter.emit(this.selectedItem);
  }

  public getObjectItem(i: any): string {
    return this.filterForObjectItem(i).toString().toLowerCase();
  }

  public filterForObjectItem(i: any) {
    let returnString = this.searchPattern;
    const keys = this.findAllKeys();
    if (keys?.length === 0) return returnString;

    for (const key of keys) {
      const keyPattern = '${' + key + '}';
      returnString = returnString?.replace(keyPattern, i[key]?.toString());
    }
    return returnString;
  }

  public updateItemSearchString($event: any) {
    this.itemSearchString.next($event);
    this.itemSearchStringEmitter.next($event);
  }

  private itemSearchStringValue(): string {
    return this.itemSearchString.getValue().toString().toLowerCase();
  };

  private applyFilter() {
    if (!this.items)
      return;

    const myNewList = [];
    // Loop through list and get good values
    for (const i of this.items) {
      if (this.itemSearchType === 'object') {
        if (this.getObjectItem(i)?.indexOf(this.itemSearchStringValue()) > -1)
          myNewList.push(i);
      } else if (this.stringDisplay(i)?.indexOf(this.itemSearchStringValue()) > -1) {
        myNewList.push(i);
      }
    }
    // Stuff to do after we get the results from the search
    // my stuff here:
    this.displayList = myNewList;
  }

  private findAllKeys() {
    const items: RegExpMatchArray | null = this.searchPattern.match(/\${\w*\d*\s*}/g);
    const finalItems = [];

    if (items === null) return [];
    for (const item of items) {
      finalItems.push(item.toString().substring(2, item.toString().length - 1));
    }
    return finalItems;
  }
}
