<template>
    <div class="container">
        <div class="left">
            <SideBar />
        </div>
        <div class="right">
            <h1>Timetable Planner</h1>
            <div style="width:80%;">
                <FullCalendar @change="asd()" :options="options" :events="events" />
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
export default {
  name: 'TimeTable',
  components: {
      SideBar,
      Calendar,
      FullCalendar
  },
  data() {
        return {
            options: {
                plugins:[dayGridPlugin,timeGridPlugin, interactionPlugin],
                initialDate : '2022-04-01',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                editable: true,
                allDaySlot:false,
                slotMinTime:"08:00:00",
                slotMaxTime:"21:00:01",
                selectMirror: true, 
                events: [],
                eventChange: async function(changeInfo ) {
                    console.log(changeInfo.event.endStr);
                    await db.collection('calEvent').doc(changeInfo.event.id).update({
                        title: changeInfo.event.title,
                        start: changeInfo.event.startStr,
                        end: changeInfo.event.endStr,
                    })
                }
            },
                
            
        };
  },
  created(){
      this.getEvents()
  },
  watch: {
      "options.events": function(){
          console.log("change");
      }
  },
  methods: {
      asd(){
          console.log("asd")
          calendar.getEventSources()
      },
      async getEvents () {
      let snapshot = await db.collection('calEvent').get()
      const events = []
      snapshot.forEach(doc => {
        let appData = doc.data()
        appData.id = doc.id
        events.push(appData)
      })
      this.options.events = events
    },
    async updateEvent (ev) {
      await db.collection('calEvent').doc(ev.id).update({
        title: ev.title,
        start: ev.start,
        end: ev.end,
      })
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
        min-height: 100%;
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

    h1 {
        margin: 3%;
        margin-bottom: 1%;
        text-align: left;
    }
    @media screen and (max-width: 960px) {
    ::v-deep(.fc-header-toolbar) {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>