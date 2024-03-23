const secondElement = document.getElementById('second');
if (secondElement) {
    let count = parseInt(secondElement.textContent);

    const secondInterval = setInterval(function () {
        count--;
        secondElement.textContent = count.toString();
        if (count <= 0) {
            clearInterval(secondInterval);
        }
    }, 1000);
}