function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed()
  }
  return x.toUpperCase().trim()
}

// instance of
class MyResponse {
  header: string = 'header message'
  message: string = 'response message'
}

class MyError {
  header: string = 'header message'
  error: string = 'error message'
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.message
    }
  } else {
    return {
      info: res.header + res.error
    }
  }
}

// ==================
type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
  //......
}

setAlertType('success')
setAlertType('danger')
// setAlertType('none') // non valid