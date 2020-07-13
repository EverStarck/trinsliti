const pattern = /[aeiouAEIOUáéíóúÁÉÍÓÚ]/g;

const filter = (text) => {
    return text.replace(pattern, '');
}

console.log(filter('Pls, give me a star. Thanks ♥'));