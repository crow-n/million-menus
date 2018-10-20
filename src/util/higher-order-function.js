
function throttle(callback, timeSpan) {
  var startTime = new Date()
  return function() {
    var args = [].slice(arguments)
    var nextTime = new Date()
    if(nextTime - startTime >= timeSpan) {
      callback.apply(this, args)
      startTime = nextTime
    }
  }
}

export default throttle