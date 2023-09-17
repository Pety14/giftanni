function dateDiffInDays(a,b){
    var msPerDay = 1000 * 60 *60 *24;

    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc1 - utc2) / msPerDay);
}

var a = new Date()
b = new Date("2023-02-18");
diff = dateDiffInDays(a, b);

console.log(diff + " days");

$("#day").text(diff + " days");


