function chunkArrayInGroups(arr, size) {

    // Break it up.
    var new_arr = [];
    var row = [];

    for (var i = 0; i < arr.length; i++) {
        row.push(arr[i]);
        if (row.length == size || i == arr.length - 1) {
            new_arr.push(row);
            row = [];
        }
    }

    arr = new_arr;
    return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);