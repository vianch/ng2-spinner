import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import {Observable} from "rxjs";

@Injectable()
export class SpinnerService implements ISpinnerService {
    private spinnerSubject = new Subject<SpinnerState>();

    constructor() { }

    public getSpinnerState(): Observable<SpinnerState> {
        return this.spinnerSubject.asObservable();
    }

    public show(): void {
        this.spinnerSubject.next({show: true});
    }

    public hide(): void {
        this.spinnerSubject.next({show: false});
    }

}
