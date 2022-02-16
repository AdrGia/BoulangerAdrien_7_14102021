
<template>
	<div class="alert" v-blind class="alertType" role="alert">{{ alertMessage }}</div>
</template>

<script>

export default {
	name: "Alert",
	props: ['alertType', 'alertMessage'],
};

</script>