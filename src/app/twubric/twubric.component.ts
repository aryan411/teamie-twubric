import { Component, OnInit } from '@angular/core';
import twurbicData from '../../assets/twurbicData.json';
import moment from 'moment';

@Component({
  selector: 'app-twubric',
  templateUrl: './twubric.component.html',
  styleUrls: ['./twubric.component.css'],
})
export class TwubricComponent implements OnInit {
  frDate: string = '';
  tDate: string = '';
  sortByList: any;
  sortBy: string;
  obj: Array<any>;
  objView: Array<any>;
  constructor() {
    this.sortByList = Sortby;
    this.sortBy = '';
    this.objView = this.obj = twurbicData;
  }

  ngOnInit(): void {}

  sortingList() {
    if (this.sortBy === this.sortByList.twubricScore)
      this.objView = this.obj.sort((a, b) =>
        a.twubric['total'] >= b.twubric['total'] ? 1 : -1
      );
    else if (this.sortBy === this.sortByList.friends)
      this.objView = this.obj.sort((a, b) =>
        a.twubric['friends'] >= b.twubric['friends'] ? 1 : -1
      );
    else if (this.sortBy === this.sortByList.influence)
      this.objView = this.obj.sort((a, b) =>
        a.twubric['influence'] >= b.twubric['influence'] ? 1 : -1
      );
    else if (this.sortBy === this.sortByList.chirpiness)
      this.objView = this.obj.sort((a, b) =>
        a.twubric['chirpiness'] >= b.twubric['chirpiness'] ? 1 : -1
      );
  }
  filteDate() {
    if (this.frDate && this.tDate) {
      let mFrDate = moment(this.frDate).format('dd/mm/yyy');
      let mTDate = moment(this.frDate).format('dd/mm/yyy');

      this.objView = this.obj.filter((obj1) => {
        moment(moment(obj1.join_dat).format('dd/mm/yyyy')).isSame(mFrDate) ||
          moment(moment(obj1.join_dat).format('dd/mm/yyyy')).isSame(mTDate) ||
          (moment(moment(obj1.join_dat).format('dd/mm/yyyy')).isBefore(
            mTDate
          ) &&
            moment(moment(obj1.join_dat).format('dd/mm/yyyy')).isAfter(
              mFrDate
            ));
      });
    }
  }

  removeData(id: number) {
    this.objView = this.objView.filter((ob) => ob.uid !== id);
  }
}

enum Sortby {
  twubricScore = 'ts',
  friends = 'f',
  influence = 'i',
  chirpiness = 'c',
}
