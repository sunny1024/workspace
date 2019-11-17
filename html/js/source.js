function displayCitations() {
    let quotes = document.getElementsByTagName("blockquote");
    for (let i = 0; i < quotes.length; i++) {
        if (!quotes[i].getAttribute("cite")) continue；
        let url = quotes[i].getAttribute("cite");
        let quoteChildren =



}