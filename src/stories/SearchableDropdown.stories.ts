import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {SearchableDropdownComponent} from "../app/shared/modules/searchable-dropdown/searchable-dropdown.component";
import {MatOptionModule} from "@angular/material/core";

export default {
  title: 'SearchableDropdownComponent',
  component: SearchableDropdownComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        SearchableDropdownComponent
      ],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
      ],
    })
  ],
} as Meta<SearchableDropdownComponent>;

const Template: Story<SearchableDropdownComponent> = (args: SearchableDropdownComponent) => ({
  component: SearchableDropdownComponent,
  props: args,
});

const TemplateTwo: Story<SearchableDropdownComponent> = (args: SearchableDropdownComponent) => ({
  component: SearchableDropdownComponent,
  props: args,
});


export const StringBasedSearch = Template.bind({});
StringBasedSearch.args = {
  outerLabelText: 'Select a String Value!',
  innerLabelText: 'Search for string',
  items: [1, 2, 3, 4, 5],

  itemSearchType: 'string',

  required: false,
}


export const ObjectBasedSearch = TemplateTwo.bind({});
ObjectBasedSearch.args = {
  outerLabelText: 'Select an Object!',
  innerLabelText: 'Search for object',

  items: [
    {
      "id": 1,
      "name": "item1",
      "newV": "derp1",
    },
    {
      "id": 2,
      "name": "item2",
      "newV": "derp2",
    },
    {
      "id": 3,
      "name": "item3",
      "newV": "derp3",
    }
  ],

  itemSearchType: 'object',
  searchPattern: '${name}: ${id}, ${newV}',

  required: false,
}
