<template>
    <div class="sidebar">
        <div class="logo">
            <img src="@/assets/logo.png" alt="">
            <span style="color: white">CUTE</span>
        </div>
        <hr/>
        <hr/>
        <ul class="fa-ul">
            <li><i class="fa fa-pie-chart"></i>&ensp;Daily Feeds</li>
            <li><i class="fa fa-table"></i>&ensp;Timetable Planner</li>
            <li><i class="fas fa-lightbulb"></i>&ensp;Forum</li>
            <li><i class="fa fa-users"></i>&ensp;Chatroom</li>
            <li><i class="fa fa-pencil-square"></i>&ensp;Course Evaluation</li>
            <li><i class="fa fa-video-camera"></i>&ensp;Video Streaming</li>
        </ul>
        <hr class="solid" />
        <ul class="fa-ul">
            <li><i class="material-icons">&#xe8b8;</i>Settings</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
}
</script>

<style>
    .sidebar {
        background-color: #363740;
        height: 100%;
        padding-top: 5vh;
        text-align: center;
        margin-left: 0px;
        margin-right: 0px;
    }

    .logo {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    img {
        margin: 0.5vw;
        padding: 0.5vh
    }


    ul.fa-ul {
        text-align: left;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    ul.fa-ul li {
        padding-top: 1vh;
        padding-bottom: 1vh;
        padding-left: 2vw;
        color: #A4A6B3;
        list-style: none;
        width: 100%;
        display: inline-block;
    }

    ul li:hover {
        opacity: 0.5;
        transition: 0.3s;
        border-left: solid 0.5vw silver;
    }


    hr.solid {
        border-top: 1px solid #DFE0EB;
        max-width: unset;
    }

    i {
        width: 2vw;
        height: 2vh;
    }


</style>