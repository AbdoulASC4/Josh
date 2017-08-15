var a = [
    "jordan 11 concord",
    "nike sb",
    "farragamo",
    "nike roshe",
    "hurrache",
    "big baller brand",
    "sketchers",
    "polo",
    "gucci flip flops",
    "puma",
    "pony",
    "adidas",
    "raw",
    "under armour",
    "reebok",
];

a.sort()

console.log(a.sort());

function binarySearch(arr, i) {
    var mid = Math.floor(arr.length / 2);
    console.log(arr[mid], i);

    if (arr[mid] === i) {
        console.log('match', arr[mid], i);
        return arr[mid];
    } else if (arr[mid] < i && arr.length > 1) {
        console.log('mid lower', arr[mid], i);
        binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
    } else if (arr[mid] > i && arr.length > 1) {
        console.log('mid higher', arr[mid], i);
        binarySearch(arr.splice(0, mid), i);
    } else {
        console.log('not here', i);
        return -1;
    }
}