const htmlField = document.getElementById("html");
const cssField = document.getElementById("css");
const jsField = document.getElementById("js");
const preview = document.getElementById("preview");

function render() {
  let iframeComponent = preview.contentWindow.document;

  iframeComponent.open();

  iframeComponent.writeln(`
    ${htmlField.innerText}
    <style>${cssField.innerText}</style>
    <script>${jsField.innerText}</script>`);

  iframeComponent.close();
}

function compile() {
  document.addEventListener('keyup', function() {
    render();
  });
};

compile();
render();