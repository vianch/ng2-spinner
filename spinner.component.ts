import { Component, OnInit, OnDestroy } from "@angular/core";
import {Subscription} from "rxjs";

import {SpinnerService} from "./spinner.service";

@Component({
    selector: "ng2-spinner",
    template: `
        <div class="loader"  [class.spinner-hidden]="!visible">
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
        </div>
    `,
})
export class SpinnerComponent implements OnInit, OnDestroy {
    public visible: boolean;
    private spinnerStateChanged: Subscription;

    constructor(private spinnerService: SpinnerService) { }

    public ngOnInit(): void {
        this.registerSubscribers();
    }

    public  ngOnDestroy(): void {
        this.destroySubscribers();
    }

    private registerSubscribers(): void {
        this.spinnerStateChanged = this.spinnerService.getSpinnerState()
            .subscribe((state: SpinnerState) => {
                this.visible = state.show;
                console.log(this.visible);
            });
    }

    private destroySubscribers(): void {
        this.spinnerStateChanged.unsubscribe();
    }
}