function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (num == 1)
        str = str.charAt(0) + "...";

    if (num == 2)
        str = str.substr(0, 2) + "...";

    if (str.length > num && num > 3)
        str = str.slice(0, num - 3) + "...";
    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);