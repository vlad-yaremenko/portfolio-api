<template>
  <Loader v-if="loading" />

  <waterfall v-else :watch="data" :line-gap="500" :min-line-gap="200" :auto-resize="true">
    <waterfall-slot
      v-for="(item, index) in data"
      :width="item.thumbnail.width"
      :height="item.thumbnail.height"
      :order="index"
      :key="item.id"
      class="item"
    >
      <project-item
        :src="item.thumbnail.src"
        :name="item.name"
        :desc="item.description"
        :link="item.links.main"
        :githubLink="item.links.github"
      />
    </waterfall-slot>
  </waterfall>
</template>

<script>
import Waterfall from 'vue-waterfall/lib/waterfall.vue';
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot.vue';
import ProjectItem from '../components/ProjectItem.vue';
import Loader from '../components/Loader.vue';

function createProject(data = {}) {
  return {
    id: data.id || Math.random() + Date.now(),
    name: data.name || '',
    thumbnail: {
      src: data.thumbnail ? data.thumbnail.src : undefined,
      width: data.thumbnail ? data.thumbnail.width : 400,
      height: data.thumbnail ? data.thumbnail.height : 400,
    },
    links: {
      main: data.links ? data.links.main : '',
      github: data.links ? data.links.github : null,
    },
    description: data.description || '',
  };
}

export default {
  name: 'home',
  components: {
    Waterfall,
    WaterfallSlot,
    ProjectItem,
    Loader,
  },
  data() {
    return {
      loading: true,
      data: [],
    };
  },
  async mounted() {
    const response = await fetch('/api/projects');

    const projects = await response.json();

    this.loading = false;

    this.data = projects.map(createProject);

    this.data.push(createProject());
    this.data.push(createProject());
    this.data.push(createProject());
  },
};
</script>

<style lang="scss" scoped>
.item {
  padding: $base-padding / 2;
}
</style>
