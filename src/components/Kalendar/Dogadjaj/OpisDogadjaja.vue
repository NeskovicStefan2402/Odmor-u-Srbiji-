<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper container">
        <div class="modal-container">
          <Naslov :dogadjaj="dogadjaj" />
          <hr />
          <Opis :dogadjaj="dogadjaj" />
          <hr />
          <Nagrade :nagrade="dogadjaj.nagrade" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Naslov from "./Naslov.vue";
import Opis from "./Opis.vue";
import Nagrade from "./Nagrade/Nagrade.vue";
export default {
  props: ["dogadjaj"],
  components: {
    Naslov,
    Opis,
    Nagrade
  }
};
</script>

<style scoped>
hr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.313) !important;
  width: 100% !important;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  /* left: 20%;
  width: 50%; */
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.5); */
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  /* width: 300px; */
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header {
  text-align: center;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-body {
  margin: 20px 0;
}
.modal-default-button {
  float: right;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>