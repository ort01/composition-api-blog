<template>
  <div class="spin"></div>
</template>

<style>
.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: rgb(196, 128, 151);
  animation: spin 1s ease infinite;
}

/* "spin" is a custom name; "to" is a property */
@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>