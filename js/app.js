'use strict';
var App;

App = angular.module('app', ['ngCookies', 'ngResource', 'ngRoute', 'app.controllers', 'app.directives', 'app.filters', 'app.services']);
;'use strict';
angular.module('app.controllers', []).controller('AppCtrl', [
  '$scope', function($scope) {
    var answerSpeed, c, ctx, ctxMask, ctxNo, drawAnswer, drawingAnswer, height, noise, radius, width;
    $scope.onePlusOne = 2;
    $scope.pageTitle = "Do You give a Fuck?";
    c = document.getElementById("phoneCanvas");
    ctxNo = document.getElementById("noCanvas").getContext("2d");
    ctxMask = document.getElementById("maskCanvas").getContext("2d");
    ctx = c.getContext("2d");
    width = 121;
    height = 172;
    answerSpeed = 0.02;
    radius = 10;
    drawingAnswer = false;
    $scope.clicked = function() {
      if (!drawingAnswer) {
        return drawAnswer();
      } else {
        return drawingAnswer = false;
      }
    };
    drawAnswer = function() {
      ctxMask.clearRect(0, 0, width, height);
      return drawingAnswer = true;
    };
    noise = function() {
      var ctxMaskPixelData, ctxNoPixelData, x, y, _i, _j, _k, _l, _ref, _ref1;
      ctxNo.fillStyle = "white";
      ctxNo.fillRect(0, 0, width, height);
      ctxNo.font = "103px BebasNeueRegular";
      ctxNo.fillStyle = "#606060";
      ctxNo.fillText("No!", 10, 120);
      ctxNoPixelData = ctxNo.getImageData(0, 0, width, height).data;
      for (x = _i = 0, _ref = width - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; x = 0 <= _ref ? ++_i : --_i) {
        for (y = _j = 0, _ref1 = height - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; y = 0 <= _ref1 ? ++_j : --_j) {
          if (Math.random() < answerSpeed) {
            ctxMask.fillStyle = "white";
            ctxMask.fillRect(x, y, 1, 1);
          }
        }
      }
      ctxMaskPixelData = ctxMask.getImageData(0, 0, width, height).data;
      for (x = _k = 0; _k <= 120; x = ++_k) {
        for (y = _l = 0; _l <= 171; y = ++_l) {
          if (Math.random() < 0.5) {
            ctx.fillStyle = "#606060";
          } else {
            ctx.fillStyle = "white";
          }
          if (drawingAnswer && ctxMaskPixelData[(y * 121 + x) * 4] === 255 && ctxNoPixelData[(y * 121 + x) * 4] !== 255) {
            ctx.fillStyle = "rgb(" + ctxNoPixelData[(y * 121 + x) * 4] + "," + ctxNoPixelData[(y * 121 + x) * 4 + 1] + "," + ctxNoPixelData[(y * 121 + x) * 4 + 2] + ")";
          }
          ctx.fillRect(x, y, 1, 1);
        }
      }
      if (!drawingAnswer) {
        ctx.fillStyle = "#000000";
        ctx.font = "90px BebasNeueRegular";
        ctx.fillText("DO I", 10, 70);
        ctx.font = "76px BebasNeueRegular";
        ctx.fillText("GIVE", 10, 125);
        ctx.font = "42px BebasNeueRegular";
        ctx.fillText("A FUCK?", 10, 159);
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.strokeStyle = 'rgba(255,255,255,' + ((20 - radius) / 10) + ')';
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, 13, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, radius, 0, 2 * Math.PI, false);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
        radius += 0.5;
        if (radius > 20) {
          radius = 10;
        }
      }
      return setTimeout(noise, 10);
    };
    return noise();
  }
]);
;angular.module('app.directives', []);
;angular.module('app.filters', []);
;angular.module('app.services', []);
;
//# sourceMappingURL=app.js.map