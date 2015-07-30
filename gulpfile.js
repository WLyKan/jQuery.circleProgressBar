// 引入插件
var gulp = require('gulp');
var connect = require('gulp-connect');

// 创建任务：web服务器
gulp.task('webserver', function () {
	connect.server({
		port: 8888
	});
});

// 执行任务
gulp.task('default', ['webserver']);
