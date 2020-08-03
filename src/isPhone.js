export function isPhone() {
  const isPhone = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPad|iiPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowsBrowserNG|WebOS|Symbian|Windows Phone)/i)
  return isPhone
}