<template>
  <base-card>
    <!-- HTML under this template will go in the 'header' slot defined in base-card -->
    <template #header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <template #default>
      <p>{{ infoText }}</p>
    </template>
  </base-card>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>
