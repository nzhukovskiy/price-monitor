import {Component, Input} from '@angular/core';
import {SellerType} from "../../../types/seller.type";

@Component({
  selector: 'app-seller-logo',
  templateUrl: './seller-logo.component.html',
  styleUrls: ['./seller-logo.component.scss']
})
export class SellerLogoComponent {
  @Input() seller?: SellerType;
}
