var app = angular.module('App');
app.directive('mobiconFancybox', function($compile, $templateCache) {

  // ng-template에서 가져온 템플릿은 캐싱한다.
  var getTemplate = function(contentHtml) {
    return $templateCache.get(contentHtml);
  };

  return {
    restrict: 'A',
    controller: function($scope) {
      // scope: false (기본) 부모 스코프 객체에 메소드와 속성 설정임.
      $scope.openFancybox = function(templateId, image) {
        $scope.photo = image;

        // HTML 앵귤러 컨텍스 편입을 위한 컴파일과 $scope 주입
        var template = getTemplate(templateId);
        var popOverContent = $compile(template)($scope);

        // 팬시박스 오픈
        $.fancybox.open({
          content: popOverContent,
          type: 'html'
        });
      };
    }
  };
});
