/**
 * @Author: meganmhl
 * @Description: /components/tabmenu/Menu.vue is a component of course related features (e.g. CourseReview.vue, Forum.vue, Members.vue).
 *              It navigates pages within a predefined course.
 * @Date: 2022-04-30 13:06:30
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 20:37:42
 */

<template>
  <!-- TabMenu component from PrimeVUE -->
  <TabMenu :model="items" activeIndex="active" />
</template>

<script>
export default {
  name: 'Menu',
  props: ['courseCode'],
	data() {
		return {
      active: 1,
			items: [
                {label: 'Course Review', icon: 'pi pi-fw pi-info-circle', to: '/coursereview' },
                {label: 'Forum', icon: 'pi pi-fw pi-globe', to: '/forum'},
                {label: 'Members', icon: 'pi pi-fw pi-users', to: '/members'}
            ],
		}
	},

}
</script>

<style scoped>
</style>