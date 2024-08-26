import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-my-control-value-accessor',
  templateUrl: './my-control-value-accessor.component.html',
  styleUrls: ['./my-control-value-accessor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyControlValueAccessorComponent),
      multi: true,
    },
  ]
})
export class MyControlValueAccessorComponent implements ControlValueAccessor {
  value: any;
  isDisabled: boolean = false;
  // Placeholder for the callback which is later provided by the forms API
  private onChange: any = () => { };
  private onTouched: any = () => { };

  // Function to call when the input is changed
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value); // Notify Angular forms of the change
  }

  // Called when the input is blurred
  onInputBlur(): void {
    this.onTouched();
  }

  /**********************************************************************************************************
  To make your component act as a form control, you need to implement the ControlValueAccessor interface. 
  This interface requires you to implement the following methods
  ***********************************************************************************************************/

  /**
   * Allows Angular to set the value programmatically
   * Used by Angular forms API to update the form model
   * @param value 
   */
  writeValue(value: any): void {
    this.value = value;
  }

  /**
   * Registers a function to call when the control value changes
   * @param fn 
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registers a function to call when the control is touched
   * @param fn 
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Allows Angular to disable the input
   * @param isDisabled 
   */
  setDisabledState?(isDisabled: boolean): void {
    // Handle the disabled state here
    this.isDisabled = isDisabled;
  }

}
