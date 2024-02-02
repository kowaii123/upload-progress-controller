<template>
    <div>
        <uploader
            url="/api/file/uploadIcon"
            :request-header="requestHeader"
            :requestData="customParam"
            @progress="handleProgress"
            @success="handleUploadSuccess"
            @error="handleUploadFail"
        ></uploader>
        <progress-bar :percentage="percentage"></progress-bar>
    </div>
</template>
<script>
import ProgressBar from './ProgressBar.vue'
import Uploader from './Uploader'
export default {
    name: 'App',
    data() {
        return {
            requestHeader: {
                Authorization:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjRjZWExZS00YjA4LTExZWUtYWY5NC01NDA1ZGJiZmI2Y2MiLCJyb2xlcyI6IiIsInN1YiI6IlJhbWJsZXItVG9rZW4iLCJleHAiOjE3MDY4OTA1MTksIm5iZiI6MTcwNjg2MTcxOSwiaWF0IjoxNzA2ODYxNzE5fQ.ioNowghBWwkiAJ_DWodtQPl9GLVj_sNxMr5TkC9NzYo',
                'Content-Type': 'multipart/form-data'
            },
            percentage: 0
        }
    },
    methods: {
        handleUploadSuccess(e) {
            console.log(e)
        },
        handleUploadFail(e) {
            console.log(e)
        },
        customParam: function (fileWrapper) {
            const formData = new FormData()
            formData.append('file', fileWrapper.file)
            formData.append('host', 'https://baidu.com')
            return formData
        },
        handleProgress: function (e) {
            console.log(e)
        }
    },
    components: {
        Uploader,
        ProgressBar
    }
}
</script>

<style scoped></style>
