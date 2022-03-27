<template>
    <div class="sidebar">
        <div class="logo">
            <img src="@/assets/logo.png" alt="">
        </div>
        <ul class="fa-ul">
            <li><i class="fa fa-house"></i>Home</li>
            <li><i class="fa fa-book"></i>CSCI2720</li>
            <li><i class="fa fa-book"></i>ENGG1110</li>
            <li><i class="fa fa-book"></i>CSCI3100</li>
        </ul>
        <hr class="solid" />
        <ul class="fa-ul">
            <li onclick="location.href='./chat'"><i class="fa-solid fa-message"></i>Chat</li>
            <li><i class="fa fa-user-gear"></i>Setting</li>
            <li><i class="fa fa-right-from-bracket"></i>Logout</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CourseSideBar',
}
</script>

<style>

    .sidebar {
        background-color: #F0F0F0;
        padding-top: 5vh;
        height:100vh;
        
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        text-align: center;
        margin-left: 0px;
        margin-right: 0px;
    }

    .logo {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }



</style>