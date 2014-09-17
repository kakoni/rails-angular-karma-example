rails-angular-karma-example
===========================

Example app using latest rails (4.2beta), minitest, angularjs, guard and karma.
Based on [Angular + Rails with no fuss](http://sebastien.saunier.me/blog/2014/02/04/angular--rails-with-no-fuss.html) +
[Karma on Rails](http://codetunes.com/2014/karma-on-rails/) articles.

**Requirements**

* [node](http://nodejs.org) ([on github](https://github.com/joyent/node))
* [bower](https://github.com/bower/bower) (>= 0.10.0) installed with npm

##Get started

### 1. Install required gems
``` Bash
  bundle install
```
### 2. Install node modules
``` Bash
  npm install
```
### 3. Install bower components
``` Bash
  rake bower:install
```

##Description
* Uses [Angular Rails Templates](https://github.com/pitr/angular-rails-templates) with
  karma-ng-html2js-preprocessor for karma [See info](https://github.com/pitr/angular-rails-templates/issues/30#issuecomment-40282414)
* CSRF Token config [See](/app/assets/javascripts/angular/app.js)
* Uglifier fix[See](http://blog.berylliumwork.com/2013/07/tips-on-rails-4-assets-compression-with.html)

##Running karma

Single run
``` Bash
  rake karma:run
```

Run using file watcher
``` Bash
  rake karma:start
```
