sap.ui.define([
  'com/UI5Starter/Application/Base/BaseController',
], function (BaseController) {
  'use strict';
  var base;
  return BaseController.extend("com.UI5Starter.Application.Dashboard.controller.Dashboard", {
    onInit: function () {
      base = this;
    },
  })
});