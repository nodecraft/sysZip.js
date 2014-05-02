Installation
=============
    npm install syszip

What does it do?
=============

Simple wrapper for performing command line zip and unzip. Useful for extra large zip archives you don't want loaded into node ram. In order for this to work the calling program MUST be running as a user with permissions to the use zip/unzip commands in command line. This NPM module is still in early development and has only been tested on the listed operating systems:

 - CentOS 6

Coding Examples
=============
```javascript
    var sysZip = require('sysZip')();

    // create zip
    sysZip.create('archive.zip',['file.jpg','path/dir/name'],'/path/to/cwd',function(err){
    	if(err){
    		console.log('ERROR',err);
    	}else{
    		console.log('zip created');
    	}
    });

    // unzip
    sysZip.extract('archive.zip','/path/to/extract/to',function(err){
        if(err){
            console.log('ERROR',err);
        }else{
            console.log('zip created');
        }
    });
```
