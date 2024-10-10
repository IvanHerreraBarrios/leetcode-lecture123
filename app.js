
var isInterleave = function(s1, s2, s3){
    if (s1.length + s2.length !== s3.length) return false; 
    if (s1.length === 0 && s2.length === 0 && s3.length === 0) return true;
    if (s3[0] !== s1[0] && s3[0] !== s2[0]) return false;

    if(s3[0] === s1[0]) {
        if(isInterleave(s1.substring(1), s2, s3.substring(1))){
            return true;
        }
    }

    if(s3[0] === s2[0]) {
        if(isInterleave(s1, s2.substring(1), s3.substring(1))){
            return true;
        }
    }

    return false;

};