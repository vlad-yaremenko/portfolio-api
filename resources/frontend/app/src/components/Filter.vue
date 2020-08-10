<template>
  <form>
    <label>
      Technology:
      <select>
        <option value="all">All</option>
        <option value="java-script">JavaScript</option>
        <option value="es6">ES6</option>
        <option value="type-script">TypeScript</option>
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="three.js">Three.js</option>
        <option value="node.js">Node.js</option>
        <option value="chrome-extension">Chrome Extension</option>
        <option value="markdown">Markdown</option>
      </select>
    </label>

    <label>
      Category:
      <select>
        <option value="all">All</option>
        <option value="art">Art</option>
        <option value="e-commerce">E-Commerce</option>
        <option value="mobile-and-apps">Mobile & Apps</option>
        <option value="web">Web</option>
        <option value="3d">3D</option>
        <option value="docs">Docs</option>
      </select>
    </label>
  </form>
</template>

<script>
export default {
  name: 'project-filter',
};
</script>

<style scoped lang="scss">
form {
  width: 100%;
  display: flex;
  justify-content: center;

  label {
    color: #eee;
    font-size: 20px;
    text-transform: uppercase;
    font-family: sans-serif;
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    select {
      margin: 0;
      border-radius: 3px;
      overflow: hidden;
      padding: 5px 8px;
      border: none;
      box-shadow: none;
      background-color: #000;
      color: #eee;
      font-size: 20px;
    }
  }
}
</style>
