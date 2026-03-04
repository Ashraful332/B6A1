function formatValue(data) {
    if (typeof (data) === "string") {
        var conString = data.toLocaleUpperCase();
        return conString;
    }
    else if (typeof data == "number") {
        return data * 10;
    }
    else if (typeof data === "boolean") {
        return !data;
    }
    else {
        return "error";
    }
}
console.log(formatValue("ashraful"));
