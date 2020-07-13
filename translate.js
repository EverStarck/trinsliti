const pattern = /[aeiouAEIOUáéíóúÁÉÍÓÚ]/g;

const filter = (text) => {
    return text.replace(pattern, 'i');
}

console.log(filter('Pls, give me a star. Thanks ♥'));