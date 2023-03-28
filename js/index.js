const generatePromptButton = document.querySelector(".btn");
const promptOutput = document.querySelector(".prompt p");

generatePromptButton.addEventListener("click", () => {
  const sceneCheckboxes = document.querySelectorAll(
    'input[name="scenes"]:checked'
  );
  const styleCheckboxes = document.querySelectorAll(
    'input[name="styles"]:checked'
  );
  const viewCheckboxes = document.querySelectorAll(
    'input[name="views"]:checked'
  );
  const lightCheckboxes = document.querySelectorAll(
    'input[name="lights"]:checked'
  );
  const cameraCheckboxes = document.querySelectorAll(
    'input[name="cameras"]:checked'
  );
  const lenCheckboxes = document.querySelectorAll('input[name="lens"]:checked');

  const scenes = getValuesFromCheckboxes(sceneCheckboxes);
  const styles = getValuesFromCheckboxes(styleCheckboxes);
  const views = getValuesFromCheckboxes(viewCheckboxes);
  const lights = getValuesFromCheckboxes(lightCheckboxes);
  const cameras = getValuesFromCheckboxes(cameraCheckboxes);
  const lens = getValuesFromCheckboxes(lenCheckboxes);

  const prompt = scenes.concat(styles, views, lights, cameras, lens).join(",");
  promptOutput.textContent = prompt;
});

function getValuesFromCheckboxes(checkboxes) {
  const values = [];
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  return values;
}

function copyToClipboard() {
  const textToCopy = document.querySelector("#text-to-copy").innerText;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert(`已复制到剪贴板：${textToCopy}`);
    })
    .catch((error) => {
      alert(`复制失败：${error}`);
    });
}
