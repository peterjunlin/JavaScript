// encode uri
const uri = 'https://mozilla.org/?x=шеллы';
uri_encoded = encodeURI(uri);
console.assert(uri_encoded == "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");

// decode uri
console.assert(decodeURI(uri_encoded) == uri);

// encode uri component
uri_component = "шеллы";
uri_component_encoded = encodeURIComponent(uri_component);
console.assert(uri_component_encoded == "%D1%88%D0%B5%D0%BB%D0%BB%D1%8B");

// decode uri component
console.assert(decodeURIComponent(uri_component_encoded) == uri_component);
