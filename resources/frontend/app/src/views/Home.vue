<template>
  <div class="page">
    <div class="intro">
      <h1 class="title"> &#60;Hello/&#62;</h1>

      <div class="desc">
        <p>I'm Vlad Yaremenko</p>
        <p>Professional Front-end developer</p>
      </div>

      <blockquote class="quote" cite="https://www.azquotes.com/quote/929526">
        <p>Codes are a puzzle. A game, just like any other game.</p>
        <footer>- Alan Turing</footer>
      </blockquote>
    </div>
  </div>
</template>

<styles lang="scss" scoped>
.page {
  padding: 0 $base-padding $base-padding $base-padding;
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;

  @include respond-to('max-lg') {
    align-items: flex-start;
  }

  .intro {
    width: 50%;

    @include respond-to('max-lg') {
      width: 100%;
    }
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 65%;
    transform: translateX(-50%);
    background-image: url('/assets/app/img/me.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    width: 900px;
    height: 940px;

    @include respond-to('max-lg') {
      left: 58%;
    }

    @include respond-to('max-sm') {
      width: 700px;
      height: 740px;
    }
  }
}

.intro {
  text-align: right;
}

.title {
  font-size: $home-title;
  margin: 0;

  @include respond-to('max-lg') {
    margin-top: $huge-padding;
    font-size: $home-title-md;
    text-align: center;
  }
}

.desc {
  p {
    margin: 0;
    font-weight: bold;
    font-size: $title-font-size;

    @include respond-to('max-lg') {
      font-size: $title-font-size-sm;
    }
  }
}

.quote {
  font-size: $home-quote;
  margin: 0;
}
</styles>
