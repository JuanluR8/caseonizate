/**
 * common/common.js
 *
 * Module that contains the common components for the application.
 */


import angular from 'angular'  

import { HeaderComponent } from './header-component/header.component'

const common = angular  
  .module('app.common', [])
  .component('headerCo', HeaderComponent)
  .name

export default common