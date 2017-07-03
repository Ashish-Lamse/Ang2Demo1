import { Component, OnInit } from '@angular/core';
import {GithubService} from '.././github/github.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[GithubService]
})
export class SearchComponent implements OnInit {
  title = 'Search App!';

  public searchText;
  public searchCount;
  public searchResults;
  constructor(private githubService:GithubService) { }

  ngOnInit() {

  }

  onKeyUp(input){
    this.searchText=input.target.value;
  }

  getUsers(){
    this.githubService.getUser(this.searchText).subscribe(
      res=>{
        this.searchCount=res.total_count;
        this.searchResults=res;
      }
    );
  }

}
