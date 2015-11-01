# chapter02-etc
Chapter 2장의 여러가지 샘플 소스들

## Page76 fancybox
  - bower install -save fancybox
  - index.html 안에 script 태그로 템플릿 설정
  - controllers/main.js안에 $scope.photo 설정
  - directives/fancybox.js 디렉티브 생성
  - 디렉티브에서 angular.module('App', []) 를 angular.module('App') 로 바꿔준다.
  - 추가 작업 fancybox의 bower.json이 없어서 index.html 에 추가를 못함.
  ```json
   bower_components/fancybox/bower.json 생성하고 내용 copy

   {
       "name": "fancybox",
       "main": [
           "source/jquery.fancybox.css",
           "source/jquery.fancybox.js",
           "source/jquery.fancybox.pack.js"
       ],
       "ignore": [
           "**/.*",
           "fancybox.jquery.json",
           "demo"
       ],
       "dependencies": {
           "jquery": ">=1.10"
       }
   }

  ```
   - grunt serve 명령으로 확인한다.

## Page73~74 Alert Template Cache
