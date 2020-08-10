<template>
  <section class="wrapper">
    <div class="preview">
      <img :src="src" :alt="name">
    </div>

    <div class="description">
      <div class="info">
        <h2 class="name">{{ name }}</h2>

        <div class="text-wrapper">
          <p class="text">{{ desc }}</p>
        </div>
      </div>

      <div class="links">
        <ul>
          <li v-if="link">
            <a :href="link" target="blank"><i class="fas fa-external-link-alt"></i></a>
          </li>
          <li v-if="githubLink">
            <a :href="githubLink" target="blank"><i class="fab fa-github"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
const COMING_SOON_SRC = 'images/coming.jpg';

export default {
  name: 'project-item',
  props: {
    link: {
      type: String,
      required: true,
    },
    githubLink: {
      type: String,
    },
    src: {
      type: String,
      default: COMING_SOON_SRC,
    },
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
$ease-out-quint: cubic-bezier(0.230, 1.000, 0.320, 1.000);
$ease-in-quint: cubic-bezier(0.755, 0.050, 0.855, 0.060);

.wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  .preview {
    width: 100%;
    height: 100%;

    animation: turn-on 2s linear;
    animation-fill-mode:forwards;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      min-height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .description {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;;
    height: 100%;;
    transform: translate(-50%, -50%);
    color: $main-color;
    opacity: 0;
    visibility: hidden;
    transition: .3s $ease-in-quint;
    user-select: none;
    padding: $base-padding;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .info {
      flex: 1;
      max-height: 100%;

      .name {
        margin: 0;
        font-size: 28px;
        text-align: right;
        margin-bottom: $base-padding;
      }

      .text-wrapper {
        max-height: calc(100% - 70px);
        background: transparent;
        overflow-y: auto;
      }

      .text {
        font-size: 16px;
        margin: 0;
      }
    }

    .links {
      ul {
        display: flex;
        margin: 0;
        padding: 0;
        justify-content: space-around;

        li {
          list-style-type: none;

          a {
            color: #eee;
            transition: color .3s ease;

            &::before {
              display: none;
            }

            &:hover {
              color: #aaa;
            }
          }
        }
      }
    }
  }

  &:hover {
    .preview {
      animation: turn-off 0.55s $ease-out-quint;
      animation-fill-mode: forwards;
    }

    .description {
      visibility: visible;
      opacity: 1;
    }
  }
}

@keyframes turn-off{
  0%{
    transform: scale(1,1.3) translate3d(0,0,0);
    filter: brightness(1);
    opacity: 1;
  }
  60%{
    transform: scale(1.3,0.001) translate3d(0,0,0);
    filter: brightness(10);
  }
  100%{
    animation-timing-function: $ease-in-quint;
    transform: scale(0.000,0.0001) translate3d(0,0,0);
    filter: brightness(50);
  }
}

@keyframes turn-on{
  0%{
    transform:scale(1,0.8) translate3d(0,0,0);
    filter:brightness(30);
    opacity:1;
  }
  3.5%{
    transform:scale(1,0.8) translate3d(0,100%,0);
  }
  3.6%{
    transform:scale(1,0.8) translate3d(0,-100%,0);
    opacity:1;
  }
  9%{
    transform:scale(1.3,0.6) translate3d(0,100%,0);
    filter:brightness(30);
    opacity:0;
  }
  11%{
    transform:scale(1,1) translate3d(0,0,0);
    filter:contrast(0) brightness(0);
    opacity:0;
  }
  100%{
    transform:scale(1) translate3d(0,0,0);
    filter:contrast(1) brightness(1) saturate(1);
    opacity:1;
  }
}
</style>

