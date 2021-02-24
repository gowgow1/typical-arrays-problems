
exports.min = function min (array=0) {  
    if (array && array.length>0){
        return Math.min(...array); 
    }
  return array
}

exports.max = function max (array=0) {
    if (array && array.length>0){
        return Math.max(...array); 
    }
  return array
}

exports.avg = function avg (array=0) {
    if (array && array.length>0){
        let leng = array.length
        return array.reduce((current,next) => current+=next,0 )/leng; 
    }
  return array;
}
