/**
 * @Author: meganmhl
 * @Description: /component/forum/ForumHomeView.vue is a component of Forum.vue. It is a list of posts from a specific course. 
 *              By clicking into a post, it shows post replies and details from ReplyForumPost.vue.
 * @Date: 2022-05-01 00:56:37
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 20:38:07
 */

<template>
    <div class="forumPostBox" @click="handleClick(post.id)">
        <!-- post box with flex layout -->
        <div class="forumPostBoxHeader">
            <div class="forumPostProfilePicture">
                <i class="fa-solid fa-circle-user  fa-3x" style="margin:10px 0px 5px 10px"/>
            </div>
            <div class="forumPostMetadata">
                <p class="poster">{{ post.contents.username }}</p>
                <p class="timeElapsed">{{ timediff }}</p>
            </div>
        </div>
         <!-- content of the post -->
        <div class="forumPostBody">
            <div class="title">
                <p>{{ post.contents.question }}</p>
            </div>
            <div class="description">
                <p>{{ post.contents.description }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.forumPostBox {
    margin: 5vh 0vw 0vh;
    border-radius: 10px;
    border-color: lightgray;
    border-style: solid;
    padding: 1vh 2vw;
    min-width: 50vw;
    min-height: 30vh;
}
.forumPostBox:hover {
    background-color: lightgrey;
}

.forumPostBoxHeader {
    display: flex;
    align-items: center;
}
.forumPostProfilePicture {
    flex-shrink: 0;
}
.forumPostMetaData {
    flex-shrink: 1;
    margin-left: 10px;
}

p.poster {
    font-size: 1em;
    font-weight: bold;
    color: black;
    margin-left: 15px;
    margin-bottom: 0px;
}

p.timeElapsed {
    font-size: 0.8em;
    font-weight: bold;
    color: gray;
    margin-left: 15px;
    margin-bottom: 0px;
}

.forumPostBody {
    margin-top: 15px;
    margin-bottom: 10px;
    padding: 5px 10px;
}

.forumPostBody .title {
    color: black;
    font-weight: bold;
}
</style>

<script>
export default {
    name: 'ForumHomeView',
    props: { post: Object },
    data() {
        return {
            timediff: null,
        }
    },
    created() {
        this.setTimer();
    },

    methods: {
        //go to Reply Forum Post
        handleClick(id) {
            this.$emit('clicked-post', id);
        },
        //format timer
        setTimer() {
            let d1 = new Date();
            let d = d1 - new Date(this.post.contents.timestamp);
            let seconds = Math.floor(d / 1000);
            let minutes = Math.floor(seconds / 60);
            let hours = Math.floor(minutes / 60);
            let days = Math.floor(hours / 24);
            let weeks = Math.floor(days / 7);

            // Months
            let day1 = d1.getDate();
            let day2 = new Date(this.post.timestamp).getDate();
            let month1 = d1.getMonth();
            let month2 = new Date(this.post.timestamp).getMonth();

            let months = Math.floor(month1 - month2);
            if (months < 0) {
                months += 12;
            }
            if (months > 0) {
                months = day2 > day1 ? months - 1 : months
            };

            // Year
            let years = Math.floor(days / 365);

            if (years > 0) {
                this.timediff = years + "y ago";
            }
            else if (months > 0) {
                this.timediff = months + "mo ago";
            }
            else if (weeks > 0) {
                this.timediff = weeks + "w ago";
            }
            else if (days > 0) {
                this.timediff = days + "d ago";
            }
            else if (hours > 0) {
                this.timediff = hours + "h ago";
            }
            else if (minutes > 0) {
                this.timediff = minutes + "m ago"
            }
            else if (seconds > 0) {
                this.timediff = seconds + "s ago"
            }
            else {
                this.timediff = "Just now";
            }
        }
    },
}
</script>