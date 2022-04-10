<template>
<div style="min-height:100vh">
    <UpperBar/>
    <div class="container">
        <div class="left">
            <SideBar />
        </div>
        <div class="right mt-3 mx-3">
            <h1>Timetable Planner</h1>
            <div>
                <FullCalendar @change="zoomEvent()" :options="options" :events="events" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import SideBar from '../components/sidebar/CourseSideBar.vue';
import Calendar from '../components/calendar/Calendar'
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import db from "../components/calendar/firebase";
import { collection, getDocs } from "firebase/firestore";
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import db2 from "../components/chatroom/firebase";

const auth = getAuth();
import {
    ref,
    set,
    push,
    onValue
} from "firebase/database";
import {
    getAuth,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
export default {
  name: 'TimeTable',
  components: {
      SideBar,
      Calendar,
      FullCalendar
  },
  data() {
        return {
            role:'user',
            options: {
                plugins:[dayGridPlugin,timeGridPlugin, interactionPlugin],
                initialDate : new Date(),
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                allDaySlot:false,
                slotMinTime:"08:00:00",
                slotMaxTime:"21:00:01",
                selectMirror: true, 
                editable:false,
                events: [],
                eventChange: async function(changeInfo ) {
                    console.log(changeInfo.event.endStr);
                    await db.collection(changeInfo.event.title).doc(changeInfo.event.id).update({
                        start: changeInfo.event.startStr,
                        end: changeInfo.event.endStr,
                    })
                }
            },
                
            
        };
  },
  created(){
  },
  mounted() {
    console.log(auth)
    onValue(ref(db2, "usercourse"), (snapshot) => {
        this.usercourse = [];
        snapshot.forEach((childSnapshot) => {
            if (childSnapshot.val().uid === localStorage.getItem('user')) {
                this.usercourse.push(childSnapshot.val().code);
                console.log(this.usercourse)
            }
        })
        this.usercourse.forEach((coursecode)=>{
            this.getEvents(coursecode)
        })
        
    });
    onAuthStateChanged(auth, (user) => {
        if (user) {
            onValue(ref(db2, "users"), (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    if (childSnapshot.val().uid == user.uid) {
                        this.role = childSnapshot.val().role;
                    }
                    
                })
            })
        }
    });
  },
  watch: {
    "options.events": function(){
        console.log("change");
    },
    role: function (newVal, oldVal){
        if (this.role=='admin'){
            this.options.editable=true
        }
        else{
            this.options.editable=false
        }
    }
  },
  methods: {
      zoomEvent(){
          calendar.getEventSources()
      },
      async getEvents (coursecode) {
      let snapshot = await db.collection(coursecode).get()
      const events = []
      snapshot.forEach(doc => {
        let appData = doc.data()
        appData.id = doc.id
        appData.title=coursecode
        events.push(appData)
      })
      this.options.events=this.options.events.concat(events)
    },
    handleDateClick: function(arg) {
      alert('date click! ' + arg.dateStr)
    }
  },
        
};
</script>

<style scoped>
    .container {
        display: flex;
        min-height: 100vh;
        width: 100vw;
        padding: 0;
        max-width: unset;
    }
    .left {
        flex: 2;
        min-height: 100%;
    }
    .right {
        flex: 10;
        padding: 0px 30px;
    }

    @media screen and (max-width: 960px) {
    ::v-deep(.fc-header-toolbar) {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>