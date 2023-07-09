import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {LinkStorageService} from "../../services/link-storage/link-storage.service";

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  state: "show" | "edit" = "show";
  link: FormControl<string | null> = new FormControl<string>("");
  @Output() linkChange = new EventEmitter<string>;

  constructor(private readonly linkStorageService: LinkStorageService) {
  }

  ngOnInit(): void {
    let linkFromStorage = this.linkStorageService.getLink();
    if (linkFromStorage) {
      this.link.setValue(linkFromStorage);
      this.handleLinkChange();
    }
    else {
      this.state = "edit";
    }
  }

  changeLink() {
    this.linkStorageService.setLink(this.link.getRawValue()!);
    this.handleLinkChange();
  }

  private handleLinkChange() {
    this.linkChange.emit(this.link.getRawValue()!);
    this.state = "show";
  }
}
