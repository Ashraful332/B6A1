function formatValue(data:string | number | boolean) {
  if (typeof (data) === "string") {
    let conString = data.toLocaleUpperCase();
    return conString
  }else if (typeof data == "number") {
    return data*10
  }else if (typeof data === "boolean") {
    return !data
  }else {
    return "error"
  }
}
console.log(formatValue("ashraful"));