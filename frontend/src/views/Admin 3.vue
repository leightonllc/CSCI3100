/*********** *** src/App.vue
************/

<template>
    <admin3 v-bind="admin3Data" />
</template>

<script>
    export default {
        name: "App",
        components: {
            Admin3,
        }.
        data() {
            return (admin3Data );
        },
    };
    
    const xButtonData = { 
        text: "Delete",
    };
    
    const rowCellData = {
        xButtonProps: xButtonData,
    };

    const typeRowContent Button2ndText FalseIcoData = {
        rowCellProps: rowCellData,
    };
    
    const rowCel121Data = {
        className: "",
    };
    
    const typeRowContentText2ndTextFalseIconL1Data = {
        rowCel12Props: rowCell21 Data,
    };
    
    const rowCe1122Data = {
        lassName: "row-cell-2",
    };
    
    const typeRowContentText2ndTextFalseIconL2Data = {
        className: "cell-3",
        rowCell2Props: rowCell22Data,
    };

    const rowCell23Data = {
        className:
    };

    const typeRowContentText2ndTextFalseIconL3Data = { 
            rowCell2Props: rowCel123Data,
    };

    const rowCe1124Data {
        className: "",
    };

    const typeRowContentText2ndTextFalseIconL4Data = { 
        className: "cell-4",
        rowCell2Props: rowCell24Data, 
    };

    const rowCell25Data = {
        className: "",
    };

    const typeRowContent Text2ndTextFalseIconL 5Data = {
        className: "cell-2",
        rowCell2Props: rowCell25Data,
    }

    const rowCe1126Data = {
        className: "",
    }

    const typeRowContentText2ndTextFalseIconL6Data = {
        className: "cell-2",
        rowCe112Props: rowCell26Data,  
    };  

    const rowCell27Data = {
        className: "",
    };
    
    const typeRowContentText2ndTextFalseIconL7Data = { 
        rowCell2Props: rowCell27Data,
    };

    const rowMainrecomponentizeDuplicateData = {
        typeRowContentButton2ndTextFalseIco: typeRowContent Button2ndTextFalseIcoData,
        typeRowContentText2ndTextFalseIconL: typeRowContentText2ndTextFalseIconL1Data, 
        typeRowContentText2ndTextFalseIconL2: typeRowContentText2ndTextFalseIconL2Data, 
        typeRowContentText2ndTextFalseIconL3: typeRowContentText2ndTextFalseIconL3Data, 
        typeRowContentText2ndTextFalseIconL4: typeRowContentText2ndTextFalseIconL4Data, 
        typeRowContentText2ndTextFalseIconL5: typeRowContentText2ndTextFalseIconL5Data, 
        typeRowContentText2ndTextFalseIconL6: typeRowContentText2ndTextFalseIconL6Data,
        typeRowContentText2ndTextFalseIconL7: typeRowContentText2ndTextFalseIconL7Data,
    };

    const admin3Data = {
        userProfile: "User Profile",
        course: "Course",
        place1: "Forum" userCourse: "User Course",
        chat: "Chat",
        logout: "Logout",
        logo: "logo.png",
        admin: "Admin",
        place2: "Forum", 
        rowMainrecomponentizeDuplicateProps:rowMainrecomponentizeDuplicateData,
    }; 
</script>

/*********** *
src/components/Admin3.vue
************/


<template>
    <div class="container-center-horizontal"> 
        <div class="admin3 screen">
            <div class="overlap-group4">
                <div class="overlap-group-container">
                    <div class="overlap-group border-2px-gallery">
                        <div class="flex-row">
                            <img class="icon-sidebar-inactive-5-agents" src="icon-sidebar-inactive-5-agents.svg" /> 
                            <div class="user-profile poppins-normal-gunsmoke-14px">{{ userProfile }}</div>
                        </div>
                        <div class="flex-row-1">
                            <img class="icon-sidebar-inactive-6-articles" src="icon-sidebar-inactive-6-articles.svg" /> 
                            <div class="course poppins-normal-gunsmoke-14px">{{course }}</div>
                        </div>
                        <div class="overlap-group1">
                            <img class="icon-sidebar-inactive-3-ideas" src="icon-sidebar-inactive-3-ideas-1.svg" />
                            <div class="place poppins-normal-gunsmoke-14px">{place }}</div>
                        </div>
                        <div class="flex-row-2">
                            <img class="group-2" src="group-2-1.svg" />
                            <div class="user-course poppins-normal-gunsmoke-14px">{{ userCourse } }</div>
                        </div>
                        <div class="flex-row-3">
                            <img class="group-15" src="group-15.svg" /> <div class="chat poppins-normal-gunsmoke-14px">{{ chat}}</div>
                        </div>
                        <div class="flex-row-4">
                            <img class="vector" src="vector-1.svg" />
                            <div class="logout poppins-normal-gunsmoke-14px">{{logout}}</div>
                        </div>
                    </div>
                    <div class="overlap-group2 border-2px-black-haze"> 
                        <img class="logo" :src="logo" />
                        <div class="admin poppins-normal-gunsmoke-14px">{{admin}}</div>
                        <img class="mask-group" src="mask-group-1.svg" />
                    </div>
                </div>
                <div class="full-table"> 
                    <div class="place-1 valign-text-middle sourcesanspro-bold charade-20px">{{place2 }} </div>
                    <div class="table border-1px-mystic">
                        <img class="header" src="header-1.svg" />
                        <row-mainrecomponentize-duplicate v-bind="rowMainrecomponentizeDuplicateProps" />
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
    export default {
        name: "Admin3",
        components: {
            RowMainrecomponentizeDuplicate,
        },
        props: [
        "userProfile",
        "course",
        "place1",
        "userCourse", 
        "chat",
        "logout",
        "logo",
        "admin",
        "place2",
        "rowMainrecomponentizeDuplicateProps",
        ],
    };
</script>

<style>
    .admin3 {
        align-items: flex-start; 
        background-color: var (--zumthor);
        display: flex;
        overflow: hidden; width: 1440px;
    }

    .overlap-group4 { 
        height: 1024px; 
        position: relative; 
        width: 1442px;
    }

    .overlap-group-container {
        height: 1024px; 
        position: absolute; 
        width: 1442px;
        left: 0;
        top: 0;
    }
    
    .overlap-group {
        background-color: var(--white);
        align-items: center; 
        display: flex; 
        flex-direction: column; 
        left: -2px; 
        padding: 119px 2px; 
        position: absolute;
        min-height: 1028px;
        top: -2px;
        width: 237px;
    }

    .flex-row {
        align-items: center;
        display: flex;
        height: 20px;
        margin-right: 23px; 
        min-width: 136px;
    }

    .icon-sidebar-inactive-5-agents { 
        height: 15px; width: 15px;
        margin-top: 1px;
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
    
    .icon-sidebar-inactive-6-articles,
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

    .overlap-group1 { 
        align-items: center;
        background-image: url(rectangle-274-1.svg);
        background-size: 100% 100%;
        display: flex; height: 54px;
        justify-content: flex-end; 
        margin-right: 12px; 
        margin-top: 15px; 
        min-width: 221px; 
        padding: 8.9px 8px; 
        }

    .icon-sidebar-inactive-3-ideas { 
        height: 15px; 
        margin-top: 3px;
        width: 15px;
        }
    
    .place {
        align-self: flex-end; 
        letter-spacing: 0; 
        margin-left: 22px; 
        min-height: 27px;
        width: 139px;
        }
        
    .flex-row-2 { 
        align-items: flex-start;
        display: flex; 
        height: 27px; 
        margin-left: 17.03px; 
        margin-top: 24px; 
        min-width: 176px; }

    .user-course,
    .logout {
        letter-spacing: 0; 
        margin-left: 22px; 
        min-height: 27px; 
        width: 139px;
    }
    
    .flex-row-3 { 
        align-items: flex-start;
        display: flex;
        height: 27px; 
        margin-top: 33px;
        margin-right: 23.97px; 
        min-width: 137px; 
        }
        
    .group-15 {
        height: 16px;
        margin-top: 2px;
        width: 16px;
    }
    
    .flex-row-4 { 
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
        display: flex;
        background-color: var(--white); 
        height: 87px; 
        left: -2px;
        min-width: 1444px; 
        padding: 4px 28.9px; 
        position: absolute; 
        top: -2px; 
    }

    logo { 
        align-self: flex-end; 
        width: 173px; 
        height: 74px; 
        object-fit: cover;
    }
    
    .admin {
        line-height: 24px;
        margin-bottom: 5px;
        letter-spacing: 0; 
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
        flex-direction: column;
        align-items: flex-start; 
        display: flex; 
        height: 161px; 
        left: 285px; 
        position: absolute;
        top: 140px; 
        width: 1097px;
    }

    .place-1 {
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
        margin-top: 24px; 
        overflow: hidden;
        position: relative; 
        width: 1097px;
    }
    
    .header {
        height: 48px;
        width: 1097px;
    } 

</style>

/************************* * 
src/components/RowMainrecomponentizeDuplicate.vue
**************************/

<template>
    <div class="row-main-recomponentize-duplicate"> 
        <type-row-content-button2nd-text-false-ico
 :rowCellProps= "typeRowContentButton2ndTextFalseIco.rowCellProps"
        />
        <div class="cell-container">
            <type-row-content-text2nd-text-false-icon-1
:rowCell2Props= "typeRowContentText2ndTextFalse IconL.rowCell2Props"
            />
            <type-row-content-text2nd-text-false-icon-1
                :className= "typeRowContentText2ndTextFalse IconL2.className"
:rowCe112Props= "typeRowContentText2ndTextFalse IconL2.rowCe112Props"
            />
        </div>
        <div class="cell-container-1">
            <type-row-content-text2nd-text-false-icon-1
:rowCe112Props="typeRowContentText2ndTextFalseIconL3.rowCe112Props" 
            />
            <type-row-content-text2nd-text-false-icon-1
                :className= "typeRowContentText2ndTextFalseIconL4.className"
:rowCe112Props= "typeRowContent Text2ndTextFalseIconL4.rowCe112Props"
            />
            </div>
            <type-row-content-text2nd-text-false-icon-1
                :className= "typeRowContentText2ndTextFalseIconL5.className"
:rowCe112Props= "typeRowContentText2ndTextFalseIconL5.rowCe112Props"
            />
            <type-row-content-text2nd-text-false-icon-1 
                :className= "typeRowContentText2ndTextFalseIconL6.className"
:rowCe112Props= "typeRowContentText2ndTextFalseIconL6.rowCe112Props"
            />
            <div class="cell-container-2">
                <type-row-content-text2nd-text-false-icon-1
:rowCe112Props= "typeRowContentText2ndTextFalseIconL7.rowCe112Props"
            />
            <type-row-content-icon2nd-text-false-icon-1 />
        </div>
    </div>
</template>

<script>
    export default {
        name: "RowMainrecomponentizeDuplicate",
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
        "typeRowContentText2ndTextFalseIconL7",
        ],
    }; 
</script>

<style>
    .row-main-recomponentize-duplicate { 
        align-items: flex-start;
        display: flex;
        position: relative; 
        width: 1097px;
    }
    
    .cell-container {
        height: 64px;
        position: relative; 
        width: 366px;
    }
    
    .cell-container-1 {
        height: 64px;
        position: relative;
        width: 241px; 
    }
    
    .cell-container-2 {
        height: 64px;
        position: relative;
        width: 169px;
    }

</style>

/**************** *
src/components/TypeRowContentButton2ndTextFalseIco.vue
*****************/