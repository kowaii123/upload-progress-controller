<template>
    <div>
        <uploader
            :extra-data="extraData"
            :request-header="requestHeader"
            :visible="visible"
            name="kowaii-uploader"
            url="/api/file/uploadIcon"
        ></uploader>
    </div>

</template>
<script>
import Uploader from '@/components/Uploader.vue'

export default {
    name: 'App',
    data() {
        return {
            requestHeader: {
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjRjZWExZS00YjA4LTExZWUtYWY5NC01NDA1ZGJiZmI2Y2MiLCJyb2xlcyI6IiIsInN1YiI6IlJhbWJsZXItVG9rZW4iLCJleHAiOjE3MDY4OTA1MTksIm5iZiI6MTcwNjg2MTcxOSwiaWF0IjoxNzA2ODYxNzE5fQ.ioNowghBWwkiAJ_DWodtQPl9GLVj_sNxMr5TkC9NzYo',
                'Content-Type': 'multipart/form-data'
            },
            status: "",
            visible: false,
            extraData: {
                accept: 'image/*',
            }
        }
    },
    methods: {},
    components: {
        Uploader,
    }
}
</script>

<style scoped></style>
