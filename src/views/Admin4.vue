/**** * src/App.vue ***/

<template>
    <admin4 v-bind="admin4Data" />
</template>

<script>    
    export default {
        name: "App",
        components: {
            Admin4,
        }, 
        data() {
            return (admin4Data };
        },
    };
    
    const xButtonData = {
        text: "Delete",
    };

    const rowCellData = {
        xButtonProps: xButtonData,
    };
    
    const typeRowContent Button2nd TextFalseIcoData = {
        rowCellProps: rowCellData,
    };

    const rowCel121Data = {
        className: "",
    };
    
    const typeRowContentText2ndTextFalseIconL1Data = {
        rowCel12Props: rowCell21 Data,
    };
    
    const rowCe1122Data = {
        className: "row-cell-2",/
    };

    const typeRowContent Text2ndTextFalseIconL2Data = {
        className: "cell-2",
        rowCell2Props: rowCell22Data,
    };
    
    const rowMainrecomponentizeDuplicateData = {
        typeRowContentButton2ndTextFalseIco: typeRowContentButton2ndTextFalseIcoData, 
        typeRowContentText2ndTextFalseIconL: typeRowContentText2ndTextFalseIconL1Data, 
        typeRowContentText2ndTextFalseIconL2: typeRowContentText2ndTextFalseIconL2Data,
    };
    
    const admin4Data = {
        userProfile: "User Profile",
        course: "Course",
        place: "Forum",
        userCoursel: "User Course",
        chat: "Chat",
        logout: "Logout",
        logo: "logo.png",
        admin: "Admin",
        userCourse2: "User Course",
        rowMainrecomponentizeDuplicateProps: rowMainrecomponentizeDuplicateData,
    };
</script>

/***** src/components/Admin4.vue ***/

<template>
    <div class="container-center-horizontal">
        <div class="admin4 screen">
            <div class="overlap-group4">
                <div class="overlap-group-container"> 
                    <div class="overlap-group border-2px-gallery">
                        <div class="flex-row">
                            <ing class="icon-sidebar-inactive-5-agents" src="icon-sidebar-inactive-5-agents.svg" /> 
                            <div class="user-profile poppins-normal-gunsmoke-14px">{{ userProfile }}</div>
                        </div>
                        <div class="flex-row-1">
                            <img class="icon-sidebar-inactive" src="icon-sidebar-inactive-6-articles.svg" />
                            <div class="course poppins-normal-gunsmoke-14px">{{ course } }</div>
                        </div>
                        <div class="flex-row-2">
                            <img class="icon-sidebar-inactive" src="icon-sidebar-inactive-3-ideas.svg" />
                            <div class="place poppins-normal-gunsmoke-14px">{{ place }}</div>
                        </div>
                        <div class="overlap-group1">
                            <img class="group-2 " src="group-2.svg" />
                            <div class="user-course poppins-normal-gunsmoke-14px">{{ userCoursel}} >></div>
                        </div>
                        <div class="flex-row-3">
                            <img class="group-15" src=" group-15.svg" /> 
                            <div class="chat poppins-normal-gunsmoke-14px">{{ chat }}</div>
                        </div>
                        <div class="flex-row-4">
                            <img class="vector" src="vector-1.svg" />
                            <div class="logout poppins-normal-gunsmoke-14px">{{ logout } }</div>
                        </div>
                    </div>
                    <div class="overlap-group2 border-2px-black-haze">
                        <img class="logo" :src = "logo" />
                        <div class="admin poppins-normal-gunsmoke-14px">{{ admin }}</div> 
                        <img class="mask-group" src="mask-group.svg" />
                    </div>
                </div>
                <div class="full-table">
                    <div class="user-course-1 valign-text-middle sourcesanspro-bold-charade -20px">{{ userCourse2 } }</div>
                    <div class="table border-1px-mystic">
                        <img class="header" src="header.svg" />
                         <row-mainrecomponentize-duplicate
                            :typeRowContentButton2ndTextFalseIco= "
                                 rowMainrecomponentizeDuplicateProps.typeRowContentButton2ndTextFalseIco
                            "
                            :typeRowContentText2ndTextFalseIconL= " 
                                rowMainrecomponentizeDuplicateProps.typeRowContentText2ndTextFalseIconL
                            "
                            :typeRowContentText2ndTextFalseIconL2= "
                                rowMainrecomponentizeDuplicateProps.typeRowContentText2ndTextFalseIconL2
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
        name: "Admin4",
        components: {
            RowMainrecomponentizeDuplicate,
        },
        props: [
            "userProfile",
            "course",
            "place",
            "userCourse1",
            "chat",
            "logout", 
            "logo",
            "admin",
            "userCourse2",
            "rowMainrecomponentizeDuplicateProps",
        ],
    };
</script>

<style>
    .admin4 {
        align-items: flex-start;
        background-color: var(--zumthor ); 
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
        left: 0;
        position: absolute;
        top: 0;
        width: 1442px;
    }
    
    .overlap-group {
        align-items: center; 
        background-color: var (--white); 
        display: flex; 
        flex-direction: column; 
        left: -2px;
        min-height: 1028px; 
        padding: 119px 2px; 
        position: absolute; 
        width: 237px;
        top: -2px;
    }
    
    .flex-row {
        align-items : center;
        display: flex;
        height: 20px; margin-right: 23px;
        min-width: 136px;
    }
    
    .icon-sidebar-inactive-5-agents,
    .group-2 {
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
        margin-top: 40px; 
        min-width: 136px;
    }
    
    .icon-sidebar-inactive { 
        height : 15px; 
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
    
    .flex-row-2 {
        align-items: flex-start; 
        display: flex; 
        margin-left: 17.03px; 
        margin-top: 33px; 
        min-width: 176px;
        height: 27px;
    }

    .place,
    .logout {
        letter-spacing: 0; 
        margin-left: 22px; 
        min-height: 27px; 
        width: 139px;
    }
    
    .overlap-group1 {
        align-items: center;
        background-image: url(rectangle-274.svg);
        background-size: 100% 100%;
        display: flex;
        height: 54px;
        justify-content: flex-end;
        margin-right: 12px; 
        padding: 9.9px 8px;
        margin-top: 16px;
        min-width: 221px;
    }
    
    .user-course {
        align-self: flex-end; 
        min-height: 27px;
        letter-spacing: 0;
        margin-left: 22px;
        width: 139px;
    }

    .flex-row-3 {
        align-items: flex-start;
        display: flex;
        height: 27px;
        margin-right: 23.97px;
        margin-top: 23px; 
        min-width: 137px;
    }
    
    .group-15 {
        height: 16px;
        margin-top: 2px; 
        width: 16px;
    }

    .flex-row-4 { 
        align-items: flex-start; 
        margin-left: 15.06px; 
        margin-top: 33px; 
        min-width: 176px;
        display: flex; 
        height: 27px;
    }
    
    .vector {
        height: 16px; 
        margin-top: 2px;
        width: 15px;
    }
    
    .overlap-group2 { 
        align-items : center; 
        background-color: var(--white); 
        height: 87px; 
        left: -2px;
        display: flex;
        min-width: 1444px;
        padding: 4px 28.9px;
        position: absolute;
        top: -2px;
    }

    .logo {
        align-self: flex-end; 
        width: 173px;
        height: 74px; 
        object-fit: cover;
    }
    
    .admin {
        letter-spacing: 0;
        margin-bottom: 5px;
        line-height: 24px; 
        width: 124px;
        margin-left: 1018px; 
        min-height: 24px;
        text-align: right; 
        white-space: nowrap;
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
    
    .user-course-1 { 
        height: 25px; 
        letter-spacing: 0; 
        line-height: 25px;
        white-space: nowrap
    }
    
    .table {
        align-items: flex-start; 
        background-color: var(--white);
        border-radius: 4px; 
        display: flex;
        flex-direction: column; 
        height: 112px;
        margin-top: 24px;
        overflow: hidden; 
        position: relative; 
        width: 1097px; 
    }
    
    .header {
        height: 48px; width: 1097px;
    }
</style>

/****** src/components/RowMainrecomponentizeDuplicate.vue******/

<template>
    <div class="row-main-recomponentize-duplicate">
        <type-row-content-button2nd-text-false-ico
        :rowCellProps = "typeRowContentButton2ndTextFalseIco.rowCellProps"
        />
        <type-row-content-text2nd-text-false-icon-1
            :rowCe112Props = "typeRowContentText2ndTextFalseIconL.rowCel12 Props"
        />
        <type-row-content-text2nd-text-false-icon-1 
        :className = "typeRowContentText2ndTextFalseIconL2.className"
        :rowCell2Props = "typeRowContentText2ndTextFalseIconL2.rowCe112Props"
        />
        <type-row-content-icon2nd-text-false-icon-1 />
    /div>
</template>

<script>
    export default {
        name: "RowMainrecomponentizeDuplicate",
        components: {
            TypeRowContentButton2ndTextFalseIco,
            TypeRowContentText2ndTextFalseIconL, 
            TypeRowContentIcon2ndTextFalseIconL,
        },
        props: ["typeRowContentButton2ndTextFalseIco", "typeRowContent Text2ndTextFalseIconL2"],
    };
</script>

<style>
    .row-main-recomponentize-duplicate {
        align-items: flex-start;
        display: flex;
        height: 64px;
        position: relative;
        width: 1097px;
        "typeRowContentText2ndTextFalseIconL",
    }
</style>

/****** src/components/TypeRowContentButton2ndTextFalseIco.vue****/

<template>
    <div class="cell">
        <row-cell :xButtonProps = "rowCellProps.xButtonProps"/>
    </div>
</template>

<script>
    export default {
        name: "TypeRowContentButton2ndTextFalseIco",
        components: {
            RowCell,
        },
        props: ["rowCellProps" ],
    };
</script>

<style>>
    .cell {
        align-items: flex-start;
        display: flex;
        height: 64px;
        min-width: 80px;
        position: relative;
    }
</style>

/****** * src/components/RowCell.vue *************/

<template>
    <div class="row-cell">
        <x-button :text= "xButtonProps.text"/>
    </div>
</template>

<script>
    export default {
        name: "RowCell",
        components: {
            XButton,
        }
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

/******* src/components/XButton.vue *****/

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
        align-items: center;
        background-color: var(--gunsmoke);
        border-radius: 4px;
        display: flex;
        height: 25px;
        overflow: hidden;
        padding: 0 16px;
        width: 57px;
    }

    .text {
        height: 9px;
        letter-spacing: 0;
        line-height: 9px;
        min-width: 25px; 
        text-align: center;
        white-space: nowrap;
    }
</style>

/*******src/components/TypeRowContentText2ndTextFalseIconL.vue *****/

<template>
    <div class="[`cell-1`, className || ``]"> 
        <row-cell2 :className = "rowCell2Props.className" />
    </div>
</template>

<script>
    export default {
        name: "TypeRowContentText2ndTextFalseIconL",
        components: {
            RowCel12,
        },
        props: ["className", "rowCell2Props"],
    };
</script>

<style>
    .cell-1 {
        align-items: flex-start;
        display: flex;
        height: 64px; 
        position: relative;
        min-width: 724px;
    }

    .cell-1.cell-2 {
        min-width: 245px;
    }
</style>

/***** src/components/RowCell2.vue ******/

<template>
    <div class="[`row-cell-1`, className || ``]">
        <div class="primary-text valign-text-middle sourcesanspro-normal-charade -14px">
            Text Cell
        </div>
    </div>
</template>

<script>
    export default {
        name: "RowCell2",
        props: ["className"],
</script>

<style>
    .row-cell-1 {
        align-items: center;
        display: flex;
        height: 64px;
        padding:0 12px;
        width: 724px;
    }
    
    .primary-text {
        height: 21px;
        letter-spacing: 0;
        line-height: 21px;
        white-space: nowrap;
        width: 700px;
        .row-cell-1.row-cell-2 {
            width: 245px;
    }
    
    .row-cell-1.row-cell-2 .primary-text {
        width: 221px;
    }
</style>
/***** src/components/TypeRowContentIcon2ndTextFalseIconL.vue****/

<template>
    <div class="cell-3">
        <row-cel13 />
    </div>
</template>

<script>
    export default {
        name: "TypeRowContentIcon2ndTextFalseIconL",
        components: {
            RowCel13,
        },
    };
</script>

<style>
    .cell-3 {   
        align-items: flex-start;
        display: flex;]
        height: 64px;
        min-width: 48px;
        position: relative;
    }
</style>

/** src/components/RowCel13.vue *****/

<template>
    <div class="row-cell-3">
        <img class="icon-left-1" src="icon-left.svg" />
    </div>
</template>

<script>
    export default {
        name: "RowCel13",
    };
</script>

<style>
    .row-cell-3 {
        align-items: center;
        display: flex;
        height: 64px;
        padding: 0 16px;
        width: 48px;
    }
    
    .icon-left-1 {
        height: 16px;
        width: 16px;
    }
</style>

/****** src/main.js import App from 
./App.vue"; import
"../styleguide.css" import "../globals.css" Vue.config.productionTip = false; new Vue({ render: h =>
h(App), }). $mount ("#app");/