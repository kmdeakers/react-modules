function choice(items) {
    const numItems = items.length;
    const index = Math.floor(Math.random() * numItems);

    return items[0];
}

function remove (items, item) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            const result = items.splice(i, 1);
            console.log("items", items)
            return result[0];
        }
    }
}

export { choice, remove };