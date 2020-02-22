<style lang="postcss">
@import "../styles/mixins.pcss";

.admin-wrapper {
  background: url("../images/content/intro_bg.jpg"), rgba(255, 255, 255, 0.9);
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.admin-container {
  margin: 0 auto;
  max-width: 1080px;
  width: 88%;

  @include desktop-old {
    width: 94%;
  }

  @include tablets {
    width: 92.2%;
  }

  @include phones {
    width: 100vw;
  }
}

.admin__header {
  width: 100%;
}

.header__main {
  display: flex;
  align-items: center;
  background-color: $dark_blue-color;
  height: 80px;
}

.header__main-container {
  display: flex;
  align-items: center;
  max-width: 1080px;

  @include phones {
    flex-wrap: wrap;
    width: 88%;
    margin-bottom: 15px;
  }
}

.header__main__admin-avatar {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;

  @include phones {
    transform: translate(0, 10px);
  }
}

.header__main__admin-name {
  margin-right: 28px;
  font-size: 18px;
  font-family: "open-sans-sebo";

  @include phones {
    font-size: 16px;
  }
}

.header__main__title {
  font-size: 14px;
  opacity: 0.5;

  @include phones {
    display: none;
  }
}

.header__main__logout-btn {
  color: #ffffff;
  background: none;
  margin-left: auto;
  font-family: "open-sans-regular";
  font-size: 16px;
  text-decoration: underline;
  opacity: 0.7;

  @include tablets {
    font-size: 14px;
  }

  @include phones {
    margin-left: 60px;
    line-height: 0;
  }
}

.header__nav {
  display: flex;
  align-items: center;
  height: 75px;
  background-color: #fff;
}

.header__nav-container {
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 1080px;

  @include phones {
    width: 88%;
  }
}

.header__nav-btn {
  height: 100%;
  padding: 0;
  width: 125px;
  font-size: 16px;
  background: none;

  @include phones {
    font-size: 14px;
  }

  &--active {
    border-bottom: 3px solid $orange-color;
    color: $orange-color;
    font-family: "open-sans-sebo";
    transition: 0.3s;
  }
}

.admin__title-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 138px;

  @include tablets {
    height: 118px;
  }

  @include phones {
    margin: 0 auto;
    width: 88%;
    height: 95px;

    &--about {
      padding: 8% 0;
      height: 150px;
    }
  }
}

.admin__title {
  color: $dark_blue-color;
  font-family: "open-sans-bo";
  font-size: 21px;

  @include phones {
    font-size: 18px;
  }
}

.about__add-group-btn {
  background: transparent;
  font-family: "open-sans-sebo";
  color: $orange-color;
  font-size: 16px;
  margin-left: 6.4%;

  @include tablets {
    font-size: 14px;
    margin-left: 10%;
  }

  @include phones {
    margin-left: 30px;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: $orange-color;
    transform: translate(-33px, -2px);

    @include tablets {
      transform: translate(-33px, -4px);
    }
  }
  &::after {
    content: "";
    display: block;
    height: 7px;
    width: 7px;
    background-image: svg-load(
      "plus.svg",
      fill=#ffffff,
      width=100%,
      height=100%
    );
    transform: translate(-26px, -12px);
  }
}

.about__group-block-container {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 30px;

  @include tablets {
    grid-template-columns: repeat(auto-fit, minmax(240px, 2fr));
    grid-gap: 20px;
  }

  @include phones {
    grid-template-columns: 1fr;
    grid-gap: 10px 0;
  }
}

.group-block {
  background-color: #ffffff;
  height: 390px;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  align-items: center;
  box-shadow: 3px 3px 15px 1px #8d8d8d5b;
}

.group-block__title {
  display: flex;
  justify-self: center;
  align-items: center;
  width: 92.4%;
  height: 100%;
  border-bottom: 1px solid rgba(#414c63, 0.15);

  @include phones {
    width: 100%;
    padding: 0 10px;
  }

  &-text {
    resize: none;
    border: none;
    background: none;
    outline: none;
    width: 56.7%;
    padding: 14px 0 14px;
    margin-left: 9px;
    font-family: "open-sans-sebo";
    font-size: 18px;
    color: $dark_blue-color;

    &::placeholder {
      opacity: 0.5;
    }
  }

  &-action {
    text-align: right;
    margin-left: auto;
    display: flex;

    &__edit {
      height: 15px;
      width: 15px;
      background: svg-load("pencil.svg", fill=#a0a5b1, width=100%, height=100%);
      margin-right: 10px;
    }

    &__apply,
    &__cancel {
      display: none;
    }
  }

  &--edited {
    .group-block__title {
      &-text {
        border-bottom: 1px solid #000;
      }

      &-action {
        &__edit {
          display: none;
        }

        &__apply {
          display: initial;
          height: 15px;
          width: 15px;
          background: svg-load(
            "tick.svg",
            fill=#00d70a,
            width=100%,
            height=100%
          );
          margin-right: 15px;
        }

        &__cancel {
          display: initial;
          height: 15px;
          width: 15px;
          background: svg-load(
            "cross.svg",
            fill=#bf2929,
            width=100%,
            height=100%
          );
          margin-right: 10px;
        }
      }
    }
  }
}

.group-block__skill-list {
  width: 92.4%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: flex-start;
}

.group-block__skill {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  font-family: "open-sans-regular";
  font-size: 16px;
  color: $dark_blue-color;

  @include tablets {
    margin-top: 15px;
  }

  @include phones {
    margin-top: 20px;
  }

  &:first-child {
    margin-top: 30px;
  }

  &--edited {
    .group-block__skill {
      &-title,
      &-value {
        border-bottom: 1px solid #000;
      }
      &-action {
        &__edit,
        &__trash {
          display: none;
        }
        &__apply {
          display: initial;
          height: 15px;
          width: 15px;
          background: svg-load(
            "tick.svg",
            fill=#00d70a,
            width=100%,
            height=100%
          );
          margin-right: 15px;
        }
        &__cancel {
          display: initial;
          height: 15px;
          width: 15px;
          background: svg-load(
            "cross.svg",
            fill=#bf2929,
            width=100%,
            height=100%
          );
          margin-right: 10px;
        }
      }
    }
  }

  &-title {
    width: 56.7%;
    height: 100%;
    margin-left: 9px;
    margin-right: 4.2%;
    resize: none;
    border: none;
    background: none;
    outline: none;

    @include tablets {
      width: 47%;
    }

    @include phones {
      width: 44%;
      font-size: 14px;
    }
  }

  &-value {
    width: 75px;

    @include tablets {
      width: 70px;
    }
    &:after {
      content: "%";
    }
    &-percent {
      width: 55%;
      height: 100%;
      margin-left: 10px;
      resize: none;
      border: none;
      background: none;
      outline: none;
    }
  }

  &-action {
    text-align: right;
    display: flex;
    margin-left: auto;

    &__edit {
      height: 15px;
      width: 15px;
      background: svg-load("pencil.svg", fill=#a0a5b1, width=100%, height=100%);
      margin-right: 15px;
    }

    &__apply,
    &__cancel {
      display: none;
    }

    &__trash {
      height: 15px;
      width: 15px;
      background: svg-load("trash.svg", fill=#a0a5b1, width=100%, height=100%);
      margin-right: 10px;
    }
  }
}

.group-block__new-skill {
  display: flex;
  justify-content: flex-end;
  justify-self: center;
  width: 92.4%;
  padding-right: 10px;
  margin-bottom: 25px;
  font-family: "open-sans-regular";
  font-size: 16px;
  line-height: 2.5;
  color: $dark_blue-color;

  @include phones {
    line-height: 2.7;
  }

  &-title {
    width: 45%;
    margin-right: 10px;
    padding-left: 20px;
    resize: none;
    border: none;
    background: none;
    outline: none;
    border-bottom: 1px solid #000;

    @include phones {
      padding-left: 10px;
    }

    &::placeholder {
      opacity: 0.5;
    }
  }

  &-value {
    border-bottom: 1px solid #000;
    width: 75px;
    margin-right: 6.3%;
    &:after {
      content: "%";
    }
    &-percent {
      width: 55%;
      height: 100%;
      margin-left: 10px;
      resize: none;
      border: none;
      background: none;
      outline: none;

      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  &-add-btn {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: $orange-color;

    &::before {
      content: "";
      display: block;
      height: 15px;
      width: 15px;
      background-image: svg-load(
        "plus.svg",
        fill=#ffffff,
        width=100%,
        height=100%
      );
      margin: 0 auto;
    }
  }
}

.admin-works__main-block {
  /* background-color: #2f9fe09d; */
  display: flex;
  flex-direction: column;
}

.admin-works__edit-block {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  box-shadow: 3px 3px 15px 1px #8d8d8d5b;

  @include phones {
    margin-bottom: 10px;
  }
}

.admin-works__edit-block__title {
  font-family: "open-sans-bo";
  font-size: 18px;
  color: #414c63;
  border-bottom: 1px solid rgba(#414c63, 0.15);
  margin: 0 20px;
  padding: 25px 10px;

  @include phones {
    font-size: 16px;
    margin: 0;
    padding: 25px 20px;
  }
}

.admin-works__edit-block__container {
  display: flex;
  padding: 47px 30px 30px;

  @include desktop-old {
    flex-direction: column;
    align-items: center;
  }

  @include tablets {
    padding: 30px 0;
  }
}

.admin-works__drop-area {
  font-family: "open-sans-sebo";
  display: block;
  min-width: 495px;
  height: 275px;
  margin-right: 30px;
  position: relative;

  @include desktop-old {
    margin-right: 0;
  }

  @include tablets {
    min-width: auto;
    width: 65.7%;
    height: 33.9vw;
    min-height: 155px;
    min-width: 280px;
  }

  @include phones {
    font-size: 14px;
  }

  &--wait {
    display: block;
    background-color: #dee4ed;
    background-image: url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill: none; stroke: gray; stroke-width: 1; stroke-dasharray: 10 10'/></svg>");
    margin-bottom: 50px;
  }

  &__text {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgba(#414c63, 0.5);
    line-height: 32px;
  }

  &__download-btn {
    margin-top: 20px;
    padding: 15px 35px;
    border-radius: 24px;
    width: 180px;
    text-transform: uppercase;
    background-color: $orange-color;
    color: #ffffff;
  }

  &--preview {
    display: none;
    margin-bottom: 100px;
  }

  &__image {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__change-btn {
    background-color: transparent;
    color: $orange-color;
    padding: 0;
    position: absolute;
    bottom: -40px;
    left: 30%;
  }
}

.admin-works__edit-data {
  width: 500px;
  font-family: "open-sans-sebo";
  font-size: 16px;

  @include tablets {
    width: 70.6%;
  }

  @include phones {
    width: 87.5%;
    font-size: 14px;
  }

  &__row {
    margin-bottom: 30px;
  }

  &__label {
    color: rgba(#414c63, 0.5);
    line-height: 0.9;
  }

  &__text {
    line-height: 50px;
  }

  &__textarea {
    line-height: 30px;
    margin-top: 20px;
    padding: 15px;
    resize: none;
    background: none;

    @include phones {
      padding-top: 10px;
    }
  }

  input {
    border: none;
    background: none;
    outline: none;
    border-bottom: 1px solid #000;
  }
}

.admin-works__edit-data__row {
  display: flex;
  flex-direction: column;
}

.admin-works__edit-data__tags-items {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.admin-works__edit-data__tags-item {
  background-color: #f4f4f4;
  padding: 6px 10px 6px 18px;
  border-radius: 30px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-family: "open-sans-sebo";
  font-size: 13px;
  color: rgba(#283340, 0.7);
  position: relative;

  @include phones {
    margin-right: 5px;
    padding: 6px 9px 6px 15px;
  }

  &:after {
    content: "";
    display: inline-block;
    height: 14px;
    width: 14px;
    margin-left: 10px;
    background-image: svg-load(
      "plus.svg",
      fill=#283340,
      width=100%,
      height=100%
    );
    transform: rotate(45deg) translate(0, 4px);
  }
}

.admin-works__edit-data__btns {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @include tablets {
    justify-content: center;
  }
}

.admin-works__edit-data__cancel-btn {
  color: $orange-color;
  margin-right: 60px;
  background: transparent;
  padding: 0;

  @include phones {
    margin-right: 25px;
  }
}

.admin-works__edit-data__save-btn {
  padding: 23px 35px;
  border-radius: 32px;
  text-transform: uppercase;
  background-color: $orange-color;
  color: #ffffff;

  @include phones {
    padding: 20px 50px;
  }
}

.admin-works__instance-block {
  display: grid;
  grid-template-columns: repeat(auto-fit, 340px);
  grid-gap: 30px;
  justify-content: space-around;

  @include tablets {
    grid-template-columns: repeat(auto-fit, minmax(320px, 47.8%));
  }

  @include phones {
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 320px);
  }
}

.admin-works__add-btn {
  height: 560px;
  padding: 0;
  background-color: $orange-color;
  padding-bottom: 20%;

  @include tablets {
    height: 72.9vw;
  }

  @include phones {
    height: 110px;
  }

  &__icon {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin: 0 auto;
    border: 2px solid #ffffff;
    position: relative;

    @include tablets {
      height: 19.5vw;
      width: 19.5vw;
    }

    @include phones {
      margin: 30px 20px;
      height: 50px;
      width: 50px;
    }

    p {
      color: #ffffff;
      font-size: 18px;
      line-height: 30px;
      font-family: "open-sans-bo";
      position: absolute;
      bottom: -80px;

      @include phones {
        width: 200px;
        bottom: 9px;
        transform: translate(35px 0);
        font-size: 16px;
      }
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      transform: translate(-50%, 50%);
      left: 50%;
      bottom: 50%;
      height: 35px;
      width: 35px;
      background-image: svg-load(
        "plus-lite.svg",
        fill=#ffffff,
        width=100%,
        height=100%
      );
      @include tablets {
        height: 4.5vw;
        width: 4.5vw;
      }
      @include phones {
        height: 11px;
        width: 11px;
      }
    }
  }
}

.admin-works__instance {
  background-color: #ffffff;
  height: 560px;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 15px 1px #8d8d8d5b;

  @include phones {
    height: 475px;
  }

  &--edited {
    filter: brightness(120%) opacity(70%);
    box-shadow: none;
  }
}

.admin-works__instance-image-block {
  display: block;
  height: 190px;
  overflow: hidden;
  position: relative;
}

.admin-works__instance-image {
  object-fit: cover;
}

.admin-works__instance-desc__tags {
  position: absolute;
  bottom: 0;
  right: 0;
}

.admin-works__instance-desc__tag {
  display: inline-block;
  background-color: #f4f4f4;
  padding: 6px 15px 6px 15px;
  border-radius: 30px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-family: "open-sans-sebo";
  font-size: 13px;
  color: rgba(#283340, 0.7);
}

.admin-works__instance-desc {
  flex: 1;
  padding: 35px;
  color: #414c63;

  display: flex;
  flex-direction: column;

  @include phones {
    padding: 25px 40px 25px 20px;
  }

  &__title {
    font-family: "open-sans-bo";
    font-size: 18px;
    margin-bottom: 20px;

    @include phones {
      margin-bottom: 10px;
    }
  }

  &__text {
    font-family: "open-sans-sebo";
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 20px;
    opacity: 0.7;

    @include phones {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 10px;
    }
  }

  &__link {
    font-family: "open-sans-sebo";
    font-size: 16px;
    color: $orange-color;

    @include phones {
      font-size: 14px;
    }
  }
}

.admin-works__instance-desc__btns {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.admin__instance-btn {
  padding: 0;
  background: transparent;
  color: rgba(#414c63, 0.5);
  font-family: "open-sans-sebo";
  font-size: 16px;

  @include phones {
    font-size: 14px;
  }

  &--edit {
    &:after {
      content: "";
      display: inline-block;
      height: 19px;
      width: 19px;
      margin-left: 10px;
      background-image: svg-load(
        "pencil.svg",
        fill=$orange-color,
        width=100%,
        height=100%
      );
      transform: translate(0, 4px);
    }
  }
  &--delete {
    &:after {
      content: "";
      display: inline-block;
      height: 19px;
      width: 19px;
      margin-left: 10px;
      background-image: svg-load(
        "plus.svg",
        fill=#bf2929,
        width=100%,
        height=100%
      );
      transform: rotate(45deg) translate(0, 4px);

      @include phones {
        transform: rotate(45deg) translate(0, 7px);
      }
    }
  }
}

.admin-reviews__main-block {
  display: flex;
  flex-direction: column;
}

.admin-reviews__edit-block {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  box-shadow: 3px 3px 15px 1px #8d8d8d5b;

  @include phones {
    margin-bottom: 10px;
  }
}

.admin-reviews__edit-block__title {
  font-family: "open-sans-bo";
  font-size: 18px;
  color: #414c63;
  border-bottom: 1px solid rgba(#414c63, 0.15);
  margin: 0 20px;
  padding: 25px 10px;

  @include phones {
    font-size: 16px;
    margin: 0;
    padding: 25px 20px;
  }
}

.admin-reviews__edit-block__container {
  display: flex;
  padding: 47px 30px 30px;

  @include tablets {
    flex-wrap: wrap;
  }

  @include phones {
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
  }
}

.admin-reviews__edit-photo {
  display: block;
  height: 200px;
  min-width: 200px;
  border-radius: 50%;
  margin-right: 30px;
  margin-bottom: 85px;
  background-color: #dee4ed;
  position: relative;

  @include phones {
    margin-right: 0;
  }

  &--wait {
    display: block;
    &::before {
      content: "";
      display: block;
      position: absolute;
      height: 115px;
      width: 115px;
      background: svg-load(
          "man-user.svg",
          fill=#ffffff,
          width=100%,
          height=100%
        )
        no-repeat;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .admin-reviews__edit-photo__edit-btn {
      background-color: transparent;
      color: $orange-color;
      font-family: "open-sans-sebo";
      font-size: 16px;
      padding: 0;
      position: absolute;
      bottom: -40px;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }

  &--preview {
    display: none;
    overflow: hidden;

    .admin-reviews__edit-photo__image {
      width: 100%;
      transform: scale(1.1);
      object-position: 0 10px;
    }

    .admin-reviews__photo__change-btn {
      background-color: rgba(#000000, 0.6);
      color: $orange-color;
      font-family: "open-sans-sebo";
      font-size: 16px;
      padding: 0;
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
}

.admin-reviews__edit-data {
  width: 59.8%;
  font-family: "open-sans-sebo";
  font-size: 16px;

  @include tablets {
    flex: 1;
  }

  @include phones {
    width: 100%;
    font-size: 14px;
  }

  &__label {
    color: rgba(#414c63, 0.5);
    line-height: 0.9;
  }

  &__text {
    line-height: 50px;
  }

  &__textarea {
    line-height: 30px;
    margin-top: 20px;
    padding: 15px;
    resize: none;
    border-color: rgba(#414c63, 0.5);

    @include phones {
      line-height: 24px;
    }
  }

  input {
    border: none;
    background: none;
    outline: none;
    border-bottom: 1px solid #000;
  }
}

.admin-reviews__edit-data__two-rows {
  display: flex;

  @include tablets {
    flex-wrap: wrap;
  }
}

.admin-reviwes__edit-data__row {
  margin-right: 30px;
  width: 290px;

  @include phones {
    margin-right: 0;
  }

  &:last-child {
    margin-right: 0;
  }
}

.admin-reviwes__edit-data__row,
.admin-reviwes__edit-data__textreview {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

.admin-reviews__edit-data__btns {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.admin-reviews__edit-data__cancel-btn {
  color: $orange-color;
  margin-right: 60px;
  background: transparent;
  padding: 0;

  @include tablets {
    margin-right: 13%;
  }

  @include phones {
    margin-right: 25px;
  }
}

.admin-reviews__edit-data__save-btn {
  padding: 23px 40px;
  border-radius: 32px;
  text-transform: uppercase;
  background-color: $orange-color;
  color: #ffffff;

  @include phones {
    padding: 20px 50px;
  }
}

.admin-reviews__instance-block {
  display: grid;
  grid-template-columns: repeat(auto-fit, 340px);
  grid-gap: 30px;
  justify-content: space-around;

  @include tablets {
    grid-template-columns: repeat(auto-fit, minmax(320px, 47.8%));
  }

  @include phones {
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 320px);
  }
}

.admin-reviews__add-btn {
  height: 380px;
  padding: 0;
  background-color: $orange-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include phones {
    height: 110px;
    flex-direction: row;
    justify-content: flex-start;
  }

  p {
    color: #ffffff;
    font-size: 18px;
    line-height: 30px;
    font-family: "open-sans-bo";
    width: 150px;
    margin-top: 20px;

    @include phones {
      font-size: 16px;
      margin-top: 0;
    }
  }

  &__icon {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    position: relative;

    @include phones {
      margin: 0 20px;
      height: 50px;
      width: 50px;
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      transform: translate(-50%, 50%);
      left: 50%;
      bottom: 50%;
      height: 35px;
      width: 35px;
      background-image: svg-load(
        "plus-lite.svg",
        fill=#ffffff,
        width=100%,
        height=100%
      );

      @include phones {
        height: 11px;
        width: 11px;
      }
    }
  }
}

.admin-reviews__instance {
  color: #414c63;
  background-color: #ffffff;
  height: 380px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 3px 3px 15px 1px #8d8d8d5b;

  @include phones {
    height: auto;
  }

  &--edited {
    filter: brightness(120%) opacity(80%);
    box-shadow: none;

    .admin-reviews__instance__author-data {
      border-bottom: 1px solid rgba(#1f232d, 0.25);
    }
  }
}

.admin-reviews__instance__author-data {
  display: flex;
  width: 88.5%;
  padding: 0 10px 25px;
  border-bottom: 1px solid rgba(#1f232d, 0.15);

  @include phones {
    width: 100%;
    padding: 0 20px 30px;
  }
}

.admin-reviews__instance__author-photo {
  height: 50px;
  width: 50px;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
}

.admin-reviews__instance__author-info {
  margin-left: 20px;
  &-name {
    font-family: "open-sans-bo";
    font-size: 18px;

    @include phones {
      font-size: 16px;
    }
  }
  &-position {
    font-family: "open-sans-sebo";
    font-size: 16px;
    opacity: 0.5;

    @include phones {
      font-size: 14px;
    }
  }
}

.admin-reviews__instance__text {
  padding: 25px 30px 0;
  margin-bottom: 30px;
  font-family: "open-sans-sebo";
  font-size: 16px;
  line-height: 30px;
  opacity: 0.7;
  overflow: auto;

  @include phones {
    font-size: 14px;
    line-height: 24px;
    padding: 25px 20px 0;
  }
}

.admin-reviews__instance__btns {
  flex: 1;
  width: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @include phones {
    padding: 0 20px;
  }
}
</style>
<template lang="pug">
  .admin-panel
    header.admin__header
      .header__main
        .header__main-container.container
          img(src=('../images/content/userfiles/user.jpg') alt='avatar').header__main__admin-avatar
          .header__main__admin-name Григорий Чижов
          .header__main__title Панель администрирования
          button.header__main__logout-btn Выйти
      nav.header__nav
        .header__nav-container.container
          button.header__nav-btn.header__nav-btn--active Обо мне
          button.header__nav-btn Работы
          button.header__nav-btn Отзывы
    section.admin-about.admin-container
      .admin__title-section.admin__title-section--about
        .admin__title Блок «Обо мне»
        button.about__add-group-btn Добавить группу
      .about__group-block-container

        .group-block
          .group-block__title.group-block__title--edited
            input.group-block__title-text(name='textarea', type='text', placeholder='Название новой группы')
            .group-block__title-action
              button.group-block__title-action__apply
              button.group-block__title-action__cancel
              button.group-block__title-action__edit
          ul.group-block__skill-list
          .group-block__new-skill
            input.group-block__new-skill-title(name='textarea', type='text', placeholder='Новый навык')
            .group-block__new-skill-value
              input.group-block__new-skill-value-percent(name='textarea', type='text', placeholder='100')
            button.group-block__new-skill-add-btn

        .group-block
          .group-block__title.group-block__title--edited
            input.group-block__title-text(name='textarea', type='text', placeholder='Название новой группы')
            .group-block__title-action
              button.group-block__title-action__apply
              button.group-block__title-action__cancel
              button.group-block__title-action__edit
          ul.group-block__skill-list
            li.group-block__skill
              input.group-block__skill-title
              .group-block__skill-value
                input.group-block__skill-value-percent
              .group-block__skill-action
                button.group-block__skill-action__apply
                button.group-block__skill-action__cancel
                button.group-block__skill-action__edit
                button.group-block__skill-action__trash
            li.group-block__skill
              input.group-block__skill-title
              .group-block__skill-value
                input.group-block__skill-value-percent
              .group-block__skill-action
                button.group-block__skill-action__apply
                button.group-block__skill-action__cancel
                button.group-block__skill-action__edit
                button.group-block__skill-action__trash
            li.group-block__skill
              input.group-block__skill-title
              .group-block__skill-value
                input.group-block__skill-value-percent
              .group-block__skill-action
                button.group-block__skill-action__apply
                button.group-block__skill-action__cancel
                button.group-block__skill-action__edit
                button.group-block__skill-action__trash
            li.group-block__skill
              input.group-block__skill-title
              .group-block__skill-value
                input.group-block__skill-value-percent
              .group-block__skill-action
                button.group-block__skill-action__apply
                button.group-block__skill-action__cancel
                button.group-block__skill-action__edit
                button.group-block__skill-action__trash
          .group-block__new-skill
            input.group-block__new-skill-title(name='textarea', type='text', placeholder='Новый навык')
            .group-block__new-skill-value
              input.group-block__new-skill-value-percent(name='textarea', type='text', placeholder='100')
            button.group-block__new-skill-add-btn

        .group-block
          .group-block__title
            input.group-block__title-text(name='textarea', type='text', placeholder='Название новой группы')
            .group-block__title-action
              button.group-block__title-action__apply
              button.group-block__title-action__cancel
              button.group-block__title-action__edit
          ul.group-block__skill-list
            li.group-block__skill.group-block__skill
              input.group-block__skill-title
              .group-block__skill-value
                input.group-block__skill-value-percent
              .group-block__skill-action
                button.group-block__skill-action__apply
                button.group-block__skill-action__cancel
                button.group-block__skill-action__edit
                button.group-block__skill-action__trash
            li.group-block__skill.group-block__skill--edited
              input.group-block__skill-title
              .group-block__skill-value
                input.group-block__skill-value-percent
              .group-block__skill-action
                button.group-block__skill-action__apply
                button.group-block__skill-action__cancel
                button.group-block__skill-action__edit
                button.group-block__skill-action__trash
            li.group-block__skill.group-block__skill
              input.group-block__skill-title
              .group-block__skill-value
                input.group-block__skill-value-percent
              .group-block__skill-action
                button.group-block__skill-action__apply
                button.group-block__skill-action__cancel
                button.group-block__skill-action__edit
                button.group-block__skill-action__trash
            li.group-block__skill.group-block__skill
              input.group-block__skill-title
              .group-block__skill-value
                input.group-block__skill-value-percent
              .group-block__skill-action
                button.group-block__skill-action__apply
                button.group-block__skill-action__cancel
                button.group-block__skill-action__edit
                button.group-block__skill-action__trash
          .group-block__new-skill
            input.group-block__new-skill-title(name='textarea', type='text', placeholder='Новый навык')
            .group-block__new-skill-value
              input.group-block__new-skill-value-percent(name='textarea', type='text', placeholder='100')
            button.group-block__new-skill-add-btn
    
    
    section.admin-works.admin-container
      .admin__title-section
        .admin__title Блок «Работы»
      .admin-works__main-block
        .admin-works__edit-block
          .admin-works__edit-block__title Редактирование работы
          .admin-works__edit-block__container
            .admin-works__drop-area.admin-works__drop-area--wait
              .admin-works__drop-area__text Перетащите или загрузите #[br] для загрузки изображения
                button.admin-works__drop-area__download-btn Загрузить
            .admin-works__drop-area.admin-works__drop-area--preview
              img(src=('../images/content/1.jpg') alt='drop-area-image').admin-works__drop-area__image
              button.admin-works__drop-area__change-btn Изменить превью
            form.admin-works__edit-data
              .admin-works__edit-data__row
                label.admin-works__edit-data__label Название
                input.admin-works__edit-data__text
              .admin-works__edit-data__row
                label.admin-works__edit-data__label Ссылка
                input.admin-works__edit-data__text
              .admin-works__edit-data__row
                label.admin-works__edit-data__label Описание
                textarea.admin-works__edit-data__textarea(name="textarea", rows="4", placeholder='Опишите вашу работу')
              .admin-works__edit-data__row
                label.admin-works__edit-data__label Добавление тэга
                input.admin-works__edit-data__text
                ul.admin-works__edit-data__tags-items
                  li.admin-works__edit-data__tags-item HTML
                  li.admin-works__edit-data__tags-item CSS
                  li.admin-works__edit-data__tags-item Javascript
              .admin-works__edit-data__btns
                button.admin-works__edit-data__cancel-btn Отмена
                button.admin-works__edit-data__save-btn Сохранить
        .admin-works__instance-block
          button.admin-works__add-btn
            .admin-works__add-btn__icon
              p Добавить работу
          .admin-works__instance.admin-works__instance--edited
            .admin-works__instance-image-block
              ul.admin-works__instance-desc__tags
                li.admin-works__instance-desc__tag HTML
                li.admin-works__instance-desc__tag CSS
                li.admin-works__instance-desc__tag Javascript
              img(src=('../images/content/1.jpg') alt='work-pic').admin-works__instance-image
            .admin-works__instance-desc
              .admin-works__instance-desc__title Сайт школы образования
              .admin-works__instance-desc__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a(href='http://loftschool.ru').admin-works__instance-desc__link http://loftschool.ru
              .admin-works__instance-desc__btns
                button.admin__instance-btn.admin__instance-btn--edit Править
                button.admin__instance-btn.admin__instance-btn--delete Удалить
          .admin-works__instance
            .admin-works__instance-image-block
              ul.admin-works__instance-desc__tags
                li.admin-works__instance-desc__tag HTML
                li.admin-works__instance-desc__tag CSS
                li.admin-works__instance-desc__tag Javascript
              img(src=('../images/content/2.jpg') alt='work-pic').admin-works__instance-image
            .admin-works__instance-desc
              .admin-works__instance-desc__title Сайт школы образования
              .admin-works__instance-desc__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a(href='http://loftschool.ru').admin-works__instance-desc__link http://loftschool.ru
              .admin-works__instance-desc__btns
                button.admin__instance-btn.admin__instance-btn--edit Править
                button.admin__instance-btn.admin__instance-btn--delete Удалить
          .admin-works__instance
            .admin-works__instance-image-block
              ul.admin-works__instance-desc__tags
                li.admin-works__instance-desc__tag HTML
                li.admin-works__instance-desc__tag CSS
                li.admin-works__instance-desc__tag Javascript
              img(src=('../images/content/3.jpg') alt='work-pic').admin-works__instance-image
            .admin-works__instance-desc
              .admin-works__instance-desc__title Сайт школы образования
              .admin-works__instance-desc__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a(href='http://loftschool.ru').admin-works__instance-desc__link http://loftschool.ru
              .admin-works__instance-desc__btns
                button.admin__instance-btn.admin__instance-btn--edit Править
                button.admin__instance-btn.admin__instance-btn--delete Удалить
          .admin-works__instance
            .admin-works__instance-image-block
              ul.admin-works__instance-desc__tags
                li.admin-works__instance-desc__tag HTML
                li.admin-works__instance-desc__tag CSS
                li.admin-works__instance-desc__tag Javascript
              img(src=('../images/content/4.jpg') alt='work-pic').admin-works__instance-image
            .admin-works__instance-desc
              .admin-works__instance-desc__title Сайт школы образования
              .admin-works__instance-desc__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a(href='http://loftschool.ru').admin-works__instance-desc__link http://loftschool.ru
              .admin-works__instance-desc__btns
                button.admin__instance-btn.admin__instance-btn--edit Править
                button.admin__instance-btn.admin__instance-btn--delete Удалить
    
    section.admin-reviews.admin-container
      .admin__title-section
        .admin__title Блок «Отзывы»
      .admin-reviews__main-block
        .admin-reviews__edit-block
          .admin-reviews__edit-block__title Новый отзыв
          .admin-reviews__edit-block__container
            .admin-reviews__edit-photo.admin-reviews__edit-photo--wait
              button.admin-reviews__edit-photo__edit-btn Добавить фото
            .admin-reviews__edit-photo.admin-reviews__edit-photo--preview
              img(src=('../images/content/userfiles/Di51WMRvTek.jpg') alt='reviews-author-avatar').admin-reviews__edit-photo__image
              button.admin-reviews__photo__change-btn Изменить фото
            form.admin-reviews__edit-data
              .admin-reviews__edit-data__two-rows
                .admin-reviwes__edit-data__row
                  label.admin-reviews__edit-data__label Имя автора
                  input.admin-reviews__edit-data__text
                .admin-reviwes__edit-data__row
                  label.admin-reviews__edit-data__label Титул автора
                  input.admin-reviews__edit-data__text
              .admin-reviwes__edit-data__textreview
                label.admin-reviews__edit-data__label Отзыв
                textarea.admin-reviews__edit-data__textarea(name="textarea", rows="3", placeholder="Ваш отзыв")
              .admin-reviews__edit-data__btns
                button.admin-reviews__edit-data__cancel-btn Отмена
                button.admin-reviews__edit-data__save-btn Сохранить
        .admin-reviews__instance-block
          button.admin-reviews__add-btn
            .admin-reviews__add-btn__icon
            p Добавить отзыв
          .admin-reviews__instance.admin-reviews__instance--edited
            .admin-reviews__instance__author-data
              img(src=('../images/content/userfiles/o8CzkPF3Ai8.jpg') alt='author-pic').admin-reviews__instance__author-photo
              .admin-reviews__instance__author-info
                .admin-reviews__instance__author-info-name Дмитрий Ковальчук
                .admin-reviews__instance__author-info-position Основатель LoftSchool
            .admin-reviews__instance__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            .admin-reviews__instance__btns
              button.admin__instance-btn.admin__instance-btn--edit Править
              button.admin__instance-btn.admin__instance-btn--delete Удалить
          .admin-reviews__instance
            .admin-reviews__instance__author-data
              img(src=('../images/content/userfiles/Di51WMRvTek.jpg') alt='author-pic').admin-reviews__instance__author-photo
              .admin-reviews__instance__author-info
                .admin-reviews__instance__author-info-name Владимир Сабанцев
                .admin-reviews__instance__author-info-position Преподаватель
            .admin-reviews__instance__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
            .admin-reviews__instance__btns
              button.admin__instance-btn.admin__instance-btn--edit Править
              button.admin__instance-btn.admin__instance-btn--delete Удалить
          .admin-reviews__instance
            .admin-reviews__instance__author-data
              img(src=('../images/content/userfiles/o8CzkPF3Ai8.jpg') alt='author-pic').admin-reviews__instance__author-photo
              .admin-reviews__instance__author-info
                .admin-reviews__instance__author-info-name Дмитрий Ковальчук
                .admin-reviews__instance__author-info-position Основатель LoftSchool
            .admin-reviews__instance__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей! Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            .admin-reviews__instance__btns
              button.admin__instance-btn.admin__instance-btn--edit Править
              button.admin__instance-btn.admin__instance-btn--delete Удалить
          .admin-reviews__instance
            .admin-reviews__instance__author-data
              img(src=('../images/content/userfiles/Di51WMRvTek.jpg') alt='author-pic').admin-reviews__instance__author-photo
              .admin-reviews__instance__author-info
                .admin-reviews__instance__author-info-name Владимир Сабанцев
                .admin-reviews__instance__author-info-position Преподаватель
            .admin-reviews__instance__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
            .admin-reviews__instance__btns
              button.admin__instance-btn.admin__instance-btn--edit Править
              button.admin__instance-btn.admin__instance-btn--delete Удалить

</template>
