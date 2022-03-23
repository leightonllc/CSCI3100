/************ src/App.vue *****/

<template>
    <admin1 v-bind="admin1Data" />
</template>

<script>
    export default {
        name: "App",
        components: {
            Admin1,
        },
    data () {
        return { admin1Data };
        },
    };
    
    const xButtonData = {
        text: "Delete",
    };

    const rowCellData =
        xButtonProps: xButtonData,
    };

    const typeRowContentButton2ndTextFalseIcoData = {
        rowCellProps: rowCellData,
    };

    const rowCe1121Data ={
        className: "",
    };

    const typeRowContentText2ndTextFalseIconL1Data{
        rowCe112Props: rowCell21 Data, 
    };

    const rowCell22Data = {
        className: "row-cell-2",
    };

    const typeRowContentText2ndTextFalseIconL2Data = {
        className: "cell-2",
        rowCel12Props: rowCe1122Data,
    };

    const rowCell24Data = {
        className: "",
    };

    const typeRowContentText2ndTextFalseIconL4Data = {
        className: "cell-4",
        rowCe112Props: rowCell24Data,
    };
    
    const rowCell25Data {
        className :
    };
    
    const typeRowContentText2ndTextFalseIconL5Data = {
        className: "cell-5",
        rowCe112Props: rowCell25Data,
    };

    const rowCe1126Data = {
        className :
    };

    const typeRowContentText2ndTextFalseIconL6Data = {
        className: "cell-6",
        rowCe112Props: rowCell26Data,
    };

    const rowMainrecomponentizeDuplicate3Data = {
        typeRowContentButton2ndTextFalseIco: typeRowContentButton2ndTextFalseIcoData, 
        typeRowContentText2ndTextFalseIconL: typeRowContentText2ndTextFalseIconL1Data, 
        typeRowContentText2ndTextFalseIconL2: type RowContent Text2ndTextFalseIconL2Data, 
        typeRowContentText2ndTextFalseIconL3: typeRowContentText2ndTextFalseIconL3Data, 
        typeRowContentText2ndTextFalseIconL4: typeRowContentText2ndTextFalseIconL4Data, 
        typeRowContentText2ndTextFalseIconL5: typeRowContentText2ndTextFalseIconL5Data, 
        typeRowContentText2ndTextFalseIconL6: typeRowContentText2ndTextFalseIconL6Data,
    };

    const admin1 Data = {
        user Profile: "User Profile",
        course: "Course"
        place: "Forum",
        userCourse: "User Course"
        chat: "Chat",
        logout: "Logout",
        logo: "logo.png",
        admin: "Admin",
        user: "User",
        rowMainrecomponentizeDuplicateProps: rowMainrecomponentizeDuplicate3Data,
    };

</script>
/*********** * src/components/Admin1.vue *******************/

<template>
    <div class="container-center-horizontal">
        <div class="admin1 screen">
            <div class="overlap-group4">
                <div class="overlap-group-container">
                    <div class="overlap-group border-2px-gallery">
                        <div class="overlap-group1">
                            <img class="icon-sidebar-inactive-5-agents" src="icon-sidebar-inactive-5-agents.svg" /> 
                            <div class="user-profile poppins-normal-gunsmoke-14px">{{ userProfile }}</div>
                        </div>
                        <div class="flex-row-1">
                            <img class="icon-sidebar-inactive-6-articles" src="icon-sidebar-inactive-6-articles.svg" /> 
                            <div class="course poppins-normal-gunsmoke-14px">{{ course }} </div>
                        </div>
                        <div class="flex-row">
                            <img class="icon-sidebar-inactive-3-ideas" src= "icon-sidebar-inactive-3-ideas.svg" /> 
                            <div class="place poppins -normal-gunsmoke-14px">{{ place }}</div>
                        </div>
                        <div class="flex-row">
                            <img class="group-2" src="group-2.svg" />
                            <div class="user-course poppins-normal-gunsmoke-14px">{{ userCourse }} </div>
                            </div>
                        <div class="flex-row-2">
                            <img class="group-15" src=" group-15.svg" />
                            <div class="chat poppins-normal-gunsmoke-14px">{{ chat }}</div>
                        </div>
                        <div class="flex-row-3">
                            <img class="vector" src="vector-1.svg" />
                            <div class="logout poppins-normal-gunsmoke-14px">{{ logout }}</div>
                        </div>
                    </div>
                    <div class="overlap-group2 border-2px-black-haze">
                        <img class="logo"src="logo" />
                        <div class="admin poppins-normal-gunsmoke-14 px">{{ admin }}</div>
                        <img class="mask-group" src="mask-group.svg" />
                    </div>
                </div>
                <div class="full-table">
                    <div class="user valign-text-middle sourcesanspro-bold-charade-20px">{{ user}}</div>
                    <div class="table border-1px-mystic">
                        <img class= "header" src="header.svg" />
                        <row-mainrecomponentize-duplicate3 
                            :typeRowContentButton2ndTextFalseIco="
                                rowMainrecomponentizeDuplicateProps.typeRowContentButton2ndTextFalseIco
                            "
                            :typeRowContentText2ndTextFalseIconL="
                                rowMainrecomponentizeDuplicateProps.typeRowContentText2ndTextFalseIconL
                            "
                            :typeRowContentText2ndTextFalseIconL=" 
                                rowMainrecomponentizeDuplicateProps.typeRowContentText2ndTextFalseIconL
                            "
                            :typeRowContentText2ndTextFalseIconL2=" 
                                rowMainrecomponentizeDuplicateProps.typeRowContentText2ndTextFalseIconL2
                            "
                            :typeRowContentText2ndTextFalseIconL3="
                                rowMainrecomponentizeDuplicateProps.typeRowContentText2ndTextFalseIconL3
                            "
                            :typeRowContentText2ndTextFalseIconL4="
                                rowMainrecomponentizeDuplicateProps.typeRowContentText2ndTextFalseIconL4
                            "
                            :typeRowContentText2ndTextFalseIconL5=" 
                                rowMainrecomponentizeDuplicateProps.typeRowContentText2ndTextFalseIconL5
                            "
                            :typeRowContentText2ndTextFalseIconL6="
                                rowMainrecomponentizeDuplicateProps.typeRowContentText2ndTextFalseIconL6
                            "
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Admin1"
        components: {
            RowMainrecomponentizeDuplicate3,
        },
        props: [
            "userProfile",
            "course"
            "place",
            "userCourse",
            "chat",
            "logout",
            "logo",
            "admin",
            "user", 
            "rowMainrecomponentizeDuplicateProps",
        ],
    };
</script>

<style>
    .admin1 { 
        align-items: flex-start;
        background-color: var(--zumthor); 
        display: flex; 
        overflow: hidden; 
        width: 1440px;
    }
    
    .overlap-group4 { 
        height: 1024px; 
        position: relative;
        width: 1442px;
    }
    
    .overlap-group-container { 
        height: 1024px; 
        position: absolute;
        left: 0;
        top: 0;
        width: 1442px;
    }
    
    .overlap-group {
        align-items: center;
        display: flex;
        left: -2px;
        background-color: var(--white); 
        flex-direction: column; 
        min-height: 1028px; 
        padding: 102px 2px; 
        position: absolute;
        top: -2px;
        width: 237px;
    }
    
    .overlap-group1 {
        align-items : center; 
        background-image: url(rectangle-274.svg); 
        background-size: 100% 100%; d
        isplay: flex; 
        height: 54px;
        margin-right: 12px; 
        min-width: 221px; 
        padding: 0 37px;
    }
    
    .icon-sidebar-inactive-5-agents { 
        height: 15px; 
        margin-top: 1px;
        width: 15px;
    }
    
    .user-profile { 
        letter-spacing: 0; 
        margin-left: 22px; 
        min-height: 20px; 
        width: 99px;
    }
    
    .flex-row-1 { 
        align-items: flex-start; 
        display: flex; 
        height: 27px; 
        margin-right: 22.97px; 
        margin-top: 23px;
        min-width: 136px;
    }
    
    .icon-sidebar-inactive-6-articles,
    .icon-sidebar-inactive-3-ideas,
    .group-2 {
        height: 15px; 
        margin-top: 3px;
        width: 15px;
    }

    .course,
    .chat {
        letter-spacing: 0; 
        margin-left: 22px; 
        min-height: 27px; 
        width: 99px;
    }
    
    z.flex-row {
        align-items: flex-start; 
        display: flex; 
        height: 27px; 
        margin-left: 17.03px; 
        margin-top: 33px; 
        min-width: 176px;
    }
    
    .place,
    .user-course,
    .logout{ 
        letter-spacing: 0; 
        margin-left: 22px; 
        min-height: 27px; 
        width: 139px;
    }
    
    .flex-row-2 {
        align-items: flex-start; 
        display: flex; 
        height: 27px; 
        margin-right: 23.97px; 
        margin-top: 33px; 
        min-width: 137px;
    }
    
    .group-15 {
        height: 16px; 
        margin-top: 2px; 
        width: 16px; 
    }
    
    .flex-row-3 { 
        align-items: flex-start;
        display: flex; 
        height: 27px;
        margin-left: 15.06px; 
        margin-top: 33px; 
        min-width: 176px; 
    }
    
    .vector {
        height: 16px; 
        margin-top: 2px;
        width: 15px;
    }
    
    .overlap-group2 {
        align-items: center;
        background-color: var(--white); 
        display: flex; 
        left: -2px;
        height: 87px;
        min-width: 1444px; 
        padding: 4px 28.9px; 
        position: absolute; 
        top: -2px;
    }
    
    .logo {
        align-self: flex-end; 
        height: 74px; 
        object-fit: cover; 
        width: 173px;
    }
    
    .admin {
        letter-spacing: 0;
        line-height: 24px; 
        margin-bottom: 5px; 
        margin-left: 1018px; 
        min-height: 24px; 
        text-align: right; 
        white-space: nowrap; 
        width: 124px;
    }

    .mask-group {
        height: 40px; 
        margin-bottom: 5px; 
        margin-left: 21px;
        width: 40px;
    }

    .full-table {
        align-items: flex-start;
        display: flex; 
        flex-direction: column;
        height: 161px;
        left: 285px; 
        position: absolute;
        top: 140px;
        width: 1097px;
    }
    
    .user {
        height: 25px;
        letter-spacing: 0; 
        line-height: 25px; 
        white-space: nowrap;
    }
    
    .table {
        align-items: flex-start;
        background-color: var(--white);
        border-radius: 4px; 
        display: flex; 
        flex-direction: column; 
        height: 112px;
        position: relative; 
        margin-top: 24px; 
        overflow: hidden;
        width: 1097px;
    }
    
    .header { 
        height: 48px; 
        width: 1097px;
    }
</style>

/****************************************** * src/components/RowMainrecomponentizeDuplicate3. vue

<template>
    <div class="row-main-recomponentize-duplicate">
        <type-row-content-button2nd-text-false-ico
        :rowCellProps="typeRowContentButton2ndTextFalseIco.rowCellProps"
        />
    <type-row-content-text2nd-text-false-icon-1
        :rowCe112Props="typeRowContentText2ndTextFalseIconL.rowCell2Props"
    />
    <div class="cell-container">
        <type-row-content-text2nd-text-false-icon-1
            :className="typeRowContentText2ndTextFalseIconL2.className"
            :rowCe112Props="typeRowContentText2ndTextFalseIconL2.rowCell2Props"
        />
        <type-row-content-text2nd-text-false-icon-1
            :className="typeRowContentText2ndTextFalseIconL3.className" 
            :rowCe112Props="typeRowContentText2ndTextFalseIconL3.rowCell2Props"
        />
        <type-row-content-text2nd-text-false-icon-1
            :className="typeRowContentText2ndTextFalseIconL4.className"
            :rowCe112Props="typeRowContentText2ndTextFalseIconL4.rowCell2Props"
        />
        <type-row-content-text2nd-text-false-icon-1
            :className="typeRowContentText2ndTextFalseIconL5.className" 
            :rowCe112Props="typeRowContentText2ndTextFalseIconL5.rowCell2Props"
        />

        <type-row-content-text2nd-text-false-icon-1
            :className="typeRowContentText2ndTextFalseIconL6.className"
            :rowCe112Props="typeRowContentText2ndTextFalseIconL6.rowCe112Props"
        />
        </div>
        <type-row-content-icon2nd-text-false-icon-1 />
    </div>
</template>

<script>
    export default {
        name: "RowMainrecomponentizeDuplicate3",
        components: {
            TypeRowContentButton2ndTextFalseIco, 
            TypeRowContentText2ndTextFalseIconL, 
            TypeRowContentIcon2ndTextFalseIconL,
        },
        props: [
            "typeRowContentButton2ndTextFalseIco", 
            "typeRowContentText2ndTextFalseIconL", 
            "typeRowContentText2ndTextFalseIconL2", 
            "typeRowContentText2ndTextFalseIconL3", 
            "typeRowContentText2ndTextFalseIconL4", 
            "typeRowContentText2ndTextFalseIconL5", 
            "typeRowContentText2ndTextFalseIconL6",
        ],
    };
</script>

<style>
    .row-main-recomponentize-duplicate { 
        align-items: flex-start;
        dispLay: flex; 
        position: relative; 
        width: 1097px;
    }
    
    .cell-container {
        height: 64px;
        position: relative;
        width: 824px;
    }
</style>

/********** ** src/components/TypeRowContentButton2ndTextFalseIco.vue **********/

<template>
    <div class="cell">
        <row-cell :xButton Props="rowCellProps.xButtonProps"
    </div>
</template>

<script>
    export default {
        name: "TypeRowContentButton2ndTextFalseIco",
        components: {
            RowCell,
        },
        props: ["rowCellProps"],
    };
</script>

<style>
    .cell {
        align-items: flex-start;
        display: flex;
        height: 64px;
        min-width: 80px;
        position: relative;
    }
</style>

/********** * src/components/RowCell.vue ***********/

<template>
    <div class="row-cell">
        <x-button:text="xButtonProps.text" />
    </div>
</template>

<script>
    export default {
        name: "RowCell",
        components: {
            XButton,
        },
        props: ["xButtonProps"],
    };
</script>

<style>
    .row-cell {
        align-items: center;
        display: flex;
        height: 64px;
        padding: 0 11.5px; 
        position: relative;
        width: 80px;
    }
</style>

/***** * src/components/XButton.vue ******/

<template>
    <div class="icon-left">
        <div class="text valign-text-middle sourcesanspro-semi-bold-white-9px"> 
            {{ text }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "XButton",
        props: ["text"],
    };
</script>

<style>
    .icon-left {
        align-items : center;
        background-color: var(--gunsmoke);
        border-radius: 4px;
        height: 25px;
        overflow: hidden;
        display: flex; 
        padding: 0 16px;
        width: 57px;
    }

    .text {
        height: 9px; letter-spacing: 0;
        line-height: 9px;
        min-width: 25px;
        text-align: center;
        white-space: nowrap;
    }
</style>

/****** src/components/TypeRowContentText2ndTextFalseIconL.vue ****/

<template>
    <div :class="[`cell-1`, className || ``]">
        <row-ce112 :className="rowCell2Props.className" />
    </div>
</template>

<script>
    export default {
        name: "TypeRowContentText2ndTextFalseIconL",
        components: {
            RowCe112,
        }, 
        props: ["className", "rowCell2Props"],
        };
</script>

<style>
    .cell-1 {
        align-items: flex-start;
        display: flex;
        height: 64px; 
        min-width: 145px;
        position: relative; 
    }
    
    .cell-1.cell-2 {
        left: 0;
        min-width: 245px;
        position: absolute;
        top: 0;
    }
    
    .cell-1.cell-3 {
        left: 245px;
        position: absolute; 
        top: 0;
    }
    
    .cell-1.cell-4 {
        position: absolute;
        left: 390px; 
        top: 0;
    }
    
    .cell-1.cell-5 {
        left: 535px; 
        position: absolute;
        top: 0;
    }
    
    .cell-1.cell-6 { 
        left : 679px;
        position: absolute;
        top: 0;
    }
</style>
/***** * src/components/RowCe112.vue ***/

<template>
    <div class="[`row-cell-1-1`, className || ``]">
        <div class="primary-text valign-text-middle sourcesanspro-normal-charade-14px">
            Text Cell
        </div>
    </div>
</template>

<script>
    export default {
        name: "RowCell2", 
        props: ["className"],
    };
</script>

<style>
    .row-cell-1-1 {
        align-items: center;
        height: 64px;
        display: flex; 
        width: 145px;
        padding:0 12px;
    }
    
    .primary-text {
        height: 21px;
        letter-spacing: 0;
        line-height: 21px;
        white-space: nowrap;
        width: 121px;
    }
    
    .row-cell-1-1.row-cell-2 {
        width: 245px;
    }
    
    .row-cell-1-1.row-cell-2 .primary-text {
        width: 221px;
    }
</style>

/********** * src/components/TypeRowContentIcon2ndTextFalseIconL.vue ****/

<template>
    <div class="cell-7">
        <row-ce113 />
    </div>
</template>

<script>
    export default {
        name: "TypeRowContentIcon2ndTextFalseIconL",
        components: {
            RowCe113,
        },
    };
</script>

<style>
    .cell-7 {
        align-items: flex-start;
        display: flex;
        height: 64px;
         min-width: 48px;
        position: relative; 
    }
</style>

/******* * src/components/RowCe113.vue *******/

<template>
    <div class="row-cell-3">
        <img class="icon-left-1" src="icon-left.svg" />
    </div>
</template>

<script>
    export default {
        name: "RowCell3",
    };
</script>

/**************** src/components/RowCe113.vue **********/

<template>
    <div class="row-cell-3">
        <img class="icon-left-1" src="icon-left.svg" />
    </div>
</template>

<script>
    export default {
        name: "RowCell3",
    };
</script>

<style>
    .row-cell-3 {
        align-items: center;
        display: flex;
        height: 64px;
        padding:0 16px;
        width: 48px;
    }

    .icon-left-1 {
        height: 16px;
        width: 16px;
    }
</style>
/*********** * src/main.js ******* ***********/ import App
from "./App.vue"; import
"../styleguide.css" import "../globals.css" Vue.config.production Tip = false; new Vue({ render: h =>
h (App), }). $mount ("#app");