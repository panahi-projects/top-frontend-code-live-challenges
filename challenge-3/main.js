import './style.css'
import axios from 'axios';

const CreateElement = (elementObj) => {
  if (!elementObj || !elementObj.tag) return {};
  var element = document.createElement(elementObj.tag);
  for (var prop in elementObj) {
      if (prop === 'childNodes') {
          elementObj.childNodes.forEach(function (node) {
              element.appendChild(node);
          });
      } else if (prop === 'attributes') {
          elementObj.attributes.forEach(function (attr) {
              element.setAttribute(attr.key, attr.value);
          });
      } else if (prop === 'datasets') {
          elementObj.datasets.forEach(function (dataset) {
              element.dataset[dataset] = elementObj[dataset];
          });
      } else element[prop] = elementObj[prop];
  }
  return element;
};

(function () {
  console.log("TEST");
  axios.get("https://pixabay.com/api/?key=40903447-c32c714f0c73077bd402d849d&page=1&per_page=10&image_type=photo&pretty=true")
    .then((res) => {
      console.log(res);
      const imageContainer = document.querySelector('#imageContainer');

     if (res?.data?.hits){
      const items = res.data.hits
      for (const item of items) {
        const newImageSchema = {
          tag: 'img',
          src: item.webformatURL,
          className: 'image'
        }
        const newImage = CreateElement(newImageSchema)
        
        const newDivSchema = {
          tag: 'div',
          className: 'image-wrapper',
          childNodes: [newImage]
        }
        if(item.imageHeight > item.imageWidth) newDivSchema.className += ' horizontal'
        else if(item.imageHeight < item.imageWidth) newDivSchema.className += ' vertical'
        else newDivSchema.className += ' big'
        const div = CreateElement(newDivSchema);

        imageContainer.appendChild(div)
      }
     }
      
    })
})()

