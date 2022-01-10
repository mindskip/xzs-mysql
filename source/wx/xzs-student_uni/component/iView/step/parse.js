var allStatus = ['wait','process','finish','error'];
module.exports = {
    noIco : function( status,current,index,icon ){
        var aindex = allStatus.indexOf(status);
        var noIcon = true;
        if( index < current || icon !== '' ){
            noIcon = false;
        }
        return noIcon;
    },
   
	getIcoClass : function( status,ico ){
        var classa = '';
        if( status === 'error' ){
            classa = 'close';
        }else{
            classa = 'right';
        }
        if( ico !== '' ){
            classa = ico;
        }
        return classa;
    }, 
	
	getItemStyle : function(len,direction){
        if( direction === 'horizontal' ){
            return 'width :'+100/len + '%';
        }else{
            return 'width : 100%;';
        }
    },
    getClass : function( status,current,index ) {
        //wait、process、finish、error
        var startClass = 'i-step-'
        var classes = '';
        var cindex = allStatus.indexOf( status );
        if( cindex !== -1 ){
            classes = startClass + allStatus[cindex];
        }
        if( index < current ){
            classes = startClass + 'finish';
        }else if( index === current ){
            classes = startClass + 'process';
        }
        return classes;
    }
}