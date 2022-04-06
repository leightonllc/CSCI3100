<template>
  <TabMenu :model="items" activeIndex="active" />
  <!-- <ul class="fa-ul">
    <li onclick="location.href='/coursereview'"><i class='pi pi-fw pi-info-circle'></i>Course Review</li>
    <li onclick="location.href='/forum'"><i class='pi pi-fw pi-globe'></i>Forum</li>
    <li onclick="location.href='/members'"><i class='pi pi-fw pi-users'></i>Members</li>
  </ul> -->
</template>

<script>
export default {
  name: 'Menu',
  props: ['courseCode'],
  created() {
    // console.log(this.courseCode);
  },
	data() {
		return {
      active: 1,
			items: [
                {label: 'Course Review', icon: 'pi pi-fw pi-info-circle', to: '/coursereview' },
                {label: 'Forum', icon: 'pi pi-fw pi-globe', to: '/forum'},
                {label: 'Members', icon: 'pi pi-fw pi-users', to: '/members'},
                //{label: 'Course Materials', icon: 'pi pi-fw pi-video', to: '/coursematerials'}
            ],
		}
	},

}
</script>

<style scoped>
  ul {
    padding: 0;
    margin: 0;
    border-bottom: 1px solid grey
  }
  li {
    display: inline-block;
    margin-top: 2vh;
    margin-left: 1vw;
    margin-right: 1vw;
    margin-bottom: 0.6vh;
  }
</style>