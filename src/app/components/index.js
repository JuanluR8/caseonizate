import angular from 'angular'

import { UsersComponent } from './users-component/users.component'
import { AlbumsComponent } from './albums-component/albums.component'
import { PhotosComponent } from './photos-component/photos.component'
import { AboutComponent } from './about-component/about.component'
import AppService from './app.service'

const moments = angular
    .module('moments', [])
    .service('AppService', AppService)
    .component('users', UsersComponent)
    .component('albums', AlbumsComponent)
    .component('photos', PhotosComponent)
    .component('about', AboutComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('users', {
                url: '/',
                component: 'users',
                resolve: {
                    usersList: (AppService) => AppService.getUsers()
                }
            })
            .state('albums', {
                url: '/albums/:userId',
                component: 'albums',
                resolve: {
                    albumsList: (AppService, $stateParams) => AppService.getAlbums($stateParams.userId),
                    username: (AppService, $stateParams) => AppService.getUsername($stateParams.userId)
                }
            })
            .state('photos', {
                url: '/photos/:albumId',
                component: 'photos',
                resolve: {
                    photosList: (AppService, $stateParams) => AppService.getPhotos($stateParams.albumId),
                    albumTitle: (AppService, $stateParams) => AppService.getAlbumTitle($stateParams.albumId)
                }
            })
            .state('about', {
                url: '/about',
                component: 'about',
                resolve: {
                    photosList: (AppService, $stateParams) => AppService.getPhotos($stateParams.albumId)
                }
            })

        $urlRouterProvider.otherwise('/');
    })
    .name

export default moments