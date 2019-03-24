/**
 * components/components.js
 *
 * Module that contains the specific components for the application.
 */

import angular from 'angular'

import moments from './index';

const components = angular
  .module('app.components', [moments])
  .name

export default components