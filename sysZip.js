var cp = require('child_process'),
	exec = cp.exec;

module.exports = function(){

	var buildTargets = function(items){
		if(typeof items == "object"){
			if(items.length>0){
				return " "+items.join(' ');
			}else{
				return false;
			}
		}else if(typeof items == 'string'){
			return items;
		}else{
			return false;
		}
	}

	return {
		create: function(filename,targets,callback){
			var target = buildTargets(targets);
			if(target==false){
				callback('Invalid target list provided');
			}else{
				exec('zip -r '+String(filename)+' '+target,function(error,stdout,stderr){
					if(error){
						callback(stderr);
					}else{
						callback(null);
					}
				});
			}
		},
		extract: function(filename,targetDir,callback){
			if(callback==undefined && typeof targetDir == 'function'){
				callback = targetDir;
				targetDir = '';
			}else{
				targetDir = ' -d '+String(targetDir);
			}
			exec('unzip '+String(filename)+targetDir,function(error,stdout,stderr){
				if(error){
					callback(stderr);
				}else{
					callback(null);
				}
			});
		}
	}
}