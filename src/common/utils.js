export function getNameKey(name = '') {
    return name.toLowerCase().split(' ').join('-');
}