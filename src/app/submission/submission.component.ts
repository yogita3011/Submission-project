import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

enum Status {
  LOW_RISK = 'Low Risk',
  UNCOMPLETE = 'Uncomplete',
  UNASSIGNED = 'Unassigned',
}

export interface ISubmissionForm {
  task: string;
  status: Status;
  from: string;
  to: string;
  address: string;
  date: Date;
}

export interface ISelectList {
  name: Status | string;
}


@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {
  public currentStatus: Status | undefined;
  public submissionData$: Observable<Array<ISubmissionForm>> = of([]);
  public status$: Observable<Array<ISelectList>> = of([]);
  public searchText!: string;
  @Input() result: Observable<Array<ISubmissionForm>> = of([]);
  searchDate: Date = new Date();
  constructor(httpClient: HttpClient) {

    this.status$ = of([{
      name: Status.LOW_RISK
    }, {
      name: Status.UNASSIGNED
    }, {
      name: Status.UNCOMPLETE
    }]);
  }

  ngOnInit(): void {
    this.submissionData$ = of(
      [{
        task: 'WorkFlow Section One',
        status: Status.LOW_RISK,
        from: 'zendu@zendu.com',
        to: 'zendu@zendu.com',
        address: 'Afghanistan',
        date: new Date()
      },
      {
        task: 'WorkFlow Section Two',
        status: Status.LOW_RISK,
        from: 'zendu@zendu.com',
        to: 'zendu@zendu.com',
        address: 'Bahamas',
        date: new Date()
      },
      {
        task: 'WorkFlow Section Three',
        status: Status.UNCOMPLETE,
        from: 'zendu@zendu.com',
        to: 'zendu@zendu.com',
        address: 'Canada',
        date: new Date()
      }, {
        task: 'WorkFlow Section Four',
        status: Status.UNCOMPLETE,
        from: 'zendu@zendu.com',
        to: 'zendu@zendu.com',
        address: 'Denmark',
        date: new Date()
      },
      {
        task: 'WorkFlow Section Five',
        status: Status.UNCOMPLETE,
        from: 'zendu@zendu.com',
        to: 'zendu@zendu.com',
        address: 'Greece',
        date: new Date()
      }, {
        task: 'WorkFlow Section Six',
        status: Status.UNASSIGNED,
        from: 'zendu@zendu.com',
        to: 'zendu@zendu.com',
        address: 'Hungary',
        date: new Date()
      }, {
        task: 'WorkFlow Section Seven',
        status: Status.UNASSIGNED,
        from: 'zendu@zendu.com',
        to: 'zendu@zendu.com',
        address: 'India',
        date: new Date()
      }, {
        task: 'WorkFlow Section Eight',
        status: Status.UNASSIGNED,
        from: 'zendu@zendu.com',
        to: 'zendu@zendu.com',
        address: 'Japan',
        date: new Date()
      }, {
        task: 'WorkFlow Section Nine',
        status: Status.LOW_RISK,
        from: 'zendu@zendu.com',
        to: 'zendu@zendu.com',
        address: 'Mexico',
        date: new Date()
      }, {
        task: 'WorkFlow Section Ten',
        status: Status.LOW_RISK,
        from: 'zendu@zendu.com',
        to: 'zendu@zendu.com',
        address: 'New Zealand',
        date: new Date()
      }, {
        task: 'WorkFlow Section Ten',
        status: Status.LOW_RISK,
        from: 'abc@gmail.com',
        to: 'abc@gamil.com',
        address: 'United States of America',
        date: new Date()
      }
      ]
    );
  }

  filterData(): void {
    if (this.searchText?.length > 3) {
      this.submissionData$ = this.submissionData$.pipe(map(projects => {
        return projects.filter(proj => proj.task.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
          proj.status.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
          proj.from.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
          proj.to.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
          proj.address.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()));
      }));
    } else {
      this.ngOnInit();
    }
  }

  public filterDataFromStatus(event: any): void {
    if (event.target.value?.length > 3) {
      this.submissionData$ = this.submissionData$.pipe(map(projects => {
        return projects.filter(proj =>
          proj.status.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
        );
      }));
    } else {
      this.ngOnInit();
    }
  }

  public filterDataFrom(event: any): void  {
    if (event.target.value?.length > 3) {
      this.submissionData$ = this.submissionData$.pipe(map(projects => {
        return projects.filter(proj =>
          proj.from.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
        );
      }));
    } else {
      this.ngOnInit();
    }
  }

}
