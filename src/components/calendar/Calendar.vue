<template>
    <div class="calendar">
        <table class="table">
            <thead>
                <tr>
                    <th class="timecol"></th>
                    <th v-for="d in currentWeek" :key="d.id">
                        {{d.day}}, {{d.date}} {{d.month}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bodyrow" v-for="ent in timesOfDay" :key="ent.t">
                    <td class=timecol>{{ent.t}}</td>
                    <td v-for="d in currentWeek" :key="d.id"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Calendar',
    data() {
        return {
            startofWeek: "", currentWeek: "", timesOfDay: ""
        }
    },
    mounted() {
        this.initialiseWeek();
        this.generateTimeOfDay();
    },
    methods: {
        initialiseWeek() {
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri"]
            let dateNow = new Date();
            let today = dateNow.getDay();
            let startOfWeek = new Date((new Date()).setDate(dateNow.getDate() - today));
            let daysOfWeek = {};
            for (let i = 1; i <=5; i++) {
                let dateObj = new Date(startOfWeek.getTime() + i*24*60*60*1000);
                let day = dayNames[dateObj.getDay() -1 ];
                let month = monthNames[dateObj.getMonth()];
                let date = dateObj.getDate();
                daysOfWeek[i] = {id:i, day: day, month: month, date: date};
            }
            this.currentWeek = daysOfWeek;
            this.startOfWeek = startOfWeek;
        },
        generateTimeOfDay() {
            let timesOfDay = [];
            let time = 330; // 5 30 am in minutes
            let endTime = 1320 // 10 pm in minutes
            while (time <= endTime) {
                let hour = Math.floor(time / 60);
                let minute = time - hour * 60;
                time += 15;
                timesOfDay.push({t: (minute == 0 ? `${hour}:00` : ""), major: (minute == 0 ? true : false)});
            }

            //console.log(timesOfDay);
            this.timesOfDay = timesOfDay;
        }
    }
}
</script>

<style scoped>
    div.calendar {
        border: 3px black solid;
        margin: auto;
        max-height: 75%;
        max-width: 75%;
        overflow: auto;
    }
    .timecol {
        width: 5%;
        font-size: 0.885em;
        font-weight: 500;
        padding: 0.3em;
        text-align: center;
        position: relative;
        top: -0.9rem;
        border-bottom: 1px solid transparent;
    }

    td {
        border: 1px solid lightgray;
        width: 10%;
        height: 4rem;
    }

    th {
        width: 10%;
        height: 4rem;
    }

    tr.bodyrow {
        border-style: none;
    }
    
</style>