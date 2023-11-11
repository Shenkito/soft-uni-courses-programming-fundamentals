function lowerOrUpperChar(char) {
    console.log(char === char.toUpperCase() ? "upper-case" : "lower-case"); // Съкратена проверка if/else. Тук toUpperCase превръща моя знак в голям за да мога да проверя голям или малак е.
}

lowerOrUpperChar('l')