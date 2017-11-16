import { Component, Output, EventEmitter } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { BookService } from './book.service'
import { AlertService } from '../alert/alert.service'
import { ToastOptions, ToastyService } from 'ng2-toasty'
import { AppGlobals } from '../global/appGlobals'

@Component({
    selector: 'add-shelf',
    templateUrl: 'app/others/addNewShelf.component.html'
})

export class AddNewShelfComponent {
    categories: any[];    
    shelfCapacity: number;
    isSubmitted: boolean = false;

    constructor(private _bookService: BookService, private _router: Router, private _route: ActivatedRoute,
        private _toastyService: ToastyService, private _appGlobal: AppGlobals) { }

    @Output()
    newShelfAdded: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    cancelAddShelf: EventEmitter<string> = new EventEmitter<string>();

    ngOnInit() {
        this._bookService.getCategories().subscribe(result => this.categories = result);
    }    

    addNewShelf(category: number) {
        if (category == 0 || this.shelfCapacity === undefined)
        {
            this.isSubmitted = true;
            return;
        }
        this._bookService.addNewShelf(category, this.shelfCapacity).subscribe((result) => {
            this.newShelfAdded.emit('success');            
            this._toastyService.success(this._appGlobal.getSuccessToast("Shelf added successfully!"));        
            //this._toastyService.success('Shelf added successfully!');
            //window.location.reload();            
            //this._router.navigate(["home/about/shelfs"]);           
        },
            (error) => {
                this._toastyService.error(this._appGlobal.getFailureToast());
                //this._toastyService.error('Something went wrong. Please try again later!');
                //alert('Something went wrong! Please try again later!');
            });
    }

    cancel() {
        this.cancelAddShelf.emit('cancel');
    }
}

