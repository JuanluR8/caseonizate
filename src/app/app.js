
import '../style/app.scss'
import angular from 'angular'  
import uiRouter from 'angular-ui-router'
import common from './common/common'
import components from './components/components'
import { AppComponent } from './app.component'

const root = angular  
  .module('angularApp', [
    uiRouter, 
    common,
    components
  ])
  .component('app', AppComponent)

export default root