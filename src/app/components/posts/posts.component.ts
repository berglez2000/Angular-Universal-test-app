import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  isBrowser: boolean | undefined = undefined;
  isServer: boolean | undefined = undefined;

  posts: any;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private postsService: PostsService,
    private stateService: StateService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.isServer = isPlatformServer(platformId);
  }

  ngOnInit(): void {
    if (this.isServer) {
      this.postsService.getPosts().subscribe((posts: any) => {
        this.posts = posts.pages;
        this.stateService.saveState('posts', this.posts);
      });
    }

    if (this.isBrowser) {
      this.posts = this.stateService.hasState('posts')
        ? this.stateService.getState('posts')
        : this.stateService.getState('posts');
    }
  }
}
