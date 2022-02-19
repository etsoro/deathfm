const decodeHtml = (value) => {
  let cache = {};
  let character = null;
  const element = document.createElement('div');
  const match = new RegExp(/([&][^&; ]+[;])/g);

  const handleEntity = (entity) => {
    character = cache[entity];
    if (!character) {
      element.innerHTML = entity;
      if (element.childNodes[0]) character = cache[entity] = element.childNodes[0].nodeValue;
      else character = '';
    }
    return character;
  };

  return value.replace(match, handleEntity);
};

export { decodeHtml };
