<template>
  <TabMenu :model="items" />
</template>

<script>
export default {
  name: 'Menu',
	data() {
		return {
			items: [
                {label: 'Course Review', icon: 'pi pi-fw pi-info-circle', to: '/coursereview'},
                {label: 'Forum', icon: 'pi pi-fw pi-globe', to: '/forum'},
                {label: 'Members', icon: 'pi pi-fw pi-users', to: '/members'},
                //{label: 'Course Materials', icon: 'pi pi-fw pi-video', to: '/coursematerials'}
            ]
		}
	},

}
</script>

<style scoped>
</style>